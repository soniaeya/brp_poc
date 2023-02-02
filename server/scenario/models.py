import datetime
from django.db import models

# Create your models here.
class Scenario(models.Model):
    scenarioName = models.CharField(max_length=120)
    createdYear = models.CharField(max_length=10, default="2023")
    createdBy = models.CharField(max_length=120)
    user = models.CharField(max_length=120, default="user")


    def _str_(self):
        return self.title

