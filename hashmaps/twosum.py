# Two Sum algorithm problem

nums = [2, 7, 11, 15]
target = 9

hashmap = {}

for i, n in enumerate(nums):
	complemento = target - n
	if complemento in hashmap:
		print(hashmap[complemento], i)
	else:
		hashmap[n] = i