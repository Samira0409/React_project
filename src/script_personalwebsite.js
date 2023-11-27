// const body = document.querySelector('body');
// const modeToggle = document.getElementById('mode-toggle');
// //const modeStatus = document.querySelector('.mode-status');
// console.info(document, modeToggle);
// function toggleMode() {
//   body.classList.toggle('dark-mode');

//   const modeMessage = body.classList.contains('dark-mode') ?
//     'Dark Mode' 
//     : "Light Mode"

//   //modeStatus.innerHTML = "Currently in " + modeMessage;
// }
// modeToggle.addEventListener('click', toggleMode);

const items = document.querySelectorAll('.item:not(:first-child)');
const options = {
  threshold: 0.5
};
function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options);
items.forEach(item => {
  observer.observe(item);
});
let submitBtn = document.getElementById('Submit');

const printsuccess = () => {
    const formFirstName = document.getElementById('first-name').value;
  const formLastName = document.getElementById('last-name').value;
  const formEmail = document.getElementById('email').value;
   const formTelephoneNumber = document.getElementById('telephone-number').value;
   const person = {firstname: formFirstName, lastname: formLastName, email: formEmail, telephonenumber: formTelephoneNumber};
   const successmsg = document.getElementById('form-submitted-msg');
   //if you try to reference something that wasn't declared, like person.firstname.value or person.bankAccount, it will return "undefined"
  successmsg.innerHTML="Form successfully submitted! Thanks "+person.firstname+" I'll send you an email at "+person.email+" or call you at "+person.telephonenumber+"."; 
}

const validate = (e) => {
  const firstname = document.getElementById('first-name');
  const lastname = document.getElementById('last-name');
  const email = document.getElementById('email');
   const telephonenumber = document.getElementById('telephone-number');
  const successmsg = document.getElementById('form-submitted-msg');
  firstname.style.borderColor = "blue";
  lastname.style.borderColor = "blue";
   email.style.borderColor = "blue";
  telephonenumber.style.borderColor = "blue";
  var check = true;
  if (firstname.value === "") {
    firstname.style.borderColor = "red";
    check = false;
  }
  if (lastname.value === "") {
    lastname.style.borderColor = "red";
    check = false;
  }
  if (email.value === "") {
    email.style.borderColor = "red";
    check = false;
  }
  
  if (telephonenumber.value === "") {
    telephonenumber.style.borderColor = "red";
    check = false;
  }
  //Use the check variable to determine the result. If false, prevent default interaction. If true, make the successmsg visible.
  if (check===true ) { 
    successmsg.style.display = "block";
    printsuccess();
    } else {
      e.preventDefault();
    }
    
  return check;
}
  
submitBtn.addEventListener('click', validate);