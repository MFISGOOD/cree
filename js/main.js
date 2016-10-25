var slideIndex = 0;
carousel();
var idClrInterval=setInterval(carousel, 5000); 
//showDivs(slideIndex);

function plusDivs(n) {
  clearInterval(idClrInterval);
  showDivs(slideIndex += n);
  
}
function currentDiv(n) {
  clearInterval(idClrInterval);
  showDivs(slideIndex = n);
}
function showDivs(n) {
  if (n > $(".mySlides").length) {slideIndex = 1}    
  if (n < 1) {slideIndex = $(".mySlides").length}
    $(".mySlides").css("display","none");
    $(".demo").removeClass("w3-black");
  
  $($(".mySlides")[slideIndex-1]).css("display","block");
  $($(".demo")[slideIndex-1]).addClass("w3-black");
}
function carousel() {
    $(".mySlides").css("display","none"); 
    $(".demo").removeClass("w3-black");
    slideIndex++;
    if (slideIndex > $(".mySlides").length) {slideIndex = 1}
    $($(".mySlides")[slideIndex-1]).css("display","block");
    $($(".demo")[slideIndex-1]).addClass("w3-black");
    // Change image every 3 seconds
}
function w3_open() {
    $("#mySidenav").css({"width": "300px", "textAlign": "center","fontSize": "40px", "paddingTop": "10%","display":"block"}); 
}
function w3_close() {
    $("#mySidenav").css("display","none");
}
// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = $("#navDemo");
    if (x.hasClass("w3-show")) {
       x.removeClass("w3-show");
    } else {    
       x.addClass("w3-show");
    }
}
