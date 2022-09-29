var data = ["Morning Exercises", "Training Session", "University Lesson"];
var button = document.querySelector(".addBtn");

disp();

button.addEventListener("click", () => {
  var input = document.getElementById("myInput");
  var inpRes = input.value;
  // console.log(inpRes)
  if (inpRes.length > 3) {
    data.push(inpRes);
    disp();
  } else {
    alert("Please, select minimum 3 symbols!");
  }
  inpRes = "";
});

function disp() {
  taskList = document.getElementById("taskList");
  document.getElementById(
    "numOfTasks"
  ).innerHTML = `Tasks left: ${data.length}`;
  taskList.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    taskList.innerHTML += `<tr><td>${data[i]}</td> <td><button onclick=delTask(${i})>delete</button></td></tr>`;
  }
}

function delTask(idx) {
  data.splice(idx, 1);
  disp();
}
