/*//SLIDER FIRST PAGE
var index= 0;
function carousel(){
var i;
var x = document.getElementsByClassName('slide');
for (i = 0; i<x.length; i++){
  x[i].style.display ="none";
}
index++;
if (index > x.length){
  index=1;
}
x[index-1].style.display = "block";
    setTimeout(carousel, 5000);
}
carousel();
//END SLIDER FIRST PAGE
*/
//MANUAL SLIDER

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementByClassName("rect");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }

 x[slideIndex-1].style.display = "block";

}
