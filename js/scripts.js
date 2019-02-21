$(document).ready(function() {

  $("form#doing").submit(function(event) {
    event.preventDefault();
    var question = $("select#question").val();

    if (question === "yes") {
    }  var answer = "Get up"
    if (question === "no") {
      var answer = "Have a Seat"
    }

    $("#answer").empty().append(answer);
    $("#answer").show();
  });
});
