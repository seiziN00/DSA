/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let branch = "";
  let c = 1;

  for (let i = 0, k = height; k > 0 && i < height; i++, k--) {
    branch += " ".repeat(k - 1);
    for (let j = 0; j < (2*i + 1); j++) {
      branch += (c % frequency === 0) ? ornament : "*";
      c++;
    }
    branch += "\n";
  }

  branch += " ".repeat(height - 1) + "#";
  return branch
}