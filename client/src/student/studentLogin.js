//Submitting the login form
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let data = {
        email,
        password,
       
    }
    fetch("http://localhost:3000/GigPilot/login" , {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res => {
        if(res.status === 200) {
            document.getElementById("login-form").reset();
            return res.json();
        } else {
            throw new Error("Login failed");
        }
    }).then(data => {
        if(data.user.role === "student") {
            let errorMsg = document.getElementById("error");
                errorMsg.innerHTML = "Login Successful!";
                errorMsg.style.color = "green";
                console.log(`This is user ${data.token}`);
                localStorage.setItem("token", data.token);
                 window.location.href = "LandingPage/LandingPage.html";
           }
             else {
                let errorMsg = document.getElementById("error");
                errorMsg.innerHTML = "*wrong email or password";
                errorMsg.style.color = "red";
            }
        //console.log(data);
    }).catch(err => {
        if ( err) {
            let errorMsg = document.getElementById("error");
            errorMsg.innerHTML = "*wrong email or password";
            errorMsg.style.color = "red";
        } else {
            console.log(err);
        }
    });
});
