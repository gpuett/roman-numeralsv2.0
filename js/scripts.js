// Business logic --- Primary Function
function romanNumeral(number) {
  var romanNumeralString = "";
  if (number > 0 && number < 10) {
    return romanNumeralLessThanTen(number);
  } else if (number < 40) {
    return romanNumeralLessThanForty(number);
  } else if (number <= 50) {
    return romanNumeralLessThanFiftyOne(number);
  } else if (number <= 90) {
    return romanNumeralLessThanNinetyOne(number);
  } else if (number <= 100) {
    return romanNumeralLessThanOneHundredAndOne(number);
  } else if (number <= 400) {
    return romanNumeralLessThanFourHundredAndOne(number);
  }
  return romanNumeralString
}

// Less than 10 Function
function romanNumeralLessThanTen(number) {
  var romanNumeralString = "";
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
  return romanNumeralString;
}

function romanNumeralLessThanForty(number) {
    if (number === 10) {
      romanNumeralString = "X";
    } else if (number > 10 && number < 20) {
    romanNumeralString = "X";
    romanNumeralString += romanNumeralLessThanTen(number-10)
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
  return romanNumeralString;
}

function romanNumeralLessThanFiftyOne(number) {
  var romanNumeralString = "XL";
  if (number === 40) {
    romanNumeralString;
  } else if (number > 40 && number < 50) {
    romanNumeralString += romanNumeralLessThanTen(number-40)
  } else if (number === 50) {
    romanNumeralString = "L";
  }
  return romanNumeralString;
}

function romanNumeralLessThanNinetyOne(number) {
  var romanNumeralString = "L";
  if (number < 60) {
    romanNumeralString += romanNumeralLessThanTen(number-50)
  } else if (number > 60 && number < 90) {
    romanNumeralString += romanNumeralLessThanForty(number-50)
  } else if (number === 90) {
    romanNumeralString = "XC";
  }
  return romanNumeralString;
}

function romanNumeralLessThanOneHundredAndOne(number) {
  var romanNumeralString = "XC";
  if (number > 90 && number < 100) {
    romanNumeralString += romanNumeralLessThanTen(number-90)
  } else if (number === 100) {
    romanNumeralString = "C";
  }
  return romanNumeralString;
}

function romanNumeralLessThanFourHundredAndOne(number) {
    var romanNumeralString = "C";
    if (number > 100 && number < 110) {
      romanNumeralString += romanNumeralLessThanTen(number-100)
    } else if (number > 110 & number < 140) {
      romanNumeralString += romanNumeralLessThanForty(number-100)
    } else if (number >= 140 && number < 151) {
      romanNumeralString += romanNumeralLessThanFiftyOne(number-100)
    } else if (number >= 151 & number < 191) {
      romanNumeralString += romanNumeralLessThanNinetyOne(number-100)
    } else if (number >= 191 & number < 200) {
      romanNumeralString += romanNumeralLessThanOneHundredAndOne(number-100)
    } else if (number === 200) {
      romanNumeralString += "C";
    } else if (number > 200 && number < 210) {
      romanNumeralString = "C" + romanNumeralString + romanNumeralLessThanTen(number-200)
    } else if (number > 210 & number < 240) {
      romanNumeralString = "C" + romanNumeralString + romanNumeralLessThanForty(number-200)
    } else if (number >= 240 && number < 251) {
      romanNumeralString = "C" + romanNumeralString + romanNumeralLessThanFiftyOne(number-200)
    } else if (number >= 251 & number < 291) {
      romanNumeralString = "C" + romanNumeralString + romanNumeralLessThanNinetyOne(number-200)
    } else if (number >= 291 & number < 300) {
      romanNumeralString = "C" + romanNumeralString + romanNumeralLessThanOneHundredAndOne(number-200)
    } else if (number === 300) {
      romanNumeralString = "CCC";
    }
  return romanNumeralString;
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
