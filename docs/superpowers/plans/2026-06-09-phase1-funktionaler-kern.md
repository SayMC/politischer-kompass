# Phase 1 — Funktionaler Kern (Scoring + 3D-Kompass) Implementation Plan

> **STATUS: UMGESETZT & VERIFIZIERT (2026-06-10).** Alle 6 Tasks implementiert, im Browser
> end-to-end getestet (echter Quiz-Flow, Neustart-Zyklen, WebGL-Fallback, Viewports
> 375/768/1024×768/1280), finaler Code-Review durchgeführt und Hardening-Fixes
> (GPU-Disposal, computeScores-Guard, Parteikarte außerhalb des Fallback-Wraps,
> autoRotate-Reset, Karten-Reset bei Neustart, Governance-Polaritäts-Hinweis) angewendet.
> Offen für den Autor: inhaltliches Gegenlesen der axis/pol-Zuordnung und Parteitexte (s.u.).

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Den Ergebnis-Screen echt machen — die gespeicherten Slider-Antworten zu echten Achsenwerten auswerten und in einem interaktiven 3D-Kompass + erklärenden Balken/Texten darstellen, statt der hartkodierten Fake-Werte (72/35/58).

**Architecture:** Daten und neue Logik werden aus dem Inline-`<script>` in eigene Dateien gezogen: `js/data.js` (klassisches Script, setzt `window.QUESTIONS/PARTIES/AXIS_BLURBS/PARTY_BLURBS`), `js/scoring.js` (ES-Modul, reine Funktion `computeScores`), `js/compass3d.js` (ES-Modul, exponiert `window.__compass3d` analog zum bestehenden `window.__globe`). `showResult()` in `index.html` wird umgeschrieben, um echte Werte zu berechnen und zu rendern. Achsenfarben werden auf die Atlas-Palette gesetzt (Teal/Bernstein/Stahl).

**Tech Stack:** Vanilla HTML/CSS/JS, ES-Module, Three.js 0.160 (Importmap, bereits vorhanden) + `OrbitControls` + `CSS2DRenderer`. **Kein Node** verfügbar → Tests laufen als HTML-Seite im Browser.

**Verweis:** Setzt [2026-06-05-3d-auswertung-design.md](../specs/2026-06-05-3d-auswertung-design.md) und [2026-06-09-atlas-redesign-design.md](../specs/2026-06-09-atlas-redesign-design.md) Phase 1 um.

> ⚠️ **Inhaltlicher Review-Punkt:** Die `axis`/`pol`-Zuordnung der Fragen (Task 1) und die Parteitexte (Task 4) sind die politisch-inhaltlich sensiblen Teile. Mehrere Fragen sind in ihrer Polarität diskutierbar (im Code mit `// soft` markiert). Der PB-Autor sollte diese Tabellen nach der Umsetzung gegenlesen und ggf. anpassen.

---

## Task 1: Daten auslagern + Scoring-Metadaten (`axis`/`pol`) ergänzen

**Files:**
- Create: `js/data.js`
- Modify: `index.html` (Inline-`QUESTIONS`-Array entfernen, Script-Include + Shim einfügen)

Jede Frage bekommt `axis` (`'trade'|'economy'|'governance'`) und `pol` (`+1|-1`).
`pol = +1`: Zustimmung zieht zum **+Pol** (Freihandel / Wachstum / Globalismus).
`pol = -1`: Zustimmung zieht zum **−Pol** (Protektionismus / Postwachstum / Souveränität).

- [ ] **Step 1: Datei `js/data.js` anlegen** mit dem kompletten Datensatz. Die Fragetexte/Erklärungen werden 1:1 aus dem bestehenden Inline-`QUESTIONS`-Array übernommen (Reihenfolge unverändert); ergänzt werden nur `axis` und `pol`. Zuordnung pro Frage (Index 0–29):

