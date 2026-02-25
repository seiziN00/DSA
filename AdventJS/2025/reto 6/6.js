/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const counter = {};
  const pares = [];

  for (const { hand, color } of gloves) {
    counter[color] ??= 0;
    
    if ((hand === "L" && counter[color] < 0) ||
        (hand === "R" && counter[color] > 0)) {
      pares.push(color);
    }

    counter[color] += hand === "L" ? 1 : -1;
  }

  return pares;
}

// Usar ??= para inicializar contadores.