$(document).ready(function() {

  function firstIsVowel(thisArray) {
    for (i=0; i < thisArray.length; i++) {
      if ((thisArray[i].charAt(0)) === vowel) {
        thisArray[i] = (thisArray[i] += "ay");
      }
    }
    console.log(thisArray);
  }
  $("#submitButton").click(function() {
    var result = $("#messageInput").val();
    var firstLetter = result.charAt(0);
    var vowel = ("a" || "e" || "i" || "o" || "u");
    var translation = "";
    var split = result.split(" ");
    console.log(split);
    console.log("message input: " + result);
    console.log("first letter is " + firstLetter);

    if (result.charAt(0) === "a" || result.charAt(0) === "e" || result.charAt(0) === "i" || result.charAt(0) === "o" || result.charAt(0) === "u" ) {
      console.log("first letter is vowel");
      translation = (result += "ay");
      console.log("-------------");
      console.log(translation);
      console.log("-------------");
    } else {
      console.log("first letter is not vowel")
    }
  });

});
