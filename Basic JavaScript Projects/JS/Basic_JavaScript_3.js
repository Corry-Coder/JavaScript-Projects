function subtraction_Function() {
    var subtraction = 4 - 2;
    document.getElementById("Math").innerHTML = "4 - 2 =" + subtraction;
}

function multiplication() {
    var simple_math = 12*12;
    document.getElementById("Math").innerHTML = "12*12 = " + simple_math;
}

function division() {
    var simple_math = 22 / 2;
    document.getElementById("Math").innerHTML = "22 / 2 =" + simple_math;
}

function more_math() {
    var simple_math = (1+1) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_operator() {
    var x =10;
    document.getElementById("Math").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);

window.alert(Math.random());

window.alert(Math.random() * 100);

Math.sqrt(64);