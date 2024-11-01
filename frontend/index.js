import { backend } from 'declarations/backend';

document.getElementById('addTaskBtn').addEventListener('click', async () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        await backend.addTask(taskText);
        taskInput.value = ''; // clear input
        loadTasks();
    }
});

async function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // clear the current list

    const tasks = await backend.getTasks();
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <label>
                <input type="checkbox" ${task.completed ? 'checked' : ''} id="task-${index}">
                ${task.text}
            </label>
            <button class="uk-button uk-button-danger uk-button-small" id="delete-${index}">Delete</button>
        `;
        listItem.querySelector(`#task-${index}`).addEventListener('change', async () => {
            await backend.updateTaskStatus(index, !task.completed);
            loadTasks();
        });
        listItem.querySelector(`#delete-${index}`).addEventListener('click', async () => {
            await backend.deleteTask(index);
            loadTasks();
        });
        taskList.appendChild(listItem);
    });
}

window.addEventListener('DOMContentLoaded', loadTasks);
