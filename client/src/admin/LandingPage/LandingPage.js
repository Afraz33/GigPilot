//upon document load, get the name of the employer and display it on the page
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
            document.getElementById('employer-name').innerHTML = "Hi " +data.name+", Welcome Aboard!";
            console.log('Success:', data);
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });
});


//Posting a job
document.getElementById('post-job').addEventListener('click', () => {
   
    let token = localStorage.getItem("token");

    let data = {
        token,
    }
   
    //fetch request
    fetch("http://localhost:3000/GigPilot/viewJobForm", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    })
        .then(res => {
            if(res.status==200){
                window.location.href = "../jobForm/jobForm.html";
            }
           
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });

});


//view applicants
document.getElementById('view-applicants').addEventListener('click', () => {
    window.location.href = "../../errorPage.html";
});



//view developers
document.getElementById('view-dev').addEventListener('click', () => {
    
    window.location.href = "../../errorPage.html";
});