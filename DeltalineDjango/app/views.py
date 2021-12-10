from django.http import HttpResponse


def index(request):
    text = "This is only for testing"
    return HttpResponse(text)
