function input_value() {
  temp = document.getElementById("buttons").inner_HTML;
  document.getElementById("Screen_th").inner_HTML = temp;
}
var first, second, third, fourth;

//Operand left to the operator
first = 0;

//Second Stores arithmatic operator
second = 0;

//Operand right to the operator
third = 0;
fourth = 0;
function input_value(a, b = 0) {
  x = Number(a);

  //clear the output screen
  if (x == 14) {
    document.getElementById("Screen_th").innerHTML = "";
    first = 0;
    second = 0;
    third = 0;
    fourth = 0;
    return 1;
  }

  //Assign 1st operator
  if (second == 0) {
    if (x == 10) {
      second = 10;
    } else if (x == 11) {
      second = 11;
    } else if (x == 12) {
      second = 12;
    } else if (x == 13) {
      second = 13;
    }
  } else if (fourth == 0) {
    // assign 2nd operator.
    if (x == 10) {
      fourth = 10;
    } else if (x == 11) {
      fourth = 11;
    } else if (x == 12) {
      fourth = 12;
    } else if (x == 13) {
      fourth = 13;
    }
  }

  //Case 1st operator is not given, which means the input must be
  // for the first operand

  if (second == 0 && fourth == 0 && x != 15) {
    first = first * 10 + x;
  } else if ((third == 0 || fourth == 0) && b == 0 && x != 15) {
    //Case to input digits for 2nd operand
    third = third * 10 + x;
  } else if (fourth != 0 || x == 15) {
    //case to compute 1st operand , 1st operator and 2nd operand
    if (second == 10) {
      add(first, third);
    } else if (second == 11) {
      mult(first, third);
    } else if (second == 12) {
      sub(first, third);
    } else if (second == 13) {
      console.log(third);
      if (third == 0) {
        return 1;
      }
      div(first, third);
    }
    //if the 4th operand was not equals, then the 2nd operator becomes
    //The 1st operator and the output of previous operation becomes the
    //first operand
    second = fourth;
    third = 0;
    fourth = 0;
  }

  //Adds Arithmetic Symbol to output screen
  if (x == 10) {
    document.getElementById("Screen_th").innerHTML += " + ";
  } else if (x == 11) {
    document.getElementById("Screen_th").innerHTML += " * ";
  } else if (x == 12) {
    document.getElementById("Screen_th").innerHTML += " - ";
  } else if (x == 13) {
    document.getElementById("Screen_th").innerHTML += " / ";
  } else if (x == 15) {
    calc();
  } else {
    document.getElementById("Screen_th").innerHTML += x;
  }
}
function calc() {}
function add(a, b) {
  sol = a + b;

  document.getElementById("Screen_th").innerHTML = sol;
  first = sol;
}
function mult(a, b) {
  sol = a * b;
  document.getElementById("Screen_th").innerHTML = sol;
  first = sol;
}
function sub(a, b) {
  sol = a - b;
  document.getElementById("Screen_th").innerHTML = sol;
   dfirst = sol;
}
function div(a, b) {
  sol = a / b;
  document.getElementById("Screen_th").innerHTML = sol;
  first = sol;
}
