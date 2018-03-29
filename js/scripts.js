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
  } else if (number <= 500) {
    return romanNumeralLessThanFiveHundredAndOne(number);
  } else if (number <= 900) {
    return romanNumeralLessThanNineHundred(number);
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

function romanNumeralLessThanFiveHundredAndOne(number) {
    var romanNumeralString = 'C';
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
    } else if (number > 300 && number < 310) {
      romanNumeralString = "CC" + romanNumeralString + romanNumeralLessThanTen(number-300)
    } else if (number > 310 & number < 340) {
      romanNumeralString = "CC" + romanNumeralString + romanNumeralLessThanForty(number-300)
    } else if (number >= 340 && number < 351) {
      romanNumeralString = "CC" + romanNumeralString + romanNumeralLessThanFiftyOne(number-300)
    } else if (number >= 351 & number < 391) {
      romanNumeralString = "CC" + romanNumeralString + romanNumeralLessThanNinetyOne(number-300)
    } else if (number >= 391 & number < 400) {
      romanNumeralString = "CC" + romanNumeralString + romanNumeralLessThanOneHundredAndOne(number-300)
    } else if (number === 400) {
      romanNumeralString = "CD";
    } else if (number > 400 && number < 410) {
      romanNumeralString = "CD" + romanNumeralLessThanTen(number-400)
    } else if (number >= 410 & number < 440) {
      romanNumeralString = "CD" + romanNumeralLessThanForty(number-400)
    } else if (number >= 440 && number < 451) {
      romanNumeralString = "CD" + romanNumeralLessThanFiftyOne(number-400)
    } else if (number >= 451 && number < 491) {
      romanNumeralString = "CD" + romanNumeralLessThanNinetyOne(number-400)
    } else if (number >= 491 && number < 500) {
      romanNumeralString = "CD" + romanNumeralLessThanOneHundredAndOne(number-400)
    } else if (number === 500) {
      romanNumeralString = "D";
    }
  return romanNumeralString;
}

function romanNumeralLessThanNineHundred(number) {
  var romanNumeralString = "D";
  if (number > 500 && number < 510) {
    romanNumeralString += romanNumeralLessThanTen(number-500)
  } else if (number > 510 & number < 540) {
    romanNumeralString += romanNumeralLessThanForty(number-500)
  } else if (number >= 540 && number < 551) {
    romanNumeralString += romanNumeralLessThanFiftyOne(number-500)
  } else if (number >= 551 & number < 591) {
    romanNumeralString += romanNumeralLessThanNinetyOne(number-500)
  } else if (number >= 591 & number < 600) {
    romanNumeralString += romanNumeralLessThanOneHundredAndOne(number-500)
  } else if (number === 600) {
    romanNumeralString += "DC";
  } else if (number > 600 && number < 610) {
    romanNumeralString = romanNumeralString + "C" +  romanNumeralLessThanTen(number-600)
  } else if (number > 610 & number < 640) {
    romanNumeralString = romanNumeralString + "C" + romanNumeralLessThanForty(number-600)
  } else if (number >= 640 && number < 651) {
    romanNumeralString = romanNumeralString + "C" + romanNumeralLessThanFiftyOne(number-600)
  } else if (number >= 651 & number < 691) {
    romanNumeralString = romanNumeralString + "C" + romanNumeralLessThanNinetyOne(number-600)
  } else if (number >= 691 & number < 700) {
    romanNumeralString = romanNumeralString + "C" + romanNumeralLessThanOneHundredAndOne(number-600)
  } else if (number === 700) {
    romanNumeralString = "DCC";
  } else if (number > 700 && number < 710) {
    romanNumeralString = romanNumeralString + "CC" + romanNumeralLessThanTen(number-700)
  } else if (number > 710 & number < 740) {
    romanNumeralString = romanNumeralString + "CC" + romanNumeralLessThanForty(number-700)
  } else if (number >= 740 && number < 751) {
    romanNumeralString = romanNumeralString + "CC" + romanNumeralLessThanFiftyOne(number-700)
  } else if (number >= 751 & number < 791) {
    romanNumeralString = romanNumeralString + "CC" + romanNumeralLessThanNinetyOne(number-700)
  } else if (number >= 791 & number < 800) {
    romanNumeralString = romanNumeralString + "CC" + romanNumeralLessThanOneHundredAndOne(number-700)
  } else if (number === 800) {
    romanNumeralString = "CD";
  } else if (number > 800 && number < 810) {
    romanNumeralString = romanNumeralString + "CCC" + romanNumeralLessThanTen(number-800)
  } else if (number >= 810 & number < 840) {
    romanNumeralString = romanNumeralString + "CCC" + romanNumeralLessThanForty(number-800)
  } else if (number >= 840 && number < 851) {
    romanNumeralString = romanNumeralString + "CCC" + romanNumeralLessThanFiftyOne(number-800)
  } else if (number >= 851 && number < 891) {
    romanNumeralString = romanNumeralString + "CCC" + romanNumeralLessThanNinetyOne(number-800)
  } else if (number >= 891 && number < 900) {
    romanNumeralString = romanNumeralString + "CCC" + romanNumeralLessThanOneHundredAndOne(number-800)
  } else if (number === 900) {
    romanNumeralString = "CM";
  }
return romanNumeralString;
}


function romanNumeralLessThanFiveHundredAndOne(number) {
  var romanNumeralString = "CD";
  if (number > 400 && number < 490) {

  }
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
