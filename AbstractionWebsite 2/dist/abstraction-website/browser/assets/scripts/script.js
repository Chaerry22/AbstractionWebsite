function handleGoToSignUp() {
  window.location.href = "/SignupPage";
}
function handleGoToLogin() {
  window.location.href = "/LoginPage";
}
document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById("signup");
  if (signUpButton) {
    signUpButton.addEventListener("click", handleGoToSignUp);
  }

  const loginButton = document.getElementById("login");
  if (loginButton) {
    loginButton.addEventListener("click", handleGoToLogin);
  }
});
