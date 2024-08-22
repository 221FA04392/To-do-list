const addTask = () => {
    const input = document.getElementById('myInput');
    const taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const ul = document.getElementById('myUL');
    const li = document.createElement('li');
    li.textContent = taskText;

    const editSpan = document.createElement('span');
    editSpan.textContent = '✎';
    editSpan.className = 'edit';
    editSpan.onclick = () => editTask(li);

    const closeSpan = document.createElement('span');
    closeSpan.textContent = '×';
    closeSpan.className = 'close';
    closeSpan.onclick = () => deleteTask(li);

    li.appendChild(editSpan);
    li.appendChild(closeSpan);

    li.addEventListener('click', () => toggleTaskCompletion(li));

    ul.appendChild(li);

    input.value = '';
};


const toggleTaskCompletion = (li) => {
    li.classList.toggle('checked');
};


const deleteTask = (li) => {
    li.remove();
};


const editTask = (li) => {
    const newValue = prompt('Edit your task:', li.childNodes[0].textContent);
    if (newValue !== null) {
        li.childNodes[0].textContent = newValue;
    }
};


const filterTasks = (status) => {
    const tasks = document.querySelectorAll('#myUL li');
    tasks.forEach((task) => {
        switch (status) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                task.style.display = task.classList.contains('checked') ? 'flex' : 'none';
                break;
            case 'pending':
                task.style.display = task.classList.contains('checked') ? 'none' : 'flex';
                break;
        }
    });
};

