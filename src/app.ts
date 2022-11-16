import { TaskClass } from "./class/class.js";
import { renderCategories } from "./features/renderCategories.js";
import { renderTasks } from "./features/renderTask.js";
import { Category } from "./types/types.js";

const taskInputElement: HTMLInputElement = document.querySelector("#taskName");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector(".addTask");
const tasksContainer: HTMLUListElement = document.querySelector(".tasks");
const categoriesContainer: HTMLUListElement =
  document.querySelector(".categories");
const message: HTMLParagraphElement = document.querySelector(".message");

const categories: Category[] = [
  Category.General,
  Category.Gym,
  Category.Hobby,
  Category.Work,
];

let selectedCategory: Category;

const tasks: TaskClass[] = [
  new TaskClass("Wyjść z psem na spacer", false, Category.General),
  new TaskClass("Zrobić trening", false, Category.Gym),
  new TaskClass("Nauczyć się TS", false, Category.Hobby),
  new TaskClass("Znaleźć pracę", false, Category.Work),
];

const addTask = (task: TaskClass) => {
  if (!taskInputElement.value) {
    message.style.display = "flex";
    return;
  }
  tasks.push(task);
  taskInputElement.value = "";
  message.style.display = "none";
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addTaskButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();

  const newTask = new TaskClass(
    taskInputElement.value,
    false,
    selectedCategory
  );

  addTask(newTask);

  renderTasks(tasksContainer, tasks);
});

renderCategories(categories, categoriesContainer, updateSelectedCategory);
renderTasks(tasksContainer, tasks);
