// Business logic
function romanNumeral(number) {
  var romanNumeralString;
  if (number === 1) {
    romanNumeralString = "I"
  }
  console.log(romanNumeralString);
  return romanNumeralString
}



// User-interface logic
$(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
  })
})
