document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            addTodoItem(taskText);
            inputField.value = '';
        }
    });

    function addTodoItem(text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;
        todoList.appendChild(listItem);
    }
});
