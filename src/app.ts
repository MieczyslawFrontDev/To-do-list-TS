const taskInputElement: HTMLInputElement = document.querySelector("#taskName");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector(".addTask");
const tasksContainer: HTMLUListElement = document.querySelector(".tasks");
const categoriesContainer: HTMLUListElement =
  document.querySelector(".categories");

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
