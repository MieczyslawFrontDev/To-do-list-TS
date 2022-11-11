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
var renderCategories = function () {
    categories.forEach(function (category) {
        var categoryElement = document.createElement("li");
        var categoryId = "category-".concat(category);
        var categoryRadioElement = document.createElement("input");
        categoryRadioElement.type = "radio";
        categoryRadioElement.name = "category";
        categoryRadioElement.value = category;
        categoryRadioElement.id = categoryId;
        categoryRadioElement.addEventListener("change", function () {
            selectedCategory = category;
        });
        var categoryLabelElement = document.createElement("label");
        categoryLabelElement.setAttribute("for", "category-".concat(category));
        categoryLabelElement.innerText = category;
        categoryElement.appendChild(categoryRadioElement);
        categoryElement.appendChild(categoryLabelElement);
        categoriesContainer.appendChild(categoryElement);
    });
};
var renderTasks = function () {
    tasksContainer.innerText = "";
    tasks.forEach(function (task, index) {
        var taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        var taskId = "task-".concat(index);
        var taskCheckboxElement = document.createElement("input");
        taskCheckboxElement.type = "checkbox";
        taskCheckboxElement.name = task.name;
        taskCheckboxElement.id = taskId;
        taskCheckboxElement.checked = task.done;
        taskCheckboxElement.addEventListener("click", function () {
            task.done = !task.done;
        });
        var taskLabelElement = document.createElement("label");
        taskLabelElement.setAttribute("for", taskId);
        taskLabelElement.innerText = task.name;
        taskElement.appendChild(taskCheckboxElement);
        taskElement.appendChild(taskLabelElement);
        tasksContainer.appendChild(taskElement);
    });
};
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
    renderTasks();
});
addTask({ name: "asasdasdasd", done: true, category: "general" });
renderCategories();
renderTasks();
