// ══════════════════════════════════════════
//  QUESTION DATA  —  js/data.js
//  Classic script (no module): sets window.QUESTIONS
//
//  Revision 2026-06-11: 30 → 24 Fragen (Dubletten & messschwache Fragen
//  gestrichen, alle simple-Fassungen als Aussagen statt Fragen formuliert).
//  Begründungen: docs/superpowers/specs/2026-06-11-fragen-revision-und-lern-checkpoints-design.md
//
//  axis/pol mapping (24 Fragen, 6 Blöcke à 4):
//  Idx  Block                        axis         pol   note
//   0   Freihandel & Wohlstand       trade        +1
//   1   Freihandel & Wohlstand       trade        -1
//   2   Freihandel & Wohlstand       trade        +1
//   3   Freihandel & Wohlstand       trade        +1
//   4   US-Protektionismus           trade        +1
//   5   US-Protektionismus           trade        -1
//   6   US-Protektionismus           trade        -1
//   7   US-Protektionismus           trade        -1
//   8   Wachstum & Wohlstand         economy      +1
//   9   Wachstum & Wohlstand         economy      -1
//  10   Wachstum & Wohlstand         economy      +1
//  11   Wachstum & Wohlstand         economy      -1
//  12   Ökonomie & Nachhaltigkeit    economy      +1
//  13   Ökonomie & Nachhaltigkeit    economy      +1
//  14   Ökonomie & Nachhaltigkeit    economy      -1
//  15   Ökonomie & Nachhaltigkeit    economy      -1
//  16   Fairer Handel                governance   -1   soft
//  17   Fairer Handel                governance   -1
//  18   Fairer Handel                governance   +1   soft
//  19   Fairer Handel                governance   +1
//  20   WTO & globale Ordnung        governance   +1
//  21   WTO & globale Ordnung        governance   -1   soft
//  22   WTO & globale Ordnung        governance   -1
//  23   WTO & globale Ordnung        governance   +1
//
//  pol=+1: agreement → + pole (Freihandel / Wachstum / Globalismus)
//  pol=-1: agreement → − pole (Protektionismus / Postwachstum / Souveränität)
//
//  Balance: alle drei Achsen exakt 4× pol+1 und 4× pol-1.
//  „soft" = Achsen-Zuordnung diskutierbar (deskriptive Aussage, die als
//  Meinungsindikator dient) — bei inhaltlicher Überarbeitung gegenlesen.
// ══════════════════════════════════════════

