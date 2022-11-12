import { renderCategories } from "./features/renderCategories.js";
import { renderTasks } from "./features/renderTask.js";
import { Category, Task } from "./types/types.js";

const taskInputElement: HTMLInputElement = document.querySelector("#taskName");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector(".addTask");
const tasksContainer: HTMLUListElement = document.querySelector(".tasks");
const categoriesContainer: HTMLUListElement =
  document.querySelector(".categories");

const categories: Category[] = [
  Category.General,
  Category.Gym,
  Category.Hobby,
  Category.Work,
];

let selectedCategory: Category;

const tasks: Task[] = [
  {
    name: "Wyjść z psem na spacer",
    done: false,
    category: Category.General,
  },
  {
    name: "Zrobić trening",
    done: false,
    category: Category.Gym,
  },
  {
    name: "Nauczyć się TS",
    done: false,
    category: Category.Hobby,
  },
  {
    name: "Znaleźć pracę",
    done: false,
    category: Category.Work,
  },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addTaskButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    name: taskInputElement.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks(tasksContainer, tasks);
});

renderCategories(categories, categoriesContainer, updateSelectedCategory);
renderTasks(tasksContainer, tasks);
