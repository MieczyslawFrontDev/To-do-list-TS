var taskInputElement = document.querySelector("#taskName");
var addTaskButtonElement = document.querySelector(".addTask");
var tasksContainer = document.querySelector(".tasks");
var categoriesContainer = document.querySelector(".categories");
var categories = ["general", "work", "gym", "hobby"];
var tasks = [
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
var renderCategories = function () {
    //   <li>
    //   <input type="text" name="category" value="general"
    //     id="category-general">
    // </li>
    categories.forEach(function (category) {
        var categoryElement = document.createElement("li");
        var categoryId = "category-".concat(category);
        var categoryRadioElement = document.createElement("input");
        categoryRadioElement.type = "radio";
        categoryRadioElement.name = category;
        categoryRadioElement.value = category;
        categoryRadioElement.id = categoryId;
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
        var taskId = "task-".concat(index);
        var taskInputElement = document.createElement("input");
        taskInputElement.type = "checkbox";
        taskInputElement.name = task.name;
        taskInputElement.id = taskId;
        taskInputElement.checked = task.done;
        taskInputElement.addEventListener("click", function () {
            task.done = !task.done;
        });
        var taskLabelElement = document.createElement("label");
        taskLabelElement.setAttribute("for", taskId);
        taskLabelElement.innerText = task.name;
        taskElement.appendChild(taskInputElement);
        taskElement.appendChild(taskLabelElement);
        tasksContainer.appendChild(taskElement);
    });
};
var addTask = function (task) {
    tasks.push(task);
};
addTaskButtonElement.addEventListener("click", function (event) {
    event.preventDefault();
    addTask({ name: taskInputElement.value, done: false });
    renderTasks();
});
addTask({ name: "asasdasdasd", done: true });
renderCategories();
renderTasks();
