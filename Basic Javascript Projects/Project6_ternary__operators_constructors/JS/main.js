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
//Using this//
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function newFunction() {
document.getElementById("New_and_This").innerHTML="Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
}
//Need help for below example//
class Person {
    constructor(name, color, age) {
    this.name-name;
    this.color=color;
    this.age=age;
    };
}

    var Bill=new Person("blue", "Mercedes", 39);
    function PersonFunction() {
    document.getElementById("object").innerHTML="Bill corresponding value" + Bill.name;
}

//NESTED FUNCTION//
function NestedFunction() {
    document.getElementById("Nested_Function").innerHTML=Bounce();
    function Bounce() {
        var Step_one=17;
        function Plus_seven() {Step_one +=7;}
        Plus_seven();
        return Step_one;
    }
}