function Call_Loop() {
    var Digit ="";
    var X = 1;
    while (X < 15) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Team = [];
    Team[0] = "Packers";
    Team[1] = "Suns";
    Team[2] = "Blazers";
    Team[3] = "White Sox";
    Team[4] = "Red Wings";
    document.getElementById("Array").innerHTML = "My favorite team is called the " + Team[0] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"Black"};
    Musical_Instrument.color ="blue";
    Musical_Instrument.price ="$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 22;
document.write(X);
{
    let X = 2;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car = {
    make: "Chevy ",
    model: "Cavalier ",
    year: "2002 ",
    color: "silver ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();