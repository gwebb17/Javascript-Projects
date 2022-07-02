function type_Function() {
    var X="monkey";
    document.write(typeof "monkey");
}
function type_Coercion() {
    document.write("30" + 1.47);
}
function not_anumber() {
    document.getElementById("nan").innerHTML=0/0;
}
function say_true() {
    document.getElementById("true").innerHTML=isNaN('string');
}
function say_false() {
    document.getElementById("false").innerHTML=isNaN(5);
}
function infinity() {
    document.getElementById("infinite").innerHTML=2E310;
}
function neginfinity() {
    document.getElementById("neginfinite").innerHTML=(-1.8076931348623157E308);
}
//Here there be Booleans//
function boo1() {
    document.getElementById("bool1").innerHTML=(17>=3);
}
function boo2() {
    document.getElementById("bool2").innerHTML=(17>18);
}
function equals2() {
    document.getElementById("equal2").innerHTML=(10+7)==17;
}
function equals1() {
    document.getElementById("equal1").innerHTML=(10+7)==7;
}
function eqa() {
    var eqa1=10;
    var eqa1b=10;
    document.getElementById("eqa").innerHTML=(eqa1===eqa1b);
}
function eqb() {
    var eqa2=10;
    var eqa2b="number";
    document.getElementById("eqa2").innerHTML=(eqa2===eqa2b);
}
function eqc() {
    var eqa3=10;
    var eqa3b="10";
    document.getElementById("eqa3").innerHTML=(eqa3===eqa3b);
}
function eqd() {
    var eqa4=10;
    var eqa4b=1;
    document.getElementById("eqa4").innerHTML=(eqa4===eqa4b);
}
//And OR//
function andfunction() {
    document.getElementById("and").innerHTML=(3>2 && 5>3);
}
function andfunctionb() {
    document.getElementById("andfunctionb").innerHTML=(5<3 && 3>17);
}
function orfunction() {
    document.getElementById("orfunction").innerHTML=(1>5 || 3>2);
}
function orfunctionb() {
    document.getElementById("orfunctionb").innerHTML=(1>5 || 6>17);
}
//NOT//
function notfunction() {
    document.getElementById("Not").innerHTML=!(1>3);
}
function notfunctionb() {
    document.getElementById("Notb").innerHTML=!(3>2);
}