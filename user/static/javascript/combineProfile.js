console.log("homepage inside!!")
function preferences(){
    console.log("on click working!!")
    alert("onclick called")
    $.ajax({
        type: "POST",
        url: 'http://10.50.30.50:8000/api/preferences',
        data: params,
        dataType: 'json',
        success: successFunctionpreferences,
        csrfmiddlewaretoken : '{{ csrf_token }}',
        success: successFunctionpreferences,
        error: errorFunctionpreferences
    })
}

function errorFunctionpreferences(data) {
    console.log("error called");
    alert("invalid credentials!!!");

}
function successFunctionpreferences(data) {
    console.log("success called"),
    console.log(data);
    sessionStorage.setItem('user_list',JSON.stringify(data));
    location.href = 'http:///10.50.30.50:8000/api/sign_up/combine_profile/searchUserlist';


}
//---------------------------------------------------------------
function aboutMe(){
    $.ajax({
        type: "POST",
        url: 'http://10.50.30.50:8000/api/aboutMe',
        data: params,
        dataType: 'json',
        success: successFunctionaboutMe,
        csrfmiddlewaretoken : '{{ csrf_token }}',
        success: successFunctionaboutMe,
        error: errorFunctionaboutMe
    })

}

function errorFunctionaboutMe(data) {
    console.log("error called");
    alert("invalid credentials!!!");

}
function successFunctionaboutMe(data) {
    console.log("success called"),
    console.log(data);
    sessionStorage.setItem('user_list',JSON.stringify(data));
    location.href = 'http:///10.50.30.50:8000/api/sign_up/combine_profile/searchUserlist';


}

//---------------------------------------------------------------

function FL(){


    var my= localStorage.getItem("USERID");
    console.log("my value of id ", my)


   
     console.log("inside submit handler 3")
   var params={
               FriendId: localStorage.getItem("USERID"),
           };
 
   async: false,
   
    $.ajax({
        type: "POST",
        url: 'http://10.50.30.50:8000/api/friends',
        data: params,
        dataType: 'json',
        success: successFunctionFL,
        csrfmiddlewaretoken : '{{ csrf_token }}',
        success: successFunctionFL,
        error: errorFunctionFL
    })
    console.log("after ajax: ")

}

function errorFunctionFL(data) {
    console.log("error called");
    alert("Please Login to see your friends");

}
function successFunctionFL(data) {
    console.log("success called"),
    console.log(data);
    //sessionStorage.setItem('user_list',JSON.stringify(data));
    location.href = 'http://10.50.30.50:8000/api/friends/show';


}

//---------------------------------------------------------------
console.log("removed href")
function logOut(){
    console.log("insidelogout")
    //alert("Logged OUT !!!")
    localStorage.removeItem("AP")
    localStorage.removeItem("Fnames")
    localStorage.removeItem("Fcount")
    localStorage.removeItem("USERID")
    localStorage.removeItem("Location")
    localStorage.removeItem("InterestsLS")
    localStorage.removeItem("About_meLS")
    localStorage.removeItem("HobbiesLS")
    localStorage.removeItem("newUserId")
    $.ajax({
        type: "GET",
        url: 'http://10.50.30.50:8000/api/franzo',
    
    })

}


function submitHandler(){
    console.log("inside submit handler -->>")
    var params={name: $('#searchByname').val(),
                };
    //console.log("after var prams 4");
    //e.preventDefault();
    async: false,
    $.ajax({
        type: "POST",
        url: 'http://10.50.30.50:8000/api/sign_up/combine_profile/searchUser',
        data: params,
        dataType: 'json',
        success: successFunction,
        csrfmiddlewaretoken : '{{ csrf_token }}',
        success: successFunction,
        error: errorFunction
    })
    console.log("after ajax 7");
}

function errorFunction(data) {
    console.log("error called");
    alert("No such users found!!");

}
function successFunction(data) {
    console.log("success called"),
    console.log(data);
    sessionStorage.setItem('user_list',JSON.stringify(data));
    location.href = 'http:///10.50.30.50:8000/api/sign_up/combine_profile/searchUserlist';


}

