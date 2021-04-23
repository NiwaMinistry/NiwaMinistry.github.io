

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


$(window).on("scroll touchstart touchend touchmove resize", function(){ // bind window scroll event
  
 
if( $('.fb-page').length > 0 ) { // if target element exists in DOM
  if( $('.fb-page').is_on_screen() ) { // if target element is visible on screen after DOM loaded
  
   

    
       $('.fbwrap').addClass('.fvisible');
      
      } else {  $('.fbwrap').removeClass('.fvisible');}
       
    
    
}
});




