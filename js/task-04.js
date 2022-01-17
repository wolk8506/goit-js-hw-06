let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

decrement.addEventListener("click", () => {
  counterValue -= 1;
  value.innerHTML = counterValue;
});

increment.addEventListener("click", () => {
  counterValue += 1;
  value.innerHTML = counterValue;
});
