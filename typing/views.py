# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import codecs
import os
import collections
from random import shuffle

def index(request):
	return render(request,'index.html')

@csrf_exempt
def ajax_words(request):
	#print "request.POST['alphabet']"
	#print settings.BASE_DIR
	ret = readData(request.POST['catagory'],request.POST['alphabet'])
	return HttpResponse(ret);

def readData(catagory='CET4',alphabet="all"):
	if catagory=="programme":
		with codecs.open( settings.BASE_DIR + '/typing/templates/static/vocabulary/%s' % alphabet ,'r',encoding='utf8')   as f:
			stk = f.readlines()
		words = [ x.split(" ")[0] for x in stk]
		shuffle(words)
		return ("|").join(words)

	
	with codecs.open( settings.BASE_DIR + '/typing/templates/static/vocabulary/%s' % catagory ,'r',encoding='utf8')   as f:
		stk = f.readlines()

	words = [ x.split(" ")[0] for x in stk]

	if catagory=="linux" or catagory=="toefl":
		shuffle(words)
		return ("|").join(words)

	


	d = collections.defaultdict(list)

	for w in words:
		if w[0].upper() not in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":continue
		if w[0].upper() in "UVWXYZ": d["UVWXYZ"].append(w)
		elif w[0].upper() in "GH": d["GH"].append(w)
		elif w[0].upper() in "JKL": d["JKL"].append(w)
		elif w[0].upper() in "NO": d["NO"].append(w)
		elif w[0].upper() in "QR": d["QR"].append(w)
		else: d[w[0].upper()].append(w)
	if alphabet=="all":
		shuffle(words)
		return ("|").join(words[:300])
	else:
		shuffle(d[alphabet])
		return ("|").join(d[alphabet])




