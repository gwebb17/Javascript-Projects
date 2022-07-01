function thisFunction() {
    var C = 3*8;
    document.getElementById("Math").innerHTML="3 times 8 = " + C
}

function subtraction_Function() {
    var Subtraction = 5-2;
    document.getElementById("Math").innerHTML= "5 -2 = " + Subtraction;
}
function division_Function() {
    var Division = 12 / 4;
    document.getElementById("division_result").innerHTML = "12 divided by 4 = " + Division;
}
function multiple_Operations() {
    var Multiple = (3 +10) * 2 / 7;
    document.getElementById("multiple_Numbers").innerHTML ="3 plus 10 times 2 divided by 7 = " + multiple_Operations;
}
function modulus_Operator() {
    var Modulus = (27 % 7)
    document.getElementById("modulus_P").innerHTML ="remainder of 27 divided by 7 is " + Modulus;
}
function negation_Operator() {
    var Negation= 17;
    document.getElementById("negation_P").innerHTML ="opposite of 17 is " + -Negation;//Keep -symbol before variable name//
}
function increment_Operator() {
    var increment =5;
    document.getElementById("increment_P").innerHTML="5 incremented by 1 is " + ++increment;//Prefix ++ having ++ in postfix breaks it//
}
function decrement_Operator() {
    var decrement=5;
    document.getElementById("decrement_P").innerHTML="5 decremented by1 is " + --decrement;//Prefix--, having -- in postfix breaks it//
}
function math_Place() {
    var returnPI=Math.PI;
    document.getElementById("mathplace").innerHTML="value of PI " + returnPI;
}