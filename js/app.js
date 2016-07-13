$(document).ready(function() {

  var $body = $("html, body");
  var $menu = $("ul.navbar-nav>li>a");

  $menu.on("click", function(event) {
  event.preventDefault();
  var jumpTo = $(this).attr("href");
  var pos = $(jumpTo).position().top;
  $body.stop().animate({scrollTop: pos}, 1000);

  });

});
