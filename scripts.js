var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
	document.querySelector(".header").style.height = window.innerHeight + "px";
})

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("main-navigation");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 