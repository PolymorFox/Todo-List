const clearButton = document.querySelector("#clear");

const resetButton = document.querySelector("#reset");

const addButton = document.querySelector("#add");

let listItems = document.querySelector("ul").innerHTML;

clearButton.addEventListener("click", () => {
  listItems = document.querySelector("ul").innerHTML;
  document.querySelector("ul").innerHTML = "";
});

resetButton.addEventListener("click", () => {
  document.querySelector("ul").innerHTML = listItems;
});

addButton.addEventListener("click", () => {
  const itemName = document.querySelector("#name").value;
  const date = document.querySelector("#date").value;
  const time = document.querySelector("#time").value;
  const item = document.createElement("li");

  item.innerText = `${itemName} on ${date} at ${time}`;
  item.insertAdjacentHTML(
    "beforeend",
    `
    <input type="checkbox" name="checkbox" id="checkbox" />
    `
  );

  const removeButton = document.createElement("button");

  removeButton.className = "remove";
  removeButton.innerText = "Remove";

  removeButton.addEventListener("click", () => {
    removeButton.parentElement.remove();
  });

  item.appendChild(removeButton);

  document.querySelector("ul").appendChild(item);
  listItems = document.querySelector("ul").innerHTML;
});
