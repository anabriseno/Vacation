$(document).ready(function() {
  $("form#doing").submit(function() {
    event.preventDefault();
    var sit = $("select#sit").val();
    var stand = $("select#stand").val();
    var lay = $("select#lay").val();
    var run = $("select#run").val();
    var squint = $("select#squint").val();

    if (sit === "1") {
      var answer = "Yr doing great"
    };
    if (stand === "2") {
      var answer = "Hey Hey"
    };
    
    $("#answer").empty().append(answer);
    $("#answer").show();
  });
});
