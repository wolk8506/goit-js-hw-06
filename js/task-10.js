function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let amoutEl = 0;

// btnCreate.addEventListener("click", createElement);
btnCreate.addEventListener("click", () => createBoxes(input.value));
// btnDestroy.addEventListener("click", destroyBoxes);
btnDestroy.addEventListener("click", () => (boxes.innerHTML = ""));

// function createElement() {
//   createBoxes(input.value);
// }

function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    arr.push(i);
  }

  const elements = arr.map((num) => {
    const boxElement = document.createElement("div");
    boxElement.style.backgroundColor = getRandomHexColor();
    boxElement.style.width = 30 + num * 10 + "px";
    boxElement.style.height = 30 + num * 10 + "px";

    return boxElement;
  });

  boxes.append(...elements);
}

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }
