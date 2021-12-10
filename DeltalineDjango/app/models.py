from django.db import models

# Create your models here.


class Comments(models.Model):
    username = models.CharField(max_length=15)
    time = models.DateTimeField()
    description = models.TextField()
