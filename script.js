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
    var events = [
        nine.value,
        ten.value,
        eleven.value,
        twelve.value,
        one.value,
        two.value,
        three.value,
        four.value,
        five.value
    ];
    //save events to localStorage
    localStorage.setItem("events", JSON.stringify(events));
    console.log(localStorage);
})};

// load saved user input on refresh
var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));

    nine.value = nine.value;
ten.value = ten.value;
eleven.value = eleven.value;
twelve.value = twelve.value;
one.value = one.value;
two.value = two.value;
three.value = three.value;
four.value = four.value;
five.value = five.value;

    // $('.textarea').each(function() {
    //     $(this).val(localStorage.getItem("events"));
    // });
}






console.log(localStorage);