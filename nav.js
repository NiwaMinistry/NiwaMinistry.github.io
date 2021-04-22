
		$('.nav').click(changeFrame);

$('#directionNav').find('li').click(navigFrame);



function changeFrame(){

    $('#wrapper').animate({left : $(this).attr('frame')*-100+"vw"});
    $('.active-state').removeClass('active-state')
    $(this).addClass('active-state')
}

function navigFrame(){
    switch(this.id){
        case 'left' : doNavig(-1); break;
        case 'right' : doNavig(1); break;
    }
}

function doNavig(direction){
    var newPage = parseInt($('.active-state').attr('frame'))+direction;
    if(newPage < $('.nav').length && newPage >= 0){
        $('#wrapper').animate({left : newPage*-100+"vw"});
        $('.active-state').removeClass('active-state')
        $('.nav:nth-child('+String(newPage + 1)+')').addClass('active-state')
    }
}





$('.other').click(function () {
  $("html, body").animate({
      scrollTop: 261
  }, 200);
  return false;
});
$('.active-state').click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 200);
  return false;
});

$(document).ready(function(){
  $('html,body').scrollTop(0);
});


hammer.bind('drag', function(ev) {
    x = ev.position.x;
    y = ev.position.y;
    mosaic.style.webkitTransform = 'translate3d('+(x) +'px, '+(y) + 'px, 1px)';
});