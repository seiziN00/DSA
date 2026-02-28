def draw_tree(height, ornament, frequency):
  tree = []
  c = 1
  for i, k in enumerate(range(height, 0, -1)):
    tree.append(" " * (k - 1))
    for j in range(2*i + 1):
      tree.append(ornament if c % frequency == 0 else "*")
		  c += 1
    tree.append("\n")
  
  tree.pop()
  tree.append("\n" + " " * (height - 1) + "#")
  return "".join(tree)