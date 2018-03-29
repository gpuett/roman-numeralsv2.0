// Business logic
function romanNumeral(number) {
  var romanNumeralString = "";
  if (number < 4) {
    for (var i = 1; i <= number; i++) {
      romanNumeralString += "I"
    }
  } else if (number === 4) {
    romanNumeralString = "IV";
  } else if (number === 5) {
    romanNumeralString = "V";
  } else if (number === 10) {
    romanNumeralString = "X";
  } else if (number === 50) {
    romanNumeralString = "L";
  } else if (number === 100) {
    romanNumeralString = "C";
  } else if (number === 500) {
    romanNumeralString = "D";
  } else if (number === 1000) {
    romanNumeralString = "M";
  }
  return romanNumeralString
}



// User-interface logic
$(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var textInput = parseInt($("#input").val());
    var createRomanNumeral = romanNumeral(textInput);
    $("#output").text(createRomanNumeral)
  });
});
