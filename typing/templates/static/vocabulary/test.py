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
		elif w[0].upper() in "GH": d["GH"].append(w)
		elif w[0].upper() in "JKL": d["JKL"].append(w)
		elif w[0].upper() in "NO": d["NO"].append(w)
		elif w[0].upper() in "QR": d["QR"].append(w)
		else: d[w[0].upper()].append(w)


for x in sorted(d.keys()):
	print x +" " + str(len(d[x]))


