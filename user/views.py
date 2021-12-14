
#----api.py code----
import datetime
import hashlib

from Posts.models import Post
from Posts.postSerialization import post_Class
from advanceProfile.AdvSerialization import Adv_profClass
from advanceProfile.models import Adv_prof
from django.http import QueryDict
from django.views.decorators.http import require_http_methods
from requests import post
from rest_framework.decorators import renderer_classes, api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.request import Request
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, HttpResponse

import json

from Friend.AddFriendSerialization import AddFriendSerializerClass
from Friend.models import friendModel
from socialmedia import *
from .loginSerialization import *
from .serialization import *
from .user_serialization import *
from .OtpSerialization import *
from .OtpVerify import *

import random,smtplib


#-----------------signup get post put delete-----------------

email=""


@api_view(['GET','POST'])

def users_new2(request):
    print("----------inside user new function", request.method)
    #print("post dATAa ", request.post)

    form = serializerClass()
    if (request.method == 'GET'):
        print("get getting called")
    # if request.method == 'POST':
    # form = serializerClass(request.POST)
    #    if form.is_valid():
    #        form.save()
    #        return redirect('users_new')
    # if request.is_ajax():
    # user_post_data = JSONParser().parse(request)
    # user_serializer = user_Serialization_Class(data=user_post_data)

    print("req meth: ", request.method, "\nreq post value", request.POST)
    print("req data: ", request.data)
    if request.method == 'POST':
        global email
        # -----email setup and login---------------------
        number = random.randint(1111, 9999)  # otp generration
        s = smtplib.SMTP('smtp.gmail.com', 587)
        s.ehlo()
        s.starttls()
        s.login('franzosocialmedia@gmail.com', 'apurva87654321')
        print(s.login('franzosocialmedia@gmail.com', 'apurva87654321'))

        print("inside ajax if")
        print("req data post print ----- ", (request.data))
        # print("req data post print iterate ----- ", (request.data['emailid']))    #fetching email id from query dictionary
        copy_GET = QueryDict('a=1&a=2&a=3', mutable=True)
        print("PASS COPYget")
        # l = copy_GET.getlist('a')
        # l.append(u'4')
        # copy_GET.setlist('a', l)
        form = serializerClass(data=request.POST)
        # print("data form variable: ---", type(form))
        # print("type req post ", type(request.POST))
        data_dict = request.data.dict()  # converting query dict to dictionary
        print("type:---------", type(request.POST))
        print("data dict: ", data_dict)
        email = data_dict['emailid']
        print("email globalllllllll ", email)

        request.data._mutable = True
        request.data['otp'] = number
        request.data['password'] = hashlib.md5(request.data['password'].encode()).hexdigest()
        request.data['name'] = request.data['name'].upper()
        print("serializer value: ", request.data)

        print("add otp: ", request.data['otp'])

        # serializer = OtpserializerClass(request.POST, data=request.data)
        print("serializer called-------------------------------------")

        if form.is_valid():
            print("inside valid form---###")

            form.save()
            print("data---->>> test Fend ", form['userId'].value, " type: ", type(form['userId']))
            s.sendmail('franzosocialmedia@gmail.com', request.data['emailid'], str(number))
            form.validated_data['msg']="SignUp success"
            form.validated_data['status']= status.HTTP_201_CREATED
            form.validated_data['userId']= form['userId'].value
            # print("data form variable: ---", (form))
            # email= request.data['emailid']
            print("email globalllllllll 2222222 ", email)

            return Response(form.validated_data, status=status.HTTP_201_CREATED)

            # print("errors serializer: ",form.errors)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)
    print("\nif not post ")
    return render(request, 'user/templates/html_files/users_new.html', {'form': form})
