var renderTasks = function () {
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
        taskElement.appendChild(taskCheckboxElement);
        taskElement.appendChild(taskLabelElement);
        tasksContainer.appendChild(taskElement);
    });
};
