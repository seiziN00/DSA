def draw_gift(size, symbol):
  if size < 2:
    return ''

  envelope = ""
  envelope += symbol*size
  for _ in range(size - 2):
    envelope += f"\n{symbol}{" " * (size - 2)}{symbol}"
  envelope += f"\n{symbol*size}"
  return envelope