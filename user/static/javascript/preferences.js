const form = document.getElementById('formLogin');
    console.log("before submit 1");
    form.addEventListener("submit", submitHandler);
    console.log("after submit 2");
    var otp_from_back = "";
    //module.exports = {otp_from_back};

    function submitHandler(e){
        console.log("inside submit handler 3")
        var params={mobilenumber: $('#mobilenumber').val(),
                    password: $('#password').val(),
                    };
        console.log("after var prams 4");
        //naam= otp_from_back.name;
        console.log("name of user logged in: ")
        //console.log(otp_from_back.name)

        console.log("after local storage 5");
        //console.log(otp_from_back.mobilenumber);
        console.log("otp_from_back 6");

        //alert(JSON.stringify(params));
        e.preventDefault();
        async: false,
        $.ajax({
            type: "POST",
            url: 'http://10.50.30.50:8000/api/sign_up/signIn',
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
        alert("invalid credentials!!!");

    }
    function successFunction(data) {
        console.log("success called 8--> "),

        otp_from_back = data,
        console.log(" 9-> ",otp_from_back.name),
        localStorage.setItem("AP", otp_from_back.name)
        localStorage.setItem("USERID", otp_from_back.userId)

        sessionStorage.setItem("idSess",otp_from_back.userId)
        //sessionStorage.setItem["MN", otp_from_back.mobilenumber],
        alert('Logged In!!'),

        console.log("next page is otp 10"),

        location.href = 'http:///10.50.30.50:8000/api/sign_up/combine_profile';


    }