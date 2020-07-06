let submit = document.querySelector('.input-form');
let toDo = document.querySelectorAll('.to-do');
let input = document.querySelector('.task-input');
let list = document.querySelectorAll('.toDo__list');

let innerFragment = function (text) {
  let fragment = document.createDocumentFragment();
  let list = document.createElement('li');
  list.classList.add('toDo__list');
  let title = document.createElement('h3');
  title.textContent = "Задача";
  title.classList.add('title');
  list.appendChild(title);
  let taskText = document.createElement('p');
  taskText.textContent = text;
  taskText.classList.add('toDo__text');
  list.appendChild(taskText);
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn-delete');
  deleteBtn.classList.add('btn');
  deleteBtn.textContent = "Удалить задачу";
  list.appendChild(deleteBtn);
  // console.log(list)
  return fragment.appendChild(list);
}


let deletTask = function (task) {
  task.addEventListener('click', function (evt) {
    let btn = evt.target;
    if (btn.classList.contains('btn')) {
      btn.parentNode.remove();
    }
  });

}

let submitFunc = function (task) {
  submit.addEventListener('click', function (evt) {
    evt.preventDefault();
    let taskInput = input.value;

    if (taskInput != "") {
      let target = evt.target;
      if (target.type == 'submit') {

        taskInput = input.value;
        task.insertAdjacentElement('afterbegin', innerFragment(taskInput));
        input.value = '';
      }

    }


  });
}




for (let i = 0; i < list.length; i++) {

  submitFunc(toDo[i]);
  deletTask(toDo[i]);
}