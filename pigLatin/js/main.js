$("#submitButton").click(function() {
  var result = $("#messageInput").val();
  var firstLetter = result.charAt(0);
  var vowel = ("a" , "e" , "i" , "o" , "u");
  var translation = "";
  var splitResult = result.split(" ");

  function checkVowel(x) {

    if (x.charAt(0) === "a" || x.charAt(0) === "e" || x.charAt(0) === "i" || x.charAt(0) === "o" || x.charAt(0) === "u" ) {

      translation += (splitResult[i] += "yay ");

    } else {
      translation += splitResult[i]+= " ";
    }
  }

  function checkCons(x) {
    if ((x.charAt(0) !== "a") && (x.charAt(0) !== "e") && (x.charAt(0) !== "i") && (x.charAt(0) !== "o") && (x.charAt(0) !== "u")) {
      var newS = x.substr(0,1);
      x += newS;
      translation += x + "ay ";
      translation = translation.substr(1);
    }
  }

  for (var i = 0; i < splitResult.length; i++) {
    checkCons(splitResult[i]);

    //checkVowel(splitResult[i]);
    $("#output").html(translation);
  }
});
