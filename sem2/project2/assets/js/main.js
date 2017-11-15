$(document).ready(function() {


  $('.nav_flyer').click(function(event){
    $('.item').removeClass('show')
    $('.item').addClass('hide');
    $('.sticker').addClass("hide");

    $('.item.flyer').removeClass('hide');
    $('.item.flyer').addClass('show');


  });

  $('.nav_text').click(function(event){
    $('.item').removeClass('show')
    $('.item').addClass('hide');
    $('.sticker').addClass("hide");

    $('.item.text').removeClass('hide');
    $('.item.text').addClass('show');


  });

  $('.nav_poster').click(function(event){
    $('.item').removeClass('show')
    $('.item').addClass('hide');
    $('.sticker').addClass("hide");

    $('.item.poster').removeClass('hide');
    $('.item.poster').addClass('show');


  });


  $('.nav_tab').click(function(event){
    $('.item').removeClass('show')
    $('.item').addClass('hide');
    $('.sticker').addClass("hide");

    $('.item.tab').removeClass('hide');
    $('.item.tab').addClass('show');


  });

  $('.nav_pill').click(function(event){
    $('.item').removeClass('show');
    $('.item').addClass('hide');
    $('.sticker').addClass("hide");

    $('.item.pill').removeClass('hide');
    $('.item.pill').addClass('show');


  });

  $('.nav_club').click(function(event){
    $('.item').removeClass('show')
    $('.item').addClass('hide');
    $('.sticker').addClass("hide");

    $('.item.club').removeClass('hide');
    $('.item.club').addClass('show')


  });

  $('.nav_mag').click(function(event){
    $('.item').removeClass('show')
    $('.item').addClass('hide');
    $('.sticker').addClass("hide");

    $('.item.mag').removeClass('hide');
    $('.item.mag').addClass('show')


  });


  $('.nav_clear').click(function(event){
    $('.nav_clear').removeClass('show')
    $('.sticker').removeClass("hide");

    $('.item').removeClass('hide');
    $('.item').removeClass('thumbnail');
    $('.item').removeClass('large');
  });



  $('.nav_thumbnail').click(function(event){
    $('.item').addClass("thumbnail");
    $('.item').removeClass("large");
    $('.sticker').addClass("hide");
  });

  $('.nav_large').click(function(event){
    $('.item').addClass("large");
    $('.item').removeClass("thumbnail");
    $('.sticker').removeClass("hide");
  });


















    });
