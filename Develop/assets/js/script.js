// current day is displayed at top of calendar
var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
$('#currentDay').append(now);

//each time block is color-coded to indicate whether it is in the past, present, or future 
    // add 3 colors for past, present, or future
var hourOfDay = function () {
    var presentHour = moment().hour()

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

hourOfDay()
// "click" event into time block lets user enter an event input
    // addEventListener("click", time-block)

// text for event saved in local torage
    // addEventListener, setItem, JSON, parse

// refreshing page lets events persist 