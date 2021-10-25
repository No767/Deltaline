from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    text = "This is only for testing"
    return HttpResponse(text)
