$(document).ready(function() {


// Add jQuery here

$( function() {
  $( ".kimmy_images img" ).draggable();
} );


$( ".toggle" ).click(function() {
  $( ".scrollbar" ).toggleClass('red');
  $( ".kimmy_images" ).toggleClass('active');
});

$(document).ready(function() {


$('.nav').click(function() {
  $('.menu').toggleClass('showme');
});
