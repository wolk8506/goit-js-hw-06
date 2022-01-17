function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btnChangeColor.addEventListener("click", changeColor);

function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}

// bodyColor.style.backgroundColor = "#c5c5c5";
