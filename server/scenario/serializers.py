from rest_framework import serializers
from .models import Scenario

class ScenarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scenario
        fields = ('id', 'scenarioName', 'createdYear', 'createdBy', 'lastModified')

