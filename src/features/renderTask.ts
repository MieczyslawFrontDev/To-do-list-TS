const renderTasks = () => {
  tasksContainer.innerText = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const taskId = `task-${index}`;

    const taskCheckboxElement = document.createElement("input");
    taskCheckboxElement.type = "checkbox";
    taskCheckboxElement.name = task.name;
    taskCheckboxElement.id = taskId;
    taskCheckboxElement.checked = task.done;
    taskCheckboxElement.addEventListener("click", () => {
      task.done = !task.done;
    });

    const taskLabelElement = document.createElement("label");
    taskLabelElement.setAttribute("for", taskId);
    taskLabelElement.innerText = task.name;

    taskElement.appendChild(taskCheckboxElement);
    taskElement.appendChild(taskLabelElement);
    tasksContainer.appendChild(taskElement);
  });
};