@api_view(['GET','POST'])
def otp(request):
    #getQueryString = request.data.get('emailid')
    #rint("type get qs ", type(getQueryString), "value ", getQueryString)
    #request.data._mutable=True
    if request.method=='POST':
        print("req data otp ---------->  ", request.data)
        # print("otp from otp class: ",request.data['otp'])

        print("added email and otp in reqq data: ", request.data)
        check = {}
        check['emailid'] = email
        check['otp'] = request.data['otp']
        print("value: ", check, " type : ", type(check))
        serializer = OtpVerifyserializerClass(request.POST, data=request.data)
        verifyOtpQs = users_new.objects.all().filter(**check)
        print(verifyOtpQs)
        if verifyOtpQs.exists():
            #newUser= list(Adv_prof.objects.filter(**verifyOtpQs).values_list()[0])
            #print("##########_-------existss--#######", verifyOtpQs, "--->> ", newUser)
            if serializer.is_valid():
                print("otp serializer: ", serializer.validated_data)
                print("inside valid form---###")

                # s.sendmail('franzosocialmedia@gmail.com', request.data['emailid'], str(number))

                # print("data form variable: ---", (form))

                return Response(serializer.validated_data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return render(request, 'user/templates/html_files/signup_otp.html')


#------signup fetch end


@api_view(['GET','POST'])

def signIn(request):


    print("inside signIn")
    print("meth: ", request.method)
    if request.method=='POST':
        print("inside singin post--->>> received value", request.data)
        #getQueryString = request.data
        #print("get query string: ", getQueryString)
        print("type pf get query1 : ", type(request.data))
        request.data._mutable=True
        request.data['password'] = hashlib.md5(request.data['password'].encode()).hexdigest()
        # print("** query: ", type(**getQueryString))
        print("after hash: ", request.data)
        checkQs={}
        checkQs['mobilenumber']= request.data['mobilenumber']
        checkQs['password']= request.data['password']
        print("NEW values----->>> ", request.data['y'])
        course_qs = users_new.objects.filter(**checkQs)


        print("course qs: ", course_qs)
        print("type of course qs 2: ", type(course_qs))
        if (course_qs.exists()):
            print("\n\n query set: ", course_qs)
            model = None
            for course in course_qs:
                model = course
            sample = list(course_qs.values_list()[0])
            checkLocationQs= {}
            checkLocationQs['userId']=sample[0]

            AdvanceProfile = list(Adv_prof.objects.filter(**checkLocationQs).values_list()[0])
            print("advance profile-> ", AdvanceProfile)
            print("get start function and sample value: ", sample)

            s = serializerClass(data=request.data)
            if s.is_valid():
                # -------------friend count code--------------------------
                # global FnamesD
                # request.data._mutable = True

                userId = sample[0]
                userId = int(userId)
                request.data['FriendId'] = userId
                print("user logged in: ", userId)

                print("req data ", request.data)
                new = {}
                new['FriendId'] = userId
                new['Status'] = "1"  # to check status is 1 or not

                model = friendModel.objects.all().filter(**new)
                print("after model 1")
                new['FuserId'] = new['FriendId']
                del new['FriendId']
                print("req data changed 2 : ", new)
                model = model | friendModel.objects.all().filter(**new)
                print("model ", model)
                serializer = AddFriendSerializerClass(model, many=True)
                print("\n\n  s value---: ", len(serializer.data), "\nlen of model: ", len(model))
                print("serializre data: ", serializer.data)

                del new['FuserId']
                del new['Status']

                # --------------------------------------------------------



                s.validated_data['msg'] = "login success!!"
                s.validated_data['status'] = status.HTTP_200_OK
                s.validated_data['userId'] = sample[0]
                s.validated_data['name'] = sample[1]
                s.validated_data['emailid'] = sample[4]
                s.validated_data['About_me'] = AdvanceProfile[1]
                s.validated_data['Interest'] = AdvanceProfile[2]
                s.validated_data['Hobbies'] = AdvanceProfile[3]
                s.validated_data['Activities'] = AdvanceProfile[4]
                s.validated_data['Location']= AdvanceProfile[5]
                #s.validated_data['Fcount'] = AdvanceProfile[6]
                s.validated_data['Fcount']= len(serializer.data)
                print("friendddssss count--->>>>. ", len(serializer.data))
                #s.validated_data['timestamp'] = datetime.now
                print(sample)  # has the data of the logged in user as a list
                return Response(s.validated_data, status=status.HTTP_200_OK)
            return Response(s.errors,status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response("credentials doesn't match", status=status.HTTP_404_NOT_FOUND)
    return render(request,'user/templates/html_files/sign_in.html')



def aboutMe(request):
    return render(request, 'user/templates/html_files/about_me_dummy.html')



def prefrences(request):
    return render(request, 'user/templates/html_files/Prefernces_Page.html')


FnamesD={}

@api_view(['GET','POST'])

def friendList(request):
    Fnames = []
    FId= []
    print("METHOD of Friend LIST->>> ", request.method)
    if request.method=='POST':
        global FnamesD
        request.data._mutable = True
        print("inside get -- of add friend req data previous--------: ", request.data, "type ", type(request.data))
        # request.data['FriendId'] = "1"

        print("inside get -- of add friend req data : ", request.data)
        userId = request.data['FriendId']
        userId = int(userId)
        request.data['FriendId'] = userId
        print("user logged in: ", userId)

        print("req data ", request.data)
        new = {}
        new['FriendId'] = userId
        new['Status'] = "1"  # to check status is 1 or not

        model = friendModel.objects.all().filter(**new)
        print("after model 1")
        new['FuserId'] = new['FriendId']
        del new['FriendId']
        print("req data changed 2 : ", new)
        model = model | friendModel.objects.all().filter(**new)
        print("model ", model)
        # model = model | friendModel.objects.all().order_by('Friends_created').filter(**request.data)
        serializer = AddFriendSerializerClass(model, many=True)
        print("\n\n  s value---: ", len(serializer.data), "\nlen of model: ", len(model))
        print("serializre data: ", serializer.data)
        # print(len(course_qs))
        # names of friends

        # model= None
        del new['FuserId']
        del new['Status']
        for i in range(len(serializer.data)):
            # model = course
            # print(model)
            sample = serializer.data[i]
            print("sample:->> ", sample['FuserId'])
            sample['name'] = ''
            #sample['userId']= ''
            print(sample['FriendId'] == 1)
            if (sample['FriendId'] == int(userId)):
                print(sample['FuserId'])
                print("req data if ", new)

                new['userId'] = str(sample['FuserId'])

                # sample = list(users_new.objects.all().filter(**request.data).values_list()[0])
            elif (sample['FuserId'] == int(userId)):
                print(sample['FriendId'])
                print("req data elif ", new)
                new['userId'] = str(sample['FriendId'])
                # sample = list(users_new.objects.all().filter(**request.data).values_list()[0])
            sampleList = list(users_new.objects.all().filter(**new).values_list()[0])

            Fnames.append(sampleList[1])
            FId.append(sampleList[0])
            sample['name'] = Fnames[i]

            print("friend names: ", Fnames)
            print("sample list::: ", sample)
            # request.data['FuserId'] = request.data['FriendId']
            print("s data final: ", serializer.data)
            # request.data['userId']=str(sample)
            # model2= model  users_new.objects.all().filter(**request.data)
            print("names ", users_new.objects.all().filter(**new))
        print("views names___>>>> ", Fnames)
        # return Response(serializer.data, status=status.HTTP_200_OK)  # return Response(serializer.data)
        # return Response(Fnames, status=status.HTTP_200_OK)
        FnamesD['Fnames'] = Fnames
        FnamesD['FuserId'] = FId
        print("F ", Fnames, " -- ", FnamesD)

        return Response({'Fnames': Fnames, "FuserId":FId}, status=status.HTTP_200_OK)



    else:
     #   return Response("method not post", status=status.HTTP_400_BAD_REQUEST)

        return Response("not post method", status=status.HTTP_400_BAD_REQUEST)

def showfriendList(request):
    print("inside show fl ", request.method)
    print("dict fnamesD ", FnamesD)
    return render(request, 'user/templates/html_files/friend_list.html',FnamesD)#if request.method=='GET':
     #   return render(request,'user/templates/html_files/friend_list.html')


def LogOut(request):
    return render(request, 'user/templates/html_files/combine_profile.html')

@api_view(['GET','POST'])
#@csrf_exempt

def welcome(request):
    return render(request, 'user/templates/html_files/welcome.html')


@api_view(['GET','POST'])

def aboutMeForm(request):
    print("inside about me form")
    print(request.method)
    if request.method=='POST':
        print("inside post about me form ", request.data)
        print("render about me")
        print("req data about me form: ", request.data)
        getData={}
        getData['About_me'] =request.data['About_me']
        getData['Interest'] = request.data['Interest']
        getData['Hobbies'] =request.data['Hobbies']
        getData['Location'] = request.data['city']+ ", India" #+", "+request.data['city']
        getData['userId'] = request.data['userId']

        serializer = Adv_profClass(data=getData)
        print("get data: ", getData)
        print("se about me form: ", (serializer))
        if (serializer.is_valid()):
            serializer.save()
            print("\n\n---------------------")
            print("data post: ", serializer.data)
            print("data post type : ", type(serializer.data))
            print("\n-----------------------")
            return Response("Operation successfull!!!", status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return render(request, 'user/templates/html_files/aboutMe.html')


def pending(request):
    print("method->? ", request.method)
    return render(request, 'user/templates/html_files/pending_request.html')



#-------------appu post code start
getModel = {}
sample = []
@api_view(['GET', 'POST'])
def Homepage(request):
    global getModel
    global sample


    if request.method=='POST':
        print("data print-->>> ", request.data)
        request.data._mutable=True
        request.data['userId']= 3
        print("\n\n\n\nni  ajaaaaaaaaaaa->>>>>>>>>>>>>>>>>>", request.data)

        check={}
        check['Post_data']= request.data['Post_data']
        check['PuserId']= request.data['userId']
        print("\n\n\n\najaaaaaaaa->>>>>>>>>>>>>>>>>>", request.data,"----",check)
        serializer = post_Class(data=check)
        print("serializer",serializer)

        if (serializer.is_valid()):
            print("\n\n\inside validdd\n\n")
            serializer.save()
            print("\n\n---------------------")
            print("data post: ", serializer.data)
            print("data post type : ", type(serializer.data))
            print("\n-----------------------")
            #return Response(serializer.data, status=status.HTTP_200_OK)
            return render(request, 'user/templates/html_files/combine_profile.html',
                         {'getModel': getModel, 'sample': sample})

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method=='GET':
        print("Inside Homepage---->")
        model = Post.objects.all()
        model = model | Post.objects.all().order_by('-Post_Time').filter(**request.data)
        print("get start function\n models--->", model, "type of model---->", type(model))
        serializer = post_Class(model, many=True)
        print("Serializer--->", serializer.data)

        getModel = serializer.data



        print("\n\nget model of users---->>>>",len(getModel),"\n\n\nType---->>>>>",type(request.data))

        names=[]
        for i in range(len(getModel)):
            #sample = list(model.values_list()[i])
            sample = serializer.data[i]
            print("sample ", sample,"type of sample---->",type(sample))
            #names.append(sample[1])
            sample['name']=''
            sampleList = list(users_new.objects.all().filter(**request.data).values_list()[i])
            print("sample list se user id--->>>",sampleList,"\n\nsample list indexx--->",sampleList.index(0))

            names.append(sampleList[1])
            sample['name'] = names[i]
            print("Post Users names: ", names)
            print("sample list::: ", sample)
        return render(request, 'user/templates/html_files/combine_profile.html',{'getModel':getModel,'sample':sample})

    #return render(request,'user/templates/html_files/combine_profile.html',{'getModel':getModel,'sample':sample})
    #return render(request, 'user/templates/html_files/combine_profile.html',{'getModel':getModel,'sample':sample})

#------------------appu code end