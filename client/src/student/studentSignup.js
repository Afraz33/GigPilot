// //post request to /signup
// document.getElementById("form").addEventListener("submit", function(e){
    
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let contact = document.getElementById("contact").value;
//     let confirmpassword = document.getElementById("confirm-password").value;

//     if(password != confirmpassword){
//         let confirmpassword = document.getElementById("confirm-password");
//         console.log(confirmpassword)
//         confirmpassword.value = "";
//      confirmpassword.setAttribute("placeholder", "Password doesn't match");
     
//      confirmpassword.style.border = "1px solid red";
//         return;
//     }
//     else{
//     let confirmpassword = document.getElementById("confirm-password");    
//     confirmpassword = document.getElementById("confirm-password");
//     confirmpassword.setAttribute("placeholder", "********");
//     confirmpassword.style.border = "1px solid black";    
//     }
//     document.getElementById("form").reset();
//     let data = {
//         name,
//         email,
//         password,
//         contact,
        
//     }

//     fetch("http://localhost:3000/api/users/signup" , {
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)
//     }).then(res=>
//         {
        
//         if(res.status == 300){
//             let email = document.getElementById("email");
//             email.value = "";
//             email.setAttribute("placeholder", "Email already exists");
//             email.style.border = "1px solid red";
//             throw new Error("Email address already registered.");
           
            
//         } 
//         else {
//           return res.json();
//         }
//         }
//         )
//     .then(data=>{
//         console.log(data)
//     }).catch(err=>{
        
//         console.log(err)
//     })
// }
// )



//submit form
document.getElementById("form").addEventListener("submit", function(e){
    
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let contact = document.getElementById("contact").value;
    let confirmpassword = document.getElementById("confirm-password").value;
    let role = "student";
    let formResetFlag = true;
    
    if(password != confirmpassword){
        let confirmpassword = document.getElementById("confirm-password");
        console.log(confirmpassword)
        confirmpassword.value = "";
        confirmpassword.setAttribute("placeholder", "Password doesn't match");
        confirmpassword.style.border = "1px solid red";
        return;
    }
    else{
        let confirmpassword = document.getElementById("confirm-password");    
        confirmpassword = document.getElementById("confirm-password");
        confirmpassword.setAttribute("placeholder", "********");
        confirmpassword.style.border = "1px solid black";    
    }
    
    let data = {
        name,
        email,
        password,
        contact,
        role,
    }
    
    fetch("http://localhost:3000/GigPilot/signup" , {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res => {
        if(res.status == 300){
            formResetFlag = false;
            let emailField = document.getElementById("email");
            let nameField = document.getElementById("name");
            let passwordField = document.getElementById("password");
            let confirmPasswordField = document.getElementById("confirm-password");
            let contactField = document.getElementById("contact");
            
            nameField.value = name;
            emailField.value = email;
            passwordField.value = password;
            confirmPasswordField.value = "";
            confirmPasswordField.value = confirmpassword;
            emailField.value = "";
            emailField.setAttribute("placeholder", "Email already exists");
            emailField.style.border = "1px solid red";
            contactField.value = contact;

            throw new Error("Email address already registered.");
        } 
        else {
            document.getElementById("form").reset();
            return res.json();
        }
    })
    .then(data=>{
       let emailField = document.getElementById("email");
         emailField.setAttribute("placeholder", "johndoe@example.com");
         emailField.style.border = "1px solid black";
         alert(`${email} is successfully registered.`);
         
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
});


//click on cancel button
document.getElementById("cancel").addEventListener("click", function(e){
    
    document.getElementById("form").reset();
    
})