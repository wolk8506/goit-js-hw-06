const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (password.length === 0 || mail.length === 0) {
    alert("Email and password must be filled");
  } else {
    const formData = { password, mail };
    console.log(formData);
    form.reset();
  }
}