```js
// js/data.js — klassisches Script (kein Modul). Setzt globale window.* Daten.
// Fragetexte/agree/disagree/context/simple/terms 1:1 aus der bisherigen Inline-Liste
// übernehmen. Hier ist die axis/pol-Zuordnung dokumentiert; beim Umsetzen jedes
// Objekt um genau diese zwei Felder erweitern.
//
//  Idx  Thema                         axis         pol   Begründung
//  0    Freihandel/kompar. Vorteil    trade        +1    Zustimmung = pro Freihandel
//  1    Freihandel nützt nur Konzernen trade       -1    Zustimmung = freihandelskritisch
//  2    Zölle schaden eigenem Land    trade        +1    Zustimmung = anti-Protektionismus
//  3    Reiche erlauben Armen Schutz  trade        -1    Zustimmung = pro Schutz
//  4    Globales System > Regionen    trade        +1    Zustimmung = pro voller Freihandel
//  5    US-Strafzölle schaden mehr    trade        +1    Zustimmung = anti-Protektionismus
//  6    Zölle sichern dauerhaft Jobs  trade        -1    Zustimmung = pro Protektionismus
//  7    Handelskriege treffen Kleine  trade        +1    soft: Zustimmung leicht anti-Protektionismus
//  8    Recht auf Schutz strat. Ind.  trade        -1    Zustimmung = pro Schutz
//  9    US-Prot. zeigt Regelbruch     trade        -1    soft: zynisch ggü. Freihandelsordnung
//  10   Ohne Wachstum keine Armut weg economy      +1    Zustimmung = pro Wachstum
//  11   BIP ungeeignetes Maß          economy      -1    Zustimmung = wachstumskritisch
//  12   Kein Wachstum = Krise         economy      +1    Zustimmung = pro Wachstum
//  13   Gut leben mit weniger (Degrowth) economy   -1    Zustimmung = Postwachstum
//  14   Grünes Wachstum möglich       economy      +1    Zustimmung = pro (grünes) Wachstum
//  15   Ökonomie & Klima unvereinbar  economy      -1    Zustimmung = Wachstum schränkt Klima ein → Postwachstum-nah
//  16   Markt löst Umwelt von selbst  economy      +1    Zustimmung = Markt-/Wachstumsoptimismus
//  17   Umweltschutz vor Jobs         economy      -1    Zustimmung = Ökologie vor Ökonomie
//  18   CO2-Pflicht trotz Wettbewerb  economy      -1    Zustimmung = Ökologie vor Wettbewerbsfähigkeit
//  19   Entkopplung technisch möglich economy      +1    Zustimmung = grünes Wachstum
//  20   Abkommen begünstigen Reiche   governance   -1    soft: Kritik an globaler Ordnung
//  21   Entwicklungsländer Schutz vs. Regeln governance -1  Zustimmung = Souveränität vor int. Regeln
//  22   Fairtrade-Mindestpreise wirksam governance +1    soft: pro internationale Fairness-Intervention
//  23   Agrarsubventionen = Prot.     governance   +1    soft: Zustimmung = für faire globale Regeln
//  24   Nur mit Fairness-/Sozialstandards governance +1   Zustimmung = pro bindende int. Standards
//  25   WTO unverzichtbar             governance   +1    Zustimmung = pro int. Institution
//  26   WTO bevorzugt Reiche          governance   -1    soft: Kritik an der Institution
//  27   WTO schränkt Souveränität ein governance   -1    Zustimmung = pro Souveränität
//  28   Automatische WTO-Sanktionen   governance   +1    Zustimmung = pro starke int. Durchsetzung
//  29   WTO braucht Reform f. Arme    governance   +1    soft: konstruktiver Globalismus

window.QUESTIONS = [
  // … alle 30 Objekte aus dem bisherigen Inline-Array, jeweils ergänzt um axis/pol.
  // Beispiel für Index 0:
  { topic:'⇄ Freihandel & Wohlstand', topicClass:'pill-trade', sideSub:'Freihandel & Wohlstand',
    axis:'trade', pol:1,
    text:'Wenn Länder das produzieren, was sie am effizientesten herstellen können, profitieren alle vom Handel. [[komparativer Vorteil]]',
    terms:{ 'komparativer Vorteil':'Selbst wenn ein Land bei allem schlechter ist, lohnt es sich zu handeln – solange es sich auf das spezialisiert, wobei es relativ am wenigsten benachteiligt ist. Theorie von David Ricardo (1817).' },
    agree:'Du vertraust darauf, dass Spezialisierung und freier Tausch für alle Handelspartner Wohlstand schafft.',
    disagree:'Du bezweifelst, dass Handelsgewinne alle Teile der Gesellschaft erreichen. Bestimmte Regionen und Berufsgruppen verlieren.',
    context:'Ricardos Theorie ist das wichtigste Argument für Freihandel. Studien (Autor et al., 2013) zeigen jedoch, dass der „China-Schock" ganze US-Industrieregionen deindustrialisiert hat.',
    simple:'Wenn jedes Land das herstellt, was es am besten kann, und dann tauscht – gewinnen alle? Stimmt das immer?' },
  // … Index 1–29 analog (Felder unverändert übernehmen, axis/pol gemäß Tabelle oben).
];
```

- [ ] **Step 2: In `index.html` das Inline-`QUESTIONS`-Array entfernen.** Im großen `<script>` (beginnt bei `// ══ QUESTION DATA ══`) die komplette Deklaration `const QUESTIONS = [ … ];` (alle 30 Objekte) löschen und durch eine Shim-Zeile ersetzen, damit der restliche Inline-Code unverändert weiterläuft:

