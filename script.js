window.onload = function() {

//COPYRIGHT YEAR:
var today = new Date();
var year = document.createTextNode(today.getFullYear());
var copyright = document.querySelector('#copyright');
copyright.appendChild(year);



//READ MORE FUNCTION:
//Stores "read more" button and second paragraph.
var button = document.getElementById('myBtn');
var moreText = document.getElementById('more');

button.style.cursor = "pointer";

//Function that displays the elements if width matches certain screen widths.
function display(width) {
  if (width.matches) {
    button.style.display = "block";
    moreText.style.display = "none";
  } else {
    button.style.display = "none";
    moreText.style.display = "block";
  }
}

//Sets the width variable as 570px on the window and calls display function.
var width = window.matchMedia("(max-width: 570px)");
display(width);

//Attaches listener function on state changes.
width.addListener(display);

//Adds function to "read more" button.
button.addEventListener('click', function() {
  moreText.style.display = "block";
  button.style.display = "none";
});




};
