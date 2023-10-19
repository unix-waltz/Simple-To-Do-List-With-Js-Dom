const body = document.body;
const input = document.querySelector('input');
const buttonAdd = document.querySelector('button');
const Tbody = document.querySelector('tbody');
let n = 1;


var currentTime = new Date();
var year = currentTime.getFullYear();
var date = currentTime.getDate();
var month = currentTime.getMonth() + 1;
var formattedDate = year + "-" + (month < 10 ? "0" : "") + month + "-" + (date < 10 ? "0" : "") + date;

// formattedDate
buttonAdd.addEventListener('click',() => {
    const newTask =  document.createElement('tr');
    var valueTask = input.value.trim();
    if (valueTask == '') {alert('task na isi heula mas!');return;};
    const num =  document.createElement('th');
    const task =  document.createElement('th');
    const date =  document.createElement('th');
    const status =  document.createElement('th');
    const del =  document.createElement('th');
    var valuenum= n++;


del.setAttribute('id', 'delete');
del.innerHTML = 'x';
num.innerHTML = valuenum;
task.innerHTML = valueTask;
date.innerHTML = formattedDate;
status.innerHTML = "none";
newTask.append(num);
newTask.append(task);
newTask.append(date);
newTask.append(status);
newTask.append(del);
Tbody.append(newTask);

del.style.cursor = 'pointer';
del.style.color = 'red';
del.addEventListener('click', ()=>{
del.style.display = 'none';
del.parentElement.style.display = 'none';
});


});

