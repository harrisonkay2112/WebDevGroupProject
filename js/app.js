document.addEventListener("DOMContentLoaded", function () {
  const btnForgotPass = document.getElementById('btnForgotPass');
  const btnBackToLogin = document.getElementById('btnBackToLogin');
  const btnSwitchRegister = document.getElementById('btnSwitchRegister');
  const btnSendResetPassword = document.getElementById('btnResetEmail');
  
  const strLoginEmail = document.getElementById('loginEmail'); 
  const strSendResetEmail = document.getElementById('resetEmail')
  const frmLoginDiv = document.getElementById('frmLogin');
  const divResetPassword = document.getElementById('resetPasswordContent');
  

  // Login Button Email validation
  btnLogin.addEventListener('click', () => {
    const email = strLoginEmail.value.trim();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    //console.log(email);
  });

  // Reset Password send Email Button validation
  btnSendResetPassword.addEventListener('click', () =>{
    const email = strSendResetEmail.value.trim
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    //console.log(email);
  });
 
// Validate inputed string as an email, returns True or False
  function validateEmail(email) {
    // Simple email regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


//redirects user to forgot password form
btnForgotPass.addEventListener('click', () => {
  frmLoginDiv.style.display = 'none';
  divResetPassword.style.display = 'flex';
});

//redirects user back to login screen from forgot password screen
btnBackToLogin.addEventListener('click', () => {
  divResetPassword.style.display = 'none';
  frmLoginDiv.style.display = 'flex';
});

//Redirects user to Register Page
btnSwitchRegister.addEventListener('click', () => {
  window.location.href = "./register.html";

});

});
























