function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + " to ride.";
}
function Vote_function() {
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age>=18) ? "You are old enough to vote":"You aren't old enough to vote";
    document.getElementById("Vote").innerHTML=Can_vote + " to vote.";
}