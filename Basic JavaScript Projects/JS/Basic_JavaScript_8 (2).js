function full_Sentence() {
    var part_1 = "I am ";
    var part_2 = "A Green Bay ";
    var part_3 = "Packers ";
    var part_4 = "fan.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Its better to give than to receive.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X =222;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12345.6789012345678;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}