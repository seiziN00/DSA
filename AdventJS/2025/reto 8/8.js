/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  let letraQuitada = "";
  let nuevo = "";

  if (toy.length <= 0) {
    return "";
  } 

  for (let i = 0; i < toy.length; i++) {
    letraQuitada = toy.slice(i, i+1);
    nuevo = toy.slice(0, i) + toy.slice(i + 1);
    if (!nuevo.toLowerCase().includes(letraQuitada.toLowerCase())) {
      return letraQuitada;
    }
  }
  return ''
}