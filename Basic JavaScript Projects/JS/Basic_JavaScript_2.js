function myFirstFunction() {
    var str = "This text is orange!";
    var result = str.fontcolor("orange");
    document.getElementById("Orange_Text").innerHTML = result;
}

function myFunction() {
    var sentence = "I am a Packers fan";
    sentence += "and a Phoenix Suns fan.";
    document.getElementById("concatenate").innerHTML = sentence;
}