

$(document).ready(function() {

  $("#submitButton").click(function(){

    var usersInput = $("#yearInput").val();
    console.log("User has input: " + usersInput);

    var result=parseInt(usersInput);

    if (isNaN(result)) {
      alert("ENTER A NUMBER, FOOL!")
    } else if (result % 4 === 0 && result % 100 !== 0) {
      console.log("TRUE");
      document.getElementById("output").innerHTML = result +" IS A LEAP YEAR!";
      return true;
    }  else if (result % 400 === 0) {
      console.log("TRUE");
    } else {
      document.getElementById("output").innerHTML = result +" IS NOT A LEAP YEAR!";
      console.log("FALSE");
    }

  });
});

//
// } if (result % 100 === 0 ){
//   console.log("Criteria 2: input is divisible by 100. returns FALSE.")
//   return false;
// } else if (result % 400 === 0 ) {
//   console.log("Criteria 3: input is divisible by 400. returns TRUE;")
//   alert("The year: " + parseInt(usersInput) + " is a leap year!")



//=================

// if (result % (4 || 400) === 0 ) {
//
//   if ()
//   console.log("TRUE")
//   alert(result + " is a leap year!")
//
// } else {
//   alert(result + " is NOT a leap year!")
//   console.log("FALSE")
//   return false;
// }
