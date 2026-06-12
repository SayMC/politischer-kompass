# Schnellstart & Ausführliche Version (60 Fragen)

Datum: 2026-06-12 · Status: vom Autor beauftragt („Ja deploy das")

## Ziel

Zwei Quiz-Modi:

- **Schnellstart** — die bestehenden 24 Fragen (6 Blöcke), ~12 Min.
- **Ausführlich** — 60 Fragen (15 Blöcke), ~30 Min.

Gleiche Qualität wie bisher: jede neue Frage mit `[[Begriff]]`-Tooltips, `terms`,
`agree`/`disagree`, `context`, `simple`; pro neuem Block ein Lern-Checkpoint.
Keine Wiederholungen.

## Architektur

- **Ein Pool** `window.QUESTIONS` mit 60 Fragen. Die 24 bestehenden bekommen
  `core:true` und bleiben unverändert die ersten 6 Blöcke. 9 neue Blöcke (36 Fragen)
  hängen danach an.
- **Modus-Auswahl** auf dem Startbildschirm: zwei Buttons
  („Schnellstart · 24 Fragen · ~12 Min" / „Ausführlich · 60 Fragen · ~30 Min").
- Beim Start wird ein **aktives Frageset** gebildet:
  `ACTIVE = mode==='quick' ? QUESTIONS.filter(q=>q.core) : QUESTIONS`.
  Alle Engine-Stellen (Iteration, `TOTAL`, Fortschritt, „Frage X von N",
  Checkpoint-Blockgrenzen, Scoring) arbeiten auf `ACTIVE`. `answered`-Keys indexieren
  in `ACTIVE`; `computeScores(answered, ACTIVE)`.
- Hardcodierte „24" im Hero/About werden modusabhängig bzw. neutral.

## Balance (jede Achse 10 pro / 10 contra, 20 Fragen)

| Achse | Bestehende Blöcke (8) | Neue Blöcke (12) |
|---|---|---|
| trade | Freihandel & Wohlstand, US-Protektionismus | T3 Lieferketten, T4 Globalisierung & Arbeit, T5 Handel als Druckmittel |
| economy | Wachstum & Wohlstand, Ökonomie & Nachhaltigkeit | E3 Ungleichheit & Verteilung, E4 Konsum & Suffizienz, E5 Arbeit, Zeit & Automatisierung |
| governance | Fairer Handel, WTO & globale Ordnung | G3 Konzernmacht & Regulierung, G4 Klima-Governance, G5 Globale Finanzordnung |

Jeder neue Block: 2× pol+1 / 2× pol−1 → pro Achse 6/6 neu, gesamt 10/10.

## Neue Blöcke & Fragen (Stubs; Vollausbau in data.js)

**T3 Lieferketten & Abhängigkeit** — (+) globale Ketten effizienter; (−) kritische Güter heimisch produzieren; (+) Quellen streuen statt abschotten; (−) Abhängigkeit von China rechtfertigt Eingriffe.
**T4 Globalisierung & Arbeitsplätze** — (−) Offshoring zerstört mehr Jobs; (+) Globalisierung schafft netto mehr/bessere Jobs; (−) Niedriglohn-Konkurrenz drückt unfair; (+) Standortwettbewerb macht produktiver.
**T5 Handel als Druckmittel** — (−) Handel als politisches Druckmittel/Sanktionen; (+) Verflechtung verhindert Kriege; (−) Decoupling von autoritären Staaten; (+) Sanktionen/Handelskriege schaden beiden Seiten.
**E3 Ungleichheit & Verteilung** — (−) Verteilung wichtiger als Wachstum; (+) wachsender Kuchen wichtiger als Unterschiede; (−) hohe Vermögen stärker besteuern; (+) Leistung soll sich lohnen, Ungleichheit als Antrieb. (soft)
**E4 Konsum & Suffizienz** — (−) wir konsumieren mehr als nötig; (+) mehr Konsum = mehr Wohlstand; (−) Obsoleszenz zeigt Verschwendung; (+) individueller Verzicht bringt wenig.
**E5 Arbeit, Zeit & Automatisierung** — (−) Produktivität in kürzere Arbeitszeit; (+) kürzere Arbeitszeit gefährdet Wohlstand; (+) Automatisierung/KI schafft neue Jobs; (−) Wachstum zwingt in mehr Arbeit/Stress.
**G3 Konzernmacht & Regulierung** — (+) Konzerne nur international kontrollierbar; (−) ISDS-Schiedsgerichte untergraben Souveränität; (+) globale Mindeststeuer nötig; (−) jedes Land reguliert/besteuert selbst. (soft)
**G4 Klima-Governance global** — (+) nur verbindliche internationale Abkommen lösen Klima; (−) keine schädlichen Klima-Vorgaben akzeptieren; (+) CBAM legitim; (−) Klimapolitik nationale Sache.
**G5 Globale Finanzordnung (IWF & Weltbank)** — (+) IWF/Weltbank notwendig; (−) deren Auflagen schaden armen Ländern; (+) Schuldenerlass/Entwicklungshilfe als globale Verantwortung; (−) jedes Land selbst verantwortlich.

## Lern-Checkpoints (9 neu)

Je neuem Block ein `CHECKPOINTS`-Eintrag (`topic` = Topic-String, `title`, `recap`,
`fact`+`source`, `merke`) im selben Stil. Blockgrenzen weiterhin zur Laufzeit aus
Topic-Wechseln in `ACTIVE` abgeleitet → funktioniert in beiden Modi automatisch.

## Nebenaufgabe: Gedankenstriche im „Über & Quellen"-Bereich

Em-Dashes (—) im Textfluss des About-Panels durch passende Satzzeichen ersetzen
(Doppelpunkt, Komma, Klammer oder Punkt je nach Kontext). Nur Fließtext, keine
strukturellen/visuellen Striche.

## Verifikation

- `tests/scoring.test.html` bleibt grün.
- Browser: Schnellstart-Durchlauf (24, 6 Checkpoints) und Ausführlich-Durchlauf
  (60, 15 Checkpoints) auf 375/768/1280, Ergebnis + 3D-Kompass.
