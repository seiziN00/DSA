def decode_santa_pin(code: str) -> str:
  parsed_code = []
  parser = ""
  for c in code:
    if c == "[":
      continue
    elif c == "]":
      parsed_code.append(parser)
      parser = ""
      continue
    parser += c

  if not parsed_code: return None
  if len(parsed_code) < 4: return None

  decoded = []
  for p_code in parsed_code:
    if p_code == "<":
      if len(decoded) == 0:
        return None
      decoded.append(decoded[len(decoded) - 1])
      continue
    inicial = p_code[0]
    valor = int(inicial)
    operaciones = p_code[1:]
    for op in operaciones:
      if op == "+":
        valor = (valor + 1) % 10
      elif op == "-":
        valor = (valor + 9) % 10
      else:
        return None
    decoded.append(valor)

  return "".join(decoded)