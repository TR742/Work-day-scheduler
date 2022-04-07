// Adding the current date into the header
let date = $('#currentDay');
let now = moment();
date.text(now.format('dddd MMMM Do YYYY'));

// Variables for time of day
let nine = $('#nine');
let ten = $('#ten');
let eleven = $('#eleven');
let twelve = $('#twelve');
let one = $('#one');
let two = $('#two');
let three = $('#three');
let four = $('#four');
let five = $('#five');

// Save button function to save userInput to local storage, need to add getItem function working
let saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    let hour = $(this).siblings(".hour").text();
    let userInput = $(this).siblings(".description").val();
    localStorage.setItem(hour, userInput);
});