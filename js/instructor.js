//AUTHOR: Your Name
//DATE: 4/15/2025 (Example Date)
//PURPOSE: Instructor Dashboard functionality (courses, teams, review templates, review scheduling, review submissions, and reports)

document.addEventListener("DOMContentLoaded", () => {
    // Data arrays to simulate backend data
    let courses = [];
    let teams = [];
    let reviewTemplates = [];
    let scheduledReviews = [];
    let currentReviewQuestions = [];
    // Dummy review submissions – in a real app these would be loaded from the backend
    let reviewSubmissions = { public: [], private: [] };
<<<<<<< HEAD
    // Dummy student report data with courseId property (for simulation)
    let studentReports = [
      { name: "Alice Example", average: 75, courseId: null },
      { name: "Bob Example", average: 82, courseId: null },
      { name: "Charlie Example", average: 68, courseId: null }
=======
    // Dummy student report data
    let studentReports = [
      { name: "Student A", average: 75 },
      { name: "Student B", average: 82 },
      { name: "Student C", average: 68 }
>>>>>>> student_page
    ];
    // Dummy class metrics
    let classMetrics = {
      totalStudents: 30,
      totalCourses: 0,
      totalTeams: 0,
      averageReviewScore: 80
    };
  
<<<<<<< HEAD
    // Dummy students available for teams (simulate enrolled students)
    let dummyStudents = [
      { id: 1, name: "Alice Example" },
      { id: 2, name: "Bob Example" },
      { id: 3, name: "Charlie Example" }
    ];
    // Temporary list for students to add to a new team
    let tempTeamStudents = [];
  
    // For sorting report averages – toggle between ascending and descending
    let sortAscending = true;
    // Selected course id for reports
    let selectedReportCourseId = null;
  
    // Get DOM elements for Courses
=======
    // Get DOM elements for courses
>>>>>>> student_page
    const txtCourseName = document.getElementById("courseName");
    const txtCourseCode = document.getElementById("courseCode");
    const btnCreateCourse = document.getElementById("btnCreateCourse");
    const divCourseList = document.getElementById("courseList");
  
<<<<<<< HEAD
    // Get DOM elements for Teams
=======
    // Get DOM elements for teams
>>>>>>> student_page
    const teamCourseSelect = document.getElementById("teamCourse");
    const txtTeamName = document.getElementById("teamName");
    const btnCreateTeam = document.getElementById("btnCreateTeam");
    const divTeamList = document.getElementById("teamList");
<<<<<<< HEAD
    // New elements for team student management
    const studentSelect = document.getElementById("studentSelect");
    const btnAddStudent = document.getElementById("btnAddStudent");
    const divTeamStudents = document.getElementById("teamStudents");
  
    // Get DOM elements for Review Template (left column)
    const txtReviewTitle = document.getElementById("reviewTitle");
    const ddlReviewType = document.getElementById("reviewType");
=======
  
    // Get DOM elements for review template
    const txtReviewTitle = document.getElementById("reviewTitle");
    const txtReviewDescription = document.getElementById("reviewDescription");
>>>>>>> student_page
    const btnCreateReviewTemplate = document.getElementById("btnCreateReviewTemplate");
    const divReviewQuestions = document.getElementById("reviewQuestions");
    const txtQuestionText = document.getElementById("questionText");
    const ddlQuestionType = document.getElementById("questionType");
    const btnAddQuestion = document.getElementById("btnAddQuestion");
  
<<<<<<< HEAD
    // Get DOM elements for Scheduling Reviews
=======
    // Get DOM elements for scheduling reviews
>>>>>>> student_page
    const scheduleReviewSelect = document.getElementById("scheduleReviewSelect");
    const txtReviewDate = document.getElementById("reviewDate");
    const txtReviewTime = document.getElementById("reviewTime");
    const btnScheduleReview = document.getElementById("btnScheduleReview");
  
<<<<<<< HEAD
    // Get DOM elements for Reports
    const btnSortAverages = document.getElementById("btnSortAverages");
    const divStudentAverageReport = document.getElementById("studentAverageReport");
    const divClassMetrics = document.getElementById("classMetrics");
    const reportCourseSelect = document.getElementById("reportCourseSelect");
  
    // Get DOM elements for Review Submissions tabs
    const divPublicReviewList = document.getElementById("publicReviewList");
    const divPrivateReviewList = document.getElementById("privateReviewList");
  
    // ----------------------------
    // Courses Section
    // ----------------------------
=======
    // Get DOM elements for reports
    const btnSortAverages = document.getElementById("btnSortAverages");
    const divStudentAverageReport = document.getElementById("studentAverageReport");
    const divClassMetrics = document.getElementById("classMetrics");
  
    // Get DOM elements for review submissions tabs
    const divPublicReviewList = document.getElementById("publicReviewList");
    const divPrivateReviewList = document.getElementById("privateReviewList");
  
    // Create Course
>>>>>>> student_page
    btnCreateCourse.addEventListener("click", () => {
      const courseName = txtCourseName.value.trim();
      const courseCode = txtCourseCode.value.trim();
      if (!courseName || !courseCode) {
        Swal.fire("Error", "Please provide both course name and course code.", "error");
        return;
      }
      const course = {
        id: Date.now(), // simple unique id
        name: courseName,
        code: courseCode
      };
      courses.push(course);
      Swal.fire("Success", `Course "${courseName}" created.`, "success");
      txtCourseName.value = "";
      txtCourseCode.value = "";
      updateCourseList();
      updateTeamCourseDropdown();
<<<<<<< HEAD
      updateReportCourseDropdown();
=======
>>>>>>> student_page
      updateScheduleReviewSelect();
      updateClassMetrics();
    });
  
<<<<<<< HEAD
=======
    // Update Courses List UI
>>>>>>> student_page
    function updateCourseList() {
      divCourseList.innerHTML = "";
      if (courses.length === 0) {
        divCourseList.innerHTML = "<p>No courses yet.</p>";
        return;
      }
      courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.className = "border p-2 mb-2";
        courseCard.innerHTML = `<strong>${course.name}</strong> (${course.code})<br> Enrollment Code: ${course.code}`;
        divCourseList.appendChild(courseCard);
      });
    }
  
<<<<<<< HEAD
    // Update dropdown for team creation (courses)
=======
    // Update team course dropdown options
>>>>>>> student_page
    function updateTeamCourseDropdown() {
      teamCourseSelect.innerHTML = `<option value="" disabled selected>Select a course</option>`;
      courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.id;
        option.textContent = `${course.name} (${course.code})`;
        teamCourseSelect.appendChild(option);
      });
    }
  
