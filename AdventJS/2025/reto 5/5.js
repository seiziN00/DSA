/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
	fromTime = fromTime.slice(0, -3);
	takeOffTime = takeOffTime.slice(0, -3);

	const diccionario = {
		"*": "-",
		"@": "T",
		"|": ":"
	}
	
	const regex = /\*|@|\|/g;
	
	fromTime = fromTime.replace(regex, (match) => diccionario[match]);
	takeOffTime = takeOffTime.replace(regex, (match) => diccionario[match]);
	
	fromTime += "Z";
	takeOffTime += "Z";
	
	let t1 = new Date(fromTime);
	let t2 = new Date(takeOffTime);
	let resultado = (t2 - t1) / 1000; 
	return resultado;
}