window.QUESTIONS = [
  // ── Block 1: Freihandel & Wohlstand ──
  { topic:'⇄ Freihandel & Wohlstand', topicClass:'pill-trade', sideSub:'Freihandel & Wohlstand',
    text:'Wenn Länder das produzieren, was sie am effizientesten herstellen können, profitieren alle vom Handel. [[komparativer Vorteil]]',
    terms:{ 'komparativer Vorteil':'Selbst wenn ein Land bei allem schlechter ist, lohnt es sich zu handeln – solange es sich auf das spezialisiert, wobei es relativ am wenigsten benachteiligt ist. Theorie von David Ricardo (1817).' },
    agree:'Du vertraust darauf, dass Spezialisierung und freier Tausch für alle Handelspartner Wohlstand schafft.',
    disagree:'Du bezweifelst, dass Handelsgewinne alle Teile der Gesellschaft erreichen. Bestimmte Regionen und Berufsgruppen verlieren.',
    context:'Ricardos Theorie ist das wichtigste Argument für Freihandel. Studien (Autor et al., 2013) zeigen jedoch, dass der „China-Schock" ganze US-Industrieregionen deindustrialisiert hat.',
    simple:'Wenn jedes Land das herstellt, was es am besten kann, und damit Handel treibt, geht es am Ende allen besser.',
    axis:'trade', pol:+1 },

  { topic:'⇄ Freihandel & Wohlstand', topicClass:'pill-trade', sideSub:'Freihandel & Wohlstand',
    text:'Die Gewinne des [[Freihandels]] kommen vor allem Großkonzernen zugute, nicht der breiten Bevölkerung.',
    terms:{ 'Freihandels':'Austausch von Waren und Dienstleistungen zwischen Ländern ohne staatliche Einschränkungen wie Zölle oder Quoten.' },
    agree:'Du siehst Freihandel kritisch: Gewinne fließen vor allem zu Kapitaleignern und Unternehmen, Arbeitnehmer in betroffenen Sektoren verlieren.',
    disagree:'Du glaubst, dass Freihandel durch günstigere Preise und mehr Auswahl letztlich allen Konsumenten und der Gesamtwirtschaft nützt.',
    context:'Zwar sinken Preise für Konsumgüter, doch in bestimmten Industrien steigt die Ungleichheit. Globalisierungsgewinne werden ungleich verteilt.',
    simple:'Am freien Handel verdienen vor allem große Unternehmen und Reiche. Normale Arbeitnehmer gehen oft leer aus.',
    axis:'trade', pol:-1 },

  { topic:'⇄ Freihandel & Wohlstand', topicClass:'pill-trade', sideSub:'Freihandel & Wohlstand',
    text:'[[Zölle]] und [[Importquoten]] schaden langfristig auch dem Land, das sie einführt.',
    terms:{ 'Zölle':'Abgaben auf importierte Waren, die deren Preis im Inland erhöhen und so heimische Produzenten schützen sollen.', 'Importquoten':'Mengenbeschränkungen für eingeführte Waren – eine alternative Form des Handelshemmnisses.' },
    agree:'Du glaubst, dass Handelshemmnisse ineffizient sind: Sie erhöhen Preise für Verbraucher und schützen unproduktive Sektoren auf Kosten der Allgemeinheit.',
    disagree:'Du siehst Schutzzölle als legitimes Mittel, um strategische Industrien und Arbeitsplätze zu erhalten – selbst wenn das kurzfristig Kosten verursacht.',
    context:'Ökonomen sind sich weitgehend einig, dass Protektionismus die Gesamteffizienz senkt. Politisch bleibt er attraktiv, weil seine Kosten diffus, seine Vorteile aber konzentriert sind.',
    simple:'Ein Land, das ausländische Waren mit Abgaben teurer macht, schadet damit auf Dauer auch sich selbst.',
    axis:'trade', pol:+1 },

  { topic:'⇄ Freihandel & Wohlstand', topicClass:'pill-trade', sideSub:'Freihandel & Wohlstand',
    text:'Ein globales Handelssystem ohne Beschränkungen schafft mehr Wohlstand als [[regionale Handelsbündnisse]].',
    terms:{ 'regionale Handelsbündnisse':'Abkommen zwischen geografisch nahen Ländern (z.B. EU, USMCA, ASEAN), die untereinander Handelshemmnisse abbauen, aber gegenüber Außenstehenden Barrieren aufrechterhalten.' },
    agree:'Du bevorzugst vollständigen globalen Freihandel – regionale Blöcke sind nur ein Kompromiss, der Außenstehende benachteiligt.',
    disagree:'Du siehst regionale Abkommen als pragmatischen Weg: leichter umzusetzen, kulturell kohärenter und für beteiligte Länder vorteilhafter.',
    context:'Regionalismus vs. Multilateralismus ist ein zentraler Streitpunkt. Die WTO fördert multilaterale Regeln, während Freihandelsabkommen wie CETA oder RCEP regional agieren.',
    simple:'Weltweiter Handel ohne Schranken zwischen allen Ländern bringt mehr Wohlstand als getrennte Abkommen einzelner Ländergruppen.',
    axis:'trade', pol:+1 },

  // ── Block 2: US-Protektionismus ──
  { topic:'⇄ US-Protektionismus', topicClass:'pill-trade', sideSub:'US-amerikanischer Protektionismus',
    text:'Die US-amerikanischen [[Strafzölle]] auf Importe aus China schaden der Weltwirtschaft insgesamt mehr, als sie nützen.',
    terms:{ 'Strafzölle':'Besonders hohe Zölle, die gezielt als wirtschaftliche Strafmaßnahme gegen ein bestimmtes Land eingesetzt werden – oft als Reaktion auf als unfair empfundene Handelspraktiken.' },
    agree:'Du glaubst, dass der Handelskrieg globale Lieferketten stört und alle Seiten schlechter stellt – auch die USA selbst.',
    disagree:'Du siehst die Zölle als notwendige Reaktion auf Chinas staatliche Subventionen und als Hebel zur Durchsetzung fairer Handelsbedingungen.',
    context:'Die USA haben seit 2018 Zölle auf chinesische Güter im Wert von Hunderten Milliarden Dollar eingeführt. Ökonomen streiten über die Nettoeffekte auf Preise, Jobs und Lieferketten.',
    simple:'Die amerikanischen Strafabgaben auf chinesische Waren schaden der Weltwirtschaft am Ende mehr, als sie nützen.',
    axis:'trade', pol:+1 },

  { topic:'⇄ US-Protektionismus', topicClass:'pill-trade', sideSub:'US-amerikanischer Protektionismus',
    text:'Wer seine Industrie durch [[Zölle]] schützt, sichert damit dauerhaft Arbeitsplätze für die eigene Bevölkerung.',
    terms:{ 'Zölle':'Abgaben auf importierte Waren, die deren Preis im Inland erhöhen und so heimische Produzenten schützen sollen.' },
    agree:'Du glaubst, dass staatlicher Schutz heimische Industrien und Jobs erhält – ein legitimes wirtschaftspolitisches Ziel.',
    disagree:'Du glaubst, dass Schutzzölle ineffiziente Industrien künstlich am Leben halten und langfristig Wettbewerbsfähigkeit sowie Wachstum bremsen.',
    context:'Kurzfristig können Zölle bestimmte Jobs erhalten. Langfristig zeigt die Forschung oft negative Effekte: höhere Preise für Verbraucher, Vergeltungsmaßnahmen und sinkende Produktivität.',
    simple:'Wenn ein Land seine Fabriken mit Zöllen vor billiger Auslandskonkurrenz schützt, bleiben auf Dauer mehr Arbeitsplätze erhalten.',
    axis:'trade', pol:-1 },

  { topic:'⇄ US-Protektionismus', topicClass:'pill-trade', sideSub:'US-amerikanischer Protektionismus',
    text:'Ein Land hat das Recht, [[strategisch wichtige Industrien]] zu schützen, unabhängig von internationalen Handelsregeln.',
    terms:{ 'strategisch wichtige Industrien':'Branchen, die als unverzichtbar für nationale Sicherheit oder Versorgung gelten – z.B. Rüstung, Energie, Halbleiter, Pharmazeutika.' },
    agree:'Du priorisierst nationale Souveränität und Sicherheit über internationale Handelsregeln. Staaten müssen kritische Kapazitäten selbst kontrollieren.',
    disagree:'Du glaubst, dass Ausnahmen für „strategische" Industrien leicht missbraucht werden und das internationale Handelssystem untergraben.',
    context:'Die COVID-Pandemie und der Ukraine-Krieg haben das Konzept strategischer Autonomie neu belebt. Die EU und USA investieren massiv in heimische Chipproduktion und Energieversorgung.',
    simple:'Ein Land darf Branchen schützen, die für seine Sicherheit wichtig sind, auch wenn das gegen internationale Regeln verstößt.',
    axis:'trade', pol:-1 },

  { topic:'⇄ US-Protektionismus', topicClass:'pill-trade', sideSub:'US-amerikanischer Protektionismus',
    text:'Die EU sollte auf [[US-Strafzölle]] mit eigenen [[Gegenzöllen]] antworten, statt weiter allein auf freien Handel zu setzen.',
    terms:{ 'US-Strafzölle':'Besonders hohe Zölle, die die USA als wirtschaftliche Strafmaßnahme gegen andere Länder einsetzen – seit 2018 vor allem gegen China, zeitweise auch gegen die EU (Stahl und Aluminium).', 'Gegenzöllen':'Zölle, die ein Land gezielt als Antwort auf Zölle eines anderen Landes einführt – als Druckmittel, um deren Rücknahme zu erreichen. Auch „Vergeltungszölle" genannt.' },
    agree:'Du glaubst, dass die EU Stärke zeigen muss: Nur wer glaubwürdig zurückschlagen kann, wird am Verhandlungstisch ernst genommen.',
    disagree:'Du glaubst, dass Gegenzölle die Eskalation verschärfen und am Ende vor allem die eigenen Verbraucher und Unternehmen belasten.',
    context:'Die EU reagierte auf die US-Stahlzölle von 2018 mit Gegenzöllen auf symbolträchtige US-Produkte wie Motorräder, Whiskey und Jeans – gezielt auf politisch sensible Branchen. Ob Vergeltung Verhandlungen fördert oder Handelskriege verlängert, ist umstritten.',
    simple:'Wenn die USA europäische Waren mit Zöllen belegen, sollte Europa amerikanische Waren genauso mit Zöllen belegen.',
    axis:'trade', pol:-1 },

  // ── Block 3a (erweitert): Lieferketten & Abhängigkeit ──
  { topic:'⇄ Lieferketten & Abhängigkeit', topicClass:'pill-trade', sideSub:'Globale Lieferketten',
    text:'Globale, arbeitsteilige [[Lieferketten]] machen Produkte günstiger und sind effizienter als der Aufbau heimischer Produktion.',
    terms:{ 'Lieferketten':'Das Netzwerk aus Zulieferern, Fabriken und Transportwegen, über das ein Produkt entsteht, oft über viele Länder verteilt (z. B. ein Smartphone aus Teilen von Dutzenden Zulieferern weltweit).' },
    agree:'Du vertraust auf internationale Arbeitsteilung: Jede Stufe wird dort gefertigt, wo es am günstigsten ist. Das senkt Preise und steigert die Effizienz.',
    disagree:'Du hältst hocheffiziente globale Ketten für zu anfällig: Spart man jede Reserve weg, bricht bei einer Störung das ganze System.',
    context:'Die Just-in-time-Produktion minimiert Lagerkosten, hat aber während Corona und der Sueskanal-Blockade 2021 gezeigt, wie verletzlich eng getaktete Ketten sind.',
    simple:'Wenn jedes Teil eines Produkts dort hergestellt wird, wo es am billigsten ist, werden die Produkte für alle günstiger.',
    axis:'trade', pol:+1 },

  { topic:'⇄ Lieferketten & Abhängigkeit', topicClass:'pill-trade', sideSub:'Globale Lieferketten',
    text:'Bei lebenswichtigen Gütern wie [[Medikamenten]] und [[Halbleitern]] sollte ein Land auf eigene Produktion setzen, auch wenn das teurer ist.',
    terms:{ 'Medikamenten':'Ein Großteil der weltweiten Wirkstoffe für Arzneimittel wird in wenigen Ländern produziert, vor allem in China und Indien.', 'Halbleitern':'Computerchips, die Grundbausteine fast aller modernen Geräte. Ihre Herstellung ist stark konzentriert: Taiwan allein fertigt über 60 % der weltweiten Chips.' },
    agree:'Du stellst Versorgungssicherheit über den Preis: Bei kritischen Gütern darf ein Land nicht vom Ausland abhängig sein.',
    disagree:'Du hältst teure heimische Produktion für Verschwendung: Internationale Arbeitsteilung versorgt zuverlässiger und günstiger als nationale Alleingänge.',
    context:'Die EU (Chips Act) und die USA (CHIPS Act) investieren Milliarden, um die Halbleiterfertigung zurückzuholen, ein Bruch mit jahrzehntelanger Auslagerung.',
    simple:'Wichtige Dinge wie Medikamente und Computerchips sollte ein Land lieber selbst herstellen, auch wenn das mehr kostet.',
    axis:'trade', pol:-1 },

  { topic:'⇄ Lieferketten & Abhängigkeit', topicClass:'pill-trade', sideSub:'Globale Lieferketten',
    text:'Die richtige Lehre aus Lieferkettenkrisen ist, die Bezugsquellen breiter zu streuen, statt sich abzuschotten.',
    terms:{},
    agree:'Du setzt auf Diversifizierung statt Rückzug: Wer von mehreren Ländern bezieht, ist krisenfester, ohne die Vorteile des Welthandels aufzugeben.',
    disagree:'Du glaubst, dass nur eigene oder regionale Produktion echte Sicherheit bietet. Mehr Handelspartner bedeuten weiterhin Abhängigkeit vom Ausland.',
    context:'„China plus eins": Viele Konzerne behalten China, bauen aber zusätzlich Standorte in Vietnam, Indien oder Mexiko auf. Risikostreuung statt Heimkehr.',
    simple:'Wenn Lieferungen aus einem Land ausfallen, sollte man bei mehreren Ländern einkaufen, statt alles selbst zu machen.',
    axis:'trade', pol:+1 },

  { topic:'⇄ Lieferketten & Abhängigkeit', topicClass:'pill-trade', sideSub:'Globale Lieferketten',
    text:'Die starke Abhängigkeit von einzelnen Lieferländern wie China ist ein zu großes Risiko und rechtfertigt staatliche Eingriffe in den Handel.',
    terms:{},
    agree:'Du siehst einseitige Abhängigkeit als Sicherheitsrisiko, das der Staat aktiv verringern muss, etwa durch Anreize oder Vorgaben.',
    disagree:'Du vertraust darauf, dass Unternehmen ihre Risiken selbst am besten steuern. Staatliche Eingriffe verteuern und verzerren den Handel.',
    context:'Der Begriff „De-Risking" prägt seit 2023 die EU-Strategie gegenüber China: nicht Abkopplung, aber gezielte Reduktion kritischer Abhängigkeiten.',
    simple:'Wenn ein Land bei wichtigen Waren zu sehr von einem einzigen Lieferland abhängt, darf der Staat in den Handel eingreifen.',
    axis:'trade', pol:-1 },

  // ── Block 3b (erweitert): Globalisierung & Arbeitsplätze ──
  { topic:'⇄ Globalisierung & Arbeitsplätze', topicClass:'pill-trade', sideSub:'Globalisierung & Arbeitsmarkt',
    text:'Die [[Verlagerung]] von Fabriken in Niedriglohnländer hat in den Industrieländern mehr Arbeitsplätze zerstört als geschaffen.',
    terms:{ 'Verlagerung':'Auch „Offshoring": Unternehmen verlegen ihre Produktion ins Ausland, meist um niedrigere Löhne und Kosten zu nutzen.' },
    agree:'Du siehst die Verlierer der Globalisierung: ganze Industrieregionen, in denen gut bezahlte Fabrikjobs verschwanden und nicht gleichwertig ersetzt wurden.',
    disagree:'Du glaubst, dass andernorts neue, oft bessere Jobs entstanden. Der Strukturwandel verschiebt Arbeit, er vernichtet sie nicht.',
    context:'Der „China-Schock" kostete die USA rund 1 Million Industriejobs (Autor et al. 2013). Ob die Gesamtbeschäftigung sank, ist umstritten; betroffene Regionen erholten sich aber oft nicht.',
    simple:'Weil Fabriken in Länder mit niedrigen Löhnen verlegt wurden, sind bei uns mehr Jobs verloren gegangen als neue entstanden.',
    axis:'trade', pol:-1 },

  { topic:'⇄ Globalisierung & Arbeitsplätze', topicClass:'pill-trade', sideSub:'Globalisierung & Arbeitsmarkt',
    text:'Globalisierung schafft unterm Strich mehr und bessere Arbeitsplätze, als sie vernichtet.',
    terms:{},
    agree:'Du siehst die Globalisierung als Wohlstandsmotor: Exportbranchen, neue Dienstleistungen und günstigere Vorprodukte schaffen netto mehr Beschäftigung.',
    disagree:'Du bezweifelst die positive Gesamtbilanz oder hältst sie für zweitrangig, solange ganze Regionen und Berufsgruppen dauerhaft verlieren.',
    context:'Exportstarke Länder wie Deutschland verdanken Millionen Jobs dem Welthandel. Der Streit dreht sich weniger um die Summe als um die Verteilung der Gewinne und Verluste.',
    simple:'Durch den weltweiten Handel entstehen am Ende mehr und bessere Jobs, als verloren gehen.',
    axis:'trade', pol:+1 },

  { topic:'⇄ Globalisierung & Arbeitsplätze', topicClass:'pill-trade', sideSub:'Globalisierung & Arbeitsmarkt',
    text:'Wenn Länder mit niedrigen Löhnen und schwachen [[Sozialstandards]] konkurrieren, geraten heimische Arbeitnehmer unter unfairen Druck.',
    terms:{ 'Sozialstandards':'Regeln zum Schutz von Arbeitnehmern, etwa Mindestlöhne, Arbeitszeitgrenzen, Arbeitssicherheit und das Recht, Gewerkschaften zu gründen.' },
    agree:'Du siehst einen unfairen Wettbewerb: Wer Löhne und Schutzrechte niedrig hält, verschafft sich Vorteile zulasten der Beschäftigten überall.',
    disagree:'Du hältst niedrige Löhne in ärmeren Ländern für deren legitimen Vorteil: So holen sie wirtschaftlich auf, und Konsumenten profitieren von günstigen Preisen.',
    context:'Die Sorge vor einem „Race to the Bottom", einem Abwärtswettlauf bei Löhnen und Standards, ist ein Kernargument der Globalisierungskritik. Empirisch ist er nur in Teilen belegt.',
    simple:'Wenn andere Länder mit niedrigen Löhnen und wenig Arbeiterschutz produzieren, stehen unsere Arbeitnehmer unfair unter Druck.',
    axis:'trade', pol:-1 },

  { topic:'⇄ Globalisierung & Arbeitsplätze', topicClass:'pill-trade', sideSub:'Globalisierung & Arbeitsmarkt',
    text:'Der [[Standortwettbewerb]] zwischen Ländern zwingt Volkswirtschaften, produktiver und innovativer zu werden, was am Ende allen nützt.',
    terms:{ 'Standortwettbewerb':'Der Wettbewerb der Länder um Unternehmen und Investitionen, etwa über Steuern, Infrastruktur, Bildung und Bürokratie.' },
    agree:'Du siehst Wettbewerbsdruck als gesund: Er treibt Effizienz, Bildung und Innovation an und verhindert wirtschaftliche Trägheit.',
    disagree:'Du fürchtest, dass Standortwettbewerb vor allem Steuern, Löhne und Standards nach unten drückt, ein Wettlauf, bei dem Beschäftigte und Staatskassen verlieren.',
    context:'Standortwettbewerb kann Reformen anstoßen, aber auch Steuersenkungswettläufe auslösen. Genau dagegen richtet sich die globale Mindeststeuer für Konzerne (2024).',
    simple:'Weil Länder um Unternehmen konkurrieren, müssen sie besser werden, was am Ende allen nützt.',
    axis:'trade', pol:+1 },

  // ── Block 3c (erweitert): Handel als Druckmittel ──
  { topic:'⇄ Handel als Druckmittel', topicClass:'pill-trade', sideSub:'Sanktionen & Geoökonomie',
    text:'Handel sollte auch als politisches Druckmittel dienen, etwa durch [[Sanktionen]] gegen Staaten, die Menschenrechte verletzen.',
    terms:{ 'Sanktionen':'Wirtschaftliche Strafmaßnahmen wie Handelsverbote, Einfuhrstopps oder das Einfrieren von Vermögen, um ein Land politisch unter Druck zu setzen.' },
    agree:'Du findest, wirtschaftliche Macht darf für politische und moralische Ziele eingesetzt werden. Handel ist nie nur „neutral".',
    disagree:'Du willst Handel und Politik trennen: Sanktionen treffen oft die Bevölkerung statt der Verantwortlichen und politisieren die Wirtschaft.',
    context:'Die Sanktionen gegen Russland seit 2022 sind das größte Beispiel. Ihre Wirksamkeit ist umstritten: Sie schaden, erzwingen aber selten einen direkten Politikwechsel.',
    simple:'Man sollte den Handel auch nutzen, um Druck zu machen, zum Beispiel mit Strafmaßnahmen gegen Länder, die Menschenrechte verletzen.',
    axis:'trade', pol:-1 }, // soft

  { topic:'⇄ Handel als Druckmittel', topicClass:'pill-trade', sideSub:'Sanktionen & Geoökonomie',
    text:'Wirtschaftliche Verflechtung zwischen Ländern macht Kriege unwahrscheinlicher. Handel verbindet. ([[Doux commerce]])',
    terms:{ 'Doux commerce':'„Sanfter Handel": die alte Idee (Montesquieu, 18. Jahrhundert), dass Handel Völker friedlich voneinander abhängig macht und so Konflikte dämpft.' },
    agree:'Du glaubst, dass enge Handelsbeziehungen Anreize für Frieden schaffen: Wer voneinander profitiert, riskiert nicht leichtfertig Krieg.',
    disagree:'Du hältst das für naiv: Wirtschaftliche Abhängigkeit kann auch erpressbar machen, und Handel hat Kriege historisch nicht verhindert.',
    context:'Die EU begann als Friedensprojekt durch wirtschaftliche Verflechtung. Doch Deutschlands Gasabhängigkeit von Russland zeigte 2022 die Kehrseite der These.',
    simple:'Länder, die viel miteinander handeln, führen seltener Krieg gegeneinander. Handel verbindet.',
    axis:'trade', pol:+1 },

  { topic:'⇄ Handel als Druckmittel', topicClass:'pill-trade', sideSub:'Sanktionen & Geoökonomie',
    text:'Der Westen sollte sich von autoritären Staaten wie China wirtschaftlich gezielt [[entkoppeln]], auch um den Preis von Wohlstand.',
    terms:{ 'entkoppeln':'„Decoupling": die bewusste Trennung wirtschaftlicher Verflechtungen zwischen Ländern, etwa durch Rückbau von Handel, Investitionen und Technologietransfer.' },
    agree:'Du stellst Sicherheit und Werte über wirtschaftliche Gewinne: Abhängigkeit von autoritären Staaten ist langfristig gefährlicher als der Wohlstandsverlust.',
    disagree:'Du hältst Entkopplung für teuer und unrealistisch: Sie schadet beiden Seiten und kann die Welt in feindliche Blöcke spalten.',
    context:'Statt vollständigem „Decoupling" verfolgen EU und USA meist „De-Risking": Abhängigkeiten senken, ohne den Handel ganz abzubrechen.',
    simple:'Der Westen sollte den Handel mit Ländern wie China bewusst zurückfahren, auch wenn das Wohlstand kostet.',
    axis:'trade', pol:-1 },

  { topic:'⇄ Handel als Druckmittel', topicClass:'pill-trade', sideSub:'Sanktionen & Geoökonomie',
    text:'Sanktionen und Handelskriege schaden meist beiden Seiten und erreichen ihre politischen Ziele nur selten.',
    terms:{},
    agree:'Du siehst Handelskonflikte als wechselseitig schädlich: Beide Volkswirtschaften verlieren, während das politische Ziel selten erreicht wird.',
    disagree:'Du hältst Sanktionen und Zölle für legitime und manchmal wirksame Druckmittel. Ohne sie fehlte ein Hebel unterhalb militärischer Gewalt.',
    context:'Studien zur Wirksamkeit von Sanktionen sind ernüchternd: Sie erzwingen selten einen Kurswechsel, gelten aber als Signal und Druckmittel unterhalb von Krieg.',
    simple:'Sanktionen und Handelskriege schaden am Ende beiden Seiten und bringen politisch wenig.',
    axis:'trade', pol:+1 },

  // ── Block 3: Wachstum & Wohlstand ──
  { topic:'↕ Wachstum & Wohlstand', topicClass:'pill-economy', sideSub:'Wachstum & Wohlstand',
    text:'Ohne [[wirtschaftliches Wachstum]] ist es nicht möglich, Armut dauerhaft zu bekämpfen.',
    terms:{ 'wirtschaftliches Wachstum':'Steigerung der Wirtschaftsleistung, gemessen am Bruttoinlandsprodukt (BIP). Gilt traditionell als Voraussetzung für steigenden Lebensstandard.' },
    agree:'Du glaubst, dass mehr Produktion und Einkommen die einzige nachhaltige Grundlage sind, um Armut zu reduzieren und soziale Ausgaben zu finanzieren.',
    disagree:'Du glaubst, dass Umverteilung und Strukturveränderungen wichtiger sind – Wachstum konzentriert Wohlstand, ohne Armut automatisch zu beseitigen.',
    context:'Die „Trickle-down"-These besagt, dass Wachstum allen zugutekommt. Kritiker wie Stiglitz und Piketty zeigen, dass Ungleichheit trotz Wachstum steigen kann.',
    simple:'Nur wenn die Wirtschaft wächst, kann Armut dauerhaft bekämpft werden.',
    axis:'economy', pol:+1 },

  { topic:'↕ Wachstum & Wohlstand', topicClass:'pill-economy', sideSub:'Wachstum & Wohlstand',
    text:'Das [[Bruttoinlandsprodukt (BIP)]] ist ein ungeeignetes Maß dafür, wie gut es einer Gesellschaft wirklich geht.',
    terms:{ 'Bruttoinlandsprodukt (BIP)':'Der Gesamtwert aller Waren und Dienstleistungen, die in einem Land in einem Jahr produziert werden. Das BIP ist das wichtigste Maß für wirtschaftliche Größe und Wachstum.' },
    agree:'Du glaubst, dass das BIP wichtige Aspekte wie Ungleichheit, Umweltzerstörung, Gesundheit und Lebensqualität nicht erfasst und deshalb als Wohlstandsmaß unzureichend ist.',
    disagree:'Du siehst das BIP trotz seiner Grenzen als nützliche und vergleichbare Kenngröße, die mit anderen Indikatoren ergänzt werden kann.',
    context:'Alternativen zum BIP: Human Development Index (HDI), Genuine Progress Indicator. Viele Ökonomen und der Economist fordern ergänzende Indikatoren.',
    simple:'Das BIP misst nur, wie viel ein Land produziert. Ob es den Menschen wirklich gut geht, zeigt es nicht.',
    axis:'economy', pol:-1 },

  { topic:'↕ Wachstum & Wohlstand', topicClass:'pill-economy', sideSub:'Wachstum & Wohlstand',
    text:'Eine Wirtschaft, die über mehrere Jahre nicht wächst, steckt zwangsläufig in einer Krise.',
    terms:{},
    agree:'Du glaubst, dass Wachstum strukturell notwendig ist: Ohne es können Schulden, Sozialleistungen und Investitionen nicht finanziert werden.',
    disagree:'Du glaubst, dass Stagnation kein Krisensymptom sein muss – eine Wirtschaft kann stabil sein, wenn Ressourcen fair verteilt sind und Grundbedürfnisse gesichert werden.',
    context:'Japan erlebt seit den 1990ern niedrige Wachstumsraten ohne gesellschaftlichen Kollaps. Postwachstumsökonomen wie Tim Jackson argumentieren, dass Wohlstand ohne Wachstum möglich ist.',
    simple:'Eine Wirtschaft, die mehrere Jahre nicht wächst, steckt automatisch in einer Krise.',
    axis:'economy', pol:+1 },

  { topic:'↕ Wachstum & Wohlstand', topicClass:'pill-economy', sideSub:'Wachstum & Wohlstand',
    text:'Gesellschaften können dauerhaft gut leben, wenn sie weniger produzieren und konsumieren als heute. ([[Degrowth]])',
    terms:{ 'Degrowth':'Deutsch: Postwachstum. Politische Bewegung, die eine geplante Reduktion der Wirtschaftsleistung als Antwort auf Umweltkrise und Überkonsum fordert.' },
    agree:'Du glaubst, dass weniger Konsum möglich ist, ohne Lebensqualität zu verlieren – wenn gesellschaftliche Prioritäten umgestellt werden (mehr Freizeit, weniger Statussymbole).',
    disagree:'Du siehst Degrowth als utopisch: Eine schrumpfende Wirtschaft bedeutet weniger Jobs, geringere Steuereinnahmen und Verteilungskonflikte.',
    context:'Degrowth-Ökonomen (Latouche, Kallis) argumentieren, dass ökologische Grenzen eine Wachstumsgesellschaft unmöglich machen. Kritiker: Das ist für arme Länder keine Option.',
    simple:'Wir könnten weniger kaufen und herstellen und trotzdem gut leben.',
    axis:'economy', pol:-1 },

  // ── Block 4: Ökonomie & Nachhaltigkeit ──
  { topic:'↕ Ökonomie & Nachhaltigkeit', topicClass:'pill-economy', sideSub:'Ökonomie & Nachhaltigkeit',
    text:'Technologischer Fortschritt kann [[grünes Wachstum]] ermöglichen. Wirtschaft und Umwelt schließen sich nicht aus.',
    terms:{ 'grünes Wachstum':'Wirtschaftswachstum, das gleichzeitig Ressourcenverbrauch und Emissionen senkt – durch technologische Effizienzsteigerungen. Ziel: Entkopplung von Wachstum und Umweltschäden.' },
    agree:'Du vertraust darauf, dass Innovation (erneuerbare Energien, Kreislaufwirtschaft) Wachstum und Klimaschutz vereinbar macht.',
    disagree:'Du bezweifelst, dass eine echte Entkopplung von Wachstum und Ressourcenverbrauch realisierbar ist – Rebound-Effekte fressen Effizienzgewinne oft auf.',
    context:'Die OECD und EU setzen auf Green-Growth-Ansätze. Kritische Studien (Parrique et al., 2019) zeigen, dass absolute Entkopplung bisher kaum ausreichend belegt ist.',
    simple:'Neue Technologien machen es möglich, dass die Wirtschaft wächst und die Umwelt trotzdem weniger belastet wird.',
    axis:'economy', pol:+1 },

  { topic:'↕ Ökonomie & Nachhaltigkeit', topicClass:'pill-economy', sideSub:'Ökonomie & Nachhaltigkeit',
    text:'Der [[freie Markt]] wird von selbst umweltfreundliche Lösungen entwickeln, sobald die Nachfrage groß genug ist.',
    terms:{ 'freie Markt':'Wirtschaftssystem, in dem Preise und Produktion durch Angebot und Nachfrage bestimmt werden, ohne staatliche Eingriffe. Basis der liberalen Wirtschaftstheorie.' },
    agree:'Du vertraust dem Marktmechanismus: Wenn Konsumenten Nachhaltigkeit wollen und Ressourcen knapper werden, reagieren Unternehmen mit Innovation.',
    disagree:'Du glaubst, dass Märkte versagen, wenn externe Kosten (z.B. CO₂) nicht im Preis enthalten sind – staatliche Regulierung ist deshalb unverzichtbar.',
    context:'Das Konzept der negativen Externalitäten ist in der Ökonomie anerkannt. CO₂-Bepreisung (Pigou-Steuer) gilt als Lösung – ist aber politisch umstritten.',
    simple:'Unternehmen werden von selbst umweltfreundlicher, sobald genug Kunden das verlangen. Gesetze braucht es dafür nicht.',
    axis:'economy', pol:+1 },

  { topic:'↕ Ökonomie & Nachhaltigkeit', topicClass:'pill-economy', sideSub:'Ökonomie & Nachhaltigkeit',
    text:'Wenn Umweltschutz Arbeitsplätze kostet, sollte er trotzdem Vorrang haben.',
    terms:{},
    agree:'Du priorisierst ökologische Grenzen über kurzfristige Beschäftigungsinteressen – langfristig ist Klimazerstörung wirtschaftlich ruinöser.',
    disagree:'Du glaubst, dass Umweltpolitik sozial verträglich gestaltet werden muss – Jobverluste in bestimmten Regionen sind politisch und moralisch nicht akzeptabel.',
    context:'Der „Just Transition"-Ansatz verbindet Klimapolitik mit sozialer Absicherung (z.B. Kohleausstieg mit Strukturfonds). Die Spannung zwischen Ökologie und Beschäftigung bleibt real.',
    simple:'Auch wenn Menschen ihren Job verlieren, weil eine Fabrik aus Umweltgründen schließen muss: Umweltschutz geht vor.',
    axis:'economy', pol:-1 },

  { topic:'↕ Ökonomie & Nachhaltigkeit', topicClass:'pill-economy', sideSub:'Ökonomie & Nachhaltigkeit',
    text:'Unternehmen sollten gesetzlich verpflichtet werden, ihre [[CO₂-Emissionen]] zu reduzieren, auch wenn das ihre [[Wettbewerbsfähigkeit]] verschlechtert.',
    terms:{ 'CO₂-Emissionen':'Ausstoß von Kohlendioxid, dem wichtigsten Treibhausgas. Entsteht durch Verbrennung fossiler Brennstoffe in Industrie, Verkehr und Energieversorgung.', 'Wettbewerbsfähigkeit':'Fähigkeit eines Unternehmens, im internationalen Vergleich konkurrenzfähige Produkte und Dienstleistungen anzubieten.' },
    agree:'Du bevorzugst verbindliche Klimaregeln: Freiwilligkeit reicht nicht, und die Zusatzkosten sind notwendig für eine systemische Transformation.',
    disagree:'Du befürchtest, dass strenge Auflagen Unternehmen ins Ausland treiben und dort mehr emittieren – ohne globalen Klimaeffekt (Carbon Leakage).',
    context:'Die EU hat Emissionshandel (ETS) und das Carbon Border Adjustment Mechanism (CBAM) eingeführt, um Carbon Leakage zu verhindern.',
    simple:'Unternehmen sollen per Gesetz weniger CO₂ ausstoßen müssen, auch wenn ihre Produkte dadurch teurer werden.',
    axis:'economy', pol:-1 },

  // ── Block 4b (erweitert): Ungleichheit & Verteilung ──
  { topic:'↕ Ungleichheit & Verteilung', topicClass:'pill-economy', sideSub:'Ungleichheit & Verteilung',
    text:'Eine gerechtere Verteilung des vorhandenen Reichtums ist wichtiger als immer mehr [[Wachstum]].',
    terms:{ 'Wachstum':'Steigerung der gesamten Wirtschaftsleistung (BIP), traditionell das zentrale Ziel der Wirtschaftspolitik.' },
    agree:'Du setzt auf Umverteilung statt Wachstum: Genug Wohlstand ist vorhanden, es kommt darauf an, ihn fairer zu teilen.',
    disagree:'Du glaubst, dass Wachstum den Wohlstand für alle vergrößert. Verteilung allein schafft keinen neuen Reichtum, sondern teilt nur den vorhandenen.',
    context:'Ökonomen wie Piketty zeigen, dass Vermögen ohne Gegensteuern immer ungleicher wird. Andere warnen, dass zu viel Umverteilung Leistungsanreize schwächt.',
    simple:'Den Reichtum, den es schon gibt, gerechter zu verteilen, ist wichtiger, als dass die Wirtschaft immer weiter wächst.',
    axis:'economy', pol:-1 }, // soft

  { topic:'↕ Ungleichheit & Verteilung', topicClass:'pill-economy', sideSub:'Ungleichheit & Verteilung',
    text:'Solange die Wirtschaft insgesamt wächst, ist es zweitrangig, wie groß die Einkommensunterschiede sind.',
    terms:{},
    agree:'Du hältst Wachstum für entscheidend: Wenn es allen besser geht, ist die Größe der Unterschiede nachrangig.',
    disagree:'Du glaubst, dass große Ungleichheit selbst dann schadet, wenn alle reicher werden: Sie spaltet Gesellschaften und untergräbt Chancen.',
    context:'Die „Trickle-down"-Idee besagt, Wachstum komme am Ende allen zugute. Kritiker entgegnen, dass die Gewinne der letzten Jahrzehnte stark nach oben flossen.',
    simple:'Wenn die Wirtschaft wächst und es allen besser geht, ist es egal, wie groß die Unterschiede zwischen Arm und Reich sind.',
    axis:'economy', pol:+1 },

  { topic:'↕ Ungleichheit & Verteilung', topicClass:'pill-economy', sideSub:'Ungleichheit & Verteilung',
    text:'Sehr hohe Vermögen sollten stärker besteuert werden, auch wenn das Investitionen und Wachstum etwas bremst.',
    terms:{},
    agree:'Du priorisierst Verteilungsgerechtigkeit und öffentliche Einnahmen über maximale Wachstumsanreize.',
    disagree:'Du fürchtest, dass hohe Vermögensteuern Investitionen, Unternehmertum und damit am Ende den Wohlstand aller verringern.',
    context:'Vermögensteuern sind umstritten: Befürworter verweisen auf wachsende Ungleichheit, Kritiker auf Kapitalflucht und Bewertungsprobleme. Viele Länder haben sie abgeschafft.',
    simple:'Sehr reiche Menschen sollten mehr Steuern zahlen, auch wenn dadurch etwas weniger investiert wird.',
    axis:'economy', pol:-1 },

  { topic:'↕ Ungleichheit & Verteilung', topicClass:'pill-economy', sideSub:'Ungleichheit & Verteilung',
    text:'Wer mehr leistet und Risiken eingeht, soll auch deutlich mehr verdienen. Ungleichheit ist ein Antrieb für Wohlstand.',
    terms:{},
    agree:'Du siehst Einkommensunterschiede als Leistungsanreiz: Sie belohnen Anstrengung und Risiko und treiben so Innovation und Wachstum an.',
    disagree:'Du glaubst, dass große Unterschiede weniger mit Leistung als mit Herkunft und Macht zu tun haben und Gesellschaften eher schaden als nützen.',
    context:'Die Spannung zwischen Leistungsanreiz und Gerechtigkeit ist ein Grundkonflikt der Wirtschaftspolitik. Wie viel Ungleichheit motiviert statt spaltet, ist umstritten.',
    simple:'Wer mehr leistet und mehr wagt, soll auch deutlich mehr verdienen. Das spornt alle an.',
    axis:'economy', pol:+1 },

  // ── Block 4c (erweitert): Konsum & Suffizienz ──
  { topic:'↕ Konsum & Suffizienz', topicClass:'pill-economy', sideSub:'Konsum & Suffizienz',
    text:'In reichen Ländern konsumieren wir mehr, als für ein gutes Leben nötig wäre. ([[Suffizienz]])',
    terms:{ 'Suffizienz':'Das Prinzip „genug": bewusst weniger verbrauchen und besitzen, weil mehr Konsum ab einem gewissen Punkt kaum noch zu mehr Lebensqualität führt.' },
    agree:'Du glaubst, dass mehr Konsum ab einem gewissen Wohlstand kaum noch glücklicher macht. Weniger wäre möglich, ohne wirklich zu verzichten.',
    disagree:'Du hältst Konsum für Ausdruck von Freiheit und Wohlstand. Wer anderen „zu viel" vorschreibt, bevormundet sie.',
    context:'Die „Easterlin-Paradoxie" zeigt: Ab einem gewissen Einkommen steigt die Lebenszufriedenheit kaum noch mit. Mehr Konsum bedeutet nicht automatisch mehr Glück.',
    simple:'In reichen Ländern kaufen und verbrauchen wir mehr, als wir für ein gutes Leben eigentlich bräuchten.',
    axis:'economy', pol:-1 },

  { topic:'↕ Konsum & Suffizienz', topicClass:'pill-economy', sideSub:'Konsum & Suffizienz',
    text:'Mehr Konsum bedeutet mehr Wohlstand und Lebensqualität. Verzicht macht ärmer, nicht glücklicher.',
    terms:{},
    agree:'Du siehst Konsum als Motor von Wohlstand und Fortschritt. Verzichtsappelle hältst du für rückständig und wohlstandsfeindlich.',
    disagree:'Du glaubst, dass ständig mehr Konsum weder glücklicher macht noch ökologisch tragbar ist.',
    context:'Konsum macht rund die Hälfte der Wirtschaftsleistung aus und treibt Wachstum. Ob mehr Konsum auch mehr Zufriedenheit bringt, bezweifelt die Glücksforschung.',
    simple:'Mehr zu kaufen bedeutet mehr Wohlstand und ein besseres Leben. Verzicht macht ärmer, nicht glücklicher.',
    axis:'economy', pol:+1 },

  { topic:'↕ Konsum & Suffizienz', topicClass:'pill-economy', sideSub:'Konsum & Suffizienz',
    text:'Geplante [[Obsoleszenz]] und Wegwerfkultur zeigen, dass unser Wirtschaftsmodell auf Verschwendung beruht.',
    terms:{ 'Obsoleszenz':'„Geplanter Verschleiß": der Verdacht, dass Produkte absichtlich so gebaut werden, dass sie schnell kaputtgehen oder veralten, damit man Neues kauft.' },
    agree:'Du siehst ein System, das auf ständigem Neukauf beruht: Nachhaltiges, langlebiges Wirtschaften wäre möglich, lohnt sich aber nicht genug.',
    disagree:'Du hältst geplante Obsoleszenz für überschätzt: Produkte werden günstiger und besser, kurze Lebenszyklen sind oft Folge von Innovation und Nachfrage.',
    context:'Die EU stärkt mit dem „Recht auf Reparatur" (2024) langlebige Produkte. Wie verbreitet absichtlicher Verschleiß wirklich ist, bleibt empirisch umstritten.',
    simple:'Dass viele Dinge schnell kaputtgehen und weggeworfen werden, zeigt: Unsere Wirtschaft lebt von Verschwendung.',
    axis:'economy', pol:-1 },

  { topic:'↕ Konsum & Suffizienz', topicClass:'pill-economy', sideSub:'Konsum & Suffizienz',
    text:'Der Konsumverzicht Einzelner bringt wenig. Entscheidend sind Technologie und Wachstum, nicht weniger zu kaufen.',
    terms:{},
    agree:'Du setzt auf systemische Lösungen statt individuellen Verzicht: Innovation und Effizienz lösen Umweltprobleme wirksamer als Selbstbeschränkung.',
    disagree:'Du glaubst, dass auch Lebensstil und Konsumverhalten zählen. Allein auf Technik und Wachstum zu hoffen, ist eine bequeme Ausrede.',
    context:'Ob Technik (grünes Wachstum) oder weniger Konsum (Suffizienz) der bessere Weg ist, ist ein Kernstreit der Umweltökonomie. Meist braucht es beides.',
    simple:'Wenn Einzelne weniger kaufen, ändert das wenig. Wichtig sind neue Technik und Wachstum, nicht Verzicht.',
    axis:'economy', pol:+1 },

  // ── Block 4d (erweitert): Arbeit, Zeit & Automatisierung ──
  { topic:'↕ Arbeit, Zeit & Automatisierung', topicClass:'pill-economy', sideSub:'Arbeit, Zeit & Automatisierung',
    text:'Produktivitätsgewinne sollten in kürzere Arbeitszeit fließen (z. B. [[Vier-Tage-Woche]]) statt in immer mehr Produktion.',
    terms:{ 'Vier-Tage-Woche':'Modell, bei dem die Wochenarbeitszeit auf vier Tage verkürzt wird, idealerweise bei vollem Lohn, finanziert aus höherer Produktivität.' },
    agree:'Du willst Wohlstandsgewinne in Lebenszeit statt in mehr Output verwandeln: weniger Arbeit bei gleichem Lebensstandard.',
    disagree:'Du hältst kürzere Arbeitszeit für ein Wohlstandsrisiko: Sie verteuert Arbeit, schwächt die Wirtschaft und ist angesichts des Fachkräftemangels unrealistisch.',
    context:'Pilotprojekte (unter anderem in Island und Großbritannien) zeigen oft stabile Produktivität bei höherer Zufriedenheit. Die Übertragbarkeit auf ganze Volkswirtschaften ist offen.',
    simple:'Wenn wir produktiver werden, sollten wir weniger arbeiten (zum Beispiel vier Tage pro Woche) statt immer mehr zu produzieren.',
    axis:'economy', pol:-1 },

  { topic:'↕ Arbeit, Zeit & Automatisierung', topicClass:'pill-economy', sideSub:'Arbeit, Zeit & Automatisierung',
    text:'Eine kürzere Arbeitszeit bei vollem Lohn würde Wohlstand und [[Wettbewerbsfähigkeit]] gefährden.',
    terms:{ 'Wettbewerbsfähigkeit':'Die Fähigkeit einer Wirtschaft, im internationalen Vergleich mitzuhalten, etwa über Preise, Qualität und Produktivität.' },
    agree:'Du glaubst, dass weniger Arbeit bei gleichem Lohn die Kosten erhöht, die Produktion senkt und im internationalen Wettbewerb zurückwirft.',
    disagree:'Du glaubst, dass ausgeruhte, motivierte Beschäftigte das ausgleichen. Kürzere Arbeitszeit muss Wohlstand nicht kosten.',
    context:'Gegner verweisen auf Fachkräftemangel und Lohnkosten, Befürworter auf Produktivitäts- und Gesundheitsgewinne. Die Bilanz hängt stark von der Branche ab.',
    simple:'Weniger zu arbeiten bei gleichem Lohn würde unseren Wohlstand und die Stärke der Wirtschaft gefährden.',
    axis:'economy', pol:+1 },

  { topic:'↕ Arbeit, Zeit & Automatisierung', topicClass:'pill-economy', sideSub:'Arbeit, Zeit & Automatisierung',
    text:'Automatisierung und [[KI]] schaffen langfristig mehr Wohlstand und neue Arbeitsplätze, auch wenn alte wegfallen.',
    terms:{ 'KI':'Künstliche Intelligenz: Computersysteme, die Aufgaben übernehmen, die bisher menschliches Denken erforderten, etwa Texte schreiben oder Bilder auswerten.' },
    agree:'Du vertraust dem historischen Muster: Technischer Fortschritt vernichtet Jobs, schafft aber unterm Strich neue und steigert den Wohlstand.',
    disagree:'Du fürchtest, dass KI diesmal anders ist: Sie könnte schneller mehr Tätigkeiten ersetzen, als neue entstehen, und die Ungleichheit verschärfen.',
    context:'Bisher schuf Automatisierung netto Beschäftigung. Ob KI als „diesmal anders"-Technologie diesem Muster folgt, ist eine der großen offenen Fragen.',
    simple:'Maschinen und KI schaffen am Ende mehr Wohlstand und neue Jobs, auch wenn alte verschwinden.',
    axis:'economy', pol:+1 },

  { topic:'↕ Arbeit, Zeit & Automatisierung', topicClass:'pill-economy', sideSub:'Arbeit, Zeit & Automatisierung',
    text:'Ständiges Wachstum zwingt Menschen in immer mehr Arbeit und Stress, ohne dass ihr Leben wirklich besser wird.',
    terms:{},
    agree:'Du siehst einen „Hamsterrad"-Effekt: Mehr Produktion verlangt mehr Arbeit und Tempo, während die Lebensqualität stagniert.',
    disagree:'Du glaubst, dass Wachstum gerade Entlastung bringt: Mehr Wohlstand ermöglicht bessere Arbeitsbedingungen, Gesundheit und Freizeit.',
    context:'Wachstum hat die Arbeitszeit historisch stark gesenkt. Kritiker entgegnen, dass Leistungsdruck und psychische Belastung zuletzt wieder zugenommen haben.',
    simple:'Immer mehr Wachstum bedeutet immer mehr Arbeit und Stress, ohne dass das Leben wirklich besser wird.',
    axis:'economy', pol:-1 },

  // ── Block 5: Fairer Handel ──
  { topic:'◈ Fairer Handel', topicClass:'pill-governance', sideSub:'Fairer Handel',
    text:'[[Handelsabkommen]] zwischen reichen und armen Ländern nützen am Ende vor allem den reichen Ländern. ([[asymmetrische Handelspartnerschaft]])',
    terms:{ 'Handelsabkommen':'Vertrag zwischen zwei oder mehr Ländern, der ihren Handel regelt – z.B. Zölle senkt, Märkte öffnet oder gemeinsame Standards festlegt. Beispiele: CETA (EU–Kanada), USMCA (USA–Mexiko–Kanada).', 'asymmetrische Handelspartnerschaft':'Handelsverhältnis zwischen Ländern mit stark unterschiedlicher Wirtschaftskraft. Der stärkere Partner kann Bedingungen diktieren, die seinen eigenen Interessen dienen.' },
    agree:'Du siehst globale Handelsregeln als von Industrienationen gestaltetes System, das ihre Macht festigt und Entwicklungsländer strukturell benachteiligt.',
    disagree:'Du glaubst, dass Handelsabkommen auch armen Ländern Marktzugang und Investitionen bringen – und von diesen freiwillig ausgehandelt werden.',
    context:'Kritiker wie Ha-Joon Chang zeigen, dass reiche Länder armen die Mittel verweigern, mit denen sie selbst reich wurden: Industriepolitik, Schutzzölle, staatliche Förderung.',
    simple:'Wenn ein reiches und ein armes Land einen Handelsvertrag schließen, profitiert am Ende vor allem das reiche Land.',
    axis:'governance', pol:-1 }, // soft

  { topic:'◈ Fairer Handel', topicClass:'pill-governance', sideSub:'Fairer Handel',
    text:'[[Entwicklungsländer]] sollten ihre Industrien schützen dürfen, auch wenn das gegen internationale Handelsregeln verstößt.',
    terms:{ 'Entwicklungsländer':'Länder mit vergleichsweise niedrigem Einkommen und wenig entwickelter Industrie, auch „Globaler Süden" genannt. Gegenstück zu den reichen Industrienationen.' },
    agree:'Du priorisierst wirtschaftliche Entwicklungsrechte über internationale Regeltreue. Arme Länder sollen die Instrumente nutzen dürfen, die reiche Länder historisch auch nutzten.',
    disagree:'Du glaubst, dass einheitliche Regeln wichtig sind – Ausnahmen untergraben das internationale Handelssystem und schaffen neue Ungleichheiten.',
    context:'Die WTO erlaubt „Special and Differential Treatment" für Entwicklungsländer – in der Praxis sind diese Ausnahmen aber begrenzt und oft umstritten.',
    simple:'Ärmere Länder sollen im internationalen Handel Sonderrechte bekommen, damit sie sich besser entwickeln können.',
    axis:'governance', pol:-1 },

  { topic:'◈ Fairer Handel', topicClass:'pill-governance', sideSub:'Fairer Handel',
    text:'Reiche Länder, die ihren [[Agrarsektor]] [[subventionieren]], betreiben damit [[Protektionismus]] auf Kosten der Entwicklungsländer.',
    terms:{ 'Agrarsektor':'Der Teil der Wirtschaft, der Lebensmittel und andere landwirtschaftliche Produkte erzeugt – Ackerbau, Viehzucht, teils auch Fischerei.', 'subventionieren':'Staatliche finanzielle Unterstützung für Unternehmen oder Sektoren. Agrarsubventionen senken Produktionskosten und ermöglichen günstigere Exportpreise.', 'Protektionismus':'Wirtschaftspolitik, die heimische Industrien durch Zölle, Quoten und andere Maßnahmen vor ausländischer Konkurrenz schützt.' },
    agree:'Du siehst eine strukturelle Ungleichheit: Reiche Länder schützen ihre Landwirtschaft massiv, während sie Entwicklungsländern offene Märkte abverlangen.',
    disagree:'Du siehst Agrarsubventionen als interne Entscheidung souveräner Staaten, die Ernährungssicherheit und ländliche Strukturen stützen.',
    context:'Die EU-Agrarpolitik schüttet jährlich ~50 Mrd. € aus. Afrikanische Bauern können mit den künstlich verbilligten Importen kaum konkurrieren.',
    simple:'Europa und die USA zahlen ihren Bauern Milliarden. Das macht Bauern in armen Ländern die Konkurrenz unfair schwer.',
    axis:'governance', pol:+1 }, // soft

  { topic:'◈ Fairer Handel', topicClass:'pill-governance', sideSub:'Fairer Handel',
    text:'Internationale Handelspartnerschaft kann nur funktionieren, wenn es verbindliche Fairness- und [[Sozialstandards]] gibt.',
    terms:{ 'Sozialstandards':'Verbindliche Mindestregeln für Arbeitsbedingungen – z.B. Verbot von Kinderarbeit, Arbeitsschutz, Mindestlöhne und das Recht, Gewerkschaften zu gründen.' },
    agree:'Du glaubst, dass Freihandel ohne Mindeststandards (Umwelt, Arbeit) zu einem „Race to the Bottom" führt – Länder erkaufen sich Vorteile durch Deregulierung.',
    disagree:'Du siehst Sozialstandards in Handelsabkommen als verdeckten Protektionismus: Reiche Länder schützen damit ihre teurere Produktion vor günstigerer Konkurrenz.',
    context:'„Race to the Bottom": Theorie, dass Länder Umwelt- und Sozialstandards senken, um Investoren anzuziehen. Empirisch für bestimmte Sektoren belegt, aber nicht universell.',
    simple:'Wenn Länder miteinander handeln, soll es gemeinsame Regeln geben, wie Arbeitnehmer behandelt werden müssen.',
    axis:'governance', pol:+1 },

  // ── Block 6: WTO & globale Ordnung ──
  { topic:'◈ WTO & globale Ordnung', topicClass:'pill-governance', sideSub:'Welthandelsorganisation (WTO)',
    text:'Die [[Welthandelsorganisation (WTO)]] ist ein unverzichtbares Instrument, um den globalen Handel regelbasiert zu gestalten.',
    terms:{ 'Welthandelsorganisation (WTO)':'Gegründet 1995, heute 166 Mitgliedsstaaten. Überwacht internationale Handelsabkommen, löst Streitigkeiten und verhandelt neue Regeln. Vorgänger war das GATT.' },
    agree:'Du glaubst, dass regelbasierter multilateraler Handel einer Welt des „Recht des Stärkeren" überlegen ist – die WTO schützt auch kleine Länder.',
    disagree:'Du hältst die WTO für ineffektiv, undemokratisch oder zu stark von Industrieinteressen dominiert, um eine faire globale Ordnung zu schaffen.',
    context:'Die WTO hat seit ihrer Gründung keinen neuen großen multilateralen Deal abgeschlossen (Doha-Runde gescheitert). Das Streitbeilegungssystem ist durch US-Blockade seit 2019 lahmgelegt.',
    simple:'Die Welt braucht die WTO, damit Länder nach festen Regeln fair miteinander handeln.',
    axis:'governance', pol:+1 },

  { topic:'◈ WTO & globale Ordnung', topicClass:'pill-governance', sideSub:'Welthandelsorganisation (WTO)',
    text:'Die WTO bevorzugt in ihrer Struktur die Interessen der reichen [[Industrienationen]].',
    terms:{ 'Industrienationen':'Länder mit hoch entwickelter Wirtschaft und hohem Pro-Kopf-Einkommen, auch „Globaler Norden" genannt – im Gegensatz zu Entwicklungsländern.' },
    agree:'Du siehst die WTO als von Industrieländern gestaltetes System, das deren Exportinteressen (z.B. Schutz von Patenten, Öffnung fremder Märkte) bevorzugt.',
    disagree:'Du glaubst, dass die WTO durch das Konsensprinzip Entwicklungsländern theoretisch gleiche Stimme gibt – und ihnen Marktzugang verschafft.',
    context:'TRIPS (Patentschutzregeln in der WTO) wurde von Pharmafirmen aus Industrieländern gepusht und schränkt Entwicklungsländer bei der Produktion günstiger Generika ein.',
    simple:'Bei der WTO haben reiche Länder mehr Einfluss auf die Regeln, obwohl offiziell alle Mitglieder gleich sind.',
    axis:'governance', pol:-1 }, // soft

  { topic:'◈ WTO & globale Ordnung', topicClass:'pill-governance', sideSub:'Welthandelsorganisation (WTO)',
    text:'Internationale Organisationen wie die WTO schränken die [[nationale Souveränität]] zu stark ein.',
    terms:{ 'nationale Souveränität':'Das Recht eines Staates, ohne äußere Einmischung selbst über seine Gesetze, Politik und Wirtschaft zu entscheiden.' },
    agree:'Du priorisierst nationale Entscheidungsfreiheit: Demokratisch gewählte Regierungen sollen Handelspolitik selbst bestimmen, ohne internationale Auflagen.',
    disagree:'Du glaubst, dass freiwillig eingegangene internationale Regeln notwendige Einschränkungen sind, um globale Kooperationsgewinne zu sichern.',
    context:'Länder treten der WTO freiwillig bei und akzeptieren damit Regeln. Kritiker sehen darin Demokratieverlust; Befürworter sehen es als rationale Kooperation.',
    simple:'Die Regeln von Organisationen wie der WTO schränken Länder zu stark darin ein, selbst zu entscheiden.',
    axis:'governance', pol:-1 },

  { topic:'◈ WTO & globale Ordnung', topicClass:'pill-governance', sideSub:'Welthandelsorganisation (WTO)',
    text:'Wenn Länder gegen WTO-Regeln verstoßen, sollten automatisch [[Sanktionen]] folgen, ohne Ausnahmen für mächtige Staaten.',
    terms:{ 'Sanktionen':'Strafmaßnahmen gegen Länder, die gegen vereinbarte Regeln verstoßen. Im Handelskontext meist Gegenmaßnahmen oder Strafzölle, die von der WTO autorisiert werden.' },
    agree:'Du willst konsequentes gleiches Recht für alle – auch für die USA oder China. Ohne Durchsetzung sind Regeln bedeutungslos.',
    disagree:'Du glaubst, dass automatische Sanktionen zu starr sind und geopolitische Realitäten ignorieren – Diplomatie und Ermessen sind notwendig.',
    context:'Das WTO-Streitbeilegungssystem ist das einzige bindende internationale Handelsgericht. Es scheitert aber an der Durchsetzung gegen Großmächte.',
    simple:'Ein Land, das WTO-Regeln bricht, soll automatisch bestraft werden, auch wenn es so mächtig ist wie die USA.',
    axis:'governance', pol:+1 },

  // ── Block 6b (erweitert): Konzernmacht & Regulierung ──
  { topic:'◈ Konzernmacht & Regulierung', topicClass:'pill-governance', sideSub:'Konzernmacht & Regulierung',
    text:'[[Multinationale Konzerne]] lassen sich nur durch internationale Regeln wirksam kontrollieren. Einzelne Staaten sind dafür zu schwach.',
    terms:{ 'Multinationale Konzerne':'Großunternehmen, die in vielen Ländern tätig sind (z. B. Apple, Amazon, Nestlé), oft mit Umsätzen größer als die Wirtschaft ganzer Staaten.' },
    agree:'Du glaubst, dass nur grenzüberschreitende Regeln global agierende Konzerne einhegen können. Nationale Alleingänge laufen ins Leere.',
    disagree:'Du vertraust auf nationale Gesetze und Wettbewerb. Internationale Regelwerke sind langsam, bürokratisch und schwer demokratisch zu kontrollieren.',
    context:'Konzerne verschieben Gewinne dorthin, wo Steuern niedrig sind. Erst die international vereinbarte Mindeststeuer (2024) versuchte, dem gemeinsam zu begegnen.',
    simple:'Große weltweit tätige Konzerne kann man nur mit internationalen Regeln kontrollieren. Einzelne Länder sind dafür zu schwach.',
    axis:'governance', pol:+1 }, // soft

  { topic:'◈ Konzernmacht & Regulierung', topicClass:'pill-governance', sideSub:'Konzernmacht & Regulierung',
    text:'[[Schiedsgerichte]] (ISDS), vor denen Konzerne Staaten verklagen können, schränken die demokratische Souveränität unzulässig ein.',
    terms:{ 'Schiedsgerichte':'ISDS, Investor-Staat-Schiedsverfahren: in Handelsabkommen vereinbarte private Gerichte, vor denen ausländische Investoren Staaten auf Schadenersatz verklagen können, etwa wegen neuer Gesetze.' },
    agree:'Du siehst darin eine Aushöhlung der Demokratie: Konzerne können gewählte Regierungen für Gesetze, etwa zum Umweltschutz, verklagen, am normalen Rechtsweg vorbei.',
    disagree:'Du hältst Investitionsschutz für legitim: Er gibt Unternehmen Rechtssicherheit gegen willkürliche Enteignung und fördert so Investitionen.',
    context:'ISDS war ein Hauptkritikpunkt an TTIP und CETA. Kritiker fürchten den „regulatory chill": dass Staaten aus Angst vor Klagen auf Gesetze verzichten.',
    simple:'Private Gerichte, vor denen Konzerne Staaten wegen neuer Gesetze verklagen können, schränken die Demokratie zu stark ein.',
    axis:'governance', pol:-1 },

  { topic:'◈ Konzernmacht & Regulierung', topicClass:'pill-governance', sideSub:'Konzernmacht & Regulierung',
    text:'Eine globale [[Mindeststeuer]] für Konzerne ist nötig, weil der Steuerwettbewerb zwischen Ländern am Ende allen schadet.',
    terms:{ 'Mindeststeuer':'2021 von rund 140 Staaten vereinbart: Große Konzerne sollen weltweit mindestens 15 % Steuern zahlen, egal wohin sie ihre Gewinne verschieben.' },
    agree:'Du willst den Unterbietungswettlauf bei Steuern beenden: Nur gemeinsame Mindestregeln verhindern, dass Konzerne Staaten gegeneinander ausspielen.',
    disagree:'Du verteidigst Steuerwettbewerb als Disziplin für Staaten und siehst in globalen Steuerregeln einen Eingriff in nationale Souveränität.',
    context:'Die globale Mindeststeuer von 15 % gilt seit 2024 in der EU. Sie ist einer der größten Erfolge internationaler Steuerkooperation und zugleich schwer durchzusetzen.',
    simple:'Konzerne sollten weltweit eine Mindeststeuer zahlen, damit Länder sich nicht mit immer niedrigeren Steuern gegenseitig unterbieten.',
    axis:'governance', pol:+1 },

  { topic:'◈ Konzernmacht & Regulierung', topicClass:'pill-governance', sideSub:'Konzernmacht & Regulierung',
    text:'Jedes Land sollte selbst entscheiden, wie es Konzerne besteuert und reguliert, ohne internationale Vorgaben.',
    terms:{},
    agree:'Du priorisierst nationale Selbstbestimmung: Steuer- und Wirtschaftspolitik gehört in die Hand gewählter nationaler Regierungen, nicht internationaler Gremien.',
    disagree:'Du glaubst, dass nationale Alleingänge global agierenden Konzernen nicht gewachsen sind und nur gemeinsame Regeln wirken.',
    context:'Steuerhoheit gilt als Kern nationaler Souveränität. Genau deshalb war die internationale Mindeststeuer so schwer zu verhandeln.',
    simple:'Jedes Land soll selbst bestimmen, wie es Konzerne besteuert und reguliert, ohne Vorschriften von außen.',
    axis:'governance', pol:-1 },

  // ── Block 6c (erweitert): Klima-Governance global ──
  { topic:'◈ Klima-Governance global', topicClass:'pill-governance', sideSub:'Globale Klimapolitik',
    text:'Den Klimawandel lösen nur verbindliche internationale Abkommen, denen sich alle Länder unterordnen müssen.',
    terms:{},
    agree:'Du siehst Klima als globales Problem, das nur durch bindende, gemeinsam durchgesetzte Regeln zu lösen ist. Freiwilligkeit reicht nicht.',
    disagree:'Du bezweifelst, dass globale Abkommen funktionieren, oder lehnst es ab, nationale Entscheidungen internationalen Gremien zu unterwerfen.',
    context:'Das Pariser Abkommen (2015) setzt auf freiwillige nationale Ziele statt bindender Vorgaben. Das gilt manchen als Stärke, anderen als entscheidende Schwäche.',
    simple:'Den Klimawandel kann man nur mit festen internationalen Verträgen lösen, an die sich alle Länder halten müssen.',
    axis:'governance', pol:+1 },

  { topic:'◈ Klima-Governance global', topicClass:'pill-governance', sideSub:'Globale Klimapolitik',
    text:'Kein Land sollte sich beim Klimaschutz internationalen Vorgaben unterwerfen, die seiner eigenen Wirtschaft schaden.',
    terms:{},
    agree:'Du stellst nationale Interessen voran: Klimaziele dürfen nicht von außen aufgezwungen werden, wenn sie der heimischen Wirtschaft schaden.',
    disagree:'Du glaubst, dass nationale Wirtschaftsinteressen hinter dem gemeinsamen Klimaschutz zurückstehen müssen, weil sonst niemand handelt.',
    context:'Der Konflikt zwischen nationalem Eigeninteresse und globalem Gemeingut ist der Kern jeder Klimaverhandlung, das „Trittbrettfahrer"-Problem.',
    simple:'Kein Land sollte sich beim Klimaschutz Regeln von außen aufzwingen lassen, die seiner Wirtschaft schaden.',
    axis:'governance', pol:-1 },

  { topic:'◈ Klima-Governance global', topicClass:'pill-governance', sideSub:'Globale Klimapolitik',
    text:'Ein [[CO₂-Grenzausgleich]] (CBAM) ist legitim, um globale Klimastandards durchzusetzen, auch gegen den Willen anderer Staaten.',
    terms:{ 'CO₂-Grenzausgleich':'CBAM: eine EU-Abgabe auf importierte Waren (z. B. Stahl, Zement) nach ihrem CO₂-Ausstoß. Sie soll verhindern, dass Produktion in Länder mit laxem Klimaschutz abwandert.' },
    agree:'Du findest es legitim, Klimastandards über die Grenze hinaus durchzusetzen: Wer schmutzig produziert, soll auch beim Import dafür zahlen.',
    disagree:'Du siehst darin verdeckten Protektionismus und einen Eingriff in fremde Souveränität: Reiche Länder zwingen anderen ihre Standards auf.',
    context:'Der EU-CBAM läuft seit 2023 an. Schwellenländer kritisieren ihn als „grünen Protektionismus", die EU verteidigt ihn als Schutz vor Carbon Leakage.',
    simple:'Die EU darf auf schmutzig produzierte Importe eine CO₂-Abgabe erheben, um Klimastandards durchzusetzen, auch wenn andere Länder dagegen sind.',
    axis:'governance', pol:+1 },

  { topic:'◈ Klima-Governance global', topicClass:'pill-governance', sideSub:'Globale Klimapolitik',
    text:'Klimapolitik ist Sache der Nationalstaaten. Internationale Klimabürokratie bringt wenig.',
    terms:{},
    agree:'Du traust nationalen Regierungen mehr zu als internationalen Gremien: Vor Ort entschieden, wirkt Klimapolitik schneller und demokratischer.',
    disagree:'Du glaubst, dass nationale Alleingänge ein globales Problem nicht lösen und Klimaschutz ohne internationale Koordination scheitert.',
    context:'Klima ist ein globales Gemeingut: Emissionen kennen keine Grenzen. Deshalb gilt internationale Koordination vielen als unverzichtbar, trotz ihrer Schwerfälligkeit.',
    simple:'Klimaschutz sollten die einzelnen Länder selbst regeln. Internationale Behörden bringen wenig.',
    axis:'governance', pol:-1 },

  // ── Block 6d (erweitert): Globale Finanzordnung (IWF & Weltbank) ──
  { topic:'◈ Globale Finanzordnung', topicClass:'pill-governance', sideSub:'IWF & Weltbank',
    text:'Institutionen wie der [[IWF]] und die [[Weltbank]] sind notwendig, um Finanzkrisen und Staatspleiten zu bewältigen.',
    terms:{ 'IWF':'Internationaler Währungsfonds: vergibt Notkredite an Staaten in Finanznot, meist gegen Auflagen zu Sparpolitik und Reformen.', 'Weltbank':'Internationale Organisation, die ärmeren Ländern langfristige Kredite und Hilfe für Entwicklungsprojekte gibt, etwa für Infrastruktur, Bildung und Gesundheit.' },
    agree:'Du siehst diese Institutionen als globales Sicherheitsnetz: Ohne sie würden Staatspleiten ganze Weltregionen destabilisieren.',
    disagree:'Du hältst sie für undemokratisch oder schädlich: Ihre Hilfe komme mit Auflagen, die ärmere Länder oft tiefer in Probleme treiben.',
    context:'IWF und Weltbank, 1944 gegründet, sind zentrale Akteure der Weltwirtschaft. Ihre Stimmrechte sind nach Wirtschaftskraft verteilt, die USA haben faktisch ein Vetorecht.',
    simple:'Organisationen wie der Währungsfonds und die Weltbank werden gebraucht, um Länder in Finanznot vor der Pleite zu retten.',
    axis:'governance', pol:+1 },

  { topic:'◈ Globale Finanzordnung', topicClass:'pill-governance', sideSub:'IWF & Weltbank',
    text:'Die [[Auflagen]] von IWF und Weltbank zwingen armen Ländern eine Politik auf, die ihnen mehr schadet als nützt.',
    terms:{ 'Auflagen':'Bedingungen für Kredite, oft Sparmaßnahmen, Privatisierungen und Marktöffnung, auch „Strukturanpassungsprogramme" genannt.' },
    agree:'Du siehst die Auflagen als Bevormundung: Erzwungenes Sparen und Privatisieren hat in vielen Ländern Armut und Abhängigkeit verschärft.',
    disagree:'Du hältst Auflagen für nötig: Kredite ohne Reformbedingungen würden verschwendet, und Geberländer brauchen Sicherheiten.',
    context:'Die „Strukturanpassungsprogramme" der 1980er und 1990er Jahre gelten heute vielfach als gescheitert: Kürzungen bei Gesundheit und Bildung trafen die Ärmsten am härtesten.',
    simple:'Die Bedingungen, die Währungsfonds und Weltbank für ihre Kredite stellen, schaden armen Ländern oft mehr, als sie nützen.',
    axis:'governance', pol:-1 },

  { topic:'◈ Globale Finanzordnung', topicClass:'pill-governance', sideSub:'IWF & Weltbank',
    text:'Reiche Länder sollten ärmeren Ländern [[Schulden erlassen]] und mehr Entwicklungshilfe geben, als gemeinsame globale Verantwortung.',
    terms:{ 'Schulden erlassen':'Der teilweise oder vollständige Verzicht von Gläubigern auf Rückzahlung, um überschuldete Länder vor dem Kollaps zu bewahren.' },
    agree:'Du siehst globale Solidarität als Pflicht: Wohlhabende Länder tragen Mitverantwortung und sollten überschuldeten Ländern aktiv helfen.',
    disagree:'Du hältst Schuldenerlass für riskant: Er belohnt schlechte Politik, schafft falsche Anreize und entlässt Regierungen aus der Verantwortung.',
    context:'Die Entschuldungsinitiative für arme Länder (HIPC) ab 1996 erließ Milliarden. Heute wächst die Schuldenlast vieler Länder erneut, auch gegenüber China als großem Gläubiger.',
    simple:'Reiche Länder sollten armen Ländern Schulden erlassen und mehr helfen, als gemeinsame Verantwortung.',
    axis:'governance', pol:+1 },

  { topic:'◈ Globale Finanzordnung', topicClass:'pill-governance', sideSub:'IWF & Weltbank',
    text:'Jedes Land ist für seine eigene Wirtschaft selbst verantwortlich. Internationale Umverteilung über solche Institutionen lehne ich ab.',
    terms:{},
    agree:'Du betonst die Eigenverantwortung der Staaten: Internationale Hilfe und Umverteilung schaffen Abhängigkeit statt nachhaltiger Entwicklung.',
    disagree:'Du glaubst an globale Verantwortung: Historische Ungleichheit und gemeinsame Krisen verlangen internationale Solidarität.',
    context:'Der Streit um Eigenverantwortung gegen globale Gerechtigkeit prägt die Entwicklungspolitik, auch in der Debatte um Klima-Entschädigungen für arme Länder.',
    simple:'Jedes Land ist für seine eigene Wirtschaft selbst verantwortlich. Internationale Umverteilung lehne ich ab.',
    axis:'governance', pol:-1 }
];

