
const form = document.getElementById('Appointment');




const nameEl = form.querySelector('#name');

const emailEl = form.querySelector('#email');
const phone=document.getElementById('number')







// Error elements
const Fnerror = form.querySelector('.nameerror');
const emerror = form.querySelector('.Eerror');
const phoerror = form.querySelector('.Nerror');





function validateName() {
  const val = nameEl?.value?.trim();
  try {
    if (val === '' || val.length < 3) {
      Fnerror.textContent = 'Please enter a valid first name (min 3 characters)';
      Fnerror.style.color = 'red';
      return false;

    } else {
      Fnerror.textContent = '';
      return true
    }
  } catch (error) {
    console.log(error)
    return false
  }
}


function validateEmail() {
  const val = emailEl?.value?.trim();
  try {
    if (val === '' || !val.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      emerror.textContent = 'Please enter a valid email';
      emerror.style.color = 'red';
      return false;

    } else {
      emerror.textContent = '';
      return true;

    }
  } catch (error) {
    console.log(error)
  }
}

function validatePhone() {
  const val = phone?.value?.trim();
  try {


    if (val === '' || !val.match(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/)) {
      phoerror.textContent = 'Please enter a valid phone number';
      phoerror.style.color = 'red';
      return false

    } else {
      phoerror.textContent = '';
      return true
    }
  } catch (error) {
    console.log(error)
  }
}





nameEl.addEventListener('change', validateName);

emailEl.addEventListener('change', validateEmail);
phone.addEventListener('change',validatePhone);




form.addEventListener('submit', (e) => {

try{
  const nameValid = validateName();
  
  const emailValid = validateEmail();
  const phoneValid = validatePhone();
  

  
  const valided = nameValid && emailValid;
            

  if (valided) {
    alert("Form submitted successfully!");

  }else{
    e.preventDefault()
  }
}catch(e){
  console.log(e)
}
});







// const btn2 = form.querySelector('#clear-btn')
// btn2.addEventListener('click', (e) => {
//   e.preventDefault()
//   nameEl.value = '';

//   emailEl.value = '';
//   phoneEl.value = '';
 

//   emerror.textContent = '';
  
//   phoerror.textContent = '';
//   Fnerror.textContent = ''


// })










