$(document).ready(function() {

  $(window).scroll(function() {

    console.log($('html, body').scrollTop())
    if ($('html, body').scrollTop() > 260) {
      $('#navbar').addClass('navbar-fixed')
      $('#mobnav').addClass('navbar-fixed')
     
    }
    if ($('html, body').scrollTop() < 261) {
      $('#navbar').removeClass('navbar-fixed');
      $('#mobnav').removeClass('navbar-fixed');
   
    }
  });
});

