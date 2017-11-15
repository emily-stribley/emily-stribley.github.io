$(document).ready(function() {

// Global Vars
  var oddSecond = ' ';
  var oddMinute = ' ';
  var halfSecond = ' ';
  var halfMinute = ' ';

// Update time
  function update() {
    var quarter = moment().quarter();
    var momentSecond = moment().second();
    var momentMinute = moment().minute();
    var momentHour= moment().format('h').toLowerCase();
    var momentDay = moment().format('dddd').toLowerCase();
    var momentMonth = moment().format('MMMM').toLowerCase();
    var momentYear = moment().format('YYYY').toLowerCase();
    var momentAMPM = moment().format('A').toLowerCase();

    function oddOrEvenS(momentSecond){
      if(momentSecond % 2 === 0) {oddSecond = 'oddS';}
      else {oddSecond = 'evenS';}
    }

    function oddOrEvenM(momentMinute){
      if(momentMinute % 2 === 0) {oddMinute = 'evenM';}
      else {oddMinute = 'oddM';}
    }

    function checkHalfSecond(momentSecond){
      if(momentSecond < 30) {halfSecond = 'halfS';}
      else {halfSecond = 'fullS';}
    }

    function checkHalfMinute(momentMinute){
      if(momentMinute < 15) {halfMinute = 'm15';}
      else if(momentMinute < 30){halfMinute = 'm30';}
      else if(momentMinute < 45){halfMinute = 'm45';}
      else {halfMinute = 'm60';}
    }

    // Check if odd, even, quaterpast
    oddOrEvenS(momentSecond);
    checkHalfSecond(momentSecond);
    oddOrEvenM(momentMinute);
    checkHalfMinute(momentMinute);

    var timeAll = [ 'h' + momentHour,halfMinute, momentAMPM ];
    var timeClass = timeAll.join('');

    // Add classes
    $('body').attr('class', timeClass);
    $('.' + timeClass).css( "display", "block" );

    // Add format
    $('.time').html(moment().format('h:mm:ss A'));
    $('.date').html(moment().format('dddd D MMMM YY'));
  };


  var intervalId = setInterval(update, 100);
  intervalId

// Add pause
  $('button#pause').click(function(){
    clearInterval(intervalId);
    $('textarea#timeClasses').show();
  });

});
