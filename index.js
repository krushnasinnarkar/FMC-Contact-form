"use strict";

// Query Type Variables
const genInqElement = document.getElementById("gen-inquiry");
const supportReqElement = document.getElementById("support-req");
const genInqDiv = document.getElementById("gen-inq-div");
const supportReqDiv = document.getElementById("support-req-div");
const errorElement = document.querySelector(".hidden");

// Form Validation Variables
const firstNameInputField = document.getElementById("firstname");
const firstNameError = document.querySelector("[data-firstname]");
const lastNameInputField = document.getElementById("lastname");
const lastNameError = document.querySelector("[data-lastname]");
const emailInputField = document.getElementById("email");
const emailError = document.querySelector("[data-email");
const genInquiryRadioBtn = document.getElementById("gen-inquiry");
const supportReqRadioBtn = document.getElementById("support-req");
const queryError = document.querySelector("[data-query]");
const queryDiv = document.querySelectorAll(".query");
const messageInputField = document.getElementById("message");
const messageError = document.querySelector("[data-message");
const consentInput = document.getElementById("consent");
const consentMessage = document.querySelector(".consent-message");
const consentError = document.querySelector("[data-consent");
const submitBtn = document.getElementById("submit-btn");

// Success Message Variables
const successElement = document.querySelector(".success-container");
let successfulTransmission = false;

// Handle radio button styling
genInqElement.addEventListener("click", function () {
  genInqDiv.style.backgroundColor = "hsl(148, 38%, 91%)";
  supportReqDiv.style.backgroundColor = "white";
});
supportReqElement.addEventListener("click", function () {
  genInqDiv.style.backgroundColor = "white";
  supportReqDiv.style.backgroundColor = "hsl(148, 38%, 91%)";
});

// Validate Form
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //First Name field
  if (firstNameInputField.value === "" || firstNameInputField.value == "null") {
    firstNameInputField.style.border = "1px solid hsl(0, 66%, 54%)";
    firstNameError.classList.remove("hidden");
  }
  firstNameInputField.addEventListener("click", () => {
    firstNameInputField.style.border = "1px solid hsl(169, 82%, 27%)";
    firstNameError.classList.add("hidden");
  });

  //Last Name field
  if (lastNameInputField.value === "" || firstNameInputField.value == "null") {
    lastNameInputField.style.border = "1px solid hsl(0, 66%, 54%)";
    lastNameError.classList.remove("hidden");
  }
  lastNameInputField.addEventListener("click", () => {
    lastNameInputField.style.border = "1px solid hsl(169, 82%, 27%)";
    lastNameError.classList.add("hidden");
  });

  // Email field
  if (!emailInputField.reportValidity()) {
    emailInputField.style.border = "1px solid hsl(0, 66%, 54%)";
    emailError.classList.remove("hidden");
  }
  emailInputField.addEventListener("click", () => {
    emailInputField.style.border = "1px solid hsl(169, 82%, 27%)";
    emailError.classList.add("hidden");
  });

  // Query Radio Buttons
  if (!genInquiryRadioBtn.checked && !supportReqRadioBtn.checked) {
    queryError.classList.remove("hidden");
  }
  queryDiv.forEach((option) => {
    option.addEventListener("click", () => {
      queryError.classList.add("hidden");
    });
  });

  // Message field
  if (messageInputField.value === "" || firstNameInputField.value == "null") {
    messageInputField.style.border = "1px solid hsl(0, 66%, 54%)";
    messageError.classList.remove("hidden");
  }
  messageInputField.addEventListener("click", () => {
    messageInputField.style.border = "1px solid hsl(169, 82%, 27%)";
    messageError.classList.add("hidden");
  });

  // Consent checkbox
  if (!consentInput.checked) {
    consentError.classList.remove("hidden");
  }
  consentMessage.addEventListener("click", () => {
    consentError.classList.add("hidden");
  });
  consentInput.addEventListener("click", () => {
    consentError.classList.add("hidden");
  });

  // Check form validity and display success message
  if (form.reportValidity()) {
    successfulTransmission = true;
    // Display success message
    successElement.classList.remove("hidden");
    //Reset form
    firstNameInputField.value = "";
    lastNameInputField.value = "";
    emailInputField.value = "";
    genInquiryRadioBtn.checked = false;
    genInqDiv.style.backgroundColor = "white";
    supportReqRadioBtn.checked = false;
    supportReqDiv.style.backgroundColor = "white";
    messageInputField.value = "";
    consentInput.checked = false;
  }
});

// Event listeners that remove error for fields once they become valid
firstNameInputField.addEventListener("input", (e) => {
  if (e.value !== "" || e.value != "null") {
    firstNameInputField.style.border = "1px solid hsl(169, 82%, 27%)";
    firstNameError.classList.add("hidden");
  }
});

lastNameInputField.addEventListener("input", (e) => {
  if (e.value !== "" && e.value != "null") {
    lastNameInputField.style.border = "1px solid hsl(169, 82%, 27%)";
    lastNameError.classList.add("hidden");
  }
});

emailInputField.addEventListener("input", (e) => {
  if (e.value !== "" && e.value != "null") {
    emailInputField.style.border = "1px solid hsl(169, 82%, 27%)";
    emailError.classList.add("hidden");
  }
});
