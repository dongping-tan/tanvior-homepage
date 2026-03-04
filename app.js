function saveGoal() {

const goal = document.getElementById("goalInput").value;
const date = document.getElementById("dateInput").value;

localStorage.setItem("goal", goal);
localStorage.setItem("targetDate", date);

window.location.href = "time.html";

}

function saveTime(){

let times = [];

document.querySelectorAll("input[type=checkbox]:checked")
.forEach(cb => times.push(cb.value));

localStorage.setItem("availableTimes", JSON.stringify(times));

window.location.href = "plan.html";

}

window.onload = function(){

const goal = localStorage.getItem("goal");
const times = JSON.parse(localStorage.getItem("availableTimes"));

document.getElementById("goalDisplay").innerText = goal;

document.getElementById("timeDisplay").innerText = times.join(", ");

generateTasks();

}

function generateTasks(){

const tasks = [
"Study 30 minutes",
"Practice questions",
"Review notes"
];

const list = document.getElementById("taskList");

tasks.forEach(t => {

const li = document.createElement("li");

li.innerText = t;

list.appendChild(li);

});

}