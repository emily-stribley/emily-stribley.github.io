$(document).ready(function() {


// Add jQuery here


  setTimeout(function () {
    $('.circle').addClass('addred');
  }, 1000);

  setTimeout(function () {
    $('.circle').addClass('moveleft');
  }, 2000);

  setTimeout(function () {
    $('.circle').removeClass('moveleft');
  }, 3000);

  setTimeout(function () {
    $('.circle').addClass('moveright');
  }, 4000);

  setTimeout(function () {
    $('.circle').removeClass('moveright');
  }, 5000);

  setTimeout(function () {
    $('.circle').removeClass('addred');
    $('.circle').addClass('addblack');
  }, 7000);


  $( function() {
  $( "#draggable" ).draggable();
  });



  });
