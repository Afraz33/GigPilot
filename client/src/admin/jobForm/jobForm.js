document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    let jobTitle = document.getElementById("job-title").value;
    let description = document.getElementById("job-description").value;
    let jobType = document.getElementById("jobType").value;
    
    let data = {
        jobTitle,
        description,
        jobType,
        token,
    }
     
   // fetch request
    fetch("http://localhost:3000/GigPilot/postJob", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    })
        .then(res => {
            if(res.status === 200) {
                document.getElementById("form").reset();
                return res.json();
            }

           
        })
        .then(data => {
           
            alert("Job Posted Successfully");
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });

});








// document.getElementById('cancel').addEventListener('click', () => {
//     document.getElementById('form').reset();
// });