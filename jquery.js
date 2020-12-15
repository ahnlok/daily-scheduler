$(document).ready(function() {   //moment.js variable
    var timeDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(timeDate);
    
    //Declared variable
    var arrayOfHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
    timeDetector();

    function timeDetector() {
        //current time variable declared
        var currentZone = moment().format('H');
        //for loop 
        for(var i = 0; i < arrayOfHours.length; i++) {
            if(parseInt(arrayOfHours[i]) < currentZone) {
                $("#" + arrayOfHours[i]).attr("style", "background-color: gray");
            }
            
        }
    }
});
// Current day is displayed at the top of the calendar

//Time blocks with hours

//Each block is color coded to indicate past, present, or future

//Able to enter event in each timeblock

//When I click the "save button" for each timeblock, the "event" is saved in localStorage

//When I saved "event", it persists even after "refresh"

