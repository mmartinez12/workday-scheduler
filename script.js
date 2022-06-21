var saveBtns = document.getElementsByClassName("saveBtn");
var nine = document.getElementById("09");
var ten = document.getElementById("10");
var eleven = document.getElementById("11");
var twelve = document.getElementById("12");
var one = document.getElementById("13");
var two = document.getElementById("14");
var three = document.getElementById("15");
var four = document.getElementById("16");
var five = document.getElementById("17");

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

// save button was clicked
for (var i = 0; i < saveBtns.length; i++){
saveBtns[i].addEventListener("click", function(event) {
    event.preventDefault();
    // define event text array
    var events = [];
    for (var i = 9; i <= 17; i++) {
        events[i] = document.getElementById(i).value;
    }

    //save events to localStorage
    localStorage.setItem("events", JSON.stringify(events));
    console.log(localStorage);
})};

// load saved user input on refresh
var loadEvents = function() {
    var events = JSON.parse(localStorage.getItem("events"));

    // populate the textareas
    for (var hour in events) {
        if (events[hour]) // check if value is not null
        document.getElementById(hour).value = events[hour];
    }
}

//document.addEventListener('load', loadEvents);

loadEvents();