// Business logic --- Primary Function
var romanArray = ["I", "V", "X", "L", "C", "D", "M"]
function romanNumeral(number) {
  var userRomanArray = number.split("").reverse();
  var outputRomanString = "";
    for (var i = 0; i < userRomanArray.length; i++) {
      var elementNumber = parseInt(userRomanArray[i]);
      if (elementNumber < 4) {
        for (var j = 0; j < elementNumber; j++) {
          outputRomanString += romanArray[0 + (2 * i)];
        }
      } else if (elementNumber >= 5 && elementNumber < 9) {
        for (var j = 0 ; j < elementNumber - 5; j++) {
          outputRomanString += romanArray[0 + (2 * i)];
        }
        outputRomanString += romanArray[1 + (2 * i)];
      } else if (elementNumber === 4) {
        outputRomanString += romanArray[1] + romanArray[0 + (2 * i)]
      } else if (elementNumber === 9) {
        outputRomanString += romanArray[2] + romanArray[0 + (2 * i)]
      }
    }
  return outputRomanString.split("").reverse().join("");
}


// User-interface logic
$(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var textInput = $("#input").val();
    var createRomanNumeral = romanNumeral(textInput);
    $("#output").text(createRomanNumeral)
  });
});
