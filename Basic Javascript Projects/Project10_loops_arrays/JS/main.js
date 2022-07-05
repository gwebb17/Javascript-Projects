function Count_Function() {
  let text="";
  let i=0;
  while (i<8) {
    text+="<br>the number is " + i;
    i++;
  }
  document.getElementById("count").innerHTML=text;
}

//stringlength prop//
function string_Length() {
    var lengthy="how many characters is this sentence?";
    var calculate=lengthy.length;
    document.getElementById("stringy").innerHTML=calculate;
}

//For function//
function for_Function() {
    var list=["red tail boa","reticulated python", "anaconda", "timber rattlesnake"];
    var result="";
    var placeholder;
    for (placeholder=0; placeholder<list.length; placeholder++){
        result+=list[placeholder]+"<br>";
    }
    document.getElementById("forest").innerHTML=result;
}

//Array function//
function array_Function() {
    var modes=[];
    modes[0]="Ionian";
    modes[1]="Aeolian";
    modes[2]="Dorian";
    modes[3]="Lydian";
    modes[4]="Phrygian";
    modes[5]="Locrian";
    document.getElementById("array").innerHTML="This modality with the formulae 1 2 3 #4 5 6 7 is " + modes[4] + ".";
}

//Constant function//
function constant_Function() {
    const shoes={Size: 12, brand:"Nike", color:"black"};
    shoes.Size=14;
    shoes.color="red";
    document.getElementById("Constant").innerHTML=shoes.color +"<br>" + shoes.Size;
}

//let use//
X=10;
function let_Function() {
    var X=2;
    var Y="";
    if (X<10) {
        Y="X must equal 2";
    }
    else {
        Y="X must equal 10";
    }
    document.getElementById("let").innerHTML=X;

}
H=5;
function lety_Function() {
    let H=3;
    var I="";
    if (H<5) {
        I="H must equal 3";
    }
    else {
        I="I must have entered the variables wrong";
    }
    document.getElementById("lety").innerHTML=H + "<br>" + I;
}
