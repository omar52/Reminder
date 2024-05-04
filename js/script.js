let inputBox = document.getElementById("input-text");
let listsContainer = document.getElementById("Tasks");
let addButton = document.querySelector("button");

addButton.onclick = function () {
  if (inputBox.value) {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listsContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  } else {
    alert(`You Need to Write Your Tasks!`);
  }
};

listsContainer.addEventListener("click", function (el) {
  if (el.target.tagName === "LI") {
    el.target.classList.toggle("checked");
  } else if (el.target.tagName === "SPAN") {
    el.target.parentElement.remove();
  }
});
