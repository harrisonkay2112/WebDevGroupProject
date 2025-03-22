document.addEventListener("DOMContentLoaded", function () {
    const btnStudent = document.getElementById("btnStudentRegister");
    const btnInstructor = document.getElementById("btnInstructorRegister");
  
    const studentDiv = document.getElementById("studentRegistration");
    const instructorDiv = document.getElementById("instructorRegistration");
    const selectRegisterDiv = document.getElementById("frmRegister");
  
    btnStudent.addEventListener("click", function (event) {
      event.preventDefault();
      selectRegisterDiv.style.display = "none";
      studentDiv.style.display = "block";
      instructorDiv.style.display = "none";
    });
  
    btnInstructor.addEventListener("click", function (event) {
      event.preventDefault();
      selectRegisterDiv.style.display = "none";
      instructorDiv.style.display = "block";
      studentDiv.style.display = "none";
    });
  });
  