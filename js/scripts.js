$(function() {
  $("#all-favs").submit(function(event){
    event.preventDefault();

    var favq1 = $("#fav-q1").val();
    var favq2 = $("#fav-q2").val();
    var favq3 = $("#fav-q3").val();
    var favq4 = $("#fav-q4").val();
    var favsArray2 = []
    var favsArray = [favq1, favq2, favq3, favq4]

    favsArray2.push(favq2, favq1, favq3);
    $("#favs1").text(favsArray2[1]);
    $("#favs2").text(favsArray2[0]);
    $("#favs3").text(favsArray2[2]);
    console.log(favsArray2[1]);
  });
});
