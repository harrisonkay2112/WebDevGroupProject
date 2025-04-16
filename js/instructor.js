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
    // Dummy student report data with courseId property (for simulation)
    let studentReports = [
      { name: "Alice Example", average: 75, courseId: null },
      { name: "Bob Example", average: 82, courseId: null },
      { name: "Charlie Example", average: 68, courseId: null }
    ];
    // Dummy class metrics
    let classMetrics = {
      totalStudents: 30,
      totalCourses: 0,
      totalTeams: 0,
      averageReviewScore: 80
    };
  
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
    const txtCourseName = document.getElementById("courseName");
    const txtCourseCode = document.getElementById("courseCode");
    const btnCreateCourse = document.getElementById("btnCreateCourse");
    const divCourseList = document.getElementById("courseList");
  
    // Get DOM elements for Teams
    const teamCourseSelect = document.getElementById("teamCourse");
    const txtTeamName = document.getElementById("teamName");
    const btnCreateTeam = document.getElementById("btnCreateTeam");
    const divTeamList = document.getElementById("teamList");
    // New elements for team student management
    const studentSelect = document.getElementById("studentSelect");
    const btnAddStudent = document.getElementById("btnAddStudent");
    const divTeamStudents = document.getElementById("teamStudents");
  
    // Get DOM elements for Review Template (left column)
    const txtReviewTitle = document.getElementById("reviewTitle");
    const ddlReviewType = document.getElementById("reviewType");
    const btnCreateReviewTemplate = document.getElementById("btnCreateReviewTemplate");
    const divReviewQuestions = document.getElementById("reviewQuestions");
    const txtQuestionText = document.getElementById("questionText");
    const ddlQuestionType = document.getElementById("questionType");
    const btnAddQuestion = document.getElementById("btnAddQuestion");
  
    // Get DOM elements for Scheduling Reviews
    const scheduleReviewSelect = document.getElementById("scheduleReviewSelect");
    const txtReviewDate = document.getElementById("reviewDate");
    const txtReviewTime = document.getElementById("reviewTime");
    const btnScheduleReview = document.getElementById("btnScheduleReview");
  
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
      updateReportCourseDropdown();
      updateScheduleReviewSelect();
      updateClassMetrics();
    });
  
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
  
    // Update dropdown for team creation (courses)
    function updateTeamCourseDropdown() {
      teamCourseSelect.innerHTML = `<option value="" disabled selected>Select a course</option>`;
      courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.id;
        option.textContent = `${course.name} (${course.code})`;
        teamCourseSelect.appendChild(option);
      });
    }
  
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
        name: teamName,
        students: [...tempTeamStudents]
      };
      teams.push(team);
      Swal.fire("Success", `Team "${teamName}" created with ${team.students.length} student(s).`, "success");
      txtTeamName.value = "";
      tempTeamStudents = [];
      updateTeamStudentsUI();
      updateTeamList();
      updateClassMetrics();
    });
  
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
        let studentNames = team.students.map(s => s.name).join(", ") || "No students";
        teamCard.innerHTML = `<strong>${team.name}</strong> for ${courseName}<br>Students: ${studentNames}`;
        divTeamList.appendChild(teamCard);
      });
    }
  
    // ----------------------------
    // Review Template Section
    // ----------------------------
    // Add Question to current review template
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
  
    // Create Review Template using review title, review type, and questions
    btnCreateReviewTemplate.addEventListener("click", () => {
      const reviewTitle = txtReviewTitle.value.trim();
      const reviewType = ddlReviewType.value;
      if (!reviewTitle || !reviewType) {
        Swal.fire("Error", "Please enter a review title and select a review type.", "error");
        return;
      }
      const reviewTemplate = {
        id: Date.now(),
        title: reviewTitle,
        type: reviewType, // public or private
        questions: [...currentReviewQuestions]
      };
      reviewTemplates.push(reviewTemplate);
      Swal.fire("Success", `Review Template "${reviewTitle}" created.`, "success");
      txtReviewTitle.value = "";
      ddlReviewType.selectedIndex = 0;
      currentReviewQuestions = [];
      updateReviewQuestionsUI();
      updateScheduleReviewSelect();
    });
  
    // ----------------------------
    // Scheduling Reviews Section
    // ----------------------------
    function updateScheduleReviewSelect() {
      scheduleReviewSelect.innerHTML = `<option value="" disabled selected>Select a review template</option>`;
      reviewTemplates.forEach(template => {
        const option = document.createElement("option");
        option.value = template.id;
        option.textContent = template.title;
        scheduleReviewSelect.appendChild(option);
      });
    }
  
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
  
    // ----------------------------
    // Review Submissions Section (Simulated)
    // ----------------------------
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
      updateStudentAverageReport();
    });
  
    function updateStudentAverageReport() {
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
        divStudentAverageReport.innerHTML = "<p>No report data available.</p>";
        return;
      }
      const table = document.createElement("table");
      table.className = "table table-striped";
      const thead = document.createElement("thead");
      thead.innerHTML = "<tr><th>Student</th><th>Average (100 pt scale)</th></tr>";
      table.appendChild(thead);
      const tbody = document.createElement("tbody");
      filteredReports.forEach(student => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${student.name}</td><td>${student.average}</td>`;
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      divStudentAverageReport.appendChild(table);
    }
  
    // ----------------------------
    // Class Metrics Section
    // ----------------------------
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
  