```js
// QUESTIONS kommt jetzt aus js/data.js (window.QUESTIONS)
const QUESTIONS = window.QUESTIONS;
```

- [ ] **Step 3: `js/data.js` vor dem Inline-Script einbinden.** Direkt vor dem öffnenden `<script>` des Hauptcodes (die Zeile mit `<script>` kurz vor `// ══ QUESTION DATA ══`) einfügen:

```html
<script src="js/data.js"></script>
```

- [ ] **Step 4: Im Browser verifizieren, dass das Quiz unverändert läuft.** `index.html` öffnen, Quiz starten, 2–3 Fragen beantworten, weiter/zurück testen. Erwartet: identisches Verhalten wie vorher, keine Konsolenfehler (`QUESTIONS is not defined` o. Ä.).

- [ ] **Step 5: Verifikation der Datenintegrität.** In der Browser-Konsole prüfen:

```js
window.QUESTIONS.length === 30 &&
window.QUESTIONS.every(q => ['trade','economy','governance'].includes(q.axis) && (q.pol === 1 || q.pol === -1))
```
Erwartet: `true`.

---

## Task 2: Scoring-Engine `computeScores` (TDD im Browser)

**Files:**
- Create: `js/scoring.js`
- Test: `tests/scoring.test.html`

- [ ] **Step 1: Test-Seite schreiben (`tests/scoring.test.html`).** Selbstständige HTML-Seite, die `computeScores` importiert und Assertions in die Seite + Konsole schreibt.

```html
<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><title>scoring tests</title>
<style>body{font-family:monospace;padding:20px}.ok{color:green}.fail{color:red;font-weight:bold}</style></head>
<body><h1>computeScores — Tests</h1><div id="out"></div>
<script type="module">
import { computeScores } from '../js/scoring.js';

const out = document.getElementById('out');
let passed = 0, failed = 0;
function eq(a, b){ return JSON.stringify(a) === JSON.stringify(b); }
function test(name, got, want){
  const ok = eq(got, want);
  ok ? passed++ : failed++;
  const line = document.createElement('div');
  line.className = ok ? 'ok' : 'fail';
  line.textContent = (ok ? '✓ ' : '✗ ') + name + (ok ? '' : `  got=${JSON.stringify(got)} want=${JSON.stringify(want)}`);
  out.appendChild(line);
}

// Fixtures: minimale Fragenliste
const Q = [
  { axis:'trade',      pol: 1 }, // 0
  { axis:'trade',      pol:-1 }, // 1
  { axis:'economy',    pol: 1 }, // 2
  { axis:'governance', pol: 1 }, // 3
];

// 1) Keine Antworten → alle 0
test('leer', computeScores({}, Q), { trade:0, economy:0, governance:0 });

// 2) Eine Antwort +3 mit pol +1 → +100 auf trade
test('einzel +3 pol+1', computeScores({0:3}, Q), { trade:100, economy:0, governance:0 });

// 3) Eine Antwort +3 mit pol -1 → -100 auf trade
test('einzel +3 pol-1', computeScores({1:3}, Q), { trade:-100, economy:0, governance:0 });

// 4) Antwort 0 (neutral) → 0
test('neutral', computeScores({0:0}, Q), { trade:0, economy:0, governance:0 });

// 5) Zwei trade-Antworten mitteln: 0:+3(pol+1)=+3, 1:+3(pol-1)=-3 → Summe 0 / (2*3) → 0
test('mittelung gegenläufig', computeScores({0:3,1:3}, Q), { trade:0, economy:0, governance:0 });

// 6) Teilweise: nur economy beantwortet → andere Achsen 0, economy aus 1 Frage
test('andere achsen', computeScores({2:-3}, Q), { trade:0, economy:-100, governance:0 });

// 7) Rundung: 0:+1(pol+1)=+1 / (1*3) *100 = 33.33 → 33
test('rundung', computeScores({0:1}, Q), { trade:33, economy:0, governance:0 });

out.insertAdjacentHTML('afterbegin', `<h2>${failed===0?'ALLE BESTANDEN':'FEHLER'}: ${passed} ✓ / ${failed} ✗</h2>`);
</script></body></html>
```

- [ ] **Step 2: Test öffnen → muss fehlschlagen.** `tests/scoring.test.html` im Browser öffnen.
Erwartet: Konsolenfehler, dass das Modul `../js/scoring.js` nicht gefunden wird (404), keine grünen Zeilen.

- [ ] **Step 3: `js/scoring.js` implementieren.**

