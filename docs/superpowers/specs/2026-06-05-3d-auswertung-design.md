# Design: 3D-Auswertungsscreen für den politischen Kompass

**Datum:** 2026-06-05
**Datei:** `index.html` (Single-File-App)
**Status:** Freigegeben (Brainstorming abgeschlossen)

## Problem

Der aktuelle Result-Screen (`#result`, ca. Zeile 875–931) ist barebones: drei
2D-Balken mit **hartkodierten** Werten (`fillTrade` 72 %, `fillEconomy` 35 %,
`fillGovernance` 58 %, gesetzt in `showResult()`, Zeile 1482–1486). Die echten
Antworten (`answered`, Slider-Werte −3…+3) werden **nicht ausgewertet**.

Ziel: ein interaktives, frei bewegbares 3D-Modell der drei Dimensionen, das die
*tatsächliche* Position des Nutzers aus den Antworten berechnet, die Positionen
deutscher Parteien faktisch korrekt einträgt und sowohl die eigene Position als
auch die der Parteien erklärt.

## Die drei Achsen

| Achse | − Pol | + Pol | Farbe |
|---|---|---|---|
| `trade` (Handelsordnung) | Protektionismus | Freihandel | Blau `#60a5fa` |
| `economy` (Wirtschaftsmodell) | Postwachstum | Wachstum | Grün `#34d399` |
| `governance` (Governance) | Nationale Souveränität | Globalismus | Pink `#f472b6` |

## Komponenten

### 1. Scoring-Engine (neu)

**Datenmodell:** Jedes Frageobjekt in `QUESTIONS` erhält zwei neue Felder:
- `axis`: `'trade' | 'economy' | 'governance'` — ableitbar aus `topicClass`
  (`pill-trade` → trade, `pill-economy` → economy, `pill-governance` → governance),
  wird aber explizit gesetzt, um Sonderfälle zu erlauben.
- `pol`: `+1 | -1` — Polarität. `+1`: Zustimmung (positiver Slider) zieht Richtung
  +Pol; `-1`: Zustimmung zieht Richtung −Pol. Pro Frage manuell bestimmt durch
  Lesen von `text`/`agree`/`disagree`.

**Berechnung** (neue Funktion `computeScores()`):
- Für jede beantwortete Frage: `contribution = answered[i] * question.pol`
  (Bereich −3…+3).
- Pro Achse: Summe der Beiträge / (Anzahl beantworteter Fragen dieser Achse × 3)
  → normiert auf −1…+1, dann × 100 → −100…+100.
- Unbeantwortete Fragen zählen nicht in den Nenner ihrer Achse.
- Rückgabe: `{ trade, economy, governance }` als Ganzzahlen −100…+100.

Ersetzt die hartkodierten Werte in `showResult()`.

### 2. 3D-Modell (ersetzt die Balken-Darstellung im Result-Screen)

Stack: Three.js 0.160 (bereits via importmap geladen) + `OrbitControls` +
`CSS2DRenderer` (beide aus `three/addons/`, gleiche CDN-Version).

Aufbau (validiert im Prototyp `_mockup_3d.html`):
- **Wertewürfel**: `EdgesGeometry`-Wireframe, halbe Kantenlänge `S` (Achsenbereich
  −1…+1 entspricht −100…+100 der Scores).
- **Drei Achsen** durch das Zentrum, je Achsenfarbe, mit CSS2D-Pol-Labels
  (Protektionismus/Freihandel, Postwachstum/Wachstum, Nat. Souveränität/Globalismus).
- **Dezenter Gitterboden** bei `y = −S`.
- **„DU"**: leuchtender, pulsierender Punkt (`emissive`, Halo, Sinus-Skalierung)
  an der berechneten Position.
- **6 Parteien**: kleinere Kugeln in Parteifarben, CSS2D-Namenslabel.
- **Steuerung**: `OrbitControls` mit Damping, `minDistance`/`maxDistance` begrenzt,
  Auto-Rotation an, schaltet bei erstem `pointerdown` ab. Touch-fähig.

**Integration:** Das 3D-Canvas lebt im `#result`-Screen oberhalb des
Erklärungsbereichs. Lifecycle in `showResult()` initialisieren bzw. fortsetzen,
in `restartQuiz()` pausieren (analog zum bestehenden Globe-Pattern mit
`window.__globe.resume()` — neues Objekt z. B. `window.__compass3d`).

### 3. Parteidaten (recherchiert, mit Quellen)

Feste Koordinaten in −100…+100. Quellen im Code-Kommentar dokumentiert:
**CHES 2024** (chesdata.eu), **Manifesto Project / MARPOR**, **Wahlprogramme zur
Bundestagswahl 2025**, **Wahl-O-Mat / bpb**.

