// current day is displayed at top of calendar
var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
$('#currentDay').append(now);

// presented with time blocks for standard business hours (8-5)
    // divide by hour

//each time block is color-coded to indicate whether it is in the past, present, or future 
    // add 3 colors for past, present, or future

// "click" event into time block lets user enter an event input
    // addEventListener("click", time-block)

// text for event saved in local torage
    // addEventListener, setItem, JSON, parse

// refreshing page lets events persist