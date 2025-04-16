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
    // Dummy student report data
    let studentReports = [
      { name: "Student A", average: 75 },
      { name: "Student B", average: 82 },
      { name: "Student C", average: 68 }
    ];
    // Dummy class metrics
    let classMetrics = {
      totalStudents: 30,
      totalCourses: 0,
      totalTeams: 0,
      averageReviewScore: 80
    };
  
    // Get DOM elements for courses
    const txtCourseName = document.getElementById("courseName");
    const txtCourseCode = document.getElementById("courseCode");
    const btnCreateCourse = document.getElementById("btnCreateCourse");
    const divCourseList = document.getElementById("courseList");
  
    // Get DOM elements for teams
    const teamCourseSelect = document.getElementById("teamCourse");
    const txtTeamName = document.getElementById("teamName");
    const btnCreateTeam = document.getElementById("btnCreateTeam");
    const divTeamList = document.getElementById("teamList");
  
    // Get DOM elements for review template
    const txtReviewTitle = document.getElementById("reviewTitle");
    const txtReviewDescription = document.getElementById("reviewDescription");
    const btnCreateReviewTemplate = document.getElementById("btnCreateReviewTemplate");
    const divReviewQuestions = document.getElementById("reviewQuestions");
    const txtQuestionText = document.getElementById("questionText");
    const ddlQuestionType = document.getElementById("questionType");
    const btnAddQuestion = document.getElementById("btnAddQuestion");
  
    // Get DOM elements for scheduling reviews
    const scheduleReviewSelect = document.getElementById("scheduleReviewSelect");
    const txtReviewDate = document.getElementById("reviewDate");
    const txtReviewTime = document.getElementById("reviewTime");
    const btnScheduleReview = document.getElementById("btnScheduleReview");
  
    // Get DOM elements for reports
    const btnSortAverages = document.getElementById("btnSortAverages");
    const divStudentAverageReport = document.getElementById("studentAverageReport");
    const divClassMetrics = document.getElementById("classMetrics");
  
    // Get DOM elements for review submissions tabs
    const divPublicReviewList = document.getElementById("publicReviewList");
    const divPrivateReviewList = document.getElementById("privateReviewList");
  
    // Create Course
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
      updateScheduleReviewSelect();
      updateClassMetrics();
    });
  
    // Update Courses List UI
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
  
    // Update team course dropdown options
    function updateTeamCourseDropdown() {
      teamCourseSelect.innerHTML = `<option value="" disabled selected>Select a course</option>`;
      courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.id;
        option.textContent = `${course.name} (${course.code})`;
        teamCourseSelect.appendChild(option);
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
        name: teamName
      };
      teams.push(team);
      Swal.fire("Success", `Team "${teamName}" created.`, "success");
      txtTeamName.value = "";
      updateTeamList();
      updateClassMetrics();
    });
  
    // Update Teams List UI
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
        teamCard.innerHTML = `<strong>${team.name}</strong> for ${courseName}`;
        divTeamList.appendChild(teamCard);
      });
    }
  
    // Add Question for Review Template
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
  
    // Update review questions display
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
  
    // Create Review Template (with associated questions)
    btnCreateReviewTemplate.addEventListener("click", () => {
      const reviewTitle = txtReviewTitle.value.trim();
      const reviewDescription = txtReviewDescription.value.trim();
      if (!reviewTitle) {
        Swal.fire("Error", "Please enter a review title.", "error");
        return;
      }
      const reviewTemplate = {
        id: Date.now(),
        title: reviewTitle,
        description: reviewDescription,
        questions: [...currentReviewQuestions]
      };
      reviewTemplates.push(reviewTemplate);
      Swal.fire("Success", `Review Template "${reviewTitle}" created.`, "success");
      txtReviewTitle.value = "";
      txtReviewDescription.value = "";
      currentReviewQuestions = [];
      updateReviewQuestionsUI();
      updateScheduleReviewSelect();
    });
  
    // Update schedule review dropdown with available review templates
    function updateScheduleReviewSelect() {
      scheduleReviewSelect.innerHTML = `<option value="" disabled selected>Select a review template</option>`;
      reviewTemplates.forEach(template => {
        const option = document.createElement("option");
        option.value = template.id;
        option.textContent = template.title;
        scheduleReviewSelect.appendChild(option);
      });
    }
  
    // Schedule Review
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
  
    // Update review submissions UI (dummy simulation)
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
  
    // Sort and display student average report
    btnSortAverages.addEventListener("click", () => {
      studentReports.sort((a, b) => a.average - b.average);
      updateStudentAverageReport();
    });
  
    function updateStudentAverageReport() {
      divStudentAverageReport.innerHTML = "";
      if (studentReports.length === 0) {
        divStudentAverageReport.innerHTML = "<p>No report data available.</p>";
        return;
      }
      const table = document.createElement("table");
      table.className = "table table-striped";
      const thead = document.createElement("thead");
      thead.innerHTML = "<tr><th>Student</th><th>Average (100 pt scale)</th></tr>";
      table.appendChild(thead);
      const tbody = document.createElement("tbody");
      studentReports.forEach(student => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${student.name}</td><td>${student.average}</td>`;
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      divStudentAverageReport.appendChild(table);
    }
    updateStudentAverageReport();
  
    // Update class metrics display
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
  