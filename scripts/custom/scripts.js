$(document).ready(function() {
    $('.parallax-window').height($(window).height());
    $('.background-fixed').height($(window).height());
    $('.overlay').height($(window).height());
});


$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


$('.navbar-toggler-icon').click(function() {
    $('.nav-link').css('background-color', '#223F05');
    // $('.navbar').css('background-color', '#223F05')
    $('.nav-item').css('text-align', 'center');
    // $('.nav-link').css('padding-right', '10%');
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function initMap() {
  // The location of a&b and river valley
  var ab = {lat: 42.560430, lng: -71.434650};
  var rv = {lat: 42.504060, lng: -72.607660};
  // The map, centered at each agency
  var map = new google.maps.Map(
      document.getElementById('westford'), {zoom: 16, center: ab});
  var map2 = new google.maps.Map(
      document.getElementById('deerfield'), {zoom: 16, center: rv});
  // The marker, positioned at the agencies
  var marker = new google.maps.Marker({position: ab, map: map});
  var marker2 = new google.maps.Marker({position: rv, map: map2});
}