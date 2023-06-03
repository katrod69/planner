// todays date using dayjs
const date = new Date();
console.log(date)
$("#currentDay").html(date);
// click listener
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
      var textarea = $(this).siblings(".description").val();
      console.log(textarea)
      var timeslot = $(this).parent().attr("id");
      console.log(timeslot)
      localStorage.setItem(timeslot, textarea);
  });
});
// toggles save button, still attempting to save buttons toggle state to local storage
$(".place").click(function () {
  $(this).toggleClass("yellow");
  var saveBtnState = $(this).siblings('.saveBtn').val();
  localStorage.setItem(saveBtnState,'toggle' )
});


function itsTime() {
  var timeDiv = dayjs().hour();
  console.log(timeDiv)

// changes block color dependent on current time
$(".time-block").each(function () {
  var todayDay = parseInt($(this).attr("id").split("hour")[1]);
  if (todayDay === timeDiv) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else if (todayDay < timeDiv) {
    $(this).removeClass("present");
    $(this).removeClass("future");
    $(this).addClass("past");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
})

}

$("#hr-9 .description").val(localStorage.getItem("hr-9"));
$("#hr-10 .description").val(localStorage.getItem("hr-10"));
$("#hr-11 .description").val(localStorage.getItem("hr-11"));
$("#hr-12 .description").val(localStorage.getItem("hr-12"));
$("#hr-13 .description").val(localStorage.getItem("hr-13"));
$("#hr-14 .description").val(localStorage.getItem("hr-14"));
$("#hr-15 .description").val(localStorage.getItem("hr-15"));
$("#hr-16 .description").val(localStorage.getItem("hr-16"));
$("#hr-17 .description").val(localStorage.getItem("hr-17"));

itsTime();
