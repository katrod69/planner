// displays current date and time - done
$(document).ready(function(){
const date = new Date();
console.log(date); 
let currentDates = document.getElementById("currentDay");
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
currentDates.innerHTML = date; 
let currentDate = `${month}.${day}.${year}`;
console.log(currentDate); 
});

// save switch toggle - 
var toggleSave = document.querySelector('#color-change');
var savbtn = document.querySelectorAll("button");
var btnmode = "black";

toggleSave.addEventListener("click", function() {
   
    if (btnmode === "black") {
btnmode = "white";
savbtn.setAttribute("class" , "white")

}else{
btnmode = "black";
savbtn.setAttribute("class" , "black")
}
});

// saves schedule info into local storage
var scheduleArea = document.querySelectorAll("textarea");


toggleSave.addEventListener("click", function() {
    localStorage.setItem("scheduleArea", JSON.stringify(scheduleArea));
});













// color coding for time blocks depending on time of day
let currentDay = dayjs().format("HH")

$(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentDay == timeDiv) {
      $(this).addClass(".present");
      $(this).children(".description").addClass(".pink");
    } else if (currentDay < timeDiv) {
      $(this).removeClass(".present");
      $(this).addClass(".future");
    } else if (currentDay > timeDiv) {
      $(this).removeClass(".future");
      $(this).addClass(".past");
    }
  });




