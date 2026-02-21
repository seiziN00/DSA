def manufacture_gifts(gifts_to_produce):
	success_gifts = []
	for gift in gifts_to_produce:
		if isinstance(gift["quantity"], int):
			for i in range(gift["quantity"]):
				success_gifts.append(gift["toy"])
		else:
			continue
	return success_gifts