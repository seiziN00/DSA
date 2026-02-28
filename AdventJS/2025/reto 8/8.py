def find_unique_toy(toy: str) -> str:
  largo = len(toy)
  
  if largo <= 0: return ""
  
  for i in range(largo):
    letra_quitada = toy[i:i+1]
    nuevo = toy[:i] + toy[i+1:]
    if letra_quitada.lower() not in nuevo.lower():
      return letra_quitada

  return ""