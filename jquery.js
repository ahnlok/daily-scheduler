$(document).ready(function() {   
    //moment.js variable
    var timeDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(timeDate);
    
    //Declared variable
    var arrayOfHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    
    //Function to detect past, present , future 
    function timeDetector() {
        // console.log("function is working");
        //current time variable declare
        var currentZone = moment().format('HH'); 
        //  console.log(currentZone)
        //for loop
        for(var i = 0; i < arrayOfHours.length; i++) {
            // console.log("for loop");
            if(parseInt(arrayOfHours[i]) < currentZone) {
                $("#" + arrayOfHours[i]).addClass("past");
            } 
            else if (parseInt(arrayOfHours[i]) > currentZone) {
                $("#" + arrayOfHours[i]).addClass("future");
            }
            else if (parseInt(arrayOfHours[i]) == currentZone) {
                $("#" + arrayOfHours[i]).addClass("present");
            }
            
        }
    } timeDetector();
    //localStorage to store saved placeholder 
    function saveMemo () {
       $(".row").each(function () {
           var id = $(this).attr("id");
           var schedule = localStorage.getItem(id);

           if (schedule !== null) {
               $(this).children("input").val(schedule);
           }
       });
    }
    saveMemo ();
    //on click event to send input value into localStorage
    $(".button").on("click", function() {
        var timeSave = $(this).parent().attr("id");
        var memoSave = $(this).siblings("input").val();

        localStorage.setItem(timeSave, memoSave);
        // console.log(timeSave, memoSave);
    });
    
});

// Current day is displayed at the top of the calendar

//Time blocks with hours

//Each block is color coded to indicate past, present, or future

//Able to enter event in each timeblock

//When I click the "save button" for each timeblock, the "event" is saved in localStorage

//When I saved "event", it persists even after "refresh"

