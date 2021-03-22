// current day is displayed at top of calendar
var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
$('#currentDay').append(now);

//each time block is color-coded to indicate whether it is in the past, present, or future 
    // add 3 colors for past, present, or future
var hourOfDay = function () {
    var presentHour = moment().hours();

    $(".task-content").each(function() {
        var pastHour = parseInt($(this).attr("id"))
    
        if (pastHour < presentHour) {
            $(this).css('background-color', 'grey')
        } else if (pastHour === presentHour) {
            $(this).css('background-color', 'red')
        } else if (pastHour > presentHour) {
            $(this).css('background-color', 'green')
        }
    })
}

hourOfDay();

// "click" event into time block lets user enter an event input
    // addEventListener("click", time-block)

// text for event saved in local torage

$("tr").each(function() {
    document.getElementById("9-task").innerHTML = (localStorage.getItem("9"));
    document.getElementById("10-task").innerHTML = (localStorage.getItem("10"));
    document.getElementById("11-task").innerHTML = (localStorage.getItem("11"));
    document.getElementById("12-task").innerHTML = (localStorage.getItem("12"));
    document.getElementById("1-task").innerHTML = (localStorage.getItem("1"));
    document.getElementById("2-task").innerHTML = (localStorage.getItem("2"));
    document.getElementById("3-task").innerHTML = (localStorage.getItem("3"));
    document.getElementById("4-task").innerHTML = (localStorage.getItem("4"));
    document.getElementById("5-task").innerHTML = (localStorage.getItem("5"));
}



// refreshing page lets events persist 