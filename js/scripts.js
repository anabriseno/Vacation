var add = function(hike, swim, snow, desert, pool) {
  return(Number(hike) + Number(swim) + Number(snow) + Number(desert) + Number(pool));
  };

$(document).ready(function() {
  $("form#where").submit(function() {
    event.preventDefault();
    var hike = $("select#hike").val();
    var swim = $("select#swim").val();
    var snow = $("select#snow").val();
    var desert = $("select#desert").val();
    var pool = $("select#pool").val();

    var total = add(Number(hike), Number(swim), Number(snow), Number(desert), Number(pool))

    if (total >= 7 ) {
      var answer = "Go to palm spring!"
    }
    if (total  < 7 ) {
      var answer = "Go to Miami!"
    }
    if (total === 10 ) {
      var answer = "Stay home"
    };


    $("#answer").empty().append(answer);
    $("#answer").show();
  });
});
