import { TaskClass } from "../class/class";

export const renderTasks = (
  tasksContainer: HTMLUListElement,
  tasks: TaskClass[]
) => {
  tasksContainer.innerText = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const taskId = `task-${index}`;

    const taskCheckboxElement: HTMLInputElement =
      document.createElement("input");
    taskCheckboxElement.type = "checkbox";
    taskCheckboxElement.name = task.name;
    taskCheckboxElement.id = taskId;
    taskCheckboxElement.checked = task.done;
    taskCheckboxElement.addEventListener("click", () => {
      task.done = !task.done;
    });

    const taskLabelElement: HTMLLabelElement = document.createElement("label");
    taskLabelElement.setAttribute("for", taskId);
    taskLabelElement.innerText = task.name;

    const taskCreationDateElement: HTMLParagraphElement =
      document.createElement("p");
    taskCreationDateElement.innerText = task.createdAt;

    taskElement.appendChild(taskCheckboxElement);
    taskElement.appendChild(taskLabelElement);
    taskElement.appendChild(taskCreationDateElement);
    tasksContainer.appendChild(taskElement);
  });
};
