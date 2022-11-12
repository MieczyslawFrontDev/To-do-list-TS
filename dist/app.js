import { renderCategories } from "./features/renderCategories.js";
import { renderTasks } from "./features/renderTask.js";
import { Category } from "./types/types.js";
var taskInputElement = document.querySelector("#taskName");
var addTaskButtonElement = document.querySelector(".addTask");
var tasksContainer = document.querySelector(".tasks");
var categoriesContainer = document.querySelector(".categories");
var categories = [
    Category.General,
    Category.Gym,
    Category.Hobby,
    Category.Work,
];
var selectedCategory;
var tasks = [
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
var addTask = function (task) {
    tasks.push(task);
};
var updateSelectedCategory = function (newCategory) {
    selectedCategory = newCategory;
};
addTaskButtonElement.addEventListener("click", function (event) {
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
