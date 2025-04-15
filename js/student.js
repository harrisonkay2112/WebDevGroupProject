//AUTHOR: Harrison Kay
//DueDate: 4/15/2025

document.addEventListener("DOMContentLoaded", () => {
    // DOM Loaded Elements
    const txtGroupCode = document.getElementById("txtGroupCode");
    const btnJoinGroup = document.getElementById("btnJoinGroup");
    const divTeamInfo = document.getElementById("divTeamInfo");
    const ddlTeammates = document.getElementById("ddlTeammates");
    const ddlScore = document.getElementById("ddlScore");
    const txtPublicFeedback = document.getElementById("txtPublicFeedback");
    const txtPrivateFeedback = document.getElementById("txtPrivateFeedback");
    const btnSubmitReview = document.getElementById("btnSubmitReview");
    const divFeedbackInbox = document.getElementById("divFeedbackInbox");
    const btnToggleReviewForm = document.getElementById("btnToggleReviewForm");
    const divReviewPanel = document.getElementById("divReviewPanel");
  
    // placeholder teammate array info
    const arrTeammates = [
        //just placeholder teamates
      { strName: "Alex Johnson", strEmail: "alex@example.com", strDiscord: "alexj#1234", strTeams: "alex.j" },
      { strName: "Jamie Lin", strEmail: "jamie@example.com", strDiscord: "jamielin#4321", strTeams: "jamie.l" }
    ];
  
    // placeholder feedback array info
    const arrFeedback = [

      { strFrom: "Jamie Lin", strComment: "Great work in the last sprint!" },
      { strFrom: "Alex Johnson", strComment: "Appreciate your help on the project plan!" }
    ];
  
    // Toggle review panel
    btnToggleReviewForm.addEventListener("click", () => {
      divReviewPanel.classList.toggle("d-none");
    });
  
    // Join group action
    btnJoinGroup.addEventListener("click", () => {

      const strCode = txtGroupCode.value.trim();
      if (!strCode) {
        Swal.fire("Error", "Please enter a group code.", "error");
        return;
      }
  
      Swal.fire("Success", `You joined the group: ${strCode}`, "success");
      loadTeammates();

    });
  
    // Load teammates to UI
    function loadTeammates() {
      divTeamInfo.innerHTML = "";
      ddlTeammates.innerHTML = `<option selected disabled>Select a teammate</option>`;
  
      arrTeammates.forEach(objTeammate => {

        const strCard = `
          <div class="border p-2 mb-2">
            <strong>${objTeammate.strName}</strong><br>
            Email: ${objTeammate.strEmail}<br>
            Discord: ${objTeammate.strDiscord}<br>
            Teams: ${objTeammate.strTeams}
          </div>`;
        divTeamInfo.innerHTML += strCard;
  
        const opt = document.createElement("option");
        opt.value = objTeammate.strName;
        opt.textContent = objTeammate.strName;
        ddlTeammates.appendChild(opt);
      });
    }
  
    // Submit review button
    btnSubmitReview.addEventListener("click", () => {
      
      const strTeammate = ddlTeammates.value;
      const strScore = ddlScore.value;
      const strPublic = txtPublicFeedback.value.trim();
      const strPrivate = txtPrivateFeedback.value.trim();
  
      if (!strTeammate || !strScore || !strPublic) {
        Swal.fire("Missing Info", "Teammate, score, and public feedback are required.", "warning");
        return;
      }
  
      // Example: send this to backend via fetch()
      console.log({
        strTeammate,
        intScore: parseInt(strScore),
        strPublicFeedback: strPublic,
        strPrivateFeedback: strPrivate
      });
  
      Swal.fire("Submitted", `Your review for ${strTeammate} has been saved.`, "success");
  
      // Reset form
      ddlTeammates.selectedIndex = 0;
      ddlScore.selectedIndex = 0;
      txtPublicFeedback.value = "";
      txtPrivateFeedback.value = "";
      divReviewPanel.classList.add("d-none");
    });
  
    // Load feedback into inbox
    function loadFeedback() {
      divFeedbackInbox.innerHTML = "";
  
      if (arrFeedback.length === 0) {
        divFeedbackInbox.innerHTML = "<p>No feedback received yet.</p>";
      } else {
        arrFeedback.forEach(obj => {
          const strBlock = `
            <div class="border p-2 mb-2">
              <strong>From: ${obj.strFrom}</strong><br>
              ${obj.strComment}
            </div>`;
          divFeedbackInbox.innerHTML += strBlock;
        });
      }
    }
  
    // On load
    loadFeedback();
  });