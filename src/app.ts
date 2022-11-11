const taskInputElement: HTMLInputElement = document.querySelector("#taskName");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector(".addTask");
const tasksContainer: HTMLUListElement = document.querySelector(".tasks");

interface Task {
  name: string;
  done: boolean;
}

const tasks: Task[] = [
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

const renderTasks = () => {
  tasksContainer.innerText = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    const taskId = `task-${index}`;

    const taskInputElement = document.createElement("input");
    taskInputElement.type = "checkbox";
    taskInputElement.name = task.name;
    taskInputElement.id = taskId;
    taskInputElement.checked = task.done;
    taskInputElement.addEventListener("click", () => {
      task.done = !task.done;
    });

    const taskLabelElement = document.createElement("label");
    taskLabelElement.setAttribute("for", taskId);
    taskLabelElement.innerText = task.name;

    taskElement.appendChild(taskInputElement);
    taskElement.appendChild(taskLabelElement);
    tasksContainer.appendChild(taskElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addTaskButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();

  addTask({ name: taskInputElement.value, done: false });
  renderTasks();
});

addTask({ name: "asasdasdasd", done: true });

renderTasks();
