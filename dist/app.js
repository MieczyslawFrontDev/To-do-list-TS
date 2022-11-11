var taskInputElement = document.querySelector("#taskName");
var addTaskButtonElement = document.querySelector(".addTask");
var tasksContainer = document.querySelector(".tasks");
var tasks = [
    {
        name: "Wyjść z psem na spacer",
        done: false,
    },
    {
        name: "Zrobić trening",
        done: false,
    },
    {
        name: "Nauczyć się TS",
        done: false,
    },
    {
        name: "Znaleźć pracę",
        done: false,
    },
];
// const tasks: string[] = [
//   "Wyjść z psem na spacer",
//   "Zrobić trening",
//   "Nauczyć się TS",
//   "Znaleźć pracę",
// ];
var renderTasks = function () {
    tasksContainer.innerText = "";
    tasks.forEach(function (task, index) {
        var taskElement = document.createElement("li");
        var taskId = "task-".concat(index);
        var taskInputElement = document.createElement("input");
        taskInputElement.type = "checkbox";
        taskInputElement.name = task.name;
        taskInputElement.id = taskId;
        var taskLabelElement = document.createElement("label");
        taskLabelElement.setAttribute("for", taskId);
        taskLabelElement.innerText = task.name;
        taskElement.appendChild(taskInputElement);
        taskElement.appendChild(taskLabelElement);
        tasksContainer.appendChild(taskElement);
    });
};
var addTask = function (taskName) {
    tasks.push({ name: taskName, done: false });
};
addTaskButtonElement.addEventListener("click", function (event) {
    event.preventDefault();
    addTask(taskInputElement.value);
    renderTasks();
});
renderTasks();
