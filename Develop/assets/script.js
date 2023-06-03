// todays date using dayjs
var todayDate = dayjs().format('dddd, MMM Do YYYY');
console.log(todayDate)
$("#currentDay").html(todayDate);
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

$(document).ready(function() {
  $(".saveBtn").on("click", function (){
    $(".savBtn").toggle();
});
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
})