```js
// js/scoring.js
// Wertet die Slider-Antworten (-3..+3) zu Achsenwerten (-100..+100) aus.
// answered: { [fragenindex]: -3..+3 } · questions: Array mit {axis, pol}
export function computeScores(answered, questions) {
  const sums   = { trade: 0, economy: 0, governance: 0 };
  const counts = { trade: 0, economy: 0, governance: 0 };

  for (const key in answered) {
    const q = questions[Number(key)];
    if (!q || !(q.axis in sums)) continue;
    sums[q.axis]   += answered[key] * q.pol;   // Beitrag -3..+3
    counts[q.axis] += 1;
  }

  const score = (axis) =>
    counts[axis] === 0 ? 0 : Math.round((sums[axis] / (counts[axis] * 3)) * 100);

  return { trade: score('trade'), economy: score('economy'), governance: score('governance') };
}
```

- [ ] **Step 4: Test erneut öffnen → muss bestehen.** Seite neu laden.
Erwartet: Überschrift „ALLE BESTANDEN: 7 ✓ / 0 ✗", alle Zeilen grün.

---

## Task 3: `showResult()` mit echten Werten + Achsen-Erklärtexte

**Files:**
- Modify: `index.html` — Importmap (Addons ergänzen), Scoring-Bootstrap-Modul, `showResult()`, `restartQuiz()`
- Modify: `js/data.js` — `window.AXIS_BLURBS` ergänzen

- [ ] **Step 1: Achsen-Erklärtexte in `js/data.js` ergänzen.** Drei Wertebereiche je Achse plus eine Gesamt-Zusammenfassung.

```js
// js/data.js — anhängen
window.AXIS_BLURBS = {
  trade: {
    hi:  'Du stehst klar auf der Seite des Freihandels: offene Märkte, Spezialisierung und Abbau von Handelshemmnissen.',
    mid: 'Du wägst zwischen Freihandel und Schutz ab — offene Märkte ja, aber unter Bedingungen.',
    lo:  'Du stehst dem Freihandel kritisch gegenüber und hältst den Schutz heimischer und strategischer Industrien für legitim.'
  },
  economy: {
    hi:  'Du siehst wirtschaftliches Wachstum als zentrale Grundlage für Wohlstand und Fortschritt.',
    mid: 'Du stehst zwischen Wachstum und Postwachstum — Wohlstand ja, aber nicht um jeden ökologischen Preis.',
    lo:  'Du stellst das Wachstumsparadigma infrage und hältst Wohlstand auch mit weniger Wachstum für möglich.'
  },
  governance: {
    hi:  'Du befürwortest starke internationale Institutionen und regelbasierte globale Zusammenarbeit.',
    mid: 'Du wägst zwischen internationaler Kooperation und nationaler Selbstbestimmung ab.',
    lo:  'Du priorisierst nationale Souveränität gegenüber bindenden internationalen Regeln.'
  }
};
// Kurzlabel je Achse/Bereich für die Gesamt-Einordnung
window.AXIS_SHORT = {
  trade:      { hi:'freihandelsorientiert', mid:'handelspolitisch ausgewogen', lo:'protektionistisch geprägt' },
  economy:    { hi:'wachstumsorientiert',   mid:'zwischen Wachstum und Maß',   lo:'wachstumskritisch' },
  governance: { hi:'globalistisch',         mid:'governance-ausgewogen',       lo:'souveränitätsorientiert' }
};
```

- [ ] **Step 2: Importmap um Addons erweitern.** In `index.html` die bestehende Importmap (`<script type="importmap">`) ersetzen durch:

```html
<script type="importmap">
{ "imports": {
  "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
  "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
}}
</script>
```

- [ ] **Step 3: Scoring-Bootstrap-Modul einfügen.** Direkt nach der Importmap (vor oder nach dem Globe-Modul) ein kleines Modul, das `computeScores` global verfügbar macht und einen Bereichs-Helfer bereitstellt:

```html
<script type="module">
  import { computeScores } from './js/scoring.js';
  window.computeScores = computeScores;
  // Bereichswahl: >+40 → hi, <-40 → lo, sonst mid
  window.scoreBand = (v) => v > 40 ? 'hi' : v < -40 ? 'lo' : 'mid';
</script>
```

- [ ] **Step 4: `showResult()` umschreiben.** Die bestehende Funktion (setzt aktuell feste 72/35/58 %) komplett ersetzen:

