const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "web_dev") {
    //bug!: does not open and stall the program
    // alert("You have successfully logged in.");
    console.log("you are correct");
    location.reload();
  } else {
    console.log("you are incorrect");
    loginErrorMsg.style.opacity = 1;
    location.reload();
  }
});
