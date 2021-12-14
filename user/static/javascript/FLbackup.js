<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   
    <style>
        body{
            background-color: rgb(187, 187, 245);
            
        }
        .card{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            
            margin : 10px;
            text-align : center; 
            border-radius : 15px;
            margin-top: 5px;
            width: 800px;
            

            
        }
        .h{
            margin-top: 2px;
        }
        .image1{
            width:100px;
             height: 100px; 
             text-align: center; 
             border-radius: 50px;
             margin-top: 10px;
        }
        .hyper{
            font-family: serif;
            font-weight: bolder; 
            margin-top: 10px; 
        }
        .scroll{
            overflow-y: scroll; 
            height: 400px; 
            border-radius: 15px;
        }
        .scroll1{
            overflow-y: scroll; 
            height: 250px; 
            border-radius: 15px;
        }
        
        .btn{
            border-radius: 20px; 
            width: 150px; 
            height: 35px;  
            background-color: rgb(187,187, 245);
            box-shadow: rgba(0, 0, 0, 0.2);
            
        }
        .hy{
            font-family: serif; 
            font-weight: bolder; 
        }
        .card-title{
            color: orangered; 
            margin-top: 5px;
        }
        .card{
            width: 18rem;
            display: flex;
            justify-content: space-between;
            
        }
        .navbar{
            margin-top:10px ; 
            height: 50px; 
        }
        .nav-link{
            color: black; 
            font-weight: bold;
            margin-top: 7px;
        }
        .form-control{
            width: 350px;
            align-items: center; 
            margin-left: 100px; 
            margin-top: 7px;
            border-radius: 20px;
        }
        .card1{
          margin-left: 0%;
          box-shadow: dimgray;
          width: 18rem;
            display: flex;
            justify-content: space-between;
           
        }
        .des{
          padding: 3px;
          text-align: center;
          padding-top: 10px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
        }
    button{
     margin-top: 2px;
     margin-bottom: 10px;
     background-color: white;
     border: 1px solid rgb(177, 152, 152);
     border-radius: 5px;
     padding:2px;
   }
    .newsfeed{
       padding: 0 30px;
      

   }
   .card2{
       width: 100%;
       height: 100%;
       background: lavender;
       box-shadow: 0 0 1px 2px rgba(0, 0, 0, 5);
       margin-bottom: 20px;
       border-radius: 2px;
       font-size: 14px
   }
   .card2 .picture{
     
       background-position: 50%;
       background-size: cover;

   }
   .card2 .content{
     display: flex;
     flex-direction: column;
     padding: 15px 10px;
   }
   .card .header{
     display: flex;
     align-items: center;
   }
   .card2 profile-pic{
     background-image: url(/img/img2.jpg);
     background-position: 50%;
     background-size: cover;
     height: 50px;
     width: 50px;
     border-radius: 50%;
   }
   .card2 details{
     margin-left: 10px;

   }
   .card2 .posted{
     font-size: 10px;
     padding-top: 3px;

   }
   .card2 .desc{
     padding-top: 10px;
     line-height: 1.5;
   }
   .card2 .tags{
     font-size: 12px;
     color: crimson;
     padding-top: 10px;
   }
   .card2 .footer{
     display: flex;
     justify-content: space-between;
     padding-top: 20px;
   }
   .card2 .footer .like{
     flex: 0 0 25%;
   }
   .card2 .footer .comment{
     flex: 1;
   }
   .card2 .footer .share{
     flex: 0 0 18%;
   }
   .card2 .footer i{
     padding-right:  3px;
   }
   .input1{
     width: 500px;
     height: 50px;
     border-radius: 30px;
   }

  </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <img src="/static/images/logo.png" alt="" width="40" height="40">
        <a class="navbar-brand" href="#" >FR/\NZO..</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          
        </button>
        <div>
          <a href="http://127.0.0.1:8000/api/sign_up/combine_profile"><i class="glyphicon glyphicon-home" style="font-size: 30px; color: black;"></i></a>
        </div>
      
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div style="display: inline-block; margin-left: 170px; ">
              <form class="d-flex">
                  <input class="form-control md-2" type="text" placeholder="Search"  style="width: 380px; margin-top: 40px;">
                  <a href="search_friend.html"><span class="glyphicon glyphicon-search" style="margin-top: 45px;margin-left: 5px; font-size: 20px;color: black;"></span></a>               </form>
        </div>
        <div class="dropdown" style="margin-left: 850px;bottom: 38px;">
          <select class="btn btn-primary dropdown-toggle" type="button" style="margin-top: 0% auto; color: black;"id="list" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin-top:0px;">Profile
            
          <!--select id="list"-->
            <option value="1" href="http://127.0.0.1:8000/api/aboutMe" >Profile</option>
            <option value="2" href="http://127.0.0.1:8000/api/preferences">Preferences</option>
            <option value="3" href="http://127.0.0.1:8000/api/friends" type="submit" id="FL">Friend List</option>
            <option value="4" href="http://127.0.0.1:8000/api/franzo">Log-out</option>
          </select>
         
          <!---div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="http://127.0.0.1:8000/api/aboutMe">About Me</a>
            <a class="dropdown-item" href="http://127.0.0.1:8000/api/preferences">Preferences</a>
            <a class="dropdown-item" href="http://127.0.0.1:8000/api/friends">Friend List</a>
            <a class="dropdown-item" href="http://127.0.0.1:8000/api/franzo">Log-out</a>
          </div-->
        </div>
        
        <!--script>console.log("list values> ", Fnames)</script-->
         
      </nav>