//----------------appu code post------------------
//alert("appu code start js");
Puserid = localStorage.getItem("USERID");
console.log(Puserid);
//alert(Puserid);
function test(e){
    //alert("onclick working")
    var uploadPostParams = {
        "Post_data" : Post_data,
        "PuserId" : localStorage.getItem("USERID")};
                alert("set id to params ",uploadPostParams.PuserId);
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: 'http://10.50.30.50:8000/api/sign_up/combine_profile',
                    data: uploadPostParams,
                    dataType: 'json',
    
                    success : successF,
                        
                    error: errorF,
                    
                        
                });
                alert("set id to params 2",uploadPostParams.PuserId);

                function successF(data) {// success callback function
                    console.log("inside success")
                    alert('after ajax ',data);
                
                    alert("Post uploaded Successful");
                    
                    location.href = 'http://10.50.30.50:8000/api/sign_up/combine_profile'
                    }
                
                    function errorF() {// success callback function
                        console.log("inside ")
                        //alert(JSON.stringify pload failed");
                        alert("error")     ; 
                    }
}
//--------------------appu post code end-------------------------------


/*

console.log("loaded cp script of combine profile 2 ");
          var changedText = document.getElementById('list');
          var FnamesJS="";
          //changedText.addEventListener("FL",submitHandler)

         var my= localStorage.getItem("USERID");
         console.log("my value of id ", my)

    
      function listQ(){
        console.log("loaded cp script funct");
        if (changedText.textContent = this.value == 3){
          console.log("inside submit handler 3")
        var params={
                    FriendId: localStorage.getItem("USERID"),
                };
        console.log("after var prams 4 params - ", params);
        //naam= otp_from_back.name;
        console.log("name of user logged in: ")
        //console.log(otp_from_back.name)

        console.log("after local storage 5");
        //console.log(otp_from_back.mobilenumber);
        console.log("otp_from_back 6");

        //alert(JSON.stringify(params));
        //e.preventDefault();
        async: false,
        $.ajax({
            type: "POST",
            url: 'http://10.50.30.50:8000/api/friends',
            data: params,
            dataType: 'json',

            csrfmiddlewaretoken : '{{ csrf_token }}',
            success: successFunction,
            error: errorFunction
        })
        console.log("after ajax 7->>",params);
        }


        if (changedText.textContent = this.value == 1){
            console.log("inside submit handler 1 condi adv")
          var params={
                      FriendId: localStorage.getItem("USERID"),
                  };
          console.log("after var prams 4 params ------ ", params);
          //naam= otp_from_back.name;
          console.log("name of user logged in 33333 : ")
          //console.log(otp_from_back.name)
  
          console.log("after local storage 5333333333");
          //console.log(otp_from_back.mobilenumber);
          console.log("otp_from_back 63333333333");
  
          //alert(JSON.stringify(params));
          //e.preventDefault();
          async: false,
          $.ajax({
              type: "GET",
              url: 'http://10.50.30.50:8000/api/aboutMe',
              data: params,
              dataType: 'json',
  
              csrfmiddlewaretoken : '{{ csrf_token }}',
              success: successFunction2,
              error: errorFunction2
          })
          console.log("after ajax 7->>",params);
          }


        console.log("value ", changedText.textContent = this.value);
    //changedText.textContent = this.value;
      }

      function errorFunction2(data) {
        console.log("error called");
        alert("No friends!!!");

    }
    function successFunction2(data) {
        FnamesJS= data
        console.log("sucess values of data-->>  - ", typeof(data), " values-> ", data);
        console.log("success called 8--> "),
        alert("success  !!!");

        otp_from_back = data,
        console.log(" 9-> ",otp_from_back.name," --->>> ",otp_from_back),
        localStorage.setItem("Fnames", data),

        sessionStorage.setItem("idSess",otp_from_back.userId),
        //sessionStorage.setItem["MN", otp_from_back.mobilenumber],
        

        console.log("next page is otp 10"),
        
        location.href = 'http://10.50.30.50:8000/api/friends/show';


    }

      document.getElementById("list").onchange = listQ;

      */