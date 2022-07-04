var monkeyPuzzle= 1000;
function puzzleFunction() {
    var dontUse=5;
    document.write(20+monkeyPuzzle+"  function1");
}
function givemeDate() {
    if (new Date().getHours()<18) {
        document.getElementById("dateID").innerHTML="Hours less than 18";
    }
}
//My FUNCTION USING IF/ELSE STATEMENT THAT USES INPUT VALUE//
function myIf() {
    var Money=document.getElementById("Money").value;
    if (Money<1000) { 
        document.getElementById("myIf").innerHTML="You don't have enough to fly"; 
    }
    else if (Money>=1000) {
         document.getElementById("myIf").innerHTML="You've got enough to fly"; 
    }
}
//Else if to get time of day//
function Time_function() {
    var Time=new Date().getHours();
    var Reply;
    if (Time<12 == Time>0) {
        Reply="it is morning";
    }
    else if(Time>=12 ==Time<18) {
        Reply="it is afternoon";
    }
    else {
        Reply="it is evening."
    }
    document.getElementById("Time_of_Day").innerHTML=Reply;
}