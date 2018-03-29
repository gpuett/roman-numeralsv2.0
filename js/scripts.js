// Business logic
function romanNumeral(number) {
  var romanNumeralString;
  if (number === 1) {
    romanNumeralString = "I"
  } else if (number === 2) {
    romanNumeralString = "II"
  }
  console.log(romanNumeralString);
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
