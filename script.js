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
  const item = document.createElement("li");
  date = Intl.DateTimeFormat("default").format(date); // Set date to correct date

  item.innerHTML = `<textarea rows=1 cols=10>${itemName}</textarea> on <textarea rows=1 cols=10>${date}</textarea> at <textarea rows=1 cols=10>${time}</textarea>`;
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