<<<<<<< HEAD
    // Update dropdown for reports (courses)
    function updateReportCourseDropdown() {
      reportCourseSelect.innerHTML = `<option value="" disabled selected>Select a course</option>`;
      courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.id;
        option.textContent = `${course.name} (${course.code})`;
        reportCourseSelect.appendChild(option);
      });
    }
  
    // ----------------------------
    // Teams Section
    // ----------------------------
    // Populate student dropdown with dummy students
    function updateStudentSelect() {
      studentSelect.innerHTML = `<option value="" disabled selected>Select a student</option>`;
      dummyStudents.forEach(student => {
        const option = document.createElement("option");
        option.value = student.id;
        option.textContent = student.name;
        studentSelect.appendChild(option);
      });
    }
    updateStudentSelect();
  
    // Handle adding a student to the temporary team list
    btnAddStudent.addEventListener("click", () => {
      const selectedStudentId = studentSelect.value;
      if (!selectedStudentId) {
        Swal.fire("Error", "Please select a student to add.", "error");
        return;
      }
      // Check if student already added
      if (tempTeamStudents.some(stud => stud.id == selectedStudentId)) {
        Swal.fire("Notice", "Student already added to the team.", "info");
        return;
      }
      const student = dummyStudents.find(stud => stud.id == selectedStudentId);
      if (student) {
        tempTeamStudents.push(student);
        Swal.fire("Success", `${student.name} added to team.`, "success");
        updateTeamStudentsUI();
      }
    });
  
    function updateTeamStudentsUI() {
      if (tempTeamStudents.length === 0) {
        divTeamStudents.innerHTML = "<p>No students added yet.</p>";
        return;
      }
      divTeamStudents.innerHTML = "";
      tempTeamStudents.forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.className = "border p-1 mb-1";
        studentDiv.textContent = student.name;
        divTeamStudents.appendChild(studentDiv);
      });
    }
  
