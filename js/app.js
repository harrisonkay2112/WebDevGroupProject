document.addEventListener("DOMContentLoaded", function () {
  const btnForgotPass = document.getElementById('btnForgotPass');
  const btnBackToLogin = document.getElementById('btnBackToLogin');
  const btnToRegister = document.getElementById('btnSwitchRegister');

  const frmLoginDiv = document.getElementById('frmLogin');
  const resetPasswordDiv = document.getElementById('resetPasswordContent');
  const frmRegisterDiv = document.getElementById('RegisterContent')

 
//redirects user to forgot password form
btnForgotPass.addEventListener('click', () => {
  frmLoginDiv.style.display = 'none';
  resetPasswordDiv.style.display = 'flex';
});

//sends user back to login screen from forgot password screen
btnBackToLogin.addEventListener('click', () => {
  resetPasswordDiv.style.display = 'none';
  frmLoginDiv.style.display = 'flex';
});

btnToRegister.addEventListener('click', () => {
  window.location.href = "/components/register.html";

});

});
























