# Fragen-Revision & Lern-Checkpoints (Phase A)

Datum: 2026-06-11 · Status: vom Autor beauftragt („selbstständig implementieren")

## Ziele

1. **Fragen-Revision:** Redundante und messschwache Fragen streichen, alle Fragen als
   klare, zustimmbare/ablehnbare Aussagen formulieren (Slider: zustimmen / ablehnen /
   kein klares Urteil). Achsen-Verhältnisse dabei korrekt halten.
2. **Lerneffekt im Quiz (Phase A):** Nach jedem Themenblock ein Lern-Checkpoint;
   Lerninhalte auch mobil sichtbar (Kontext-Akkordeon statt verstecktem FAB).
3. Kompatibilität Handy / iPad / Desktop bleibt Pflicht.

## 1. Fragen-Revision: 30 → 24

### Gestrichen (6 Fragen, mit Begründung)

| Alt-Idx | Frage (Kurzform) | Achse/Pol | Grund |
|---|---|---|---|
| 3 | Reiche sollten Ärmeren Industrieschutz erlauben | trade −1 | Quasi-Dublette von Alt-21 (Entwicklungsländer dürfen Industrien schützen) |
| 7 | Handelskriege treffen Kleine am härtesten | trade +1 soft | Empirische Tatsachenbehauptung, kaum Achsen-Trennschärfe |
| 15 | Wirtschaft & Klimaschutz unvereinbar | economy −1 | Spiegel-Dublette von Alt-14 (grünes Wachstum möglich) |
| 19 | Absolute Entkopplung technisch möglich | economy +1 | Inhaltliche Dublette von Alt-14 (grünes Wachstum) |
| 22 | Fairtrade-Mindestpreise wirksam gegen Armut | governance +1 soft | Wirksamkeitsfrage, misst nicht Globalismus↔Souveränität |
| 29 | WTO braucht Reformen für ärmere Länder | governance +1 soft | Konsens-Frage (fast jeder stimmt zu), keine Trennschärfe |

### Neu geschrieben

- **Alt-9** („US-Protektionismus zeigt, dass Regeln ignoriert werden" — deskriptiv, soft)
  → **„Die EU sollte auf US-Strafzölle mit eigenen Gegenzöllen antworten"** (trade −1,
  normativ, klare Position; Kontext: EU-Gegenzölle 2018 auf Whiskey/Motorräder/Jeans).

### Präzisions-Pass

- Alle `simple`-Fassungen waren als **Fragen** formuliert („Stimmt das wirklich?") —
  einer Frage kann man nicht zustimmen. Alle 24 jetzt als Aussagen.
- Alt-14 in Block „Ökonomie & Nachhaltigkeit" verschoben (thematisch korrekt, gleicht Blöcke aus).
- WTO-Mitgliederzahl im Begriff aktualisiert (166 seit 2024).

### Ergebnis-Struktur

- **24 Fragen, 6 Blöcke à 4**, jede Achse exakt **4× pol+1 / 4× pol−1** (alt: governance 6/4).
- Verbleibende „soft"-Markierungen: neu-16 (Abkommen nützen Reichen), neu-18 (Agrarsubventionen),
  neu-21 (WTO bevorzugt Reiche) — im data.js-Header dokumentiert.
- Scoring unverändert (normalisiert über Antwortzahl je Achse); Parteien/Blurbs unverändert.
- Zahlen-Stellen aktualisiert: Hero „24 Fragen / ca. 12 Minuten", About „Deine 24 Antworten",
  Progress-Initialwerte 1/24 = 4,17 %.

## 2. Lern-Checkpoints

- Neues `window.CHECKPOINTS` (6 Einträge) in data.js: `topic` (= Topic-String der Fragen,
  dient als Schlüssel), `title`, `recap` (2–3 Sätze Kernwissen), `fact` (eine Zahl, die
  hängen bleibt), `source`, `merke` (Merksatz).
- Blockgrenzen werden **zur Laufzeit aus Topic-Wechseln** der QUESTIONS abgeleitet
  (robust gegen künftige Fragen-Änderungen).
- `nextQ()`: an Blockgrenze (inkl. letzter Frage) Checkpoint statt nächster Frage zeigen —
  je Block genau einmal (`seenCheckpoints`-Set; Zurückblättern zeigt ihn nicht erneut).
  Letzter Checkpoint: Button „Zur Auswertung".
- UI: eigenes Panel `#cpPanel` an Stelle des Fragen-Panels (Sidebar währenddessen
  ausgeblendet), Topic-Pill in Blockfarbe, Kicker „Checkpoint n von 6".
- `restartQuiz()` setzt `seenCheckpoints` und Panel-Zustand zurück.

## 3. Mobile Kontext-Akkordeon (ersetzt FAB)

- Unter dem Fragetext: aufklappbare Zeile „Hintergrund & Bedeutung" mit denselben
  Inhalten wie die Desktop-Sidebar (Zustimmung/Ablehnung/Kontext), nur ≤768 px sichtbar.
- Desktop-Sidebar unverändert; mobil wird die Sidebar komplett ausgeblendet.
- FAB-Button, `toggleMobileSide()` und zugehöriges CSS entfallen.
- Zustand: pro Frage eingeklappt startend.

## 4. Verifikation

- Scoring-Tests (`tests/scoring.test.html`) müssen grün bleiben (fixture-basiert).
- Browser-Verifikation über /tmp-Preview-Setup auf 375 / 768 / 1024 / 1280:
  kompletter Quiz-Durchlauf inkl. aller 6 Checkpoints, Akkordeon mobil, Ergebnis.

## Bewusst nicht enthalten (spätere Phasen)

Ergebnis-Aufschlüsselung „welche Antworten gaben den Ausschlag" (Phase B),
About/Quellen-Überarbeitung, localStorage, Refactoring der Inline-Skripte.
