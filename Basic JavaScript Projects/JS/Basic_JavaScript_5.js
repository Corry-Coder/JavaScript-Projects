document.write(typeof "word");
document.write(2E310);
document.write(-3E310);
document.write(10 > 2);
console.log(2 + 2);
document.write("10" + 5);
console.log(10 < 2);
document.write(10 == 10);
document.write(3 == 11);
document.write(22 === 22);
document.write("22" === 22);
document.write(22 === 21);
document.write("22" === "21");
document.write(5 > 2 && 10 > 4);
document.write(5 > 10 || 10 > 4 );
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
    document.getElementById("Not").innerHTML = !(20 > 10);
}
function Ride_Function() {
    var Heght, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}