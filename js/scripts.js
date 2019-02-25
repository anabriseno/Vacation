var add = function(sit, stand, lay, run, squint) {
  return(Number(sit) + Number(stand) + Number(lay) + Number(run) + Number(squint));
  };

$(document).ready(function() {
  $("form#what").submit(function() {
    event.preventDefault();
    var sit = $("select#sit").val();
    var stand = $("select#stand").val();
    var lay = $("select#lay").val();
    var run = $("select#run").val();
    var squint = $("select#squint").val();

    var total = add(Number(sit), Number(stand), Number(lay), Number(run), Number(squint))

    if (total === 5 ) {
      var answer = "I hope this works"
    };

    $("#answer").empty().append(answer);
    $("#answer").show();
  });
});
