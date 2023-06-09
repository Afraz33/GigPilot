//Upon loading the page, the student's name is displayed on the page
document.addEventListener("DOMContentLoaded", function(event) { 
    let token = localStorage.getItem("token");
    let data = {
        token,
    };
    fetch("http://localhost:3000/GigPilot/getName", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    })
        .then(res => {
            return res.json();
           
        })
        .then(data => {
            document.getElementById('student-name').innerHTML = "Hi " +data.name+", Welcome Aboard!";
            console.log('Success:', data);
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });
});


//Viewing Jobs
document.getElementById('view-jobs').addEventListener('click', () => {
   
    let token = localStorage.getItem("token");

    let data = {
        token,
    }
   
    //fetch request
    fetch("http://localhost:3000/GigPilot/viewJobs", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    })
        .then(res => {

               if(res.status == 200){
                 window.location.href = "../viewJobs/viewJobs.html";
                return res.json(); 
                }
            
          
            
           
            })
        .then(data => {
            console.log('Success:', data);
            // window.location.href = "../viewJobs/viewJobs.html";
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });

});



document.getElementById('view-applicants').addEventListener('click', () => {
    window.location.href = "../../errorPage.html";
});




document.getElementById('view-dev').addEventListener('click', () => {
    
    window.location.href = "../../errorPage.html";
});