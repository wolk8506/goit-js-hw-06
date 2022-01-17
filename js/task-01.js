const categories = document.querySelector("#categories");

const item = document.querySelectorAll(".item");
console.log(`Number of categories:  ${item.length}`);
console.log("");

for (let i = 0; i < categories.children.length; i += 1) {
  const categoryName = categories.children[i].querySelector("h2");
  const itemQuantity = categories.children[i].querySelectorAll("li");
  console.log("Category: " + categoryName.textContent);
  console.log("itemAnimals Elements: " + itemQuantity.length);
  console.log("");
}
