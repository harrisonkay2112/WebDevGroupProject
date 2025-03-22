document.addEventListener("DOMContentLoaded", function () {
  const btnForgotPass = document.getElementById('btnForgotPass');
  const btnBackToLogin = document.getElementById('btnBackToLogin');
  const frmLoginDiv = document.getElementById('frmLogin');
  const resetPasswordDiv = document.getElementById('resetPasswordContent');

 
btnForgotPass.addEventListener('click', () => {
  frmLoginDiv.style.display = 'none';
  resetPasswordDiv.style.display = 'flex';
});

btnBackToLogin.addEventListener('click', () => {
  resetPasswordDiv.style.display = 'none';
  frmLoginDiv.style.display = 'flex';
});




});






















