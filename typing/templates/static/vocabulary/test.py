import collections
from random import shuffle
with open('CET6') as f:
	stk = f.readlines()

print len(stk)
words = [ x.split(" ")[0] for x in stk]

print words[-1]
d = collections.defaultdict(list)

for w in words:
	if w[0].upper() in "UVWXYZ": d["UVWXYZ"].append(w)
	else: d[w[0].upper()].append(w)
#shuffle(d['A'])


for x in sorted(d.keys()):
	print x +" " + str(len(d[x]))


