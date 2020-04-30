function Dictionary() {
    var car = {
        type: "chevy",
        color: "black",
        year: 2011,
        sound: "Honk!" 
    };
    delete car.sound;
    document.getElementById("Dictionary").innerHTML = car.sound;
}