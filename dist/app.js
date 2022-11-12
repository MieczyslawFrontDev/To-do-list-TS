import { renderCategories } from "./features/renderCategories.js";
import { renderTasks } from "./features/renderTask.js";
var taskInputElement = document.querySelector("#taskName");
var addTaskButtonElement = document.querySelector(".addTask");
var tasksContainer = document.querySelector(".tasks");
var categoriesContainer = document.querySelector(".categories");
var categories = ["general", "work", "gym", "hobby"];
var selectedCategory;
var tasks = [
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
var addTask = function (task) {
    tasks.push(task);
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
addTask({ name: "asasdasdasd", done: true, category: "general" });
renderCategories(categories, categoriesContainer, selectedCategory);
renderTasks(tasksContainer, tasks);
