

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  var submitButton = document.getElementById("submit-button");
  var loadingIcon = document.getElementById("loading-icon");
  var successMessage = document.getElementById("success-message");

  submitButton.style.display = "none";
  loadingIcon.style.display = "block";

  setTimeout(function () {
      loadingIcon.style.display = "none";
      successMessage.style.display = "block";
  }, 2000);
});

const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});


