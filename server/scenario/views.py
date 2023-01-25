from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ScenarioSerializer
from .models import Scenario

# Create your views here.

class ScenarioView(viewsets.ModelViewSet):
    serializer_class = ScenarioSerializer
    queryset = Scenario.objects.all()