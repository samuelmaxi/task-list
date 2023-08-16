// Code to hide the Label when input is selected
document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector('.name-task');
  const label = document.querySelector('.text-input');

  input.addEventListener("focus", () => {
    label.style.opacity = '0';
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      label.style.opacity = 1;
    };
  });
});


// Code to add tasks to list
const taskList = []
const listElemet = document.querySelector(".list")
let ulElement = document.createElement("ul")
const btn = document.querySelector(".chekbox")

btn.addEventListener("click", function () {
  const titleTask = document.querySelector(".name-task").value
  const task = {
    title: titleTask
  }
  taskList.push(task)
  ulElement.textContent = ''

  taskList.forEach(taskItens => {
    const liElement = document.createElement("li")
    liElement.textContent = `${taskItens.title}`
    ulElement.appendChild(liElement)
  })
  document.querySelector('.name-task').value = ''
})

listElemet.appendChild(ulElement)

// Delete last task
const bntDelete = document.querySelector('.delete')

bntDelete.addEventListener('click', function () {
  if (taskList.length > 0) {
    taskList.pop()

    ulElement.textContent = ''

    taskList.forEach(taskItens => {
      const liElement = document.createElement('li')
      liElement.textContent = `${taskItens.title}`
      ulElement.appendChild(liElement)
    })
  }

})

