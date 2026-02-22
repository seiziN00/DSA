function decodeSantaPin(code) {
  const bloques = code.match(/\[[^\]]+\]/g);
  if (!bloques) return null;

  const resultado = [];

  for (const bloque of bloques) {
    const contenido = bloque.slice(1, -1);

    if (contenido === "<") {
      if (resultado.length === 0) return null;
      resultado.push(resultado[resultado.length - 1]);
      continue;
    }

    const inicial = contenido[0];
    if (!/^\d$/.test(inicial)) return null;

    let valor = Number(inicial);
    const operaciones = contenido.slice(1);

    for (const op of operaciones) {
      if (op === "+") valor = (valor + 1) % 10;
      else if (op === "-") valor = (valor + 9) % 10;
      else return null;
    }

    resultado.push(valor);
  }

  return resultado.length === 4 ? resultado.join("") : null;
}