<!--navbar complete-->
<!-- MY Profile code start-->
    <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4">
            <div class="col-lg-6 mb-4">
                <div class="card" style="width: 300px;">
                    <div class="card-body">
                        <h3 class="h">Profile</h3>
                        <hr>
                        <center><img class="image1" src="/static/images/female.png"></center>
                        <h4 class="hyper" id="user-names">
                          <script>
                               document.getElementById("user-names").innerHTML = localStorage.getItem("AP");

                          </script>
                      </h4>
                        <hr>
                        <h5>Friends</h5>
                        <hr>
                        <h5>Location</h5>

                    </div>
                </div>
            
            </div>
            <!--My Profile complete-->
            <!---->
            
            <!--left side complete-->
            <!--Friend List-->
            <form >
            <div class="col-sm-4">
                <div class="col-lg-6 mb-4">
                  <form class="formFriendList">
                    
                  <div class="card" id="items" style="width:500px; margin-left:180px ;">
                    <div class="listFriend">
                     <div class="request" style="display: inline-flex; "> 
                    <h1 style="margin-left:80px ;">Friend List</h1>
                    
                      <button class="btn" onclick="window.location.href = 'http://127.0.0.1:8000/api/friends/pending';" style="margin-left: 60px; height: 35px; margin-top:20px; width: 100px;">
                        Requests
                        </button>
                      <button class="btn btn-primary" style="margin-left: 60px; height: 35px; margin-top:20px; width: 100px;">Pending</button>
                     <hr></div>
                       <!--first div card start-->

                       <div id="target">
                        <!-- all divs will append here -->yaha aaya hhhhhhh
                     </div>
                       
                       
                       <form class="d-flex"  id="formFL" margin: 0 auto;width:250px;>
                        

                    <div class="card" style="width: 400px; margin-left: 50px; margin-top: 15px">
                        <div class="card-body" style="display: inline-flex;">
                            <img src="/static/images/male.png" style="width: 100px; height: 90px; border-radius: 50px;">
                            <h3 style="margin-left: 50px; margin-top: 30px;" id="Fnames"></h3>
                           
                            <div>
                              
                              <a href="#"> <i class='glyphicon glyphicon-comment' style='font-size:40px; margin-top: 30px; margin-left: 80px; color: rgb(187, 187, 245);'></i></a>
                              <br>

                              </div>
                        </div>
                        </div>>

                        <script >
                                
                                
                          console.log("script FL")
                    var FnamesJS= (localStorage.getItem("Fnames"));
                    console.log("value ", FnamesJS, " type ", typeof(FnamesJS));
                    var FnamesList = FnamesJS.split(",");
                    console.log("value ", FnamesList, " type ", typeof(array));
                    //document.getElementById("names").innerHTML =FnamesList;
                    document.getElementById("Fnames").innerHTML = FnamesList[0];
                  </script>

                      </form>
                      
                        
                        <!--first div card ended-->
                        </div>
                       
                   
                        
                  </div>  
                  </div>
                  </form>
                  </div>    
                
                </div>
             
                 

            <!--Friend list complete-->
            <!--Right side ads for user-->
            <div class="col-sm-4">
            <div class="side">
            <div class="col-lg-6 mb-4">
            <div class="card" style=" margin-left: 680px;  display: flex;  width: 250px; " >
                <div class="scroll1">
                  <medium>Ads</medium>
                  <h5 class="card-title"  >Great India Festival</h5>
                  <img src="/static/images/ad2.jpg" class="card-img-top" >
                    <div class="card-body">
                    <p class="card-text" >Upto 60% Off | Women's Clothing</p>
                    <a href="#" class="btn btn-primary"style="background-color:orangered; color:white; border-color:white;">Shopping.com</a>
                  </div>
                  <hr class="new1">
                  <h5 class="card-title" style="color: brown; font-style: italic">Burger Feed Your Soul!!</h5>
                  <img src="/static/images/burger.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text" style="color:rgb(143, 46, 10); font-weight: bold; font-family:serif;"> It takes two hands to hold a Whopper.</p>
                    <a href="#" class="btn btn-primary" style="background-color:brown; color:white; border-color:white;">Burger.com</a>
                  
                </div>
            </div>
            </div>
            </div>
            <!--Ad suggestions-->
              <div class="col-lg-6 mb-4">
                <div class="card" style="align-items: top; margin-left: 680px;  display: flex;  width: 250px;" >
                  <div class="scroll1">
                    <medium>Suggestion Ads</medium>
                    <h5 class="card-title"  >Great India Festival</h5>
                    <img src="/static/images/ad2.jpg" class="card-img-top" >
                      <div class="card-body">
                      <p class="card-text" >Upto 60% Off | Women's Clothing</p>
                      <a href="#" class="btn btn-primary"style="background-color:orangered; color:white; border-color:white;">Shopping.com</a>
                    </div>
                    <hr class="new1">
                    <h5 class="card-title" style="color: brown; font-style: italic">Burger Feed Your Soul!!</h5>
                    <img src="/static/images/burger.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text" style="color:rgb(143, 46, 10); font-weight: bold; font-family:serif;"> It takes two hands to hold a Whopper.</p>
                      <a href="#" class="btn btn-primary" style="background-color:brown; color:white; border-color:white;">Burger.com</a>
                    
                  </div>
              </div>
              </div>
              </div>
            </div>
    </div>
    
</body>
</html>