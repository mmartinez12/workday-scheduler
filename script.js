var events = {};

//Change textarea background color based on time
function checkTime() {

    //Get Current time
    var date = new Date();
    var currentTime = date.getHours();

    //get all elements with class "taskarea"
    var timeBlockElements = $(".textarea");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));
  
    // if nothing in localStorage, create a new object to track all event status arrays
    if (!events) {
      events = {
        nine: [],
        ten: [],
        eleven: [],
        twelve: [],
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
      };
    }}

var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
};

// save button in modal was clicked
$("#row .saveBtn").click(function() {
    // get form values
    var eventText = $(".textarea").val();
    var eventTime = $("#modalDueDate").val();
  
    if (taskText && taskDate) {
      createTask(taskText, taskDate, "toDo");
  
      // save in events array
      events.toDo.push({
        text: eventText,
        time: eventTime
      });
  
      saveEvents();
    }
  });