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


document.getElementById('view-dev').addEventListener('click', () => {
    window.location.href = "https://www.google.com";
});

document.getElementById('view-applications').addEventListener('click', () => {
    window.location.href = "https://www.google.com";
});