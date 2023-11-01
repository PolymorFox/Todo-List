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
  document.querySelectorAll("remove").forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
    });
  });
});

addButton.addEventListener("click", () => {
  const itemName = document.querySelector("#name").value;
  let date = new Date(document.querySelector("#date").value);
  const time = document.querySelector("#time").value;
  if (itemName === "" || date === "" || time === "") {
    alert("You must provided all necessary todo information");
    return;
  }
  const item = document.createElement("li");
  date = Intl.DateTimeFormat("default").format(date); // Set date to correct date

  item.innerHTML = `${itemName} on ${date} at ${time}`;
  item.insertAdjacentHTML(
    "beforeend",
    `
    <input type="checkbox" name="checkbox" id="checkbox" />
    `
  );

  const removeButton = document.createElement("button");

  removeButton.className = "remove";
  removeButton.innerHTML = 'Remove <i class="fa-solid fa-xmark"></i>';

  removeButton.addEventListener("click", () => {
    removeButton.parentElement.remove();
  });

  item.appendChild(removeButton);

  document.querySelector("ul").appendChild(item);
  listItems = document.querySelector("ul").innerHTML;
});
