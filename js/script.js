let inputBox = document.getElementById("input-text");
let listsContainer = document.getElementById("Tasks");
let addButton = document.querySelector("button");

addButton.onclick = function () {
  if (inputBox.value) {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listsContainer.appendChild(li);
    window.localStorage.setItem("task", inputBox.value);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  } else {
    alert(`You Need to Write Your Tasks!`);
  }
  saveData();
};

listsContainer.addEventListener("click", function (el) {
  if (el.target.tagName === "LI") {
    el.target.classList.toggle("checked");
    saveData();
  } else if (el.target.tagName === "SPAN") {
    el.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  window.localStorage.setItem("data", listsContainer.innerHTML);
}
function showData() {
  listsContainer.innerHTML = window.localStorage.data;
}
showData();
