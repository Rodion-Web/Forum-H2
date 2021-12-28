// Scroll back
$(document).ready(function(){
// hide #back-top first
$("#back-top").hide();
 
// fade in #back-top
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
$('#back-top').fadeIn();
} else {
$('#back-top').fadeOut();
}
});
// scroll body to 0px on click
$('#back-top a').click(function () {
$('body,html').animate({
scrollTop: 0
}, 400);
return false;
});
});
});
$(document).ready(function(){
    // Добавить плавную прокрутку до всех ссылок
    $(".menu-link").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){
          window.location.hash = hash;
        });
      } 
    });
  });
  // Hide text
$(document).ready(function() {
  $(".description-button").click(function() {
  $(".forum-description").toggleClass("expand");
  });
});
// Mobile slider
$('.container_fourth_mobile_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<span class="prev-arrow"><img src="./img/prev.png" alt=""></span>',
  nextArrow: '<span class="next-arrow"><img src="./img/next.png" alt=""></span>',
});
// MODAL WINDOW -----------------------------
// open with button
$('.menu-link-button').click(function () {
    $('main').css('filter', 'blur(7px)');
    $('body').css('overflow', 'hidden');
    $('.overlay-suggest').fadeIn();
    $('.modal-suggest').css('overflow-y', 'auto');
    $('.modal-suggest').css('overflow-x', 'hidden');
    $('.overlay-suggest').addClass('disabled');
});
// close with button
$('.suggest-close').click(function () {
    $('.overlay-suggest').fadeOut();
    $('body').css('overflow', 'auto');
    $('main').css('filter', 'none');
});
// Mailer