const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var date = new Date();
var year = date.getFullYear();
var month = months[date.getMonth()];
var day = date.getDate();
var weekday = weekdays[date.getDay()];
var currentDay = document.getElementById("currentDay");

currentDay.innerHTML = weekday + "," + month + day + year;
