/**
 * 
 * Show nav when scroll up
 * 
 * @author W3 School https://www.w3schools.com/
 * 
 */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNavbar").style.top = "0";
  } else {
    document.getElementById("myNavbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}