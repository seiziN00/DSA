function manufactureGifts(giftsToProduce) {
	let success_gifts = [];

	for (const gift of giftsToProduce) {
		for (let i = 0; i < gift.quantity; i++) {
			success_gifts.push(gift.toy);
		}
	}

	return success_gifts;
}