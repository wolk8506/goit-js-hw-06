const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", fontSizeText);

fontSizeControl.value = fontSizeControl.min;

function fontSizeText() {
  text.style.fontSize = `${fontSizeControl.value}px`;
}
