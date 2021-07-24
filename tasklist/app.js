const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');



form.addEventListener('submit', (e) => {

    if (taskInput.value == '') {
        alert("pls enter valid text");
    } else {

        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);


        console.log(link);
        console.log(li);

        taskInput.value = '';
        taskList.appendChild(li);
        e.preventDefault();
    }
});



taskList.addEventListener("click", (e) => {


    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("are you sure ?"))
            e.target.parentElement.parentElement.remove();
    }



});

clearBtn.addEventListener("click", (e) => {

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }


});


filter.addEventListener("keydown", (e) => {

    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {

        const item = task.firstChild.textContent.toLocaleLowerCase();
        if (item.indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }


    });

});
