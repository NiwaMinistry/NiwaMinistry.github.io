


const btn = document.getElementById("langbtn");


btn.onclick = function()
{
console.log(btn.classList.value)
  if (btn.classList.contains("engBtn"))
  {

    
    btn.classList.remove("engBtn")
    btn.classList.add("jpBtn")
    btn.innerText = "日本語"
    var x = document.getElementById("menuj")
if (x.style.display === "none") 
{
x.style.display = "block";
 } else 
 {
x.style.display = "none";
  }
  var x = document.getElementById("menue")
  if (x.style.display === "block") 
  {
  x.style.display = "none";
   } else 
   {
  x.style.display = "block";
  
}
  } 
  else 
  {

    
    btn.classList.add("engBtn")
    btn.classList.remove("jpBtn")
    btn.innerText = "English"
    var x = document.getElementById("menue")
    if (x.style.display === "none") 
    {
    x.style.display = "block";
     } else 
     {
    x.style.display = "none";
    
  }
  var x = document.getElementById("menuj")
  if (x.style.display === "block") 
  {
  x.style.display = "none";
   } else 
   {
  x.style.display = "block";
  
}

}
}

$(document).ready(function() {
  var $menupic = $('.menupic');
 // var $menue = $('.menue');
  
  $(window).resize(function() {
      if ($(this).width() >= 690) {
          $menupic.removeAttr('style');
         // $menue.removeAttr('style');

      
      }
      else {
  
          
      }
  });
  
  $(window).resize();
});

function handleScroll()
{
    document.getElementById('langbtn').style.top = "-"+document.body.scrollTop+"px";
}


$(window).resize(function() {
  if( $(this).width() <= 768 ) {

$('.menupic1').on('click', function() {
  if ($('.menupic1').css('opacity') == 0) $('.menupic1').css('opacity', 1);
  else $('.menupic1').css('opacity', 0);
});
$('.menupic2').on('click', function() {
  if ($('.menupic2').css('opacity') == 0) $('.menupic2').css('opacity', 1);
  else $('.menupic2').css('opacity', 0);
});
$('.menupic3').on('click', function() {
  if ($('.menupic3').css('opacity') == 0) $('.menupic3').css('opacity', 1);
  else $('.menupic3').css('opacity', 0);
});
$('.menupic4').on('click', function() {
  if ($('.menupic4').css('opacity') == 0) $('.menupic4').css('opacity', 1);
  else $('.menupic4').css('opacity', 0);
});
$('.menupic5').on('click', function() {
  if ($('.menupic5').css('opacity') == 0) $('.menupic5').css('opacity', 1);
  else $('.menupic5').css('opacity', 0);
});
}
});


