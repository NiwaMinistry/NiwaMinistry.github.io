var links = document.querySelectorAll('.mnav ul li');
var linksLength = links.length

for(var i = 0; i < linksLength; i++) {
  links[i].addEventListener('click', function() {
    document.getElementById('toggle').checked = false;
  });
}

