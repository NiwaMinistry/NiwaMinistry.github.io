

$.fn.is_on_screen = function(){
     
  var win = $(window);
   
  var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
   
  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();
   
  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
   
};


$(window).on("scroll resize", function(){ // bind window scroll event
 
if( $('#stopper1').length > 0 ) { // if target element exists in DOM
  if( $('#stopper1').is_on_screen() ) { // if target element is visible on screen after DOM loaded

       var topPos = $("#stopper1").offset().top;
       var winHeight = $(window).height();
 
       $("html, body").animate({
            scrollTop: topPos - winHeight
       }, 0);
    
  } else if ( $('#stopper2').length > 0 ) { // if target element exists in DOM
    if( $('#stopper2').is_on_screen() ) { // if target element is visible on screen after DOM loaded
      var topPos = $("#stopper2").offset().top;
      var winHeight = $(window).height();

      $("html, body").animate({
           scrollTop: topPos - winHeight
      }, 0);
    } else if ( $('#stopper3').length > 0 ) { // if target element exists in DOM
      if( $('#stopper3').is_on_screen() ) { // if target element is visible on screen after DOM loaded
        var topPos = $("#stopper3").offset().top;
        var winHeight = $(window).height();
  
        $("html, body").animate({
             scrollTop: topPos - winHeight
        }, 0);
    
      } else if ( $('#stopper4').length > 0 ) { // if target element exists in DOM
        if( $('#stopper4').is_on_screen() ) { // if target element is visible on screen after DOM loaded
          var topPos = $("#stopper4").offset().top;
          var winHeight = $(window).height();
    
          $("html, body").animate({
               scrollTop: topPos - winHeight
          }, 0);
  
} else if ( $('#stoppe5').length > 0 ) { // if target element exists in DOM
  if( $('#stopper5').is_on_screen() ) { // if target element is visible on screen after DOM loaded
    var topPos = $("#stopper5").offset().top;
    var winHeight = $(window).height();

    $("html, body").animate({
         scrollTop: topPos - winHeight
    }, 0);
  
} else if ( $('#stoppe6').length > 0 ) { // if target element exists in DOM
  if( $('#stopper6').is_on_screen() ) { // if target element is visible on screen after DOM loaded
    var topPos = $("#stopper6").offset().top;
    var winHeight = $(window).height();

    $("html, body").animate({
         scrollTop: topPos - winHeight
    }, 0);
}else{  
  //$("html, body").stop(true,false); 
 // $('html, body').bind('touchmove, touchstart, touchend', false);

}
}
}
}
    
  }
}
}
});




$.fn.is_on_screen = function(){
     
  var win = $(window);
   
  var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
   
  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();
   
  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
   
};


$(window).on("scroll resize", function(){ // bind window scroll event
 
if( $('#stopper4').length > 0 ) { // if target element exists in DOM
  if( $('#stopper4').is_on_screen() ) { // if target element is visible on screen after DOM loaded

       var topPos = $("#stopper4").offset().top;
       var winHeight = $(window).height();
 
       $("html, body").animate({
            scrollTop: topPos - winHeight
       }, 0);
    
  } else if ( $('#stopper5').length > 0 ) { // if target element exists in DOM
    if( $('#stopper5').is_on_screen() ) { // if target element is visible on screen after DOM loaded
      var topPos = $("#stopper5").offset().top;
      var winHeight = $(window).height();

      $("html, body").animate({
           scrollTop: topPos - winHeight
      }, 0);
    } else if ( $('#stopper6').length > 0 ) { // if target element exists in DOM
      if( $('#stopper6').is_on_screen() ) { // if target element is visible on screen after DOM loaded
        var topPos = $("#stopper6").offset().top;
        var winHeight = $(window).height();
  
        $("html, body").animate({
             scrollTop: topPos - winHeight
        }, 0);
    
   

}
    
  }
}
}
});