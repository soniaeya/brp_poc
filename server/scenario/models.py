from django.db import models

# Create your models here.
class Scenario(models.Model):
    title = models.CharField(max_length=120)
    createdBy = models.CharField(max_length=120)

    def _str_(self):
        return self.title
