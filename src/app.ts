const taskInputElement: HTMLInputElement = document.querySelector("#taskName");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector(".addTask");
const tasksContainer: HTMLUListElement = document.querySelector(".tasks");
const categoriesContainer: HTMLUListElement =
  document.querySelector(".categories");

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

type Category = "general" | "work" | "gym" | "hobby";

const categories: Category[] = ["general", "work", "gym", "hobby"];

let selectedCategory: Category;

const tasks: Task[] = [
  {
    name: "Wyjść z psem na spacer",
    done: false,
    category: "general",
  },
  {
    name: "Zrobić trening",
    done: false,
    category: "gym",
  },
  {
    name: "Nauczyć się TS",
    done: false,
    category: "hobby",
  },
  {
    name: "Znaleźć pracę",
    done: false,
    category: "work",
  },
];

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLLIElement = document.createElement("li");
    const categoryId = `category-${category}`;

    const categoryRadioElement: HTMLInputElement =
      document.createElement("input");
    categoryRadioElement.type = "radio";
    categoryRadioElement.name = "category";
    categoryRadioElement.value = category;
    categoryRadioElement.id = categoryId;

    categoryRadioElement.addEventListener("change", () => {
      selectedCategory = category;
    });

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

const addTask = (task: Task) => {
  tasks.push(task);
};

addTaskButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();

  addTask({
    name: taskInputElement.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks();
});

addTask({ name: "asasdasdasd", done: true, category: "general" });

renderCategories();
renderTasks();