=======
>>>>>>> student_page
    // Create Team
    btnCreateTeam.addEventListener("click", () => {
      const selectedCourseId = teamCourseSelect.value;
      const teamName = txtTeamName.value.trim();
      if (!selectedCourseId || !teamName) {
        Swal.fire("Error", "Please select a course and enter a team name.", "error");
        return;
      }
      const team = {
        id: Date.now(),
        courseId: selectedCourseId,
<<<<<<< HEAD
        name: teamName,
        students: [...tempTeamStudents]
      };
      teams.push(team);
      Swal.fire("Success", `Team "${teamName}" created with ${team.students.length} student(s).`, "success");
      txtTeamName.value = "";
      tempTeamStudents = [];
      updateTeamStudentsUI();
=======
        name: teamName
      };
      teams.push(team);
      Swal.fire("Success", `Team "${teamName}" created.`, "success");
      txtTeamName.value = "";
>>>>>>> student_page
      updateTeamList();
      updateClassMetrics();
    });
  
<<<<<<< HEAD
=======
    // Update Teams List UI
>>>>>>> student_page
    function updateTeamList() {
      divTeamList.innerHTML = "";
      if (teams.length === 0) {
        divTeamList.innerHTML = "<p>No teams yet.</p>";
        return;
      }
      teams.forEach(team => {
        const course = courses.find(c => c.id == team.courseId);
        const courseName = course ? course.name : "Unknown Course";
        const teamCard = document.createElement("div");
        teamCard.className = "border p-2 mb-2";
<<<<<<< HEAD
        let studentNames = team.students.map(s => s.name).join(", ") || "No students";
        teamCard.innerHTML = `<strong>${team.name}</strong> for ${courseName}<br>Students: ${studentNames}`;
=======
        teamCard.innerHTML = `<strong>${team.name}</strong> for ${courseName}`;
>>>>>>> student_page
        divTeamList.appendChild(teamCard);
      });
    }
  
<<<<<<< HEAD
    // ----------------------------
    // Review Template Section
    // ----------------------------
    // Add Question to current review template
=======
    // Add Question for Review Template
>>>>>>> student_page
    btnAddQuestion.addEventListener("click", () => {
      const questionText = txtQuestionText.value.trim();
      const questionType = ddlQuestionType.value;
      if (!questionText || !questionType) {
        Swal.fire("Error", "Please enter question text and select a question type.", "error");
        return;
      }
      const question = {
        id: Date.now(),
        text: questionText,
        type: questionType
      };
      currentReviewQuestions.push(question);
      Swal.fire("Success", "Question added.", "success");
      txtQuestionText.value = "";
      ddlQuestionType.selectedIndex = 0;
      updateReviewQuestionsUI();
    });
  
<<<<<<< HEAD
=======
    // Update review questions display