```js
function showResult() {
    showScreen('quiz', 'result');
    document.getElementById('progressBar').style.display = 'none';
    document.getElementById('progressLabel').style.display = 'none';

    const scores = window.computeScores(answered, window.QUESTIONS); // {trade,economy,governance} -100..+100
    window._scores = scores;

    // Hilfsfunktion: Score -100..+100 → Balkenbreite 0..100 %
    const toWidth = (v) => ((v + 100) / 2).toFixed(1) + '%';
    const fmt = (v) => (v > 0 ? '+' : '') + v;

    const axes = [
      { key:'trade',      fill:'fillTrade',      val:'valTrade',      exp:'expTrade' },
      { key:'economy',    fill:'fillEconomy',    val:'valEconomy',    exp:'expEconomy' },
      { key:'governance', fill:'fillGovernance', val:'valGovernance', exp:'expGovernance' },
    ];
    axes.forEach(a => {
      const v = scores[a.key];
      const band = window.scoreBand(v);
      document.getElementById(a.val).textContent = fmt(v);
      document.getElementById(a.exp).textContent = window.AXIS_BLURBS[a.key][band];
    });

    // Gesamt-Einordnung
    const s = window.AXIS_SHORT;
    document.getElementById('overallBlurb').innerHTML =
      `Deine Antworten zeichnen ein Profil, das <b>${s.trade[window.scoreBand(scores.trade)]}</b>, ` +
      `<b>${s.economy[window.scoreBand(scores.economy)]}</b> und ` +
      `<b>${s.governance[window.scoreBand(scores.governance)]}</b> ist.`;

    // Balken animiert füllen
    setTimeout(() => {
      document.getElementById('fillTrade').style.width      = toWidth(scores.trade);
      document.getElementById('fillEconomy').style.width    = toWidth(scores.economy);
      document.getElementById('fillGovernance').style.width = toWidth(scores.governance);
    }, 350);

    // 3D-Kompass + Parteienlegende (Tasks 4 & 5)
    if (window.__compass3d) window.__compass3d.render(scores);
    if (window.renderPartyLegend) window.renderPartyLegend();
}
```

- [ ] **Step 5: `restartQuiz()` ergänzen**, damit der Kompass pausiert und Werte/Texte zurückgesetzt werden. In der bestehenden `restartQuiz()` nach dem Zurücksetzen der `fill*`-Breiten einfügen:

```js
    if (window.__compass3d) window.__compass3d.pause();
    ['valTrade','valEconomy','valGovernance','expTrade','expEconomy','expGovernance','overallBlurb']
      .forEach(id => { const el = document.getElementById(id); if (el) el.textContent = ''; });
```

