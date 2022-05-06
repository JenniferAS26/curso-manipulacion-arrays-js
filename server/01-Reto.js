// Hacer una lista de tareas

const tasks = [
    { name: "Make lunch", done: true },
    { name: "Do homework", done: false },
    { name: "Meal prepares", done: true },
    { name: "Chores", done: false },
    { name: "Watering plants", done: true },
    { name: "Water consumtion", done: true },
]

const tasksid = document.getElementById('tasksID');
tasks.forEach(task => {
    tasksid.innerHTML += `<ul>La tarea  <b>${task.name} </b>se encuentra realizada? <b>${task.done}</b> </ul>`
})
