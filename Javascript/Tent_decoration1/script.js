const sidber=document.querySelector(".toggled-brand")
const sidtogged=document.querySelector(".hide-asid")
const btn1=document.querySelector(".btn3")

sidber.addEventListener("click",()=>{
    sidtogged.classList.remove('hide-asid')

})
btn1.addEventListener("click",()=>{
    sidtogged.classList.add('hide-asid')
})



// form 

const formsubmit=document.querySelector('#contact-form')
formsubmit.addEventListener("submit",()=>{
    alert("Your message has been Submited sucessfully")

})




// Time check 


const time=document.querySelector(".time-iten");

const hide=document.querySelector(".hide-time");


time.addEventListener('click',(event)=>{
    hide.classList.remove("hide-time");

    
})
time.addEventListener("mouseover",()=>{
    hide.classList.add("hide-time")
})


// star time
function updateClock(){
    const timeElement=document.getElementById('start-tme');
    
    const now=new Date();
    
    let hours=now.getHours();
    
    let minutes=now.getMinutes();
    
    let seconds=now.getSeconds();
    
    hours=hours < 1 ? '0' +hours:hours;
    minutes=minutes < 1 ? '0' +minutes:minutes;
    seconds=seconds < 1 ? '0'+seconds:seconds;
    timeElement.textContent=`${hours}: ${minutes}: ${seconds}`
    
    
        
    }
    
    
    
    setInterval(updateClock,1000)
    updateClock()