>>>>>>> student_page
    function updateReviewQuestionsUI() {
      divReviewQuestions.innerHTML = "";
      if (currentReviewQuestions.length === 0) {
        divReviewQuestions.innerHTML = "<p>No questions added yet.</p>";
        return;
      }
      currentReviewQuestions.forEach((q, index) => {
        const qDiv = document.createElement("div");
        qDiv.className = "border p-2 mb-2";
        qDiv.innerHTML = `<strong>Q${index + 1}:</strong> ${q.text} <br> Type: ${q.type} 
                          <button class="btn btn-sm btn-danger" data-id="${q.id}">Delete</button>`;
        divReviewQuestions.appendChild(qDiv);
      });
      // Add delete listeners for each question
      const delButtons = divReviewQuestions.querySelectorAll("button");
      delButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const qId = btn.getAttribute("data-id");
          currentReviewQuestions = currentReviewQuestions.filter(q => q.id != qId);
          updateReviewQuestionsUI();
        });
      });
    }
  
<<<<<<< HEAD
    // Create Review Template using review title, review type, and questions
    btnCreateReviewTemplate.addEventListener("click", () => {
      const reviewTitle = txtReviewTitle.value.trim();
      const reviewType = ddlReviewType.value;
      if (!reviewTitle || !reviewType) {
        Swal.fire("Error", "Please enter a review title and select a review type.", "error");
=======
    // Create Review Template (with associated questions)
    btnCreateReviewTemplate.addEventListener("click", () => {
      const reviewTitle = txtReviewTitle.value.trim();
      const reviewDescription = txtReviewDescription.value.trim();
      if (!reviewTitle) {
        Swal.fire("Error", "Please enter a review title.", "error");
>>>>>>> student_page
        return;
      }
      const reviewTemplate = {
        id: Date.now(),
        title: reviewTitle,
<<<<<<< HEAD
        type: reviewType, // public or private
=======
        description: reviewDescription,
>>>>>>> student_page
        questions: [...currentReviewQuestions]
      };
      reviewTemplates.push(reviewTemplate);
      Swal.fire("Success", `Review Template "${reviewTitle}" created.`, "success");
      txtReviewTitle.value = "";
<<<<<<< HEAD
      ddlReviewType.selectedIndex = 0;
=======
      txtReviewDescription.value = "";
>>>>>>> student_page
      currentReviewQuestions = [];
      updateReviewQuestionsUI();
      updateScheduleReviewSelect();
    });
  
<<<<<<< HEAD
    // ----------------------------
    // Scheduling Reviews Section
    // ----------------------------
=======
    // Update schedule review dropdown with available review templates
>>>>>>> student_page
    function updateScheduleReviewSelect() {
      scheduleReviewSelect.innerHTML = `<option value="" disabled selected>Select a review template</option>`;
      reviewTemplates.forEach(template => {
        const option = document.createElement("option");
        option.value = template.id;
        option.textContent = template.title;
        scheduleReviewSelect.appendChild(option);
      });
    }
  
<<<<<<< HEAD
=======
    // Schedule Review
>>>>>>> student_page
    btnScheduleReview.addEventListener("click", () => {
      const selectedTemplateId = scheduleReviewSelect.value;
      const reviewDate = txtReviewDate.value;
      const reviewTime = txtReviewTime.value;
      if (!selectedTemplateId || !reviewDate || !reviewTime) {
        Swal.fire("Error", "Please select a review template, date, and time.", "error");
        return;
      }
      const scheduled = {
        id: Date.now(),
        templateId: selectedTemplateId,
        date: reviewDate,
        time: reviewTime
      };
      scheduledReviews.push(scheduled);
      Swal.fire("Success", "Review scheduled.", "success");
      txtReviewDate.value = "";
      txtReviewTime.value = "";
    });
  
<<<<<<< HEAD
    // ----------------------------
    // Review Submissions Section (Simulated)
    // ----------------------------
=======
    // Update review submissions UI (dummy simulation)
>>>>>>> student_page
    function updateReviewSubmissions() {
      if (reviewSubmissions.public.length === 0) {
        divPublicReviewList.innerHTML = "<p>No public reviews yet.</p>";
      } else {
        divPublicReviewList.innerHTML = "";
        reviewSubmissions.public.forEach(review => {
          const reviewCard = document.createElement("div");
          reviewCard.className = "border p-2 mb-2";
          reviewCard.innerHTML = `<strong>${review.reviewer}</strong>: ${review.comment}`;
          divPublicReviewList.appendChild(reviewCard);
        });
      }
      if (reviewSubmissions.private.length === 0) {
        divPrivateReviewList.innerHTML = "<p>No private reviews yet.</p>";
      } else {
        divPrivateReviewList.innerHTML = "";
        reviewSubmissions.private.forEach(review => {
          const reviewCard = document.createElement("div");
          reviewCard.className = "border p-2 mb-2";
          reviewCard.innerHTML = `<strong>${review.reviewer}</strong>: ${review.comment}`;
          divPrivateReviewList.appendChild(reviewCard);
        });
      }
    }
    updateReviewSubmissions();
  
<<<<<<< HEAD
    // ----------------------------
    // Reports Section
    // ----------------------------
    // When a course is selected for report, simulate filtering (here all dummy reports will show for demonstration)
    reportCourseSelect.addEventListener("change", () => {
      selectedReportCourseId = reportCourseSelect.value;
      // For simulation, assign the selected courseId to each dummy student report
      studentReports.forEach(report => {
        report.courseId = selectedReportCourseId;
      });
      updateStudentAverageReport();
    });
  
    btnSortAverages.addEventListener("click", () => {
      // Toggle sort order
      sortAscending = !sortAscending;
=======
    // Sort and display student average report
    btnSortAverages.addEventListener("click", () => {
      studentReports.sort((a, b) => a.average - b.average);
>>>>>>> student_page
      updateStudentAverageReport();
    });
  
    function updateStudentAverageReport() {
<<<<<<< HEAD
      // Only show report if a course is selected
      if (!selectedReportCourseId) {
        divStudentAverageReport.innerHTML = "<p>Please select a course for the report.</p>";
        return;
      }
      // For simulation, filter reports by selected course (all dummy reports have been set to selectedReportCourseId)
      let filteredReports = studentReports.filter(r => r.courseId === selectedReportCourseId);
      // Sort based on toggle
      filteredReports.sort((a, b) => sortAscending ? a.average - b.average : b.average - a.average);
      
      divStudentAverageReport.innerHTML = "";
      if (filteredReports.length === 0) {
=======
      divStudentAverageReport.innerHTML = "";
      if (studentReports.length === 0) {
>>>>>>> student_page
        divStudentAverageReport.innerHTML = "<p>No report data available.</p>";
        return;
      }
      const table = document.createElement("table");
      table.className = "table table-striped";
      const thead = document.createElement("thead");
      thead.innerHTML = "<tr><th>Student</th><th>Average (100 pt scale)</th></tr>";
      table.appendChild(thead);
      const tbody = document.createElement("tbody");
<<<<<<< HEAD
      filteredReports.forEach(student => {
=======
      studentReports.forEach(student => {
>>>>>>> student_page
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${student.name}</td><td>${student.average}</td>`;
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      divStudentAverageReport.appendChild(table);
    }
<<<<<<< HEAD
  
    // ----------------------------
    // Class Metrics Section
    // ----------------------------
=======
    updateStudentAverageReport();
  
    // Update class metrics display
>>>>>>> student_page
    function updateClassMetrics() {
      classMetrics.totalCourses = courses.length;
      classMetrics.totalTeams = teams.length;
      divClassMetrics.innerHTML = `
        <p>Total Courses: ${classMetrics.totalCourses}</p>
        <p>Total Teams: ${classMetrics.totalTeams}</p>
        <p>Total Students: ${classMetrics.totalStudents}</p>
        <p>Average Review Score: ${classMetrics.averageReviewScore}</p>
      `;
    }
    updateClassMetrics();
  });
  