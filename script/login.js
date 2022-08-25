var server = "http://127.0.0.1:5000/";
$(document).ready(function () {
    //Create API Call
    $('#signup').on('click', function (e) {
        e.preventDefault();
        console.log('worked')
        var mail = document.getElementById("mail").value;
        var password = document.getElementById("password").value;
        var key = document.getElementById("key").value;
       
            $.ajax({
                method: "POST",
                url: server + 'login/admin',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    mail: mail, 
                    password: password,
                    key:key
                }),

                success: function (response) {
                    if (response.response=="success"){
                        location.replace("adminview.php")
                        localStorage.mail = mail
                        localStorage.isAdmin = 1
                        
                    }
                    else{
                        alert("Invalid credentials.")
                    }  
                },
                error: function (err) {
                    alert("Something went wrong")
                }
            });
    });

       
})