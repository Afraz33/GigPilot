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
            
            document.getElementById('student-name').innerHTML = data.name+"'s Job Portal";
            
            document.getElementById('name').value = data.name;
            document.getElementById('email').value = data.email;
            document.getElementById('userid').value = data.id;
            console.log('Success:', data);
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });
});




// document.getElementById('job-div').addEventListener('click', () => {
//     const jobDiv = document.getElementById('job-div');
//     if (!jobDiv.classList.contains('border-green-500')) {
//         jobDiv.classList.add('border-green-500');
//     } else {
//         jobDiv.classList.remove('border-green-500');
//     }
// });

// document.addEventListener('click', (event) => {
//     const jobDiv = document.getElementById('job-div');
//     if (event.target !== jobDiv) {
//         jobDiv.classList.remove('border-green-500');
//     }
// });


document.addEventListener("DOMContentLoaded", function(event) { 
    let token = localStorage.getItem("token");
    let data = {
        token,
    };
    fetch("http://localhost:3000/GigPilot/getjobs", {
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
            console.log('Success:', data);
           
            for (let i = 0; i < data.length; i++) {
                let job = data[i];
                let jobDiv = document.createElement('div');
                jobDiv.classList.add('border', 'border-green-300', 'bg-white', 'p-4', 'rounded-md', 'mb-4', 'cursor-pointer','ml-4');
                jobDiv.id = 'job-div';
                let jobTitle = document.createElement('h1');
                jobTitle.classList.add('font-bold', 'text-xl', 'text-green-500');
                jobTitle.innerHTML = job.jobTitle;
                let jobType = document.createElement('h2');
                let companyName = document.createElement('h2');
                companyName.classList.add('text-gray-500', 'font-bold');
                companyName.innerHTML = job.companyName;
                jobType.classList.add('text-gray-500', 'font-bold','mt-4', 'border-2', 'border-green-500','p-1', 'rounded-lg','inline-block');
                jobType.innerHTML = job.jobType;
                let jobDescription = document.createElement('p');
                jobDescription.classList.add('text-gray-500','mt-6');
                jobDescription.innerHTML = job.description;
                
                let jobId = document.createElement('p');
                jobId.classList.add('text-green-500','mt-2');
                jobId.innerHTML =job._id;
                jobId.setAttribute('id','jobid');
                let jobidDiv = document.createElement('jobiddiv');
                jobidDiv.classList.add('flex', 'flex-row');
                let jobidText = document.createElement('p');
                jobidText.classList.add('text-gray-500','mt-2','font-bold','mr-2');
                jobidText.innerHTML = "Job Id: ";
                jobId.innerHTML =job._id;
                jobidDiv.appendChild(jobidText);
                jobidDiv.appendChild(jobId);

                let applyButton = document.createElement('button');
                applyButton.classList.add('apply-btn','bg-green-500', 'text-white', 'px-5','py-2', 'rounded-md', 'mt-4','hover:bg-gray-500','focus:outline-none');
                applyButton.innerHTML = "Apply";
                const applyBtns = document.querySelectorAll('.apply-btn');
console.log(applyBtns);
applyBtns.forEach(applyBtn => {
    
    applyBtn.addEventListener('click', () => {
        const form = document.getElementById('form');
        const jobDiv = applyBtn.parentElement;
        const jobId = jobDiv.querySelector('#jobid').innerHTML;
        document.getElementById('jobId').value = jobId;
        if(form.classList.contains('hidden')){
        document.getElementById('form').classList.remove('hidden');
         }
        else{
            document.getElementById('form').classList.add('hidden');
        }
    })
}) 

                jobDiv.appendChild(jobTitle);
                
                jobDiv.appendChild(companyName);
                jobDiv.appendChild(jobType)
                jobDiv.appendChild(jobDescription);
                jobDiv.appendChild(jobidDiv);
                jobDiv.appendChild(applyButton);
                document.getElementById('job-container').appendChild(jobDiv);
            }
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });
})




//whenever applybtn is clicked the jobid of that particular div is get
