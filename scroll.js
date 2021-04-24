
$(document).ready(function(){
  $(".nav.active-state").click(function(){
    var delay = 400;
   
  $('#homecontent').css('display',('block'));
  setTimeout(function() {
  $('#gardencontent').css('display',('none'));
  $('#menus').css('display',('none'));
  $('#photocontent').css('display',('none'));
  $('#boutiquecontent').css('display',('none'));
  $('#locationcontent').css('display',('none'));
}, delay);
});
});
$(document).ready(function(){
  $(".nav.other.1").click(function(){
    $('#gardencontent').css('display',('block'));
    setTimeout(function() {
  $('#homecontent').css('display',('none'));
  $('#menus').css('display',('none'));
  $('#photocontent').css('display',('none'));
  $('#boutiquecontent').css('display',('none'));
  $('#locationcontent').css('display',('none'));
}, delay);
});
});
$(document).ready(function(){
  $(".nav.other.2").click(function(){

    $('#menus').css('display',('block'));
    setTimeout(function() {
  $('#homecontent').css('display',('none'));
  $('#gardencontent').css('display',('none'));
  $('#photocontent').css('display',('none'));
  $('#boutiquecontent').css('display',('none'));
  $('#locationcontent').css('display',('none'));
}, delay);
});
});
$(document).ready(function(){
  $(".nav.other.3").click(function(){
    $('#photocontent').css('display',('block'));
    setTimeout(function() {
  $('#homecontent').css('display',('none'));
  $('#gardencontent').css('display',('none'));
  $('#menus').css('display',('none'));
  $('#boutiquecontent').css('display',('none'));
  $('#locationcontent').css('display',('none'));
}, delay);
});
});
$(document).ready(function(){
  $(".nav.other.4").click(function(){
  
    $('#boutiquecontent').css('display',('block'));
    setTimeout(function() {
  $('#homecontent').css('display',('none'));
  $('#gardencontent').css('display',('none'));
  $('#menus').css('display',('none'));
  $('#photocontent').css('display',('none'));
  $('#locationcontent').css('display',('none'));
}, delay);
});
});
$(document).ready(function(){
  $(".nav.other.5").click(function(){
    $('#locationcontent').css('display',('block'));
    setTimeout(function() {
  $('#homecontent').css('display',('none'));
  $('#gardencontent').css('display',('none'));
  $('#menus').css('display',('none'));
  $('#photocontent').css('display',('none'));
  $('#boutiquecontent').css('display',('none'));
}, delay);
});
});



