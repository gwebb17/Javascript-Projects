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
//can't figure out why print is void, or why using doc.get element instead doesn't return result//
function myIf() {
    var Money=document.getElementById("Money").value;
    if (Money.value<1000) {
        print("you can take the flight");
        /* document.getElementById("myIf").innerHTML="You don't have enough to fly"; */
    }
    else (Money.value>=1000) {
        print("you can't take the flight");
        /* document.getElementById("myIf").innerHTML="You've got enough to fly"; */
    }
}