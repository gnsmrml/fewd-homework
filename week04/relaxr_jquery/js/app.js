$(document).ready(function() {
$('.readmore').click(function() {
  $('#show-this-on-click').slideDown();
  $('.readless').show();
  $('.readmore').hide();

event.preventDefault();
});

$('.readless').click(function() {
  $('#show-this-on-click').slideUp();
  $('.readless').hide();
  $('.readmore').show();

event.preventDefault();
});

$('.learnmore').click(function() {
  $('#learnmoretext').slideDown();
  $('.learnmore').hide();

event.preventDefault();
});

});