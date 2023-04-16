



//Student Login
// // Path: client\src\student\student.js
// //post request to /login

//post request to /login
// document.getElementById("login-form").addEventListener("submit", function(e){
        
//         e.preventDefault();
//         let email = document.getElementById("email").value;
//         let password = document.getElementById("password").value;
//         let role = "student";
//         let data = {
//             email,
//             password,
//             role,
//         }
//         fetch("http://localhost:3000/api/users/login" , {
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(data)
//         }).then(res=>
//             {
            
//             if(res.status == 404){
//                 let errorMsg = document.getElementById("error");
//                 errorMsg.value = "*wrong email or password";
//                 throw new Error("wrong email or password");
                
//             } 
//             else {
//                 document.getElementById("login-form").reset();
//                 return res.json();
//             }
//             }
//             )
//         .then(data=>{
           
           
//             console.log(data)
//         }).catch(err=>{
            
//             console.log(err)
//         })
//     })

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
       if(data.user.role === "Employer") {
        let errorMsg = document.getElementById("error");
            errorMsg.innerHTML = "Login Successful!";
            errorMsg.style.color = "green";
            // console.log(`This is token ${data.token}`);
            localStorage.setItem("token", data.token);
             window.location.href = "LandingPage/LandingPage.html";
       }
         else {
            let errorMsg = document.getElementById("error");
            errorMsg.innerHTML = "*wrong email or password";
            errorMsg.style.color = "red";
        }
        
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
