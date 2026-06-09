# Design: „Atlas"-Redesign des Politischen Kompass

**Datum:** 2026-06-09
**Projekt:** Politischer Kompass — Handel & Wirtschaft (PB-Schulprojekt)
**Ausgangsdatei:** `index.html` (Single-File-App, ~1920 Zeilen)
**Status:** In Brainstorming abgestimmt — wartet auf finale Spec-Freigabe
**Verwandt:** [2026-06-05-3d-auswertung-design.md](2026-06-05-3d-auswertung-design.md) — dessen
Scoring-/3D-Konzept wird hier übernommen und an die Atlas-Palette angepasst.

## Ziel & Kontext

Der Kompass soll (a) professionell wirken statt nach Marketing-/„KI-Slop"-Landingpage,
(b) durch die Interaktion Wissen vermitteln und (c) auf Handy, Desktop und iPad
voll funktionieren. Gewählte Designrichtung: **„Atlas"** — Dark-Mode bleibt, der
3D-Globus bleibt zentral, wirkt aber wie ein wissenschaftliches Messinstrument.

**Kritischer Befund aus der Code-Analyse:** Der Ergebnis-Screen ist aktuell eine
Attrappe. `showResult()` setzt hartkodierte Werte (Handel 72 %, Wirtschaft 35 %,
Governance 58 %, [index.html:1616](../../../index.html)); die gespeicherten
Slider-Antworten (`answered{}`) werden nie ausgewertet; der `#compass3d`-Canvas hat
keinerlei JavaScript; Parteienlegende und Erklärtexte werden nie befüllt. Die 3D-Logik
existiert nur als Prototyp in `_mockup_3d.html`. Das Redesign macht diesen Kern echt.

## Entscheidungen (im Brainstorming festgelegt)

1. **Designrichtung:** Atlas (Dark, Marineblau, Koordinaten-Raster, Grotesk + Mono).
2. **Globus-Texturen:** lokal ins Projekt einbinden (Offline-/Beamer-Tauglichkeit).
3. **Code-Struktur:** Single-File wird in mehrere Dateien aufgeteilt.
4. **Vorgehen:** drei Phasen (s. u.), jede einzeln umsetzbar und testbar.

## Ziel-Dateistruktur

Aus der monolithischen `index.html` wird:

```
index.html              — Markup + Einbindung der Assets
css/styles.css          — gesamtes Styling inkl. Atlas-Design-System
js/data.js              — QUESTIONS, Parteidaten, Erklärtext-Tabellen (AXIS_BLURBS, PARTY_BLURBS)
js/quiz.js              — Quiz-Flow, Slider, Vereinfachen, Tooltips, Navigation
js/scoring.js           — computeScores(): echte Auswertung der Antworten
js/globe.js             — Three.js-Globus (Landing-Hero)
js/compass3d.js         — Three.js-3D-Kompass (Ergebnis)
assets/textures/        — lokal: earth_atmos, earth_specular, earth_normal, earth_clouds
```

Module via `<script type="module">` und der bestehenden Three.js-Importmap. Kein
Build-Schritt — bleibt portabel und direkt per Datei/statischem Host lauffähig.

## Atlas-Design-System

**Farben (CSS-Variablen):**
- `--bg: #0c1420` (tiefes Marineblau) + feines Koordinaten-Raster als Hintergrund
  (zwei `linear-gradient`-Linien, ~42px Raster) statt der vier Glow-Blobs.
- `--surface: rgba(255,255,255,.025)`, Karten mit `1px`-Bordern statt Glassmorphism-Glow.
- `--text: #e6ecf2`, `--text-muted: #9fb3c4`, `--text-dim: #5e87a8`.
- **Kanonische Achsenfarben (überall identisch — Globus, Quiz-Pills, Ergebnisbalken, 3D-Punkte, Achsenlinien):**
  | Achse | Farbe | Hex |
  |---|---|---|
  | Handel (trade) | Teal | `#4db6ac` |
  | Wirtschaft (economy) | Bernstein | `#d9a441` |
  | Governance | Stahlblau | `#7f9cb5` |
- Akzent/CTA: Teal `#4db6ac` (Button-Text dunkel).

**Verboten (Slop-Marker, die entfernt werden):** Lila→Pink-Verlauf (`#6366f1`→`#f472b6`),
`background-clip:text`-Gradient-Headlines, weichgezeichnete Glow-Blobs, Neon-`box-shadow`
auf Buttons, durchgehende 100px-Pill-Radien.

**Typografie:**
- `Space Grotesk` — Headlines & UI.
- `IBM Plex Mono` — Labels, Koordinaten, Werte, Frage-Zähler (`01/30`), Achsenwerte.
- `Inter` — Fließtext (Fragen, Erklärungen).

## Phasen

### Phase 1 — Funktionaler Kern (übernimmt 2026-06-05-Spec)

Macht den Ergebnis-Screen echt. Inhalt unverändert aus dem 3D-Spec, mit **einer Anpassung:
die Achsenfarben werden auf die Atlas-Palette (Teal/Bernstein/Stahl) umgestellt** statt
blau/grün/pink.

