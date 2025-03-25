document.addEventListener("DOMContentLoaded", function () {
  //Variable Declaration
  const btnLogin = document.getElementById('btnLogin');
  const btnForgotPass = document.getElementById('btnForgotPass');
  const btnBackToLogin = document.getElementById('btnBackToLogin');
  const btnSwitchRegister = document.getElementById('btnSwitchRegister');
  const btnSendResetPassword = document.getElementById('btnResetEmail');
  

  const strLoginEmail = document.getElementById('emailLogin'); 
  const strSendResetEmail = document.getElementById('resetEmail')
  const frmLoginDiv = document.getElementById('frmLogin');
  const divResetPassword = document.getElementById('resetPasswordContent');
  

  // Login Button Email validation, if not valid, runs sweet alert error
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const email = strLoginEmail.value.trim();
    if (!validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Ooops, Please enter a valid email address.'
      });
    }
  
    //console.log(email);
  });

  // Reset Password send Email Button validation, if not valid, runs sweet alert error, if valid, notifies email was sent
  btnSendResetPassword.addEventListener('click', (event) =>{
    event.preventDefault();
    const email = strSendResetEmail.value.trim();
    if (!validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Ooops, Please enter a valid email address.'
      });
    }
    else{
      Swal.fire({
        icon: 'success',
        title: 'Email Sent!',
        text: 'Check your inbox for the reset link.'
      });

    }
    //console.log(email);
  });
 
// Validate inputed string as an email, returns True or False
  function validateEmail(email) {
    // Simple email regex
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailPattern.test(email);
  };


//redirects user to forgot password form
btnForgotPass.addEventListener('click', (event) => {
  event.preventDefault();
  frmLoginDiv.style.display = 'none';
  divResetPassword.style.display = 'flex';
});

//redirects user back to login screen from forgot password screen
btnBackToLogin.addEventListener('click', (event) => {
  event.preventDefault();
  divResetPassword.style.display = 'none';
  frmLoginDiv.style.display = 'flex';
});

//Redirects user to Register Page
btnSwitchRegister.addEventListener('click', () => {
  window.location.href = "./register.html";

});

// REGISTER PAGE FUNCTIONALITY
  // Declare Variables
  const btnStudent = document.getElementById("btnOpenStudentForm");
  const btnInstructor = document.getElementById("btnOpenInstructorForm");
  const btnRegisterButtons = document.querySelectorAll("#btnBacktoRegister");

  const studentDiv = document.getElementById("studentRegistration");
  const instructorDiv = document.getElementById("instructorRegistration");
  const selectRegisterDiv = document.getElementById("frmRegister");

  btnStudent.addEventListener("click", function (event) {
      event.preventDefault();
      selectRegisterDiv.classList.add("d-none");  // Hide main form
      studentDiv.classList.remove("d-none");      // Show student form
      studentDiv.classList.add("d-flex");         // Ensure it displays properly
      instructorDiv.classList.add("d-none");      // Hide instructor form
  });

  btnInstructor.addEventListener("click", function (event) {
      event.preventDefault();
      selectRegisterDiv.classList.add("d-none");  // Hide main form
      instructorDiv.classList.remove("d-none");   // Show instructor form
      instructorDiv.classList.add("d-flex");      // Ensure it displays properly
      studentDiv.classList.add("d-none");         // Hide student form
  });

  btnRegisterButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        selectRegisterDiv.classList.remove("d-none");  // Show main form
        selectRegisterDiv.classList.add("d-flex");  // Ensure it displays properly
        instructorDiv.classList.remove("d-flex");
        studentDiv.classList.remove("d-flex");
        instructorDiv.classList.add("d-none");      // Hide instructor form
        studentDiv.classList.add("d-none");         // Hide student form
    });
});



// Redirects user to Register Page
btnSwitchLogin.addEventListener('click', () => {
  window.location.href = "./login.html";

});

// Registers Student
document.querySelector("#btnRegisterStudent").addEventListener("click",(e) => {
  const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  let strStudentUsername = document.querySelector("#txtStudentUsername").value
  let strStudentPassword = document.querySelector('#txtStudentPassword').value.trim()
  let strStudentConfirmPassword = document.querySelector('#txtStudentPasswordConfirm').value.trim()
  strStudentUsername = strStudentUsername.toLowerCase()
  let blnStudentRegError = false
  let strStudentRegMessage = ''

  if(!regEmail.test(strStudentUsername)){
      blnStudentRegError = true
      strStudentRegMessage += '<p class="mb-0 mt-0">Username must be an email address</p>'
  }
  
  if(strStudentPassword.length < 1){
      blnStudentRegError = true
      strStudentRegMessage += '<p class="mb-0 mt-0">Password cannot be blank</p>'
  }

  if (strStudentPassword !== strStudentConfirmPassword) {
    blnStudentRegError = true
    strStudentRegMessage += '<p class="mb-0 mt-0">Passwords do not match</p>'
  }

  if(blnStudentRegError == true){
    Swal.fire({
    title: "Oh no, you have an error!",
    html: strStudentRegMessage,
    icon: "error"
  });
  }

  if(blnStudentRegError == false){
      strStudentRegMessage += 'Registration Successful!'
      Swal.fire({
      title: "Success!",
      html: strStudentRegMessage,
      icon: "success"
  });
  }
})

// Registers Instructor
document.querySelector("#btnRegisterInstructor").addEventListener("click",(e) => {
  const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  let strInstructorUsername = document.querySelector("#txtInstructorUsername").value
  let strInstructorPassword = document.querySelector('#txtInstructorPassword').value.trim()
  let strInstructorConfirmPassword = document.querySelector('#txtInstructorPasswordConfirm').value.trim()
  strInstructorUsername = strInstructorUsername.toLowerCase()
  let blnInstructorRegError = false
  let strInstructorRegMessage = ''

  if(!regEmail.test(strInstructorUsername)){
      blnInstructorRegError = true
      strInstructorRegMessage += '<p class="mb-0 mt-0">Username must be an email address</p>'
  }
  
  if(strInstructorPassword.length < 1){
      blnInstructorRegError = true
      strInstructorRegMessage += '<p class="mb-0 mt-0">Password cannot be blank</p>'
  }

  if (strInstructorPassword !== strInstructorConfirmPassword) {
    blnInstructorRegError = true
    strInstructorRegMessage += '<p class="mb-0 mt-0">Passwords do not match</p>'
  }

  if(blnInstructorRegError == true){
    Swal.fire({
    title: "Oh no, you have an error!",
    html: strInstructorRegMessage,
    icon: "error"
  });
  }

  if(blnInstructorRegError == false){
      strInstructorRegMessage += 'Registration Successful!'
      Swal.fire({
      title: "Success!",
      html: strInstructorRegMessage,
      icon: "success"
  });
  }
})
});























