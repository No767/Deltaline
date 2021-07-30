from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("<div align=center> <h3>Hello, world. You're at the polls index.</h3> \nHelp me")


def body(request):
    return HttpResponse("Only Testing")