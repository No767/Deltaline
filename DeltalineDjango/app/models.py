from django.db import models
import datetime
# Create your models here.

class Comments(models.Model):
	username = models.CharField(max_length=15)
	time = models.DateTimeField()
	description = models.TextField()
