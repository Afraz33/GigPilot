//post request to /signup
document.getElementById("form").addEventListener("submit", function(e){
    
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let contact = document.getElementById("contact").value;
    let confirmpassword = document.getElementById("confirm-password").value;

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
    document.getElementById("form").reset();
    let data = {
        name,
        email,
        password,
        contact,
        
    }

    fetch("http://localhost:3000/api/users/signup" , {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
}
)
