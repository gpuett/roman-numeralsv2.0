// Business logic
function romanNumeral(number) {
  var romanNumeralString;
  if (number === 1) {
    romanNumeralString = "I";
  } else if (number === 2) {
    romanNumeralString = "II";
  } else if (number === 3) {
    romanNumeralString = "III";
  } else if (number === 5) {
    romanNumeralString = "V";
  } else if (number === 10) {
    romanNumeralString = "X";
  } else if (number === 50) {
    romanNumeralString = "L";
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
