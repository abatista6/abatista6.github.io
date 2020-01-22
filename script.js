document.getElementById("work-skills").innerHTML = 5 + 6;

/* function to toggle dark mode of resume */
function myFunction() {
   	var element = document.body;
	element.classList.toggle("dark-mode");
}

/* function for creating sticky navbar */
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}