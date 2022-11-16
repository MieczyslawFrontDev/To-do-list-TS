export var renderTasks = function (tasksContainer, tasks) {
    tasksContainer.innerText = "";
    tasks.forEach(function (task, index) {
        var taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        var taskId = "task-".concat(index);
        var taskCheckboxElement = document.createElement("input");
        taskCheckboxElement.type = "checkbox";
        taskCheckboxElement.name = task.name;
        taskCheckboxElement.id = taskId;
        taskCheckboxElement.checked = task.done;
        taskCheckboxElement.addEventListener("click", function () {
            task.done = !task.done;
        });
        var taskLabelElement = document.createElement("label");
        taskLabelElement.setAttribute("for", taskId);
        taskLabelElement.innerText = task.name;
        var taskCreationDateElement = document.createElement("p");
        taskCreationDateElement.innerText = task.createdAt;
        taskElement.appendChild(taskCheckboxElement);
        taskElement.appendChild(taskLabelElement);
        taskElement.appendChild(taskCreationDateElement);
        tasksContainer.appendChild(taskElement);
    });
};
