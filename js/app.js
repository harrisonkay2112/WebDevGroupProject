document.addEventListener("DOMContentLoaded", function () {
  const btnStudent = document.getElementById("btnOpenStudentForm");
  const btnInstructor = document.getElementById("btnOpenInstructorForm");

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
});

document.querySelector("#btnRegisterStudent").addEventListener("click",(e) => {
  const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  let strStudentUsername = document.querySelector("#txtStudentUsername").value
  let strStudentPassword = document.querySelector('#txtStudentPassword').value
  strStudentUsername = strStudentUsername.toLowerCase()
  let blnStudentRegError = false
  let strStudentRegMessage = ''

  if(!regEmail.test(strStudentUsername)){
      blnStudentRegError = true
      strStudentRegMessage += '<p  class="mb-0 mt-0">Username must be an email address</p>'
  }
  
  if(strStudentPassword.length < 1){
      blnStudentRegError = true
      strStudentRegMessage += '<p class="mb-0 mt-0">Password Cannot Be Blank</p>'
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