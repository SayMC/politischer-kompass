// js/scoring.js — klassisches Script (kein Modul), damit es auch per
// Doppelklick auf index.html (file://) funktioniert.
// Wertet die Slider-Antworten (-3..+3) zu Achsenwerten (-100..+100) aus.
// answered: { [fragenindex]: -3..+3 } · questions: Array mit {axis, pol}
window.computeScores = function computeScores(answered, questions) {
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
};

// Bereichswahl für Erklärtexte: >+40 → hi, <-40 → lo, sonst mid
window.scoreBand = (v) => v > 40 ? 'hi' : v < -40 ? 'lo' : 'mid';
