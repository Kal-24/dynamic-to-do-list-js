 document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Explicitly define loadTasks function
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(function(taskText) {
            addTask(taskText, false);
        });
    }

    // Load tasks when DOM is ready
    loadTasks();

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Explicitly define addTask function
    function addTask(taskText, save = true) {
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        removeBtn.onclick = function () {
            taskList.removeChild(li);
            let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks = tasks.filter(function(t) {
                return t !== taskText;
            });
            saveTasks(tasks);
        };

        li.appendChild(removeBtn);
