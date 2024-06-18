const form = document.getElementById("form");

let valid = true;

form.addEventListener("submit", function (event) {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector('input[name="query"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("checkbox").checked;
  const successMsg = document.getElementById("success-msg");

  event.preventDefault();

  if (firstName === "") {
    showError("first-name");
    valid = false;
  } else {
    hideError("first-name");
  }

  if (lastName === "") {
    showError("last-name");
    valid = false;
  } else {
    hideError("last-name");
  }

  let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!regex.test(email)) {
    showError("email");
    valid = false;
  } else {
    hideError("email");
  }
  if (!queryType) {
    showError("query-group");
    valid = false;
  } else {
    hideError("query-group");
  }

  if (!message) {
    showError("message");
    valid = false;
  } else {
    hideError("message");
  }

  if (!consent) {
    showError("checkbox");
    valid = false;
  } else {
    hideError("checkbox");
  }

  if (valid) {
    successMsg.classList.remove("message-active");
    setTimeout(() => {
      successMsg.classList.add("message-active");
      form.reset();
    }, 3000);
  }

  function showError(elementId) {
    document.getElementById(elementId).nextElementSibling.style.visibility =
      "visible";
  }

  function hideError(elementId) {
    document.getElementById(elementId).nextElementSibling.style.visibility =
      "hidden";
  }
});
