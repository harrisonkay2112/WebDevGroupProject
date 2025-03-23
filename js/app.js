document.addEventListener("DOMContentLoaded", function () {
  const btnStudent = document.getElementById("btnStudentRegister");
  const btnInstructor = document.getElementById("btnInstructorRegister");

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
