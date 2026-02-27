height = 5
ornament = "o"
frequency = 2

tree = []
c = 1
for i, k in enumerate(range(height, 0, -1)):
	tree.append(" " * (k - 1))
	for j in range(2*i + 1):
		if c % frequency == 0:
			tree.append(ornament)
			c += 1
		else:
			tree.append("*")
			c += 1
	tree.append("\n")

tree.pop()
tree.append("\n" + " " * (height - 1) + "#")
print("".join(tree))
