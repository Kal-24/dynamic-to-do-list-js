// Wait for the DOM to fully load before executing any code
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function that will add a new task
    function addTask() {
        // Get the trimmed text from the input
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add event to remove task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add the remove button to the <li>, then add <li> to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
