
console.log("inside user new js")
const form = document.getElementById('form');
console.log("before submit");
form.addEventListener("submit", submitHandler);
console.log("after submit");
var otp_from_back = "";


    function submitHandler(e){
        var params={name: $('#name').val(),
                    emailid: $('#emailid').val(),
                    mobilenumber: $('#mobilenumber').val(),
                    password: $('#password').val(),
                    confirmpassword: $('#confirmpassword').val()};

        console.log("otp_from_back");
        //alert(JSON.stringify(params));
        /*if(password == ) {
     document.getElementById("message").innerHTML = "**Fill the password please!";
     return false;
  }*/
            e.preventDefault();
            async: false,
            $.ajax({
                type: "POST",
                url: 'http://10.50.30.50:8000/api/sign_up',
                data: params,
                dataType: 'json',
                success: successFunction,
                csrfmiddlewaretoken : '{{ csrf_token }}',
                success: successFunction,
                error: errorFunction
            });
            console.log("signup working ajax");
        }

        function errorFunction(data) {
            console.log("error called");
            //alert("error"+JSON.stringify(data));

        }
        function successFunction(data) {
            console.log("success called"),
            alert('Success!'),
            otp_from_back = data,
            console.log("otp from backend", otp_from_back),
            location.href = 'http:///10.50.30.50:8000/api/sign_up/otp',
            console.log("next page is otp");
            //alert(data);
            if (data == 'success') {

                //alert('Success!');
                form.reset()
            }

        /*else{
            alert("Password doesn't match!!! Please re-enter the password.")
        }*/


    }