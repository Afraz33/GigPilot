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
            
            document.getElementById('student-name').innerHTML = data.name+"'s Job Portal";
            
            document.getElementById('name').value = data.name;
            document.getElementById('email').value = data.email;
            document.getElementById('userId').value = data.id;
            console.log('Success:', data);
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });
});






// view all jobs on button click
    document.getElementById('alljobs').addEventListener('click', () => {
        document.getElementById('job-container').innerHTML = "";
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

//submitting resume
const form = document.getElementById('form');
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
   
   const formData = new FormData();
   
    
   
   let name = document.getElementById('name').value;
    formData.append('applicantName', name);

   let email = document.getElementById('email').value;
    formData.append('applicantEmail', email);

    let jobId= document.getElementById('jobId').value;
    formData.append('jobId', jobId);

    let userId = document.getElementById('userId').value;
    formData.append('userId', userId);
    
    let coverLetter = document.getElementById('coverLetter').value;
    formData.append('coverLetter', coverLetter);

    let resume = document.getElementById('resume').files[0];
    formData.append('resume', resume)
   console.log(formData.get('resume'));
   console.log(formData.get('coverLetter'));
    console.log(formData.get('userId'));
    console.log(formData.get('jobId'));
    console.log(formData.get('applicantEmail'));
    console.log(formData.get('applicantName'));

   
   let token = localStorage.getItem("token");
   formData.append('token', token);
//    let email = document.getElementById('email').value;
//    console.log(email);
     
    fetch("http://localhost:3000/GigPilot/applyJob", {
        method: 'POST',
        
          body: formData
             
        
        
        
    })
    .then(res => {
        
        return res.json();
       
    })
    .then(data => {
        alert(data.newApplication.applicantName+ "'s  application has been submitted successfully!" );
        console.log('Success:', data);
    })  


    });


//whenever applybtn is clicked the jobid of that particular div is get


document.getElementById('searchBtn').addEventListener('click', () => {
    document.getElementById('job-container').innerHTML = "";
    let token = localStorage.getItem("token");
    let jobTitle = document.getElementById('searchText').value;
   
    let data = {
        token,
        jobTitle
    }
    fetch("http://localhost:3000/GigPilot/searchJobs", {
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