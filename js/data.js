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
    axis:'governance', pol:+1 }
];

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
    merke:'Regeln sind nur so stark wie ihre Durchsetzung. Das gilt zwischen Staaten genauso wie auf dem Schulhof.' }
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
