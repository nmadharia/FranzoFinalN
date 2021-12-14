from django.db import models

from django.db import models

class Adv_prof(models.Model):
    userId = models.IntegerField(primary_key=True)
    About_me = models.CharField(max_length=25, blank=True,null=True)
    Interest = models.CharField(max_length=25, blank=True,null=True)
    Hobbies = models.CharField(max_length=20, blank=True,null=True)
    Activities = models.CharField(max_length=20, blank=True)
    Location = models.CharField(max_length=50, blank=True, null=True)
    FriendCount= models.IntegerField(default=0)


from django.db import models
