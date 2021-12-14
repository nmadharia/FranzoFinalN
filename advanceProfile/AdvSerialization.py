from rest_framework import serializers

from advanceProfile import models
from advanceProfile.models import Adv_prof



class Adv_profClass(serializers.ModelSerializer):
    Location= serializers.CharField(required=True)
    About_me = serializers.CharField(required=False)
    Interest = serializers.CharField(required=False)
    Hobbies = serializers.CharField(required=False)
    Activities = serializers.CharField(required=False)
    class Meta:
        model = Adv_prof
        fields = '__all__'