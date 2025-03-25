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

});
