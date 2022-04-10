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
    let inputValue=$(this).siblings('.description').val()
    let id=$(this).parent().attr('id')
    localStorage.setItem(id,inputValue)
    });

$('#nine .description').val(localStorage.getItem('nine'));
$('#ten .description').val(localStorage.getItem('ten'));
$('#eleven .description').val(localStorage.getItem('eleven'));
$('#twelve .description').val(localStorage.getItem('twelve'));
$('#one .description').val(localStorage.getItem('one'));
$('#two .description').val(localStorage.getItem('two'));
$('#three .description').val(localStorage.getItem('three'));
$('#four .description').val(localStorage.getItem('four'));
$('#five .description').val(localStorage.getItem('five'));