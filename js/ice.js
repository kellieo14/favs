$(function() {
  var icecreams = ["Cookies and Cream", "Cookie Dough", "Vanilla", "Mudslide"]

  icecreams.forEach(function(icecream){
    $(".favs").append("I love " + icecream + "!<br></br>");
  });
});
