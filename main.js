'use strict';

const addTaskTrigger = document.querySelector('.js-addTask-trigger');
const addTaskTarget = document.querySelector('.js-addTask-target');
const addTaskValue = document.querySelector('.js-addTask-value');

const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
}

const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');

  removeButton.innerText = '削除する';
  removeButton.addEventListener('click', () => removeTask(removeButton));

  listItem.innerText = task;
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem)
};

addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.Value;
  addTask(task);
  addTaskValue.value = '';
})