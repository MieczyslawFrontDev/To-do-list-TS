const taskInputElement: HTMLInputElement = document.querySelector("#taskName");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector(".addTask");
const tasksContainer: HTMLUListElement = document.querySelector(".tasks");

const tasks: string[] = [
  "Wyjść z psem na spacer",
  "Zrobić trening",
  "Nauczyć się TS",
  "Znaleźć pracę",
];

const renderTasks = () => {
  tasksContainer.innerText = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    const taskId = `task-${index}`;

    const taskInputElement = document.createElement("input");
    taskInputElement.type = "checkbox";
    taskInputElement.name = task;
    taskInputElement.id = taskId;

    const taskLabelElement = document.createElement("label");
    taskLabelElement.setAttribute("for", taskId);
    taskLabelElement.innerText = task;

    taskElement.appendChild(taskInputElement);
    taskElement.appendChild(taskLabelElement);
    tasksContainer.appendChild(taskElement);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addTaskButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();

  addTask(taskInputElement.value);
  renderTasks();
});

renderTasks();