1. **Scoring-Engine** (`js/scoring.js`): Jede Frage erhält `axis` und `pol` (±1).
   `computeScores()` mittelt `answered[i] * pol` pro Achse, normiert auf −100…+100.
   Unbeantwortete Fragen zählen nicht in den Nenner. Ersetzt die Fake-Werte in `showResult()`.
2. **3D-Kompass** (`js/compass3d.js`): Three.js 0.160 + `OrbitControls` + `CSS2DRenderer`.
   Wertewürfel (Wireframe), drei Achsen mit Pol-Labels, Gitterboden, pulsierender „DU"-Punkt,
   6 Bundestags-Parteien mit recherchierten Koordinaten (CHES 2024, Manifesto Project,
   Wahlprogramme 2025 — Tabelle im 3D-Spec). Lifecycle analog zum Globe-Pattern
   (`window.__compass3d` mit pause/resume).
3. **Erklärungen im Ergebnis** (`js/data.js`): `AXIS_BLURBS` (Textvarianten je Wertebereich
   `>+40` / `−40…+40` / `<−40`) und `PARTY_BLURBS` (pro Partei × Achse, inkl. Linke-/AfD-
   Governance-Nuance). Klick auf Partei → Info-Karte.
4. **WebGL-Fallback:** kein WebGL → 3D-Canvas aus, 2D-Balken (mit echten Werten) + Erklärtexte.

### Phase 2 — Atlas-Redesign aller Screens + Globus

1. **Design-System** in `css/styles.css` umsetzen (Tokens oben), alle Slop-Marker entfernen.
2. **Landing:** Atlas-Hero (Mono-Koordinatenzeile, Grotesk-Headline „Die Welt handelt.",
   Achsen-Chips in Achsenfarben, ruhiger CTA, Mono-Meta-Zeile mit Quellen).
3. **Quiz:** Frage-Karte mit dünnem Rahmen, Mono-Zähler, Slider im Atlas-Stil.
   `[[Begriff]]`-Tooltips und das **Vereinfachen**-Feature bleiben funktional erhalten, neu gestylt.
4. **Globus-Rework** (`js/globe.js`):
   - Routen/Glühen in Atlas-Palette (Teal/Bernstein/Stahl) statt Lila/Pink.
   - Animation: Scroll-Spin mit Trägheit/Nachlauf, sanfter Auto-Spin im Leerlauf, weicheres
     Kamera-Easing.
   - Wissens-Element: Hub-Namen (Rotterdam, Shanghai, Singapur …) als Koordinaten-Label an
     den Routen-Endpunkten.
   - **Texturen lokal** aus `assets/textures/` laden (Fallback-Tönung bleibt erhalten).
5. **Ergebnisbalken** auf Atlas-Achsenfarben umstellen (Konsistenz mit Kompass & Globus).

### Phase 3 — About/Erklärseite + Wissens-Extras

1. **About-Sektion** (ruhig, textlastig, kein Modal): Wer (PB-Kurs), Warum (Schulprojekt),
   Achsendefinitionen, Quellen (CHES 2024, Manifesto Project), Disclaimer
   („fundierte Schätzung, keine Messung"). Erreichbar von Landing & Ergebnis.
2. **Lerneffekt im Ergebnis:** pro Achse anzeigen, welche Antworten den Ausschlag gaben.
3. **Quellen-Fußnoten** an den Kontext-Texten der Fragen (Autor et al. 2013, Stiglitz,
   Parrique et al. 2019 etc.).
4. *(Optional, falls Zeit)* `localStorage`-Persistenz des Quiz-Fortschritts gegen Reload-Verlust.

## Responsive — verbindlich (Handy / Desktop / iPad)

Harte Anforderung über alle Phasen, gemäß 2026-06-05-Spec Abschnitt 5:
- 3D-Kompass touch-bedienbar (1 Finger drehen, 2 Finger zoomen), `touch-action:none`.
- Breakpoints: **Desktop 1280**, **iPad 768 (Hoch- + Querformat)**, **Handy 375** — vor
  Phasen-Abschluss real geprüft.
- Globus & Kompass reagieren auf `resize` **und** `orientationchange`; Renderer/Kamera-Aspect/
  Label-Renderer werden aktualisiert.
- `setPixelRatio(min(devicePixelRatio, 2))`, moderate Geometrie-Segmentzahl (mobile GPUs).
- Smartphone: 3D-Würfel kleiner skaliert, Partei-Karte als unten andockendes Panel; Quiz-Sidebar
  als FAB-Drawer (bestehendes Muster beibehalten).

## Nicht im Scope (YAGNI)

- Teilen/Export der Ergebnisse (Social-Sharing, Bild-Export).
- Animierter Kamera-„Flug" zur eigenen Position (optionales späteres Polish).
- Mehr als die 6 Bundestags-Parteien (BSW/Volt bewusst ausgelassen).
- Backend / Datenspeicherung serverseitig — bleibt rein clientseitig & anonym.

## Artefakte

- `_design-directions.html` — Vergleichs-Mockup der drei Richtungen (A/B/C). Kann nach
  Abschluss von Phase 2 gelöscht werden.
- `_mockup_3d.html` — 3D-Prototyp, validiert Look & Bedienung. Löschbar nach Phase 1.
