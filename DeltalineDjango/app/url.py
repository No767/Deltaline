from django.conf.urls import include, patterns, url

urlpatterns = patterns(
    "",
    url(r"^hello/", "app.views.hello", name="hello"),
)
