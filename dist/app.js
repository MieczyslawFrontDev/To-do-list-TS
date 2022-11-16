import { TaskClass } from "./class/class.js";
import { renderCategories } from "./features/renderCategories.js";
import { renderTasks } from "./features/renderTask.js";
import { Category } from "./types/types.js";
var taskInputElement = document.querySelector("#taskName");
var addTaskButtonElement = document.querySelector(".addTask");
var tasksContainer = document.querySelector(".tasks");
var categoriesContainer = document.querySelector(".categories");
var message = document.querySelector(".message");
var removeTasksButton = document.querySelector(".removeDone");
var categories = [
  Category.General,
  Category.Gym,
  Category.Hobby,
  Category.Work,
];
var selectedCategory;
var tasks = [
  new TaskClass("Wyjść z psem na spacer", false, Category.General),
  new TaskClass("Zrobić trening", false, Category.Gym),
  new TaskClass("Nauczyć się TS", false, Category.Hobby),
  new TaskClass("Znaleźć pracę", false, Category.Work),
];
var addTask = function (task) {
  if (!taskInputElement.value) {
    message.style.display = "flex";
    return;
  }
  tasks.push(task);
  taskInputElement.value = "";
  message.style.display = "none";
};
var updateSelectedCategory = function (newCategory) {
  selectedCategory = newCategory;
};
addTaskButtonElement.addEventListener("click", function (event) {
  event.preventDefault();
  var newTask = new TaskClass(taskInputElement.value, false, selectedCategory);
  addTask(newTask);
  renderTasks(tasksContainer, tasks);
});
var removeDoneTasks = function () {
  tasks = tasks.filter(function (task) {
    return !task.done;
  });
};
removeTasksButton.addEventListener("click", function (event) {
  event.preventDefault();
  removeDoneTasks();
  renderTasks(tasksContainer, tasks);
});
renderCategories(categories, categoriesContainer, updateSelectedCategory);
renderTasks(tasksContainer, tasks);
