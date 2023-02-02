from django.contrib import admin
from .models import Scenario

class ScenarioAdmin(admin.ModelAdmin):
    list_display = ('scenarioName', 'createdYear', 'createdBy', 'user')

# Register your models here.

admin.site.register(Scenario, ScenarioAdmin)
