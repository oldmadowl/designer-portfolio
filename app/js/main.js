$(function(){

  $('.menu-btn').on('click', function(){
    $('.menu__list').slideToggle();
    $(this).toggleClass('active');
  });

});