- [ ] **Step 6: Im Browser verifizieren.** Quiz mit klar einseitigen Antworten durchspielen (z. B. überall „Stimme voll zu"). Erwartet: Balken, Zahlenwerte (`+…`/`−…`) und Erklärtexte spiegeln die Antworten wider (nicht mehr 72/35/58). Mit gegenteiligen Antworten erneut: Werte kippen. Keine Konsolenfehler.

---

## Task 4: Parteidaten + Parteienlegende + Info-Karte

**Files:**
- Modify: `js/data.js` — `window.PARTIES`, `window.PARTY_BLURBS`
- Modify: `index.html` — `renderPartyLegend()`, Klick-Handler für Info-Karte

- [ ] **Step 1: Parteidaten in `js/data.js` ergänzen** (Koordinaten −100…+100, Quellen: CHES 2024, Manifesto Project, Wahlprogramme 2025):

```js
// js/data.js — anhängen
window.PARTIES = [
  { name:'CDU/CSU', color:'#d6d6d6', trade: 60, economy: 70, governance: 50 },
  { name:'SPD',     color:'#e3000f', trade: 20, economy: 40, governance: 60 },
  { name:'Grüne',   color:'#33c14a', trade:-15, economy:-40, governance: 80 },
  { name:'FDP',     color:'#ffd400', trade: 90, economy: 80, governance: 15 },
  { name:'AfD',     color:'#009ee0', trade:-50, economy: 50, governance:-90 },
  { name:'Die Linke', color:'#ff2e92', trade:-50, economy:-50, governance:-25 },
];

window.PARTY_BLURBS = {
  'CDU/CSU': {
    trade:'Wirtschaftsliberal und exportorientiert; befürwortet Freihandelsabkommen wie CETA und Mercosur.',
    economy:'Klar wachstumsorientiert; setzt auf Marktwirtschaft und technologischen Fortschritt.',
    governance:'Pro-europäisch und multilateral, betont zugleich nationale und wirtschaftliche Interessen.'
  },
  'SPD': {
    trade:'Grundsätzlich für offenen Handel, aber mit verbindlichen Sozial- und Arbeitsstandards.',
    economy:'Wachstumsorientiert, verbindet dies mit Umverteilung und starkem Sozialstaat.',
    governance:'Stark pro-europäisch und für regelbasierte internationale Zusammenarbeit.'
  },
  'Grüne': {
    trade:'Skeptisch gegenüber reinen Freihandelsabkommen ohne Umwelt- und Sozialstandards (Mercosur-Kritik).',
    economy:'Ökologie hat Vorrang vor reinem BIP-Wachstum; offen für Green-Growth- und Postwachstums-Ideen.',
    governance:'Am stärksten globalistisch; betont internationale Institutionen, Klima- und Menschenrechtskooperation.'
  },
  'FDP': {
    trade:'Stärkste Freihandelspartei; lehnt Zölle und Protektionismus konsequent ab.',
    economy:'Marktwirtschaftlich und wachstumsorientiert; setzt auf Innovation statt Verzicht.',
    governance:'Pro-europäisch, betont aber nationale Eigenverantwortung und lehnt zu viel zentrale Regulierung ab.'
  },
  'AfD': {
    trade:'Protektionistisch; betont nationale Wirtschaftsinteressen, skeptisch gegenüber Freihandelsabkommen.',
    economy:'Wirtschaftsliberal-wachstumsorientiert, ökonomisch weniger radikal als in anderen Politikfeldern.',
    governance:'Am stärksten souveränitätsorientiert; EU-kritisch und gegen Abgabe nationaler Kompetenzen.'
  },
  'Die Linke': {
    trade:'Kritisch gegenüber Freihandel; fordert faire, regulierte Handelsregeln zugunsten ärmerer Länder.',
    economy:'Wachstumskritisch und umverteilungsorientiert; klar am linken Rand der Wirtschaftsachse.',
    governance:'EU-kritisch von links (gegen die neoliberale Ausrichtung, nicht nationalistisch) — daher leicht souveränitätsseitig, aber international solidarisch.'
  }
};
```

- [ ] **Step 2: `renderPartyLegend()` + Info-Karte in `index.html` ergänzen.** Als neues Inline-Script-Stück (im Haupt-`<script>`, vor dem schließenden `</script>`):

```js
function renderPartyLegend() {
    const legend = document.getElementById('partyLegend');
    legend.innerHTML = '';
    window.PARTIES.forEach(p => {
        const item = document.createElement('div');
        item.className = 'pl-item';
        item.innerHTML = `<span class="pl-dot" style="background:${p.color}"></span>${p.name}`;
        item.onclick = () => showPartyCard(p.name);
        legend.appendChild(item);
    });
}

function showPartyCard(name) {
    const p = window.PARTIES.find(x => x.name === name);
    const b = window.PARTY_BLURBS[name];
    if (!p || !b) return;
    const card = document.getElementById('partyCard');
    const fmt = (v) => (v > 0 ? '+' : '') + v;
    card.innerHTML = `
        <span class="pc-close" onclick="document.getElementById('partyCard').classList.remove('show')">×</span>
        <div class="pc-lab">Partei</div>
        <h4><span class="pc-dot" style="background:${p.color}"></span>${p.name}</h4>
        <div class="pc-axis"><div class="pc-top"><span>↔ Handel</span><b>${fmt(p.trade)}</b></div><div class="pc-exp">${b.trade}</div></div>
        <div class="pc-axis"><div class="pc-top"><span>↕ Wirtschaft</span><b>${fmt(p.economy)}</b></div><div class="pc-exp">${b.economy}</div></div>
        <div class="pc-axis"><div class="pc-top"><span>◈ Governance</span><b>${fmt(p.governance)}</b></div><div class="pc-exp">${b.governance}</div></div>`;
    card.classList.add('show');
}
window.renderPartyLegend = renderPartyLegend;
window.showPartyCard = showPartyCard;
```

- [ ] **Step 3: Im Browser verifizieren.** Quiz beenden → unter „Parteien im Vergleich" erscheinen 6 farbige Einträge. Klick auf einen Namen → Info-Karte mit drei Werten + Erklärtexten erscheint; × schließt sie. Keine Konsolenfehler.

---

## Task 5: 3D-Kompass-Modul `js/compass3d.js`

**Files:**
- Create: `js/compass3d.js`
- Modify: `index.html` — Modul einbinden

Basiert auf dem validierten Prototyp `_mockup_3d.html`, angepasst: rendert in den bestehenden `#compass3d`-Canvas (nicht fullscreen), nutzt **echte** Nutzer-Scores + `window.PARTIES`, Achsenfarben = Atlas-Palette, exponiert `window.__compass3d`.

- [ ] **Step 1: `js/compass3d.js` anlegen.**

```js
// js/compass3d.js — interaktiver 3D-Kompass im Ergebnis-Screen.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

const AXIS_COLORS = { trade: 0x4db6ac, economy: 0xd9a441, governance: 0x7f9cb5 };
const S = 1.6;            // halbe Kantenlänge des Wertewürfels (−1..1 ↔ −100..+100)
const to01 = (v) => v / 100;   // Score −100..+100 → −1..1

let renderer, labelRenderer, scene, camera, controls, you, halo, raf, running = false, t = 0;
const pickables = [];

function webglOK() {
  try { const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); }
  catch (e) { return false; }
}

function mkLabel(text, cls, x, y, z, parent) {
  const d = document.createElement('div'); d.className = 'c3d-lbl ' + cls; d.textContent = text;
  const o = new CSS2DObject(d); o.position.set(x, y, z);
  (parent || scene).add(o); return o;
}

function init() {
  const canvas = document.getElementById('compass3d');
  const wrap = document.getElementById('compass3d-wrap');
  const W = wrap.clientWidth, H = wrap.clientHeight;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0c1420, 0.05);
  camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
  camera.position.set(3.4, 2.4, 4.2);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(W, H);

  labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(W, H);
  labelRenderer.domElement.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:3';
  wrap.appendChild(labelRenderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.minDistance = 2.5; controls.maxDistance = 9;
  controls.autoRotate = true; controls.autoRotateSpeed = 0.5;
  canvas.addEventListener('pointerdown', () => controls.autoRotate = false);

  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const key = new THREE.PointLight(0x9fb3c4, 60, 30); key.position.set(4, 6, 4); scene.add(key);

  // Wertewürfel
  scene.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(S * 2, S * 2, S * 2)),
    new THREE.LineBasicMaterial({ color: 0x4db6ac, transparent: true, opacity: 0.16 })));
  const grid = new THREE.GridHelper(S * 2, 8, 0x4db6ac, 0x4db6ac);
  grid.material.transparent = true; grid.material.opacity = 0.08; grid.position.y = -S; scene.add(grid);

  // Achsen + Pol-Labels (X=Handel, Y=Wirtschaft, Z=Governance)
  const axis = (dir, color) => scene.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([dir.clone().multiplyScalar(-S), dir.clone().multiplyScalar(S)]),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.55 })));
  axis(new THREE.Vector3(1, 0, 0), AXIS_COLORS.trade);
  axis(new THREE.Vector3(0, 1, 0), AXIS_COLORS.economy);
  axis(new THREE.Vector3(0, 0, 1), AXIS_COLORS.governance);
  const P = S + 0.22;
  mkLabel('Freihandel', 'pole', P, 0, 0); mkLabel('Protektionismus', 'pole', -P, 0, 0);
  mkLabel('Wachstum', 'pole', 0, P, 0);   mkLabel('Postwachstum', 'pole', 0, -P, 0);
  mkLabel('Globalismus', 'pole', 0, 0, P); mkLabel('Nat. Souveränität', 'pole', 0, 0, -P);

  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);

  // Klick → Parteikarte (nutzt vorhandene showPartyCard)
  const ray = new THREE.Raycaster(), m = new THREE.Vector2();
  renderer.domElement.addEventListener('click', (e) => {
    const r = renderer.domElement.getBoundingClientRect();
    m.set((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(m, camera);
    const hit = ray.intersectObjects(pickables)[0];
    if (hit && window.showPartyCard) window.showPartyCard(hit.object.userData.name);
  });
}

function dot(x, y, z, color, r, glow) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 24),
    new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: glow ? 1.1 : 0.35, roughness: 0.4 }));
  m.position.set(x * S, y * S, z * S); scene.add(m); return m;
}

function buildPoints(scores) {
  // alte Punkte/Labels entfernen
  pickables.forEach(p => { p.children.slice().forEach(c => p.remove(c)); scene.remove(p); });
  pickables.length = 0;
  if (you) { you.children.slice().forEach(c => you.remove(c)); scene.remove(you); you = null; }

  window.PARTIES.forEach(p => {
    const m = dot(to01(p.trade), to01(p.economy), to01(p.governance), Number('0x' + p.color.slice(1)), 0.07, false);
    m.userData = { name: p.name };
    pickables.push(m);
    const d = document.createElement('div'); d.className = 'c3d-lbl'; d.textContent = p.name;
    const o = new CSS2DObject(d); o.position.set(0, 0.13, 0); m.add(o);
  });

  you = dot(to01(scores.trade), to01(scores.economy), to01(scores.governance), 0x4db6ac, 0.11, true);
  halo = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 24),
    new THREE.MeshBasicMaterial({ color: 0x4db6ac, transparent: true, opacity: 0.22 }));
  you.add(halo);
  mkLabel('● DU', 'you', 0, 0.2, 0, you);
}

function onResize() {
  if (!renderer) return;
  const wrap = document.getElementById('compass3d-wrap');
  const W = wrap.clientWidth, H = wrap.clientHeight;
  camera.aspect = W / H; camera.updateProjectionMatrix();
  renderer.setSize(W, H); labelRenderer.setSize(W, H);
}

function loop() {
  if (!running) return;
  raf = requestAnimationFrame(loop);
  t += 0.03;
  if (halo) halo.scale.setScalar(1 + Math.sin(t) * 0.12);
  controls.update();
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}

window.__compass3d = {
  render(scores) {
    const wrap = document.getElementById('compass3d-wrap');
    if (!webglOK()) { wrap.style.display = 'none'; return; }   // Fallback: Balken bleiben sichtbar
    if (!renderer) init();
    buildPoints(scores);
    onResize();
    if (!running) { running = true; loop(); }
  },
  pause() { running = false; if (raf) cancelAnimationFrame(raf); },
  resume() { if (renderer && !running) { running = true; loop(); } },
};
```

- [ ] **Step 2: Modul in `index.html` einbinden.** Nach dem Globe-Modul ein weiteres Modul-Script ergänzen:

```html
<script type="module" src="js/compass3d.js"></script>
```

- [ ] **Step 3: Im Browser verifizieren (Desktop).** Quiz beenden → im `#compass3d-wrap` erscheint ein drehender 3D-Würfel mit drei farbigen Achsen (Teal/Bernstein/Stahl), Pol-Labels, 6 Parteikugeln + leuchtendem „● DU"-Punkt. Ziehen dreht, Scrollen zoomt. Klick auf eine Kugel öffnet die Parteikarte. Der „DU"-Punkt liegt plausibel zu den Antworten (bei „überall voll zustimmen" entsprechend in den +Ecken der jeweiligen Achsen-Polarität). Keine Konsolenfehler.

- [ ] **Step 4: „Neu starten" prüfen.** Auf der Ergebnisseite „↺ Neu starten" → zurück zur Landing, Kompass pausiert (keine CPU-Last). Erneutes Quiz → Kompass rendert mit neuen Werten (alte Punkte/Labels sind weg, keine Dubletten).

---

## Task 6: WebGL-Fallback + Responsive-Verifikation

**Files:**
- Modify: `index.html` / `css/`-relevante Regeln nur falls nötig (Hinweis: vollständiges Styling kommt in Phase 2; hier nur Funktionsfähigkeit sicherstellen)

- [ ] **Step 1: Fallback testen.** In den DevTools WebGL deaktivieren (oder in `compass3d.js` `webglOK()` temporär `return false` setzen) und Quiz beenden.
Erwartet: `#compass3d-wrap` ist ausgeblendet, die **Balken + Zahlenwerte + Erklärtexte** (Task 3) sowie die Parteienlegende (Task 4) bleiben sichtbar und korrekt. Danach Test-Hack zurücknehmen.

- [ ] **Step 2: Touch-/Tablet-Bedienung prüfen.** In den DevTools Geräte-Emulation (iPad) aktivieren, Ergebnisseite öffnen.
Erwartet: 1 Finger dreht den Würfel, 2 Finger zoomen; der Seiten-Scroll blockiert die Geste nicht (`touch-action:none` ist im bestehenden CSS auf `#compass3d-wrap`/`#compass3d` gesetzt). Parteikarte erscheint (auf Mobil als unten andockendes Panel, vorhandene `@media`-Regel).

- [ ] **Step 3: Breakpoints prüfen.** Ergebnisseite bei Breiten **1280**, **768 (hoch + quer)** und **375** ansehen.
Erwartet: Würfel + Labels lesbar, Balken/Texte/Legende ohne Überlauf, Parteikarte sinnvoll platziert. Bei `orientationchange` (Emulator drehen) skaliert der Renderer korrekt (kein verzerrtes Bild).

- [ ] **Step 4: Regressions-Check Globus.** Landing neu laden, scrollen.
Erwartet: Der bestehende Globus funktioniert unverändert (Importmap-Änderung hat ihn nicht gebrochen), Start/Neu-starten-Übergänge laufen sauber.

---

## Self-Review-Ergebnis

- **Spec-Abdeckung Phase 1:** Scoring-Engine (Task 2), 3D-Kompass-Integration (Task 5), Erklärtexte/Parteidaten (Tasks 3+4), WebGL-Fallback + Responsive (Task 6), Atlas-Achsenfarben im Kompass (Task 5) — abgedeckt. Vollständiger Datei-Split (CSS/quiz/globe) ist bewusst Phase 2; hier nur `data.js`/`scoring.js`/`compass3d.js`.
- **Offen/abhängig:** Endgültiges Atlas-Styling der Ergebnisbalken (Farbverläufe) bleibt Phase 2; in Phase 1 zeigen die Balken echte Breiten mit den bestehenden Farben.
- **Inhaltlicher Vorbehalt:** `axis`/`pol` (Task 1) und Parteitexte (Task 4) sind diskutierbar — Review durch den PB-Autor empfohlen (oben markiert).
