import datetime
from django.db import models

# Create your models here.
class Scenario(models.Model):
    scenarioName = models.CharField(max_length=120)
    createdYear = models.CharField(max_length=120, default="2023")
    createdBy = models.CharField(max_length=120)
    lastModified = models.CharField(max_length=120)


    def _str_(self):
        return self.title