| Partei | Farbe | Handel | Wirtschaft | Governance |
|---|---|---|---|---|
| CDU/CSU | `#d6d6d6` | +60 | +70 | +50 |
| SPD | `#e3000f` | +20 | +40 | +60 |
| Grüne | `#33c14a` | −15 | −40 | +80 |
| FDP | `#ffd400` | +90 | +80 | +15 |
| AfD | `#009ee0` | −50 | +50 | −90 |
| Die Linke | `#ff2e92` | −50 | −50 | −25 |

Belegte Eckpunkte aus der Recherche:
- CHES 2024: CDU/SPD/Grüne stark pro-EU; FDP neutral; AfD und Linke stark
  EU-kritisch → Governance-Werte. Linke EU-kritisch von **links** (Kritik an der
  neoliberalen EU, nicht nationalistisch) — Nuance gehört in den Erklärtext.
- Mercosur-Abstimmung 2025: Grüne, AfD, Linke für Stopp; CDU pro → Handelsachse.
- CHES 2024: AfD ökonomisch weniger extrem; Linke klar am linken Rand,
  deutlich von den Grünen getrennt → Wirtschaftsachse.

### 4. Erklärungen (unter dem 3D-Modell)

**Deine Position** (`#result`, unter dem Canvas):
- Pro Achse: kompakter Balken + Zahlenwert (die bestehenden `.axis-row`/`.axis-bar`
  können wiederverwendet werden, jetzt mit echten Werten) **plus** ein generierter
  Erklärsatz nach Wertebereich (z. B. `> +40`, `−40…+40`, `< −40` → drei Textvarianten
  je Achse).
- Eine kurze Gesamt-Einordnung (1–2 Sätze), die die drei Achsen zusammenfasst.

**Klick auf eine Partei** → Info-Karte mit:
- den drei Werten der Partei,
- je Dimension einem Erklärsatz, warum die Partei dort steht (statischer,
  recherchierter Text pro Partei × Achse; inkl. Linke-/AfD-Governance-Nuance).

Erklärtexte als Daten-Tabellen (`AXIS_BLURBS` für Nutzer-Bereiche,
`PARTY_BLURBS` pro Partei/Achse), nicht inline im Markup.

### 5. Fallback & Geräte-Kompatibilität (verbindlich)

Der Auswertungsscreen **muss** auf **Desktop/PC, Smartphone und iPad** voll
funktionieren — das ist eine harte Anforderung, kein Nice-to-have.

- **Kein WebGL** (gleiche Erkennung wie beim Globe, Zeile 1521–1532): 3D-Canvas
  ausblenden, stattdessen die Balken-Darstellung zeigen. Die Erklärtexte (Punkt 4)
  bleiben in beiden Fällen sichtbar.
- **Touch-Bedienung**: `OrbitControls` mit aktivierter Touch-Steuerung (ein Finger
  = drehen, zwei Finger = zoomen/pan). `touch-action: none` auf dem Canvas, damit
  Gesten nicht mit dem Seiten-Scroll kollidieren. Auf iPad/Smartphone wie auf dem
  Desktop drehbar/zoombar.
- **Responsive Layout**:
  - **PC** (breit): 3D-Modell groß, Erklärungen darunter; Partei-Karte rechts oben.
  - **iPad** (mittel, Hoch- und Querformat): 3D-Modell skaliert mit der Viewport-
    Höhe, beide Orientierungen getestet; Partei-Karte rechts oben oder unten je
    nach Platz.
  - **Smartphone** (schmal): Würfel kleiner skaliert, Labels lesbar gehalten
    (kleinere Schrift, ggf. Partei-Labels nur bei Klick), Partei-Karte als unten
    andockendes Panel statt rechts oben.
  - Auf `resize` **und** `orientationchange` werden Renderer, Kamera-Aspect und
    Label-Renderer aktualisiert (der Prototyp behandelt bereits `resize`).
- **Performance auf mobilen GPUs**: `setPixelRatio(min(devicePixelRatio, 2))`
  (wie beim Globe), moderate Geometrie-Segmentzahl, damit es auch auf Handy/iPad
  flüssig läuft.
- **Verifikation**: Vor Abschluss in den Breakpoints Desktop (1280), Tablet
  (768, hoch + quer) und Mobil (375) prüfen.

## Nicht im Scope (YAGNI)

- Teilen/Export der Ergebnisse.
- Animierter „Flug" der Kamera zur eigenen Position (optionales späteres Polish).
- Mehr Parteien als die Bundestags-6 (BSW/Volt bewusst ausgelassen).

## Artefakte

- `_mockup_3d.html` — interaktiver Prototyp, der Look & Bedienung validiert.
  Kann nach der Implementierung gelöscht werden.
