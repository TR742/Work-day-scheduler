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
let saveBtn = $(".saveBtn")

saveBtn.on('click', function () {
    let inputValue = $(this).siblings('.description').val()
    let id = $(this).parent().attr('id')
    localStorage.setItem(id, inputValue)
});

$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

//Determines color of each time block 
function updateTime() {
    let currentTime = moment().hours();
    console.log(currentTime);
    $('.time-block').each(function () {
        let timeBlock = $(this).attr('id')
        console.log(timeBlock)
        if (currentTime < timeBlock) {
            $(this).addClass('future');
        }
        else if (currentTime > timeBlock) {
            $(this).addClass('past');
        }
        else {
            $(this).addClass('present');
        }
    }
    )
};

updateTime();