from django.views.decorators.http import require_http_methods
from requests import post
from rest_framework.decorators import renderer_classes, api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from user.models import users_new
from rest_framework import serializers



search_userlist = {}
@api_view(['GET','POST'])
def searchUser(request):
    print("\n\ninside search userD\n\n")
    print("request.method",request.method)

    #---------------login main start-----------------
    if request.method == "POST":
        global search_userlist

        print("received value su ", request.data)
        getQueryString = request.data
        print("get query string: su  ", getQueryString)
        print("type pf get query: su ", type(getQueryString))
        # print("** query: ", type(**getQueryString))
        # course_qs = users_new.objects.filter(**getQueryString)
        # print(getQueryString['name'])
        course_qs = users_new.objects.filter(name__startswith=getQueryString['name'].upper(), **{"private": "False"})
        print("course qs: su ", course_qs)
        print("type of course qs: su ", type(course_qs))
        if (course_qs.exists()):
            print("\n\n query set exists su---: ", course_qs)
            model = None
            print(len(course_qs))
            names = []
            userIdList= []
            for i in range(len(course_qs)):
                # model = course
                # print(model)
                sample = list(course_qs.values_list()[i])
                print("list userid: ",sample[0])
                names.append(sample[1])
                userIdList.append(sample[0])
            print(names)
            # print(sample) # has the data of the logged in user as a list
            search_userlist['users_list'] = names
            search_userlist['users_id'] = userIdList
            print("names-->> ", names, "<---> ", search_userlist)
            return JsonResponse({'users_list': names,'users_id': userIdList})


        else:
            return Response("No such Users found!!!", status=status.HTTP_400_BAD_REQUEST)


    print("end search")

def searchUserList(request):
    print("inside searchUserList")
    print("s user list d-->> ",(search_userlist))
    return render(request,'user/templates/html_files/search_friend.html',search_userlist)



'''
class searchUser(APIView):
    print("\n\ninside search userD\n\n")
    name= serializers.CharField(allow_blank=False,required=True,error_messages={"required":"Please enter name to search",
                                                                                "allow_blank":"value dal"})
    #---------------login main start-----------------
    def post(self,request):
            print("received value su ",self.request.data)
            getQueryString = self.request.data
            print("get query string: su  ",getQueryString)
            print("type pf get query: su ",type(getQueryString))
            #print("** query: ", type(**getQueryString))
            #course_qs = users_new.objects.filter(**getQueryString)
            #print(getQueryString['name'])
            course_qs= users_new.objects.filter(name__startswith=getQueryString['name'].upper(),**{"private":"False"})
            print("course qs: su ", course_qs)
            print("type of course qs: su ", type(course_qs))
            if (course_qs.exists()):
                print("\n\n query set exists su---: ", course_qs)
                model = None
                print(len(course_qs))
                names=[]
                for i in range(len(course_qs)):
                    #model = course
                    #print(model)
                    sample = list(course_qs.values_list()[i])
                    names.append(sample[1])
                print(names)
                #print(sample) # has the data of the logged in user as a list
                return Response("User Found "+ str(names), status=status.HTTP_200_OK)

            else:
                return Response("No such Users found!!!",status=status.HTTP_400_BAD_REQUEST)
'''