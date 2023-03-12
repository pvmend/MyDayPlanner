// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// variables 
const currentDate = dayjs().format('MM/DD/YYYY')
//let time = dayjs().format("hh");
var currentHour = dayjs().hour();

// code starts here
$(function () {

  // sets the current date within the header
  $(`#currentDay`).text(currentDate);

  // for loop checks the ids 
  $(`.time-block`).each(function(){
    //console.log(parseInt($(this).attr('id').split("-")[0]))
    var timeBlock = parseInt($(this).attr('id').split("-")[0]);
    //console.log(timeBlock);

    // compares the current time with the id 
    // and sets background color to indicate if it is 
    // the past, present, or future
    if (currentHour === timeBlock){
      $(this).addClass("present");
      
    } else if (currentHour < timeBlock){
      $(this).addClass("future");
    } else{
      $(this).addClass("past");
    }

  })

  // event listener on the save button to save whatever is in the text area
  // to the local storage and save it
  // saves the info to the time text area it is in 
  // the key being the time and value being the information saved
  $(`.saveBtn`).on(`click`,function(){
    var value = $(this).siblings(`.description`).val();
    var time = $(this).parent().attr(`id`);
    localStorage.setItem(time, value);
  });
  for(var i = 9; i < 18; i++){
    
    $(`#` + i + ` .description`).val(localStorage.getItem(i))
  }

  });




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  



