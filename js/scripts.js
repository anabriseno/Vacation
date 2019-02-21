$(document).ready(function() {
  $("form#doing").submit(function() {
    event.preventDefault();
    var sitting = $("select#sitting").val();
    var standing = $("select#standing").val();
    var laying = $("select#laying").val();
    var running = $("select#running").val();
    var squinting = $("select#question").val();

    if (question === "yes") {
      result = add(yes, yes)
      var answer = "Yr doing great"
    }
    else if (question === "no") {
      result = add
      var answer = "Yr going okay"
    }

    $("#answer").empty().append(answer);
    $("#answer").show();
  });
});
