gloves = [
  { "hand": 'L', "color": 'red' },
  { "hand": 'R', "color": 'red' },
  { "hand": 'R', "color": 'green' },
  { "hand": 'L', "color": 'blue' },
  { "hand": 'L', "color": 'green' }
]

counter = {}
pares = []

for glove in gloves:
  counter.setdefault(glove["color"], 0)

  if glove["hand"] == "L" and counter[glove["color"]] < 0 or \
     glove["hand"] == "R" and counter[glove["color"]] > 0:
     pares.append(glove["color"])

  counter[glove["color"]] += 1 if glove["hand"] == "L" else -1

print(pares)




from typing import List, Dict

def match_gloves(gloves: List[Dict[str, str]]) -> List[str]:
  counter = {}
  pares = []

  for glove in gloves:
    counter.setdefault(glove["color"], 0)

    if glove["hand"] == "L" and counter[glove["color"]] < 0 or \
       glove["hand"] == "R" and counter[glove["color"]] > 0:
       pares.append(glove["color"])

    counter[glove["color"]] += 1 if glove["hand"] == "L" else -1
  return pares
  