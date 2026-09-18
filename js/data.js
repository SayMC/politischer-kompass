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
    agree:"Du erwartest, dass alle beteiligten Länder durch Spezialisierung und Handel gewinnen. Damit ist noch nicht gesagt, wie sich die Gewinne innerhalb eines Landes verteilen.",
    disagree:"Du bezweifelst, dass unter diesen Bedingungen alle beteiligten Länder gewinnen. Das bedeutet nicht, dass du jeden Handel ablehnst.",
    context:'Ricardos Theorie ist das wichtigste Argument für Freihandel. Studien (Autor et al., 2013) zeigen jedoch, dass der „China-Schock" ganze US-Industrieregionen deindustrialisiert hat.',
    simple:"Wenn Länder die Waren herstellen, die sie am effizientesten produzieren können, haben alle beteiligten Länder einen Vorteil vom Handel.",
    axis:'trade', pol:+1 },

  { topic:'⇄ Freihandel & Wohlstand', topicClass:'pill-trade', sideSub:'Freihandel & Wohlstand',
    text:'Die Gewinne des [[Freihandels]] kommen vor allem Großkonzernen zugute, nicht der breiten Bevölkerung.',
    terms:{ 'Freihandels':'Austausch von Waren und Dienstleistungen zwischen Ländern ohne staatliche Einschränkungen wie Zölle oder Quoten.' },
    agree:"Du siehst den größten Teil der Handelsgewinne bei Großkonzernen und nicht bei der breiten Bevölkerung. Einzelne Vorteile für Verbraucher schließt das nicht aus.",
    disagree:"Du hältst die Gewinne nicht für so einseitig verteilt: Auch die breite Bevölkerung profitiert aus deiner Sicht wesentlich. Das setzt keine gleichmäßige Verteilung voraus.",
    context:'Zwar sinken Preise für Konsumgüter, doch in bestimmten Industrien steigt die Ungleichheit. Globalisierungsgewinne werden ungleich verteilt.',
    simple:"Vom Handel ohne staatliche Beschränkungen profitieren hauptsächlich große Unternehmen, nicht die Bevölkerung insgesamt.",
    axis:'trade', pol:-1 },

  { topic:'⇄ Freihandel & Wohlstand', topicClass:'pill-trade', sideSub:'Freihandel & Wohlstand',
    text:'[[Zölle]] und [[Importquoten]] schaden langfristig auch dem Land, das sie einführt.',
    terms:{ 'Zölle':'Abgaben auf importierte Waren, die deren Preis im Inland erhöhen und so heimische Produzenten schützen sollen.', 'Importquoten':'Mengenbeschränkungen für eingeführte Waren – eine alternative Form des Handelshemmnisses.' },
    agree:"Du erwartest langfristige Nachteile auch für das Land, das diese Handelsbeschränkungen einführt. Kurzfristige Vorteile für einzelne Branchen sind damit nicht ausgeschlossen.",
    disagree:"Du bezweifelst, dass solche Handelsbeschränkungen dem eigenen Land langfristig schaden. Ob du ihren Einsatz politisch befürwortest, ist damit noch nicht entschieden.",
    context:'Ökonomen sind sich weitgehend einig, dass Protektionismus die Gesamteffizienz senkt. Politisch bleibt er attraktiv, weil seine Kosten diffus, seine Vorteile aber konzentriert sind.',
    simple:"Ein Land schadet sich auf Dauer auch selbst, wenn es Abgaben auf Waren aus dem Ausland erhebt oder ihre Einfuhrmenge begrenzt.",
    axis:'trade', pol:+1 },

  { topic:'⇄ Freihandel & Wohlstand', topicClass:'pill-trade', sideSub:'Freihandel & Wohlstand',
    text:'Ein globales Handelssystem ohne Beschränkungen schafft mehr Wohlstand als [[regionale Handelsbündnisse]].',
    terms:{ 'regionale Handelsbündnisse':'Abkommen zwischen geografisch nahen Ländern (z.B. EU, USMCA, ASEAN), die untereinander Handelshemmnisse abbauen, aber gegenüber Außenstehenden Barrieren aufrechterhalten.' },
    agree:"Du erwartest von weltweitem Handel ohne Beschränkungen mehr Wohlstand als von regionalen Handelsbündnissen. Hier geht es um den wirtschaftlichen Vergleich, nicht um die Umsetzbarkeit.",
    disagree:"Du bezweifelst, dass weltweiter Handel ohne Beschränkungen mehr Wohlstand schafft als regionale Bündnisse. Du musst deshalb regionale Abkommen nicht grundsätzlich bevorzugen.",
    context:'Regionalismus vs. Multilateralismus ist ein zentraler Streitpunkt. Die WTO fördert multilaterale Regeln, während Freihandelsabkommen wie CETA oder RCEP regional agieren.',
    simple:"Weltweiter Handel ohne Beschränkungen schafft mehr Wohlstand als Handelsabkommen innerhalb einzelner Ländergruppen.",
    axis:'trade', pol:+1 },

  // ── Block 2: US-Protektionismus ──
  { topic:'⇄ US-Protektionismus', topicClass:'pill-trade', sideSub:'US-amerikanischer Protektionismus',
    text:'Die US-amerikanischen [[Strafzölle]] auf Importe aus China schaden der Weltwirtschaft insgesamt mehr, als sie nützen.',
    terms:{ 'Strafzölle':'Besonders hohe Zölle, die gezielt als wirtschaftliche Strafmaßnahme gegen ein bestimmtes Land eingesetzt werden – oft als Reaktion auf als unfair empfundene Handelspraktiken.' },
    agree:"Du bewertest die wirtschaftlichen Folgen dieser US-Zölle weltweit insgesamt als überwiegend schädlich. Das heißt nicht, dass jede einzelne Branche verliert.",
    disagree:"Du hältst eine überwiegend schädliche Bilanz für die Weltwirtschaft nicht für überzeugend. Daraus folgt noch keine Zustimmung zu den Zöllen oder ihren politischen Zielen.",
    context:'Die USA haben seit 2018 Zölle auf chinesische Güter im Wert von Hunderten Milliarden Dollar eingeführt. Ökonomen streiten über die Nettoeffekte auf Preise, Jobs und Lieferketten.',
    simple:"Die zusätzlichen Strafabgaben der USA auf Waren aus China schaden der Weltwirtschaft insgesamt mehr, als sie ihr nützen.",
    axis:'trade', pol:+1 },

  { topic:'⇄ US-Protektionismus', topicClass:'pill-trade', sideSub:'US-amerikanischer Protektionismus',
    text:'Wer seine Industrie durch [[Zölle]] schützt, sichert damit dauerhaft Arbeitsplätze für die eigene Bevölkerung.',
    terms:{ 'Zölle':'Abgaben auf importierte Waren, die deren Preis im Inland erhöhen und so heimische Produzenten schützen sollen.' },
    agree:"Du hältst Zölle für ein Mittel, um Arbeitsplätze im eigenen Land auf Dauer zu erhalten. Entscheidend ist hier die langfristige Wirkung.",
    disagree:"Du bezweifelst, dass Zölle Arbeitsplätze dauerhaft sichern. Dass sie einzelne Stellen kurzfristig schützen können, kannst du trotzdem für möglich halten.",
    context:'Kurzfristig können Zölle bestimmte Jobs erhalten. Langfristig zeigt die Forschung oft negative Effekte: höhere Preise für Verbraucher, Vergeltungsmaßnahmen und sinkende Produktivität.',
    simple:"Wenn ein Land seine Industrie mit Abgaben auf Waren aus dem Ausland schützt, erhält es damit dauerhaft Arbeitsplätze für seine Bevölkerung.",
    axis:'trade', pol:-1 },

  { topic:'⇄ US-Protektionismus', topicClass:'pill-trade', sideSub:'US-amerikanischer Protektionismus',
    text:'Ein Land hat das Recht, [[strategisch wichtige Industrien]] zu schützen, unabhängig von internationalen Handelsregeln.',
    terms:{ 'strategisch wichtige Industrien':'Branchen, die als unverzichtbar für nationale Sicherheit oder Versorgung gelten – z.B. Rüstung, Energie, Halbleiter, Pharmazeutika.' },
    agree:"Du hältst den Schutz dieser Industrien auch dann für berechtigt, wenn er internationalen Handelsregeln widerspricht.",
    disagree:"Du lehnst ein Recht auf diesen Schutz unabhängig von internationalen Regeln ab. Schutzmaßnahmen innerhalb der Regeln kannst du trotzdem befürworten.",
    context:'Die COVID-Pandemie und der Ukraine-Krieg haben das Konzept strategischer Autonomie neu belebt. Die EU und USA investieren massiv in heimische Chipproduktion und Energieversorgung.',
    simple:"Ein Land darf Industrien schützen, die für seine Sicherheit oder Versorgung besonders wichtig sind, auch wenn internationale Handelsregeln dagegenstehen.",
    axis:'trade', pol:-1 },

  { topic:'⇄ US-Protektionismus', topicClass:'pill-trade', sideSub:'US-amerikanischer Protektionismus',
    text:'Die EU sollte auf [[US-Strafzölle]] mit eigenen [[Gegenzöllen]] antworten, statt weiter allein auf freien Handel zu setzen.',
    terms:{ 'US-Strafzölle':'Besonders hohe Zölle, die die USA als wirtschaftliche Strafmaßnahme gegen andere Länder einsetzen – seit 2018 vor allem gegen China, zeitweise auch gegen die EU (Stahl und Aluminium).', 'Gegenzöllen':'Zölle, die ein Land gezielt als Antwort auf Zölle eines anderen Landes einführt – als Druckmittel, um deren Rücknahme zu erreichen. Auch „Vergeltungszölle" genannt.' },
    agree:"Du befürwortest eigene EU-Zölle als Antwort auf US-Strafzölle. Die Aussage legt weder ihre genaue Höhe noch den Grund für deine Zustimmung fest.",
    disagree:"Du lehnst eigene Gegenzölle als die hier vorgeschlagene Antwort ab. Damit befürwortest du weder die US-Zölle noch automatisch jede Form von Freihandel.",
    context:'Die EU reagierte auf die US-Stahlzölle von 2018 mit Gegenzöllen auf symbolträchtige US-Produkte wie Motorräder, Whiskey und Jeans – gezielt auf politisch sensible Branchen. Ob Vergeltung Verhandlungen fördert oder Handelskriege verlängert, ist umstritten.',
    simple:"Wenn die USA Strafabgaben auf Waren aus der EU erheben, sollte die EU mit eigenen Abgaben auf US-Waren reagieren, statt weiter allein auf freien Handel zu setzen.",
    axis:'trade', pol:-1 },

  // ── Block 3a (erweitert): Lieferketten & Abhängigkeit ──
  { topic:'⇄ Lieferketten & Abhängigkeit', topicClass:'pill-trade', sideSub:'Globale Lieferketten',
    text:'Globale, arbeitsteilige [[Lieferketten]] machen Produkte günstiger und sind effizienter als der Aufbau heimischer Produktion.',
    terms:{ 'Lieferketten':'Das Netzwerk aus Zulieferern, Fabriken und Transportwegen, über das ein Produkt entsteht, oft über viele Länder verteilt (z. B. ein Smartphone aus Teilen von Dutzenden Zulieferern weltweit).' },
    agree:"Du erwartest von international verteilter Produktion niedrigere Produktpreise und einen effizienteren Einsatz von Mitteln als vom Aufbau heimischer Produktion.",
    disagree:"Du bezweifelst den Preis- oder Effizienzvorteil gegenüber heimischer Produktion. Risiken globaler Lieferketten oder eine bestimmte Alternative sind damit noch nicht bewertet.",
    context:'Die Just-in-time-Produktion minimiert Lagerkosten, hat aber während Corona und der Sueskanal-Blockade 2021 gezeigt, wie verletzlich eng getaktete Ketten sind.',
    simple:"Wenn verschiedene Herstellungsschritte auf mehrere Länder verteilt sind, werden Produkte günstiger und mit weniger Aufwand hergestellt als beim Aufbau der Produktion im eigenen Land.",
    axis:'trade', pol:+1 },

  { topic:'⇄ Lieferketten & Abhängigkeit', topicClass:'pill-trade', sideSub:'Globale Lieferketten',
    text:'Bei lebenswichtigen Gütern wie [[Medikamenten]] und [[Halbleitern]] sollte ein Land auf eigene Produktion setzen, auch wenn das teurer ist.',
    terms:{ 'Medikamenten':'Ein Großteil der weltweiten Wirkstoffe für Arzneimittel wird in wenigen Ländern produziert, vor allem in China und Indien.', 'Halbleitern':'Computerchips, die Grundbausteine fast aller modernen Geräte. Ihre Herstellung ist stark konzentriert: Taiwan allein fertigt über 60 % der weltweiten Chips.' },
    agree:"Du befürwortest heimische Produktion bei diesen wichtigen Waren und nimmst dafür höhere Kosten in Kauf. Einen vollständigen Verzicht auf Importe verlangt die Aussage nicht.",
    disagree:"Du lehnst diese Priorität für teurere heimische Produktion ab. Das heißt nicht, dass dir eine sichere Versorgung unwichtig ist.",
    context:'Die EU (Chips Act) und die USA (CHIPS Act) investieren Milliarden, um die Halbleiterfertigung zurückzuholen, ein Bruch mit jahrzehntelanger Auslagerung.',
    simple:"Lebenswichtige Waren wie Medikamente und Computerchips sollte ein Land selbst herstellen, auch wenn das teurer ist.",
    axis:'trade', pol:-1 },

  { topic:'⇄ Lieferketten & Abhängigkeit', topicClass:'pill-trade', sideSub:'Globale Lieferketten',
    text:'Die richtige Lehre aus Lieferkettenkrisen ist, die Bezugsquellen breiter zu streuen, statt sich abzuschotten.',
    terms:{},
    agree:"Du bevorzugst breiter verteilte Bezugsquellen als Antwort auf Lieferkrisen gegenüber einer Abschottung vom Ausland.",
    disagree:"Du hältst breiter verteilte Bezugsquellen statt Abschottung nicht für die richtige Antwort. Damit ist noch nicht gesagt, welche andere Strategie du bevorzugst.",
    context:'„China plus eins": Viele Konzerne behalten China, bauen aber zusätzlich Standorte in Vietnam, Indien oder Mexiko auf. Risikostreuung statt Heimkehr.',
    simple:"Nach Krisen bei Warenlieferungen sollte man Waren von mehr verschiedenen Anbietern beziehen, statt den Handel mit dem Ausland einzuschränken.",
    axis:'trade', pol:+1 },

  { topic:'⇄ Lieferketten & Abhängigkeit', topicClass:'pill-trade', sideSub:'Globale Lieferketten',
    text:'Die starke Abhängigkeit von einzelnen Lieferländern wie China ist ein zu großes Risiko und rechtfertigt staatliche Eingriffe in den Handel.',
    terms:{},
    agree:"Du bewertest diese Abhängigkeit als zu großes Risiko und hältst staatliche Eingriffe deshalb für gerechtfertigt. Welche Eingriffe sinnvoll wären, bleibt offen.",
    disagree:"Du teilst die Risikobewertung nicht oder hältst sie nicht für eine ausreichende Begründung staatlicher Eingriffe. Du musst Abhängigkeiten deshalb nicht für harmlos halten.",
    context:'Der Begriff „De-Risking" prägt seit 2023 die EU-Strategie gegenüber China: nicht Abkopplung, aber gezielte Reduktion kritischer Abhängigkeiten.',
    simple:"Zu stark von einzelnen Lieferländern wie China abhängig zu sein, ist zu riskant. Deshalb darf der Staat in den Handel eingreifen.",
    axis:'trade', pol:-1 },

  // ── Block 3b (erweitert): Globalisierung & Arbeitsplätze ──
  { topic:'⇄ Globalisierung & Arbeitsplätze', topicClass:'pill-trade', sideSub:'Globalisierung & Arbeitsmarkt',
    text:'Die [[Verlagerung]] von Fabriken in Niedriglohnländer hat in den Industrieländern mehr Arbeitsplätze zerstört als geschaffen.',
    terms:{ 'Verlagerung':'Auch „Offshoring": Unternehmen verlegen ihre Produktion ins Ausland, meist um niedrigere Löhne und Kosten zu nutzen.' },
    agree:"Du schätzt die Beschäftigungsbilanz dieser Verlagerungen für die Industrieländer als negativ ein: mehr verlorene als neu entstandene Stellen.",
    disagree:"Du bezweifelst diese negative Gesamtbilanz für die Industrieländer. Einzelne Regionen oder Berufsgruppen können aus deiner Sicht trotzdem Arbeitsplätze verloren haben.",
    context:'Der „China-Schock" kostete die USA rund 1 Million Industriejobs (Autor et al. 2013). Ob die Gesamtbeschäftigung sank, ist umstritten; betroffene Regionen erholten sich aber oft nicht.',
    simple:"Weil Fabriken in Länder mit niedrigen Löhnen verlegt wurden, sind in den Industrieländern insgesamt mehr Arbeitsplätze verloren gegangen als neue entstanden.",
    axis:'trade', pol:-1 },

  { topic:'⇄ Globalisierung & Arbeitsplätze', topicClass:'pill-trade', sideSub:'Globalisierung & Arbeitsmarkt',
    text:'Globalisierung schafft unterm Strich mehr und bessere Arbeitsplätze, als sie vernichtet.',
    terms:{},
    agree:"Du siehst insgesamt einen Gewinn bei der Zahl und Qualität der Arbeitsplätze durch Globalisierung. Verluste in einzelnen Regionen schließt das nicht aus.",
    disagree:"Du bezweifelst, dass insgesamt mehr Arbeitsplätze entstehen oder dass die neuen Stellen besser sind. Deine Ablehnung kann sich auf einen dieser beiden Punkte beziehen.",
    context:'Exportstarke Länder wie Deutschland verdanken Millionen Jobs dem Welthandel. Der Streit dreht sich weniger um die Summe als um die Verteilung der Gewinne und Verluste.',
    simple:"Durch die weltweite wirtschaftliche Vernetzung entstehen insgesamt mehr und bessere Arbeitsplätze, als verloren gehen.",
    axis:'trade', pol:+1 },

  { topic:'⇄ Globalisierung & Arbeitsplätze', topicClass:'pill-trade', sideSub:'Globalisierung & Arbeitsmarkt',
    text:'Wenn Länder mit niedrigen Löhnen und schwachen [[Sozialstandards]] konkurrieren, geraten heimische Arbeitnehmer unter unfairen Druck.',
    terms:{ 'Sozialstandards':'Regeln zum Schutz von Arbeitnehmern, etwa Mindestlöhne, Arbeitszeitgrenzen, Arbeitssicherheit und das Recht, Gewerkschaften zu gründen.' },
    agree:"Du bewertest den Druck durch diesen Wettbewerb auf heimische Arbeitnehmer als unfair. Welche Schutzmaßnahmen du möchtest, bleibt dabei offen.",
    disagree:"Du bezweifelst den beschriebenen Druck oder seine Bewertung als unfair. Daraus folgt nicht, dass du niedrige Löhne oder schwachen Arbeitsschutz befürwortest.",
    context:'Die Sorge vor einem „Race to the Bottom", einem Abwärtswettlauf bei Löhnen und Standards, ist ein Kernargument der Globalisierungskritik. Empirisch ist er nur in Teilen belegt.',
    simple:"Wenn andere Länder mit niedrigen Löhnen und wenig Schutz für Beschäftigte konkurrieren, setzt das Arbeitnehmer im eigenen Land auf unfaire Weise unter Druck.",
    axis:'trade', pol:-1 },

  { topic:'⇄ Globalisierung & Arbeitsplätze', topicClass:'pill-trade', sideSub:'Globalisierung & Arbeitsmarkt',
    text:'Der [[Standortwettbewerb]] zwischen Ländern zwingt Volkswirtschaften, produktiver und innovativer zu werden, was am Ende allen nützt.',
    terms:{ 'Standortwettbewerb':'Der Wettbewerb der Länder um Unternehmen und Investitionen, etwa über Steuern, Infrastruktur, Bildung und Bürokratie.' },
    agree:"Du erwartest, dass der Wettbewerb zwischen Ländern Produktivität und neue Ideen fördert und letztlich allen zugutekommt.",
    disagree:"Du bezweifelst diese Wirkung des Wettbewerbs oder den Nutzen für alle. Einzelne Vorteile durch Wettbewerb kannst du trotzdem anerkennen.",
    context:'Standortwettbewerb kann Reformen anstoßen, aber auch Steuersenkungswettläufe auslösen. Genau dagegen richtet sich die globale Mindeststeuer für Konzerne (2024).',
    simple:"Weil Länder um Unternehmen und Investitionen konkurrieren, müssen sie mit ihren Mitteln mehr herstellen und neue Ideen entwickeln. Das nützt am Ende allen.",
    axis:'trade', pol:+1 },

  // ── Block 3c (erweitert): Handel als Druckmittel ──
  { topic:'⇄ Handel als Druckmittel', topicClass:'pill-trade', sideSub:'Sanktionen & Geoökonomie',
    text:'Handel sollte auch als politisches Druckmittel dienen, etwa durch [[Sanktionen]] gegen Staaten, die Menschenrechte verletzen.',
    terms:{ 'Sanktionen':'Wirtschaftliche Strafmaßnahmen wie Handelsverbote, Einfuhrstopps oder das Einfrieren von Vermögen, um ein Land politisch unter Druck zu setzen.' },
    agree:"Du befürwortest Handel als politisches Druckmittel, etwa bei Menschenrechtsverletzungen. Damit erklärst du nicht jede einzelne Sanktion für sinnvoll.",
    disagree:"Du lehnst den hier vorgeschlagenen Einsatz von Handel als politischem Druckmittel ab. Das bedeutet nicht, dass du die Menschenrechtsverletzungen akzeptierst.",
    context:'Die Sanktionen gegen Russland seit 2022 sind das größte Beispiel. Ihre Wirksamkeit ist umstritten: Sie schaden, erzwingen aber selten einen direkten Politikwechsel.',
    simple:"Handel sollte auch genutzt werden, um politischen Druck auszuüben, zum Beispiel durch wirtschaftliche Strafmaßnahmen gegen Länder, die Menschenrechte verletzen.",
    axis:'trade', pol:-1 }, // soft

  { topic:'⇄ Handel als Druckmittel', topicClass:'pill-trade', sideSub:'Sanktionen & Geoökonomie',
    text:'Wirtschaftliche Verflechtung zwischen Ländern macht Kriege unwahrscheinlicher. Handel verbindet. ([[Doux commerce]])',
    terms:{ 'Doux commerce':'„Sanfter Handel": die alte Idee (Montesquieu, 18. Jahrhundert), dass Handel Völker friedlich voneinander abhängig macht und so Konflikte dämpft.' },
    agree:"Du erwartest, dass wirtschaftliche Beziehungen die Wahrscheinlichkeit von Kriegen senken. Die Aussage behauptet nicht, dass Handel jeden Krieg verhindert.",
    disagree:"Du bezweifelst, dass wirtschaftliche Beziehungen Kriege unwahrscheinlicher machen. Damit behauptest du nicht automatisch, dass Handel Kriege fördert.",
    context:'Die EU begann als Friedensprojekt durch wirtschaftliche Verflechtung. Doch Deutschlands Gasabhängigkeit von Russland zeigte 2022 die Kehrseite der These.',
    simple:"Wenn Länder wirtschaftlich eng miteinander verbunden sind, werden Kriege zwischen ihnen unwahrscheinlicher. Handel verbindet.",
    axis:'trade', pol:+1 },

  { topic:'⇄ Handel als Druckmittel', topicClass:'pill-trade', sideSub:'Sanktionen & Geoökonomie',
    text:'Der Westen sollte sich von autoritären Staaten wie China wirtschaftlich gezielt [[entkoppeln]], auch um den Preis von Wohlstand.',
    terms:{ 'entkoppeln':'„Decoupling": die bewusste Trennung wirtschaftlicher Verflechtungen zwischen Ländern, etwa durch Rückbau von Handel, Investitionen und Technologietransfer.' },
    agree:"Du befürwortest den gezielten Abbau dieser Wirtschaftsbeziehungen und nimmst dafür Wohlstandsverluste in Kauf.",
    disagree:"Du lehnst diesen Abbau der Wirtschaftsbeziehungen unter Inkaufnahme von Wohlstandsverlusten ab. Daraus folgt keine Zustimmung zu autoritärer Politik.",
    context:'Statt vollständigem „Decoupling" verfolgen EU und USA meist „De-Risking": Abhängigkeiten senken, ohne den Handel ganz abzubrechen.',
    simple:"Der Westen sollte seine wirtschaftlichen Verbindungen zu autoritär regierten Ländern wie China gezielt abbauen, auch wenn dadurch Wohlstand verloren geht.",
    axis:'trade', pol:-1 },

  { topic:'⇄ Handel als Druckmittel', topicClass:'pill-trade', sideSub:'Sanktionen & Geoökonomie',
    text:'Sanktionen und Handelskriege schaden meist beiden Seiten und erreichen ihre politischen Ziele nur selten.',
    terms:{},
    agree:"Du erwartest meist Schäden auf beiden Seiten und nur selten das Erreichen der politischen Ziele. Einzelne erfolgreiche Fälle sind damit nicht ausgeschlossen.",
    disagree:"Du bezweifelst, dass meist beide Seiten geschädigt werden oder politische Ziele nur selten erreicht werden. Ob du solche Maßnahmen für gerechtfertigt hältst, ist eine andere Frage.",
    context:'Studien zur Wirksamkeit von Sanktionen sind ernüchternd: Sie erzwingen selten einen Kurswechsel, gelten aber als Signal und Druckmittel unterhalb von Krieg.',
    simple:"Wirtschaftliche Strafmaßnahmen und Handelskriege schaden meistens beiden Seiten. Ihre politischen Ziele erreichen sie nur selten.",
    axis:'trade', pol:+1 },

  // ── Block 3: Wachstum & Wohlstand ──
  { topic:'↕ Wachstum & Wohlstand', topicClass:'pill-economy', sideSub:'Wachstum & Wohlstand',
    text:'Ohne [[wirtschaftliches Wachstum]] ist es nicht möglich, Armut dauerhaft zu bekämpfen.',
    terms:{ 'wirtschaftliches Wachstum':'Steigerung der Wirtschaftsleistung, gemessen am Bruttoinlandsprodukt (BIP). Gilt traditionell als Voraussetzung für steigenden Lebensstandard.' },
    agree:"Du hältst Wirtschaftswachstum für eine notwendige Voraussetzung, um Armut dauerhaft zu bekämpfen. Dass Wachstum allein dafür ausreicht, sagt die Aussage nicht.",
    disagree:"Du hältst eine dauerhafte Bekämpfung von Armut auch ohne Wirtschaftswachstum für möglich. Wachstum kann aus deiner Sicht trotzdem hilfreich sein.",
    context:'Die „Trickle-down"-These besagt, dass Wachstum allen zugutekommt. Kritiker wie Stiglitz und Piketty zeigen, dass Ungleichheit trotz Wachstum steigen kann.',
    simple:"Nur wenn die Wirtschaft wächst, kann Armut dauerhaft bekämpft werden.",
    axis:'economy', pol:+1 },

  { topic:'↕ Wachstum & Wohlstand', topicClass:'pill-economy', sideSub:'Wachstum & Wohlstand',
    text:'Das [[Bruttoinlandsprodukt (BIP)]] ist ein ungeeignetes Maß dafür, wie gut es einer Gesellschaft wirklich geht.',
    terms:{ 'Bruttoinlandsprodukt (BIP)':'Der Gesamtwert aller Waren und Dienstleistungen, die in einem Land in einem Jahr produziert werden. Das BIP ist das wichtigste Maß für wirtschaftliche Größe und Wachstum.' },
    agree:"Du hältst das BIP für ungeeignet, um das Wohlergehen einer Gesellschaft zu beurteilen. Als Maß für die Wirtschaftsleistung kannst du es trotzdem nützlich finden.",
    disagree:"Du hältst das BIP grundsätzlich für geeignet, etwas über das Wohlergehen auszusagen. Es muss dafür aus deiner Sicht nicht alle Aspekte erfassen.",
    context:'Alternativen zum BIP: Human Development Index (HDI), Genuine Progress Indicator. Viele Ökonomen und der Economist fordern ergänzende Indikatoren.',
    simple:"Das Bruttoinlandsprodukt, kurz BIP, ist kein geeignetes Maß dafür, wie gut es einer Gesellschaft wirklich geht.",
    axis:'economy', pol:-1 },

  { topic:'↕ Wachstum & Wohlstand', topicClass:'pill-economy', sideSub:'Wachstum & Wohlstand',
    text:'Eine Wirtschaft, die über mehrere Jahre nicht wächst, steckt zwangsläufig in einer Krise.',
    terms:{},
    agree:"Du siehst mehrere Jahre ohne Wachstum zwangsläufig als Wirtschaftskrise. Die Aussage lässt keinen Fall zu, in dem eine Wirtschaft ohne Wachstum stabil bleibt.",
    disagree:"Du hältst eine Wirtschaft ohne Wachstum nicht zwangsläufig für krisenhaft. Damit behauptest du nicht, dass fehlendes Wachstum immer problemlos ist.",
    context:'Japan erlebt seit den 1990ern niedrige Wachstumsraten ohne gesellschaftlichen Kollaps. Postwachstumsökonomen wie Tim Jackson argumentieren, dass Wohlstand ohne Wachstum möglich ist.',
    simple:"Eine Wirtschaft, die mehrere Jahre nicht wächst, steckt automatisch in einer Krise.",
    axis:'economy', pol:+1 },

  { topic:'↕ Wachstum & Wohlstand', topicClass:'pill-economy', sideSub:'Wachstum & Wohlstand',
    text:'Gesellschaften können dauerhaft gut leben, wenn sie weniger produzieren und konsumieren als heute. ([[Degrowth]])',
    terms:{ 'Degrowth':'Deutsch: Postwachstum. Politische Bewegung, die eine geplante Reduktion der Wirtschaftsleistung als Antwort auf Umweltkrise und Überkonsum fordert.' },
    agree:"Du hältst ein dauerhaft gutes Leben mit weniger Produktion und Konsum für möglich. Ob und wie man diesen Zustand erreichen sollte, bleibt offen.",
    disagree:"Du bezweifelst, dass Gesellschaften bei dauerhaft geringerer Produktion und geringerem Konsum gut leben können. Einzelne Einsparungen kannst du trotzdem sinnvoll finden.",
    context:'Degrowth-Ökonomen (Latouche, Kallis) argumentieren, dass ökologische Grenzen eine Wachstumsgesellschaft unmöglich machen. Kritiker: Das ist für arme Länder keine Option.',
    simple:"Gesellschaften können auch auf Dauer gut leben, wenn sie weniger herstellen und verbrauchen als heute.",
    axis:'economy', pol:-1 },

  // ── Block 4: Ökonomie & Nachhaltigkeit ──
  { topic:'↕ Ökonomie & Nachhaltigkeit', topicClass:'pill-economy', sideSub:'Ökonomie & Nachhaltigkeit',
    text:'Technologischer Fortschritt kann [[grünes Wachstum]] ermöglichen. Wirtschaft und Umwelt schließen sich nicht aus.',
    terms:{ 'grünes Wachstum':'Wirtschaftswachstum, das gleichzeitig Ressourcenverbrauch und Emissionen senkt – durch technologische Effizienzsteigerungen. Ziel: Entkopplung von Wachstum und Umweltschäden.' },
    agree:"Du hältst Wachstum mit geringerer Umweltbelastung durch technischen Fortschritt für möglich. Dass es automatisch oder ohne weitere Maßnahmen gelingt, sagt die Aussage nicht.",
    disagree:"Du bezweifelst, dass technischer Fortschritt Wachstum und sinkende Umweltbelastung auf diese Weise vereinbar machen kann. Einzelne umweltfreundliche Technologien kannst du trotzdem unterstützen.",
    context:'Die OECD und EU setzen auf Green-Growth-Ansätze. Kritische Studien (Parrique et al., 2019) zeigen, dass absolute Entkopplung bisher kaum ausreichend belegt ist.',
    simple:"Neue Technik kann es ermöglichen, dass die Wirtschaft wächst und zugleich weniger Rohstoffe verbraucht und Schadstoffe ausstößt. Wirtschaft und Umweltschutz müssen sich nicht ausschließen.",
    axis:'economy', pol:+1 },

  { topic:'↕ Ökonomie & Nachhaltigkeit', topicClass:'pill-economy', sideSub:'Ökonomie & Nachhaltigkeit',
    text:'Der [[freie Markt]] wird von selbst umweltfreundliche Lösungen entwickeln, sobald die Nachfrage groß genug ist.',
    terms:{ 'freie Markt':'Wirtschaftssystem, in dem Preise und Produktion durch Angebot und Nachfrage bestimmt werden, ohne staatliche Eingriffe. Basis der liberalen Wirtschaftstheorie.' },
    agree:"Du erwartest, dass eine ausreichend große Nachfrage im freien Markt von selbst umweltfreundliche Lösungen hervorbringt. Andere Umweltprobleme oder ergänzende Regeln bewertet die Aussage nicht.",
    disagree:"Du bezweifelst, dass genügend Nachfrage allein diese Lösungen hervorbringt. Welche zusätzlichen Maßnahmen nötig wären, ist damit noch nicht festgelegt.",
    context:'Das Konzept der negativen Externalitäten ist in der Ökonomie anerkannt. CO₂-Bepreisung (Pigou-Steuer) gilt als Lösung – ist aber politisch umstritten.',
    simple:"Unternehmen werden im freien Markt von selbst umweltfreundliche Lösungen entwickeln, sobald genug Kunden diese nachfragen.",
    axis:'economy', pol:+1 },

  { topic:'↕ Ökonomie & Nachhaltigkeit', topicClass:'pill-economy', sideSub:'Ökonomie & Nachhaltigkeit',
    text:'Wenn Umweltschutz Arbeitsplätze kostet, sollte er trotzdem Vorrang haben.',
    terms:{},
    agree:"Du gibst Umweltschutz in diesem Konflikt Vorrang vor dem Erhalt von Arbeitsplätzen. Unterstützung für betroffene Beschäftigte schließt das nicht aus.",
    disagree:"Du gibst Umweltschutz bei drohenden Arbeitsplatzverlusten nicht grundsätzlich Vorrang. Das bedeutet nicht, dass du Umweltschutz insgesamt ablehnst.",
    context:'Der „Just Transition"-Ansatz verbindet Klimapolitik mit sozialer Absicherung (z.B. Kohleausstieg mit Strukturfonds). Die Spannung zwischen Ökologie und Beschäftigung bleibt real.',
    simple:"Umweltschutz sollte auch dann wichtiger sein, wenn dadurch Arbeitsplätze verloren gehen.",
    axis:'economy', pol:-1 },

  { topic:'↕ Ökonomie & Nachhaltigkeit', topicClass:'pill-economy', sideSub:'Ökonomie & Nachhaltigkeit',
    text:'Unternehmen sollten gesetzlich verpflichtet werden, ihre [[CO₂-Emissionen]] zu reduzieren, auch wenn das ihre [[Wettbewerbsfähigkeit]] verschlechtert.',
    terms:{ 'CO₂-Emissionen':'Ausstoß von Kohlendioxid, dem wichtigsten Treibhausgas. Entsteht durch Verbrennung fossiler Brennstoffe in Industrie, Verkehr und Energieversorgung.', 'Wettbewerbsfähigkeit':'Fähigkeit eines Unternehmens, im internationalen Vergleich konkurrenzfähige Produkte und Dienstleistungen anzubieten.' },
    agree:"Du befürwortest eine gesetzliche Pflicht zur CO₂-Senkung auch dann, wenn Unternehmen dadurch Wettbewerbsnachteile haben.",
    disagree:"Du lehnst diese gesetzliche Pflicht unter den genannten Bedingungen ab. Ob dich die Pflicht selbst oder die Wettbewerbsnachteile stören, bleibt offen.",
    context:'Die EU hat Emissionshandel (ETS) und das Carbon Border Adjustment Mechanism (CBAM) eingeführt, um Carbon Leakage zu verhindern.',
    simple:"Unternehmen sollten per Gesetz weniger CO₂ ausstoßen müssen, auch wenn sie dadurch gegenüber anderen Unternehmen schlechter konkurrieren können.",
    axis:'economy', pol:-1 },

  // ── Block 4b (erweitert): Ungleichheit & Verteilung ──
  { topic:'↕ Ungleichheit & Verteilung', topicClass:'pill-economy', sideSub:'Ungleichheit & Verteilung',
    text:'Eine gerechtere Verteilung des vorhandenen Reichtums ist wichtiger als immer mehr [[Wachstum]].',
    terms:{ 'Wachstum':'Steigerung der gesamten Wirtschaftsleistung (BIP), traditionell das zentrale Ziel der Wirtschaftspolitik.' },
    agree:"Du gibst einer gerechteren Verteilung Vorrang vor weiterem Wachstum. Du musst Wachstum dafür weder ablehnen noch für überflüssig halten.",
    disagree:"Du gibst gerechterer Verteilung keinen Vorrang vor weiterem Wachstum. Du kannst beide Ziele gleich wichtig finden oder Wachstum stärker gewichten.",
    context:'Ökonomen wie Piketty zeigen, dass Vermögen ohne Gegensteuern immer ungleicher wird. Andere warnen, dass zu viel Umverteilung Leistungsanreize schwächt.',
    simple:"Den vorhandenen Reichtum gerechter zu verteilen, ist wichtiger, als die Wirtschaft immer weiter wachsen zu lassen.",
    axis:'economy', pol:-1 }, // soft

  { topic:'↕ Ungleichheit & Verteilung', topicClass:'pill-economy', sideSub:'Ungleichheit & Verteilung',
    text:'Solange die Wirtschaft insgesamt wächst, ist es zweitrangig, wie groß die Einkommensunterschiede sind.',
    terms:{},
    agree:"Du gewichtest die Größe der Einkommensunterschiede geringer, solange die Gesamtwirtschaft wächst. Dass dabei jedes Einkommen steigt, setzt die Aussage nicht voraus.",
    disagree:"Du hältst die Größe der Einkommensunterschiede auch bei wachsender Wirtschaft nicht für zweitrangig. Daraus folgt keine Ablehnung von Wachstum.",
    context:'Die „Trickle-down"-Idee besagt, Wachstum komme am Ende allen zugute. Kritiker entgegnen, dass die Gewinne der letzten Jahrzehnte stark nach oben flossen.',
    simple:"Wenn die Wirtschaft insgesamt wächst, ist es weniger wichtig, wie groß die Unterschiede bei den Einkommen sind.",
    axis:'economy', pol:+1 },

  { topic:'↕ Ungleichheit & Verteilung', topicClass:'pill-economy', sideSub:'Ungleichheit & Verteilung',
    text:'Sehr hohe Vermögen sollten stärker besteuert werden, auch wenn das Investitionen und Wachstum etwas bremst.',
    terms:{},
    agree:"Du befürwortest höhere Steuern auf sehr große Vermögen und akzeptierst dafür eine gewisse Bremswirkung auf Investitionen und Wachstum.",
    disagree:"Du lehnst höhere Steuern auf sehr große Vermögen unter diesen Bedingungen ab. Der Grund kann die Besteuerung selbst oder die angenommene Bremswirkung sein.",
    context:'Vermögensteuern sind umstritten: Befürworter verweisen auf wachsende Ungleichheit, Kritiker auf Kapitalflucht und Bewertungsprobleme. Viele Länder haben sie abgeschafft.',
    simple:"Auf sehr große Vermögen sollten höhere Steuern erhoben werden, auch wenn dadurch etwas weniger investiert wird und die Wirtschaft etwas langsamer wächst.",
    axis:'economy', pol:-1 },

  { topic:'↕ Ungleichheit & Verteilung', topicClass:'pill-economy', sideSub:'Ungleichheit & Verteilung',
    text:'Wer mehr leistet und Risiken eingeht, soll auch deutlich mehr verdienen. Ungleichheit ist ein Antrieb für Wohlstand.',
    terms:{},
    agree:"Du befürwortest deutlich höhere Einkommen für mehr Leistung und Risiko und siehst Unterschiede als Antrieb für Wohlstand.",
    disagree:"Du bezweifelst die fördernde Wirkung von Ungleichheit oder lehnst deutlich höhere Einkommen in dieser Form ab. Leistungsunterschiede musst du deshalb nicht für unwichtig halten.",
    context:'Die Spannung zwischen Leistungsanreiz und Gerechtigkeit ist ein Grundkonflikt der Wirtschaftspolitik. Wie viel Ungleichheit motiviert statt spaltet, ist umstritten.',
    simple:"Wer mehr leistet und Risiken eingeht, soll auch deutlich mehr verdienen. Solche Einkommensunterschiede treiben den Wohlstand an.",
    axis:'economy', pol:+1 },

  // ── Block 4c (erweitert): Konsum & Suffizienz ──
  { topic:'↕ Konsum & Suffizienz', topicClass:'pill-economy', sideSub:'Konsum & Suffizienz',
    text:'In reichen Ländern konsumieren wir mehr, als für ein gutes Leben nötig wäre. ([[Suffizienz]])',
    terms:{ 'Suffizienz':'Das Prinzip „genug": bewusst weniger verbrauchen und besitzen, weil mehr Konsum ab einem gewissen Punkt kaum noch zu mehr Lebensqualität führt.' },
    agree:"Du hältst einen Teil des heutigen Konsums in reichen Ländern für ein gutes Leben nicht für nötig. Wie viel weniger möglich wäre, bleibt offen.",
    disagree:"Du hältst die Aussage über zu viel Konsum in reichen Ländern nicht für zutreffend. Damit ist nicht entschieden, ob du einzelne Formen von Verschwendung kritisierst.",
    context:'Die „Easterlin-Paradoxie" zeigt: Ab einem gewissen Einkommen steigt die Lebenszufriedenheit kaum noch mit. Mehr Konsum bedeutet nicht automatisch mehr Glück.',
    simple:"In reichen Ländern kaufen und verbrauchen wir mehr, als wir für ein gutes Leben brauchen.",
    axis:'economy', pol:-1 },

  { topic:'↕ Konsum & Suffizienz', topicClass:'pill-economy', sideSub:'Konsum & Suffizienz',
    text:'Mehr Konsum bedeutet mehr Wohlstand und Lebensqualität. Verzicht macht ärmer, nicht glücklicher.',
    terms:{},
    agree:"Du verbindest mehr Konsum mit mehr Wohlstand und Lebensqualität und erwartest von Verzicht keinen Gewinn an Glück.",
    disagree:"Du bezweifelst, dass mehr Konsum ein besseres Leben bedeutet, oder dass Verzicht nur ärmer und nicht glücklicher macht. Deine Antwort kann sich auf einen dieser Teile beziehen.",
    context:'Konsum macht rund die Hälfte der Wirtschaftsleistung aus und treibt Wachstum. Ob mehr Konsum auch mehr Zufriedenheit bringt, bezweifelt die Glücksforschung.',
    simple:"Mehr zu kaufen und zu verbrauchen bedeutet mehr Wohlstand und ein besseres Leben. Weniger Konsum macht ärmer, nicht glücklicher.",
    axis:'economy', pol:+1 },

  { topic:'↕ Konsum & Suffizienz', topicClass:'pill-economy', sideSub:'Konsum & Suffizienz',
    text:'Geplante [[Obsoleszenz]] und Wegwerfkultur zeigen, dass unser Wirtschaftsmodell auf Verschwendung beruht.',
    terms:{ 'Obsoleszenz':'„Geplanter Verschleiß": der Verdacht, dass Produkte absichtlich so gebaut werden, dass sie schnell kaputtgehen oder veralten, damit man Neues kauft.' },
    agree:"Du wertest absichtlich kurze Produktlebenszeiten und häufiges Wegwerfen als Hinweis auf ein Wirtschaftsmodell, das auf Verschwendung beruht.",
    disagree:"Du hältst diesen Schluss über das gesamte Wirtschaftsmodell nicht für überzeugend. Einzelne Fälle absichtlich kurzer Produktlebenszeiten oder von Verschwendung musst du dafür nicht bestreiten.",
    context:'Die EU stärkt mit dem „Recht auf Reparatur" (2024) langlebige Produkte. Wie verbreitet absichtlicher Verschleiß wirklich ist, bleibt empirisch umstritten.',
    simple:"Dass Produkte absichtlich nur kurz halten oder nutzbar bleiben und vieles weggeworfen wird, zeigt: Unsere Wirtschaft beruht auf Verschwendung.",
    axis:'economy', pol:-1 },

  { topic:'↕ Konsum & Suffizienz', topicClass:'pill-economy', sideSub:'Konsum & Suffizienz',
    text:'Der Konsumverzicht Einzelner bringt wenig. Entscheidend sind Technologie und Wachstum, nicht weniger zu kaufen.',
    terms:{},
    agree:"Du misst persönlichem Konsumverzicht wenig Wirkung bei und siehst die entscheidenden Veränderungen in Technologie und Wachstum.",
    disagree:"Du hältst persönlichen Konsumverzicht für wichtiger oder bezweifelst den Vorrang von Technologie und Wachstum. Technischen Fortschritt kannst du trotzdem befürworten.",
    context:'Ob Technik (grünes Wachstum) oder weniger Konsum (Suffizienz) der bessere Weg ist, ist ein Kernstreit der Umweltökonomie. Meist braucht es beides.',
    simple:"Wenn einzelne Menschen weniger kaufen und verbrauchen, bringt das wenig. Entscheidend sind neue Technik und Wirtschaftswachstum, nicht weniger Konsum.",
    axis:'economy', pol:+1 },

  // ── Block 4d (erweitert): Arbeit, Zeit & Automatisierung ──
  { topic:'↕ Arbeit, Zeit & Automatisierung', topicClass:'pill-economy', sideSub:'Arbeit, Zeit & Automatisierung',
    text:'Produktivitätsgewinne sollten in kürzere Arbeitszeit fließen (z. B. [[Vier-Tage-Woche]]) statt in immer mehr Produktion.',
    terms:{ 'Vier-Tage-Woche':'Modell, bei dem die Wochenarbeitszeit auf vier Tage verkürzt wird, idealerweise bei vollem Lohn, finanziert aus höherer Produktivität.' },
    agree:"Du möchtest Produktivitätsgewinne vorrangig für mehr freie Zeit statt für zusätzliche Produktion nutzen. Eine konkrete Lohnregelung legt die Aussage nicht fest.",
    disagree:"Du lehnst diesen Vorrang kürzerer Arbeitszeit vor zusätzlicher Produktion ab. Eine bestimmte Arbeitszeitverkürzung kannst du unter anderen Bedingungen trotzdem unterstützen.",
    context:'Pilotprojekte (unter anderem in Island und Großbritannien) zeigen oft stabile Produktivität bei höherer Zufriedenheit. Die Übertragbarkeit auf ganze Volkswirtschaften ist offen.',
    simple:"Wenn wir in derselben Arbeitszeit mehr leisten können, sollten wir diesen Fortschritt für kürzere Arbeitszeiten nutzen, zum Beispiel eine Vier-Tage-Woche, statt immer mehr zu produzieren.",
    axis:'economy', pol:-1 },

  { topic:'↕ Arbeit, Zeit & Automatisierung', topicClass:'pill-economy', sideSub:'Arbeit, Zeit & Automatisierung',
    text:'Eine kürzere Arbeitszeit bei vollem Lohn würde Wohlstand und [[Wettbewerbsfähigkeit]] gefährden.',
    terms:{ 'Wettbewerbsfähigkeit':'Die Fähigkeit einer Wirtschaft, im internationalen Vergleich mitzuhalten, etwa über Preise, Qualität und Produktivität.' },
    agree:"Du erwartest, dass kürzere Arbeitszeit bei vollem Lohn sowohl Wohlstand als auch Wettbewerbsfähigkeit gefährdet. Ohne vollen Lohnausgleich wäre es eine andere Frage.",
    disagree:"Du bezweifelst die beschriebenen Gefahren für Wohlstand oder Wettbewerbsfähigkeit. Einen bestimmten Ausgleich, etwa höhere Produktivität, setzt deine Antwort nicht voraus.",
    context:'Gegner verweisen auf Fachkräftemangel und Lohnkosten, Befürworter auf Produktivitäts- und Gesundheitsgewinne. Die Bilanz hängt stark von der Branche ab.',
    simple:"Weniger zu arbeiten bei gleichem Lohn würde den Wohlstand gefährden und es der Wirtschaft schwerer machen, mit anderen zu konkurrieren.",
    axis:'economy', pol:+1 },

  { topic:'↕ Arbeit, Zeit & Automatisierung', topicClass:'pill-economy', sideSub:'Arbeit, Zeit & Automatisierung',
    text:'Automatisierung und [[KI]] schaffen langfristig mehr Wohlstand und neue Arbeitsplätze, auch wenn alte wegfallen.',
    terms:{ 'KI':'Künstliche Intelligenz: Computersysteme, die Aufgaben übernehmen, die bisher menschliches Denken erforderten, etwa Texte schreiben oder Bilder auswerten.' },
    agree:"Du erwartest langfristig mehr Wohlstand und neue Stellen durch Automatisierung und KI. Ob mehr Stellen entstehen als wegfallen, legt die Aussage nicht ausdrücklich fest.",
    disagree:"Du bezweifelst den langfristigen Wohlstandsgewinn oder die Entstehung neuer Arbeitsplätze. Das bedeutet nicht, dass du den Einsatz von KI grundsätzlich ablehnst.",
    context:'Bisher schuf Automatisierung netto Beschäftigung. Ob KI als „diesmal anders"-Technologie diesem Muster folgt, ist eine der großen offenen Fragen.',
    simple:"Wenn Maschinen und künstliche Intelligenz Aufgaben übernehmen, entstehen auf lange Sicht mehr Wohlstand und neue Arbeitsplätze, auch wenn bisherige Stellen wegfallen.",
    axis:'economy', pol:+1 },

  { topic:'↕ Arbeit, Zeit & Automatisierung', topicClass:'pill-economy', sideSub:'Arbeit, Zeit & Automatisierung',
    text:'Ständiges Wachstum zwingt Menschen in immer mehr Arbeit und Stress, ohne dass ihr Leben wirklich besser wird.',
    terms:{},
    agree:"Du verbindest ständiges Wachstum mit erzwungener Mehrarbeit und mehr Stress, ohne einen entsprechenden Gewinn an Lebensqualität.",
    disagree:"Du bezweifelst den Zwang zu mehr Arbeit und Stress oder das Ausbleiben besserer Lebensqualität. Wachstum muss aus deiner Sicht deshalb nicht immer entlastend wirken.",
    context:'Wachstum hat die Arbeitszeit historisch stark gesenkt. Kritiker entgegnen, dass Leistungsdruck und psychische Belastung zuletzt wieder zugenommen haben.',
    simple:"Ständiges Wirtschaftswachstum zwingt Menschen dazu, immer mehr zu arbeiten und mehr Stress auszuhalten, ohne dass ihr Leben wirklich besser wird.",
    axis:'economy', pol:-1 },

  // ── Block 5: Fairer Handel ──
  { topic:'◈ Fairer Handel', topicClass:'pill-governance', sideSub:'Fairer Handel',
    text:'[[Handelsabkommen]] zwischen reichen und armen Ländern nützen am Ende vor allem den reichen Ländern. ([[asymmetrische Handelspartnerschaft]])',
    terms:{ 'Handelsabkommen':'Vertrag zwischen zwei oder mehr Ländern, der ihren Handel regelt – z.B. Zölle senkt, Märkte öffnet oder gemeinsame Standards festlegt. Beispiele: CETA (EU–Kanada), USMCA (USA–Mexiko–Kanada).', 'asymmetrische Handelspartnerschaft':'Handelsverhältnis zwischen Ländern mit stark unterschiedlicher Wirtschaftskraft. Der stärkere Partner kann Bedingungen diktieren, die seinen eigenen Interessen dienen.' },
    agree:"Du siehst die Vorteile dieser Abkommen vor allem bei den reichen Ländern. Einzelne Vorteile für ärmere Länder sind damit nicht ausgeschlossen.",
    disagree:"Du bezweifelst, dass die Vorteile hauptsächlich bei den reichen Ländern liegen. Das heißt nicht, dass du die Verteilung für völlig gleich oder jeden Vertrag für fair hältst.",
    context:'Kritiker wie Ha-Joon Chang zeigen, dass reiche Länder armen die Mittel verweigern, mit denen sie selbst reich wurden: Industriepolitik, Schutzzölle, staatliche Förderung.',
    simple:"Von Handelsverträgen zwischen reichen und armen Ländern profitieren am Ende hauptsächlich die reichen Länder.",
    axis:'governance', pol:-1 }, // soft

  { topic:'◈ Fairer Handel', topicClass:'pill-governance', sideSub:'Fairer Handel',
    text:'[[Entwicklungsländer]] sollten ihre Industrien schützen dürfen, auch wenn das gegen internationale Handelsregeln verstößt.',
    terms:{ 'Entwicklungsländer':'Länder mit vergleichsweise niedrigem Einkommen und wenig entwickelter Industrie, auch „Globaler Süden" genannt. Gegenstück zu den reichen Industrienationen.' },
    agree:"Du hältst den Schutz der Industrie ärmerer Länder auch bei einem Verstoß gegen internationale Handelsregeln für berechtigt.",
    disagree:"Du lehnst den Schutz unter Missachtung internationaler Regeln ab. Vereinbarte Sonderrechte oder Schutzmaßnahmen innerhalb der Regeln kannst du trotzdem unterstützen.",
    context:'Die WTO erlaubt „Special and Differential Treatment" für Entwicklungsländer – in der Praxis sind diese Ausnahmen aber begrenzt und oft umstritten.',
    simple:"Ärmere Länder sollten ihre Industrie schützen dürfen, auch wenn sie damit internationale Handelsregeln verletzen.",
    axis:'governance', pol:-1 },

  { topic:'◈ Fairer Handel', topicClass:'pill-governance', sideSub:'Fairer Handel',
    text:'Reiche Länder, die ihren [[Agrarsektor]] [[subventionieren]], betreiben damit [[Protektionismus]] auf Kosten der Entwicklungsländer.',
    terms:{ 'Agrarsektor':'Der Teil der Wirtschaft, der Lebensmittel und andere landwirtschaftliche Produkte erzeugt – Ackerbau, Viehzucht, teils auch Fischerei.', 'subventionieren':'Staatliche finanzielle Unterstützung für Unternehmen oder Sektoren. Agrarsubventionen senken Produktionskosten und ermöglichen günstigere Exportpreise.', 'Protektionismus':'Wirtschaftspolitik, die heimische Industrien durch Zölle, Quoten und andere Maßnahmen vor ausländischer Konkurrenz schützt.' },
    agree:"Du bewertest diese staatliche Unterstützung als Schutz vor ausländischer Konkurrenz zulasten ärmerer Länder. Ob es daneben andere Ziele gibt, bleibt offen.",
    disagree:"Du bezweifelst die Einordnung als Protektionismus oder die behaupteten Nachteile für ärmere Länder. Du musst die Unterstützung deshalb nicht grundsätzlich befürworten.",
    context:'Die EU-Agrarpolitik schüttet jährlich ~50 Mrd. € aus. Afrikanische Bauern können mit den künstlich verbilligten Importen kaum konkurrieren.',
    simple:"Wenn reiche Länder ihrer Landwirtschaft Geld geben, schützen sie diese vor ausländischer Konkurrenz und benachteiligen damit ärmere Länder.",
    axis:'governance', pol:+1 }, // soft

  { topic:'◈ Fairer Handel', topicClass:'pill-governance', sideSub:'Fairer Handel',
    text:'Internationale Handelspartnerschaft kann nur funktionieren, wenn es verbindliche Fairness- und [[Sozialstandards]] gibt.',
    terms:{ 'Sozialstandards':'Verbindliche Mindestregeln für Arbeitsbedingungen – z.B. Verbot von Kinderarbeit, Arbeitsschutz, Mindestlöhne und das Recht, Gewerkschaften zu gründen.' },
    agree:"Du hältst verbindliche Fairness- und Sozialstandards für eine notwendige Voraussetzung funktionierender Handelspartnerschaften.",
    disagree:"Du hältst funktionierende Handelspartnerschaften auch ohne solche verbindlichen Standards für möglich. Das bedeutet nicht, dass du faire Arbeitsbedingungen ablehnst.",
    context:'„Race to the Bottom": Theorie, dass Länder Umwelt- und Sozialstandards senken, um Investoren anzuziehen. Empirisch für bestimmte Sektoren belegt, aber nicht universell.',
    simple:"Handelspartnerschaften zwischen Ländern können nur funktionieren, wenn es verpflichtende Regeln für Fairness und den Schutz von Beschäftigten gibt.",
    axis:'governance', pol:+1 },

  // ── Block 6: WTO & globale Ordnung ──
  { topic:'◈ WTO & globale Ordnung', topicClass:'pill-governance', sideSub:'Welthandelsorganisation (WTO)',
    text:'Die [[Welthandelsorganisation (WTO)]] ist ein unverzichtbares Instrument, um den globalen Handel regelbasiert zu gestalten.',
    terms:{ 'Welthandelsorganisation (WTO)':'Gegründet 1995, heute 166 Mitgliedsstaaten. Überwacht internationale Handelsabkommen, löst Streitigkeiten und verhandelt neue Regeln. Vorgänger war das GATT.' },
    agree:"Du hältst die WTO für unverzichtbar für einen regelbasierten Welthandel. Kritik an einzelnen WTO-Regeln oder Reformwünsche sind damit vereinbar.",
    disagree:"Du hältst die WTO in dieser Rolle nicht für unverzichtbar. Das schließt gemeinsame Handelsregeln oder andere Formen internationaler Zusammenarbeit nicht aus.",
    context:'Die WTO hat seit ihrer Gründung keinen neuen großen multilateralen Deal abgeschlossen (Doha-Runde gescheitert). Das Streitbeilegungssystem ist durch US-Blockade seit 2019 lahmgelegt.',
    simple:"Die Welthandelsorganisation WTO ist unverzichtbar, damit der weltweite Handel nach gemeinsamen Regeln abläuft.",
    axis:'governance', pol:+1 },

  { topic:'◈ WTO & globale Ordnung', topicClass:'pill-governance', sideSub:'Welthandelsorganisation (WTO)',
    text:'Die WTO bevorzugt in ihrer Struktur die Interessen der reichen [[Industrienationen]].',
    terms:{ 'Industrienationen':'Länder mit hoch entwickelter Wirtschaft und hohem Pro-Kopf-Einkommen, auch „Globaler Norden" genannt – im Gegensatz zu Entwicklungsländern.' },
    agree:"Du siehst die Interessen reicher Industrieländer durch den Aufbau der WTO bevorzugt. Das betrifft ihre Struktur, nicht nur einzelne Entscheidungen.",
    disagree:"Du bezweifelst, dass der Aufbau der WTO reiche Industrieländer bevorzugt. Einzelne ungerechte Entscheidungen kannst du trotzdem kritisieren.",
    context:'TRIPS (Patentschutzregeln in der WTO) wurde von Pharmafirmen aus Industrieländern gepusht und schränkt Entwicklungsländer bei der Produktion günstiger Generika ein.',
    simple:"So wie die WTO aufgebaut ist, begünstigt sie die Interessen reicher Industrieländer.",
    axis:'governance', pol:-1 }, // soft

  { topic:'◈ WTO & globale Ordnung', topicClass:'pill-governance', sideSub:'Welthandelsorganisation (WTO)',
    text:'Internationale Organisationen wie die WTO schränken die [[nationale Souveränität]] zu stark ein.',
    terms:{ 'nationale Souveränität':'Das Recht eines Staates, ohne äußere Einmischung selbst über seine Gesetze, Politik und Wirtschaft zu entscheiden.' },
    agree:"Du bewertest die Einschränkung nationaler Entscheidungsfreiheit durch solche Organisationen als zu weitgehend. Internationale Zusammenarbeit insgesamt lehnst du damit nicht automatisch ab.",
    disagree:"Du hältst diese Einschränkung nationaler Entscheidungsfreiheit nicht für zu stark. Dass es Einschränkungen gibt, musst du dafür nicht bestreiten.",
    context:'Länder treten der WTO freiwillig bei und akzeptieren damit Regeln. Kritiker sehen darin Demokratieverlust; Befürworter sehen es als rationale Kooperation.',
    simple:"Internationale Organisationen wie die WTO schränken Länder zu stark darin ein, selbst über ihre Politik zu entscheiden.",
    axis:'governance', pol:-1 },

  { topic:'◈ WTO & globale Ordnung', topicClass:'pill-governance', sideSub:'Welthandelsorganisation (WTO)',
    text:'Wenn Länder gegen WTO-Regeln verstoßen, sollten automatisch [[Sanktionen]] folgen, ohne Ausnahmen für mächtige Staaten.',
    terms:{ 'Sanktionen':'Strafmaßnahmen gegen Länder, die gegen vereinbarte Regeln verstoßen. Im Handelskontext meist Gegenmaßnahmen oder Strafzölle, die von der WTO autorisiert werden.' },
    agree:"Du befürwortest automatische Sanktionen bei WTO-Regelverstößen und willst dabei keine Ausnahmen für mächtige Staaten.",
    disagree:"Du lehnst die Aussage ganz oder teilweise ab, etwa die automatische Sanktionierung. Daraus folgt nicht, dass du mächtigen Staaten Sonderrechte geben möchtest.",
    context:'Das WTO-Streitbeilegungssystem ist das einzige bindende internationale Handelsgericht. Es scheitert aber an der Durchsetzung gegen Großmächte.',
    simple:"Wenn ein Land WTO-Regeln verletzt, sollen automatisch Strafmaßnahmen folgen. Auch mächtige Länder sollen keine Ausnahme erhalten.",
    axis:'governance', pol:+1 },

  // ── Block 6b (erweitert): Konzernmacht & Regulierung ──
  { topic:'◈ Konzernmacht & Regulierung', topicClass:'pill-governance', sideSub:'Konzernmacht & Regulierung',
    text:'[[Multinationale Konzerne]] lassen sich nur durch internationale Regeln wirksam kontrollieren. Einzelne Staaten sind dafür zu schwach.',
    terms:{ 'Multinationale Konzerne':'Großunternehmen, die in vielen Ländern tätig sind (z. B. Apple, Amazon, Nestlé), oft mit Umsätzen größer als die Wirtschaft ganzer Staaten.' },
    agree:"Du hältst internationale Regeln für notwendig, um multinationale Konzerne wirksam zu kontrollieren, und einzelne Staaten dafür nicht für stark genug.",
    disagree:"Du bezweifelst, dass nur internationale Regeln eine wirksame Kontrolle ermöglichen oder dass einzelne Staaten dafür zu schwach sind. Welche Regeln du bevorzugst, bleibt offen.",
    context:'Konzerne verschieben Gewinne dorthin, wo Steuern niedrig sind. Erst die international vereinbarte Mindeststeuer (2024) versuchte, dem gemeinsam zu begegnen.',
    simple:"Große Unternehmen, die in mehreren Ländern tätig sind, lassen sich nur mit internationalen Regeln wirksam kontrollieren. Einzelne Länder sind dafür zu schwach.",
    axis:'governance', pol:+1 }, // soft

  { topic:'◈ Konzernmacht & Regulierung', topicClass:'pill-governance', sideSub:'Konzernmacht & Regulierung',
    text:'[[Schiedsgerichte]] (ISDS), vor denen Konzerne Staaten verklagen können, schränken die demokratische Souveränität unzulässig ein.',
    terms:{ 'Schiedsgerichte':'ISDS, Investor-Staat-Schiedsverfahren: in Handelsabkommen vereinbarte private Gerichte, vor denen ausländische Investoren Staaten auf Schadenersatz verklagen können, etwa wegen neuer Gesetze.' },
    agree:"Du hältst die Einschränkung demokratischer Selbstbestimmung durch diese Schiedsgerichte für unzulässig. Die Aussage bewertet diese Form des Rechtsschutzes.",
    disagree:"Du teilst die Bewertung als unzulässige Einschränkung nicht. Damit musst du weder jedes Verfahren noch jeden Anspruch eines Unternehmens gutheißen.",
    context:'ISDS war ein Hauptkritikpunkt an TTIP und CETA. Kritiker fürchten den „regulatory chill": dass Staaten aus Angst vor Klagen auf Gesetze verzichten.',
    simple:"Schiedsgerichte, vor denen Konzerne Staaten verklagen können, schränken die demokratische Selbstbestimmung von Staaten auf nicht akzeptable Weise ein.",
    axis:'governance', pol:-1 },

  { topic:'◈ Konzernmacht & Regulierung', topicClass:'pill-governance', sideSub:'Konzernmacht & Regulierung',
    text:'Eine globale [[Mindeststeuer]] für Konzerne ist nötig, weil der Steuerwettbewerb zwischen Ländern am Ende allen schadet.',
    terms:{ 'Mindeststeuer':'2021 von rund 140 Staaten vereinbart: Große Konzerne sollen weltweit mindestens 15 % Steuern zahlen, egal wohin sie ihre Gewinne verschieben.' },
    agree:"Du hältst eine globale Mindeststeuer für nötig und begründest dies mit den Schäden des Steuerwettbewerbs für alle Beteiligten.",
    disagree:"Du bezweifelst die Notwendigkeit einer globalen Mindeststeuer oder die Behauptung, dass Steuerwettbewerb allen schadet. Deine Ablehnung kann sich auch nur auf die Begründung beziehen.",
    context:'Die globale Mindeststeuer von 15 % gilt seit 2024 in der EU. Sie ist einer der größten Erfolge internationaler Steuerkooperation und zugleich schwer durchzusetzen.',
    simple:"Für große Unternehmen muss es weltweit einen Mindeststeuersatz geben, weil der Wettbewerb zwischen Ländern um niedrigere Steuern am Ende allen schadet.",
    axis:'governance', pol:+1 },

  { topic:'◈ Konzernmacht & Regulierung', topicClass:'pill-governance', sideSub:'Konzernmacht & Regulierung',
    text:'Jedes Land sollte selbst entscheiden, wie es Konzerne besteuert und reguliert, ohne internationale Vorgaben.',
    terms:{},
    agree:"Du möchtest die Besteuerung und Regulierung von Konzernen den einzelnen Ländern überlassen, ohne Vorgaben internationaler Ebene.",
    disagree:"Du lehnst eine ausschließlich nationale Entscheidung ohne internationale Vorgaben ab. Damit befürwortest du nicht automatisch eine vollständige Verlagerung aller Entscheidungen.",
    context:'Steuerhoheit gilt als Kern nationaler Souveränität. Genau deshalb war die internationale Mindeststeuer so schwer zu verhandeln.',
    simple:"Jedes Land sollte selbst entscheiden, welche Steuern und Regeln für große Unternehmen gelten, ohne internationale Vorgaben.",
    axis:'governance', pol:-1 },

  // ── Block 6c (erweitert): Klima-Governance global ──
  { topic:'◈ Klima-Governance global', topicClass:'pill-governance', sideSub:'Globale Klimapolitik',
    text:'Den Klimawandel lösen nur verbindliche internationale Abkommen, denen sich alle Länder unterordnen müssen.',
    terms:{},
    agree:"Du hältst verbindliche Abkommen für alle Länder für den einzigen Weg, den Klimawandel zu bewältigen. Freiwillige Maßnahmen allein reichen aus deiner Sicht nicht.",
    disagree:"Du bezweifelst, dass solche Abkommen der einzige Weg sind, oder lehnst die Pflicht für alle Länder ab. Andere internationale Zusammenarbeit kannst du trotzdem unterstützen.",
    context:'Das Pariser Abkommen (2015) setzt auf freiwillige nationale Ziele statt bindender Vorgaben. Das gilt manchen als Stärke, anderen als entscheidende Schwäche.',
    simple:"Den Klimawandel kann man nur mit verbindlichen internationalen Verträgen lösen, an die sich alle Länder halten müssen.",
    axis:'governance', pol:+1 },

  { topic:'◈ Klima-Governance global', topicClass:'pill-governance', sideSub:'Globale Klimapolitik',
    text:'Kein Land sollte sich beim Klimaschutz internationalen Vorgaben unterwerfen, die seiner eigenen Wirtschaft schaden.',
    terms:{},
    agree:"Du lehnst es ab, dass Länder sich wirtschaftlich schädlichen internationalen Klimavorgaben unterordnen sollen. Klimaschutz ohne solche Nachteile ist damit nicht bewertet.",
    disagree:"Du hältst die Ablehnung internationaler Klimavorgaben allein wegen wirtschaftlicher Schäden nicht für richtig. Daraus folgt nicht, dass du jeden wirtschaftlichen Schaden akzeptierst.",
    context:'Der Konflikt zwischen nationalem Eigeninteresse und globalem Gemeingut ist der Kern jeder Klimaverhandlung, das „Trittbrettfahrer"-Problem.',
    simple:"Kein Land sollte sich an internationale Klimaschutzregeln binden, die seiner eigenen Wirtschaft schaden.",
    axis:'governance', pol:-1 },

  { topic:'◈ Klima-Governance global', topicClass:'pill-governance', sideSub:'Globale Klimapolitik',
    text:'Ein [[CO₂-Grenzausgleich]] (CBAM) ist legitim, um globale Klimastandards durchzusetzen, auch gegen den Willen anderer Staaten.',
    terms:{ 'CO₂-Grenzausgleich':'CBAM: eine EU-Abgabe auf importierte Waren (z. B. Stahl, Zement) nach ihrem CO₂-Ausstoß. Sie soll verhindern, dass Produktion in Länder mit laxem Klimaschutz abwandert.' },
    agree:"Du hältst eine solche Abgabe zur Durchsetzung von Klimastandards auch gegen den Willen anderer Staaten für gerechtfertigt.",
    disagree:"Du lehnst dieses Mittel zur Durchsetzung von Klimastandards unter den genannten Bedingungen ab. Ob die Abgabe selbst oder das Vorgehen gegen den Willen anderer Staaten ausschlaggebend ist, bleibt offen.",
    context:'Der EU-CBAM läuft seit 2023 an. Schwellenländer kritisieren ihn als „grünen Protektionismus", die EU verteidigt ihn als Schutz vor Carbon Leakage.',
    simple:"Eine CO₂-Abgabe auf eingeführte Waren ist gerechtfertigt, um weltweite Klimastandards durchzusetzen, auch wenn andere Länder dagegen sind.",
    axis:'governance', pol:+1 },

  { topic:'◈ Klima-Governance global', topicClass:'pill-governance', sideSub:'Globale Klimapolitik',
    text:'Klimapolitik ist Sache der Nationalstaaten. Internationale Klimabürokratie bringt wenig.',
    terms:{},
    agree:"Du siehst Klimapolitik als Aufgabe der Nationalstaaten und bewertest den Nutzen internationaler Klimabürokratie als gering.",
    disagree:"Du lehnst die rein nationale Zuständigkeit ab oder siehst mehr Nutzen in internationaler Klimabürokratie. Nationale Maßnahmen kannst du trotzdem wichtig finden.",
    context:'Klima ist ein globales Gemeingut: Emissionen kennen keine Grenzen. Deshalb gilt internationale Koordination vielen als unverzichtbar, trotz ihrer Schwerfälligkeit.',
    simple:"Die einzelnen Länder sollten ihre Klimapolitik selbst regeln. Internationale Verwaltung für Klimapolitik bewirkt wenig.",
    axis:'governance', pol:-1 },

  // ── Block 6d (erweitert): Globale Finanzordnung (IWF & Weltbank) ──
  { topic:'◈ Globale Finanzordnung', topicClass:'pill-governance', sideSub:'IWF & Weltbank',
    text:'Institutionen wie der [[IWF]] und die [[Weltbank]] sind notwendig, um Finanzkrisen und Staatspleiten zu bewältigen.',
    terms:{ 'IWF':'Internationaler Währungsfonds: vergibt Notkredite an Staaten in Finanznot, meist gegen Auflagen zu Sparpolitik und Reformen.', 'Weltbank':'Internationale Organisation, die ärmeren Ländern langfristige Kredite und Hilfe für Entwicklungsprojekte gibt, etwa für Infrastruktur, Bildung und Gesundheit.' },
    agree:"Du hältst Institutionen wie IWF und Weltbank für notwendig, um solche Krisen zu bewältigen. Damit befürwortest du nicht jede ihrer Maßnahmen oder Kreditbedingungen.",
    disagree:"Du hältst diese Institutionen für die Krisenbewältigung nicht für notwendig. Welche Alternativen du bevorzugst oder ob du ihre Arbeit teilweise nützlich findest, bleibt offen.",
    context:'IWF und Weltbank, 1944 gegründet, sind zentrale Akteure der Weltwirtschaft. Ihre Stimmrechte sind nach Wirtschaftskraft verteilt, die USA haben faktisch ein Vetorecht.',
    simple:"Organisationen wie der Internationale Währungsfonds und die Weltbank sind nötig, um Finanzkrisen und die Zahlungsunfähigkeit von Staaten zu bewältigen.",
    axis:'governance', pol:+1 },

  { topic:'◈ Globale Finanzordnung', topicClass:'pill-governance', sideSub:'IWF & Weltbank',
    text:'Die [[Auflagen]] von IWF und Weltbank zwingen armen Ländern eine Politik auf, die ihnen mehr schadet als nützt.',
    terms:{ 'Auflagen':'Bedingungen für Kredite, oft Sparmaßnahmen, Privatisierungen und Marktöffnung, auch „Strukturanpassungsprogramme" genannt.' },
    agree:"Du bewertest die durch diese Auflagen erzwungene Politik für arme Länder insgesamt als überwiegend schädlich.",
    disagree:"Du teilst die Einschätzung einer insgesamt überwiegend schädlichen Politik nicht. Einzelne Auflagen kannst du trotzdem kritisieren oder ablehnen.",
    context:'Die „Strukturanpassungsprogramme" der 1980er und 1990er Jahre gelten heute vielfach als gescheitert: Kürzungen bei Gesundheit und Bildung trafen die Ärmsten am härtesten.',
    simple:"Die Bedingungen des Internationalen Währungsfonds und der Weltbank zwingen arme Länder zu einer Politik, die ihnen mehr schadet als hilft.",
    axis:'governance', pol:-1 },

  { topic:'◈ Globale Finanzordnung', topicClass:'pill-governance', sideSub:'IWF & Weltbank',
    text:'Reiche Länder sollten ärmeren Ländern [[Schulden erlassen]] und mehr Entwicklungshilfe geben, als gemeinsame globale Verantwortung.',
    terms:{ 'Schulden erlassen':'Der teilweise oder vollständige Verzicht von Gläubigern auf Rückzahlung, um überschuldete Länder vor dem Kollaps zu bewahren.' },
    agree:"Du befürwortest Schuldenerlass und mehr Entwicklungshilfe und verstehst beides als gemeinsame globale Verantwortung.",
    disagree:"Du lehnst das Gesamtpaket oder einen Teil davon ab: Schuldenerlass, mehr Entwicklungshilfe oder die Begründung als globale Verantwortung. Das bedeutet nicht, dass du jede Hilfe ablehnst.",
    context:'Die Entschuldungsinitiative für arme Länder (HIPC) ab 1996 erließ Milliarden. Heute wächst die Schuldenlast vieler Länder erneut, auch gegenüber China als großem Gläubiger.',
    simple:"Reiche Länder sollten ärmeren Ländern Schulden erlassen und mehr Hilfe für ihre Entwicklung geben. Das gehört zu ihrer gemeinsamen weltweiten Verantwortung.",
    axis:'governance', pol:+1 },

  { topic:'◈ Globale Finanzordnung', topicClass:'pill-governance', sideSub:'IWF & Weltbank',
    text:'Jedes Land ist für seine eigene Wirtschaft selbst verantwortlich. Internationale Umverteilung über solche Institutionen lehne ich ab.',
    terms:{},
    agree:"Du betonst die wirtschaftliche Eigenverantwortung der Länder und lehnst internationale Umverteilung über solche Institutionen ab. Andere Formen der Zusammenarbeit bleiben offen.",
    disagree:"Du teilst die pauschale Absage an Umverteilung über diese Institutionen oder die Betonung nationaler Eigenverantwortung nicht. Nationale Verantwortung und internationale Unterstützung kannst du auch miteinander verbinden.",
    context:'Der Streit um Eigenverantwortung gegen globale Gerechtigkeit prägt die Entwicklungspolitik, auch in der Debatte um Klima-Entschädigungen für arme Länder.',
    simple:"Jedes Land ist selbst für seine Wirtschaft verantwortlich. Eine Umverteilung zwischen Ländern über Organisationen wie IWF und Weltbank lehne ich ab.",
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
