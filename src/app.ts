const taskInputElement: HTMLInputElement = document.querySelector("#taskName");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector(".addTask");
const tasksContainer: HTMLUListElement = document.querySelector(".tasks");
const categoriesContainer: HTMLUListElement =
  document.querySelector(".categories");

interface Task {
  name: string;
  done: boolean;
}

type Categories = "general" | "work" | "gym" | "hobby";

const categories: Categories[] = ["general", "work", "gym", "hobby"];

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

const renderCategories = () => {
  //   <li>
  //   <input type="text" name="category" value="general"
  //     id="category-general">
  // </li>

  categories.forEach((category) => {
    const categoryElement: HTMLLIElement = document.createElement("li");
    const categoryId = `category-${category}`;

    const categoryRadioElement: HTMLInputElement =
      document.createElement("input");
    categoryRadioElement.type = "radio";
    categoryRadioElement.name = category;
    categoryRadioElement.value = category;
    categoryRadioElement.id = categoryId;

    const categoryLabelElement: HTMLLabelElement =
      document.createElement("label");
    categoryLabelElement.setAttribute("for", `category-${category}`);
    categoryLabelElement.innerText = category;

    categoryElement.appendChild(categoryRadioElement);
    categoryElement.appendChild(categoryLabelElement);
    categoriesContainer.appendChild(categoryElement);
  });
};

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

renderCategories();
renderTasks();
