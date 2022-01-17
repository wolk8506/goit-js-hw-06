const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const nameOutputTextDefault = nameOutput.textContent;

nameInput.addEventListener("input", onInputCange);

function onInputCange(event) {
  if (event.currentTarget.value.length === 0) {
    nameOutput.textContent = nameOutputTextDefault;
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}