// ══════════════════════════════════════════
//  SCHNELLSTART-SET — die sechs ursprünglichen Themenblöcke (24 Fragen).
//  Markiert per Topic-Zugehörigkeit als q.core, damit der Schnellstart-Modus
//  robust gegen Reihenfolge- und Anzahländerungen bleibt.
// ══════════════════════════════════════════
(function () {
  const QUICK = new Set([
    '⇄ Freihandel & Wohlstand',
    '⇄ US-Protektionismus',
    '↕ Wachstum & Wohlstand',
    '↕ Ökonomie & Nachhaltigkeit',
    '◈ Fairer Handel',
    '◈ WTO & globale Ordnung'
  ]);
  window.QUESTIONS.forEach(q => { q.core = QUICK.has(q.topic); });
})();

// ══════════════════════════════════════════
//  LERN-CHECKPOINTS — einer pro Themenblock.
//  Schlüssel ist der topic-String der Fragen; die Blockgrenzen werden zur
//  Laufzeit aus den Topic-Wechseln in QUESTIONS abgeleitet.
// ══════════════════════════════════════════
window.CHECKPOINTS = [
  { topic:'⇄ Freihandel & Wohlstand', topicClass:'pill-trade',
    title:'Freihandel & Wohlstand',
    recap:'Du hast gerade bewertet, ob offener Handel Wohlstand für alle schafft. Die Theorie dahinter stammt von David Ricardo (1817): Wenn sich jedes Land auf das spezialisiert, was es vergleichsweise am besten kann, profitieren im Modell beide Seiten. Das ist der „komparative Vorteil".',
    fact:'Der „China-Schock": Durch die Importkonkurrenz aus China gingen in den USA zwischen 1999 und 2011 rund 1 Million Industriearbeitsplätze verloren.',
    source:'Autor, Dorn & Hanson 2013',
    merke:'Handel macht Volkswirtschaften im Durchschnitt reicher, aber nicht jeden Einzelnen: Die Gewinne sind breit verteilt, die Verluste konzentriert.' },

  { topic:'⇄ US-Protektionismus', topicClass:'pill-trade',
    title:'US-Protektionismus',
    recap:'In diesem Block ging es um Strafzölle als politisches Werkzeug. Die USA belegen seit 2018 chinesische Waren mit hohen Zöllen; China und die EU antworteten mit Gegenzöllen auf amerikanische Produkte.',
    fact:'Studien zeigen: Die Kosten der US-Zölle von 2018/19 trugen fast vollständig die amerikanischen Importeure und Verbraucher, nicht China.',
    source:'Amiti, Redding & Weinstein 2019',
    merke:'Zölle treffen oft das eigene Land: Importe werden teurer, und Gegenzölle schaden den eigenen Exporteuren.' },

  { topic:'↕ Wachstum & Wohlstand', topicClass:'pill-economy',
    title:'Wachstum & Wohlstand',
    recap:'Hier ging es darum, ob Wohlstand dauerhaftes Wachstum braucht. Das BIP misst die Wirtschaftsleistung eines Landes, aber nicht, wie Einkommen verteilt sind, wie gesund die Menschen sind oder was die Umwelt kostet.',
    fact:'Japans Wirtschaft wächst seit den 1990er-Jahren kaum noch. Trotzdem gehört das Land bei Lebenserwartung und Sicherheit zur Weltspitze.',
    source:'Weltbank; Tim Jackson, „Prosperity without Growth" 2009',
    merke:'Wachstum und Lebensqualität hängen zusammen, sind aber nicht dasselbe. Deshalb gibt es Alternativen zum BIP wie den Human Development Index.' },

  { topic:'↕ Ökonomie & Nachhaltigkeit', topicClass:'pill-economy',
    title:'Ökonomie & Nachhaltigkeit',
    recap:'Du hast bewertet, ob Markt oder Staat die Umwelt besser schützt. Der Kern des Problems: Umweltschäden wie CO₂ kosten den Verursacher nichts, solange sie keinen Preis haben. Ökonomen nennen das „externe Kosten".',
    fact:'Eine Auswertung von über 800 Studien fand bisher keinen Beleg, dass eine wachsende Wirtschaft ihren Ressourcenverbrauch schnell genug senken kann (absolute Entkopplung).',
    source:'Parrique et al. 2019, European Environmental Bureau',
    merke:'Ob „grünes Wachstum" wirklich funktioniert, ist eine der wichtigsten offenen Fragen der Wirtschaftspolitik.' },

  { topic:'◈ Fairer Handel', topicClass:'pill-governance',
    title:'Fairer Handel',
    recap:'In diesem Block ging es um die Machtfrage im Welthandel: Gelten für arme Länder dieselben Regeln wie für reiche, und wären gleiche Regeln überhaupt fair? Viele heutige Industrieländer wurden selbst mit Schutzzöllen groß, verlangen von armen Ländern aber offene Märkte.',
    fact:'Die EU unterstützt ihre Landwirtschaft mit rund 50 Milliarden Euro pro Jahr. Bauern in Entwicklungsländern konkurrieren mit diesen subventionierten Produkten, oft auf ihren eigenen Märkten.',
    source:'EU-Agrarpolitik (GAP), Europäische Kommission',
    merke:'Der Ökonom Ha-Joon Chang nennt das „die Leiter wegtreten": Wer oben ist, verbietet anderen den Weg, über den er selbst aufgestiegen ist.' },

  { topic:'◈ WTO & globale Ordnung', topicClass:'pill-governance',
    title:'WTO & globale Ordnung',
    recap:'Zuletzt ging es um die Frage, wer die Regeln des Welthandels setzen soll: internationale Institutionen wie die WTO oder jeder Staat für sich. Die WTO (166 Mitglieder) ist das einzige Gericht, das Handelsstreits verbindlich entscheiden kann.',
    fact:'Genau dieses Schiedsgericht ist seit 2019 lahmgelegt, weil die USA die Ernennung neuer Richter blockieren.',
    source:'WTO Appellate Body, blockiert seit Dezember 2019',
    merke:'Regeln sind nur so stark wie ihre Durchsetzung. Das gilt zwischen Staaten genauso wie auf dem Schulhof.' },

  // ── Erweiterte Blöcke (nur im ausführlichen Modus sichtbar) ──
  { topic:'⇄ Lieferketten & Abhängigkeit', topicClass:'pill-trade',
    title:'Lieferketten & Abhängigkeit',
    recap:'Hier ging es um die Verletzlichkeit globaler Lieferketten. Über Jahrzehnte wurde Produktion dorthin verlagert, wo sie am günstigsten ist, „just in time" und ohne teure Reserven. Das ist effizient, aber anfällig, sobald ein Glied der Kette reißt.',
    fact:'Taiwan fertigt über 60 % aller Halbleiter weltweit und mehr als 90 % der modernsten Chips. Fällt diese Quelle aus, stockt die halbe Weltwirtschaft.',
    source:'TSMC / Branchendaten 2023',
    merke:'Effizienz und Sicherheit stehen in Spannung: Wer jede Reserve wegspart, ist im Normalbetrieb billiger, in der Krise aber erpressbar. Die heutige Antwort heißt „De-Risking": Risiken senken, ohne sich abzuschotten.' },

  { topic:'⇄ Globalisierung & Arbeitsplätze', topicClass:'pill-trade',
    title:'Globalisierung & Arbeitsplätze',
    recap:'In diesem Block ging es um Gewinner und Verlierer der Globalisierung. Offene Märkte und Verlagerung („Offshoring") senken Preise und schaffen Exportjobs, treffen aber bestimmte Regionen und Berufsgruppen hart.',
    fact:'Etwa jeder vierte Arbeitsplatz in Deutschland hängt am Export. Zugleich kostete allein der „China-Schock" die USA rund 1 Million Industriejobs.',
    source:'Statistisches Bundesamt; Autor, Dorn & Hanson 2013',
    merke:'Globalisierung vergrößert den Kuchen, verteilt Gewinne und Verluste aber ungleich. Der Streit dreht sich weniger um die Summe als darum, wer die Anpassungskosten trägt.' },

  { topic:'⇄ Handel als Druckmittel', topicClass:'pill-trade',
    title:'Handel als Druckmittel',
    recap:'Hier ging es um Geoökonomie, also Handel als Waffe. Sanktionen, Exportverbote und „Decoupling" setzen wirtschaftliche Verflechtung gezielt als politisches Mittel ein. Die Gegenthese lautet: Handel verbindet und macht Krieg teurer.',
    fact:'Nach dem Überfall auf die Ukraine 2022 verhängte der Westen über 16.000 Einzelsanktionen gegen Russland, das umfangreichste Sanktionsregime der Geschichte.',
    source:'Castellum.AI Sanktions-Tracker 2023',
    merke:'Wirtschaftliche Verflechtung schafft Frieden und Verwundbarkeit zugleich: Sie erhöht die Kosten von Konflikten, macht aber auch abhängig und erpressbar.' },

  { topic:'↕ Ungleichheit & Verteilung', topicClass:'pill-economy',
    title:'Ungleichheit & Verteilung',
    recap:'In diesem Block stand Wachstum gegen Verteilung. Soll Wohlstand vor allem wachsen oder gerechter geteilt werden? Dahinter steckt ein Grundkonflikt: Ungleichheit als Leistungsanreiz oder als Spaltung der Gesellschaft.',
    fact:'Das reichste 1 % der Weltbevölkerung besitzt mehr Vermögen als die ärmeren 95 % zusammen.',
    source:'World Inequality Report 2022',
    merke:'Wachstum und Verteilung sind kein Entweder-oder, stehen aber in Spannung: Zu wenig Umverteilung spaltet, zu viel kann Anreize schwächen. Wo die Grenze liegt, ist eine politische Wertentscheidung.' },

  { topic:'↕ Konsum & Suffizienz', topicClass:'pill-economy',
    title:'Konsum & Suffizienz',
    recap:'Hier ging es um die Frage, wie viel genug ist. Konsum treibt die Wirtschaft an, aber macht mehr davon auch glücklicher? „Suffizienz" bedeutet bewusst weniger, weil zusätzlicher Konsum ab einem Punkt kaum noch Lebensqualität bringt.',
    fact:'Würden alle Menschen so leben wie der Durchschnitt der reichen Länder, bräuchte die Menschheit mehrere Erden, um den Verbrauch zu decken.',
    source:'Global Footprint Network',
    merke:'Ab einem gewissen Wohlstand entkoppeln sich Konsum und Zufriedenheit (Easterlin-Paradoxie). Die Streitfrage bleibt: Lösen wir Umweltprobleme eher durch bessere Technik oder durch weniger Verbrauch?' },

  { topic:'↕ Arbeit, Zeit & Automatisierung', topicClass:'pill-economy',
    title:'Arbeit, Zeit & Automatisierung',
    recap:'In diesem Block ging es darum, wofür wir Produktivitätsgewinne nutzen: für mehr Output oder für mehr freie Zeit? Und ob Automatisierung und KI uns Arbeit abnehmen oder wegnehmen.',
    fact:'Seit 1970 ist die Arbeitsproduktivität in Deutschland stark gestiegen, die durchschnittliche Jahresarbeitszeit aber deutlich gesunken. Ein Teil der Gewinne floss in mehr Freizeit.',
    source:'OECD Productivity Database',
    merke:'Technischer Fortschritt hat bisher netto neue Jobs geschaffen und die Arbeitszeit gesenkt. Ob KI diesem Muster folgt oder es bricht, ist eine der großen offenen Fragen.' },

  { topic:'◈ Konzernmacht & Regulierung', topicClass:'pill-governance',
    title:'Konzernmacht & Regulierung',
    recap:'Hier ging es um die Machtfrage zwischen Konzernen und Staaten. Global agierende Unternehmen können Gewinne, Produktion und Steuern dorthin verschieben, wo es für sie am günstigsten ist. Einzelne Staaten haben dem wenig entgegenzusetzen.',
    fact:'Mit der globalen Mindeststeuer einigten sich rund 140 Staaten darauf, dass große Konzerne weltweit mindestens 15 % Steuern zahlen sollen, seit 2024 in der EU in Kraft.',
    source:'OECD/G20 Inclusive Framework 2021',
    merke:'Je mobiler Kapital ist, desto schwerer kann ein einzelnes Land es regulieren oder besteuern. Genau deshalb verlagert sich Macht zu internationalen Regeln, auf Kosten nationaler Souveränität.' },

  { topic:'◈ Klima-Governance global', topicClass:'pill-governance',
    title:'Klima-Governance global',
    recap:'In diesem Block ging es um die Frage, wer Klimaschutz durchsetzen soll. Klima ist ein globales Gemeingut: Emissionen kennen keine Grenzen, also lohnt sich Nichtstun für den Einzelnen. Das ist das „Trittbrettfahrer-Problem".',
    fact:'Das Pariser Abkommen von 2015 setzt auf freiwillige nationale Ziele. Mit den bisher zugesagten Maßnahmen steuert die Welt auf rund 2,7 °C Erwärmung zu, deutlich über dem 1,5-°C-Ziel.',
    source:'Climate Action Tracker 2023; UNFCCC',
    merke:'Globale Gemeingüter wie das Klima lassen sich national kaum schützen, international aber nur schwer verbindlich regeln. Genau in dieser Lücke steckt die Klimapolitik fest.' },

  { topic:'◈ Globale Finanzordnung', topicClass:'pill-governance',
    title:'Globale Finanzordnung',
    recap:'Zuletzt ging es um IWF und Weltbank, die globalen Finanzfeuerwehren. Sie retten Staaten vor der Pleite, knüpfen ihre Kredite aber an Auflagen wie Sparpolitik und Privatisierung. Ob das hilft oder schadet, ist seit Jahrzehnten umstritten.',
    fact:'Bei IWF und Weltbank richten sich die Stimmrechte nach Wirtschaftskraft. Die USA halten als einziges Land faktisch ein Vetorecht über grundlegende Entscheidungen.',
    source:'IWF-Quotenverteilung 2023',
    merke:'Wer zahlt, bestimmt mit: Internationale Finanzinstitutionen geben armen Ländern Rettung und Marktzugang, aber zu Bedingungen, die vor allem die reichen Geberländer prägen.' }
];

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

// Parteipositionen -100..+100. Quellen: CHES 2024 (chesdata.eu), Manifesto Project,
// Wahlprogramme Bundestagswahl 2025, Wahl-O-Mat/bpb. Fundierte Schätzung, keine Messung.
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
