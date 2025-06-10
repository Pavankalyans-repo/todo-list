function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${task} <span onclick="removeTask(this)">✖</span>`;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(element) {
  element.parentElement.remove();
}
