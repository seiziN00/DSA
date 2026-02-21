function drawGift(size, symbol) {
	if (size < 2) {
		return '';
	}

	let envelope = "";
	envelope += `${symbol.repeat(size)}`;
	for (let i = 0; i < size - 2; i++) {
		envelope += `\n${symbol}${" ".repeat(size - 2)}${symbol}`;
	}
	envelope += `\n${symbol.repeat(size)}`;

	return envelope;
}