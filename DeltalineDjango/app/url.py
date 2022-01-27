from django.conf.urls import patterns, url

urlpatterns = patterns(
    "",
    url(r"^hello/", "app.views.hello", name="hello"),
)
