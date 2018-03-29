// Business logic --- Primary Function
function romanNumeral(number) {
  var romanNumeralString = "";
  if (number < 10) {
    return romanNumeralLessThanTen(number);
  } else if (number < 40) {
    return romanNumeralLessThanForty(number);
  }
  return romanNumeralString
}

// Less than 10 Function
function romanNumeralLessThanTen(number) {
  if (number < 4) {
    for (var i = 1; i <= number; i++) {
      romanNumeralString += "I"
    }
  } else if (number === 4) {
    romanNumeralString = "IV";
  }  else if (number === 5) {
    romanNumeralString = "V";
  } else if (number > 5 && number < 9) {
    romanNumeralString = "V";
    for (var i = 6; i <= number; i++) {
      romanNumeralString += "I";
    }
  } else if (number === 9) {
    romanNumeralString = "IX"
  }
  return romanNumeralString
}

function romanNumeralLessThanForty(number) {
    if (number === 10) {
      romanNumeralString = "X";
    } else if (number > 10 && number < 20) {
    romanNumeralString = "X";
    romanNumeralString += romanNumeralLessThanTen(number-10)
    console.log(romanNumeralString);
  } else if (number === 20) {
    romanNumeralString = "XX";
  } else if (number > 20 && number < 30) {
    romanNumeralString = "XX";
    romanNumeralString += romanNumeralLessThanTen(number-20)
  } else if (number === 30) {
    romanNumeralString = "XXX";
  } else if (number > 30 && number < 40) {
    romanNumeralString = "XXX";
    romanNumeralString += romanNumeralLessThanTen(number-30)
  }
  return romanNumeralString

}
  // } else if (number === 50) {
  //   romanNumeralString = "L";
  // } else if (number === 100) {
  //   romanNumeralString = "C";
  // } else if (number === 500) {
  //   romanNumeralString = "D";
  // } else if (number === 1000) {
  //   romanNumeralString = "M";
  // }




// User-interface logic
$(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var textInput = parseInt($("#input").val());
    var createRomanNumeral = romanNumeral(textInput);
    $("#output").text(createRomanNumeral)
  });
});
