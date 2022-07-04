//Concatenating strings function//
function concat_Function() {
    var une="Example of a ";
    var deux="complete sentence ";
    var trois="using concatenation methods.";
    var quatre=une.concat(deux, trois,);
    document.getElementById("concat").innerHTML=quatre;
}

//Slice//
function slice_Function() {
    var adeen="I don't want the whole sentence.";
    var dvadst=adeen.slice(13,16);
    document.getElementById("slice").innerHTML=dvadst;
}

//Uppercase//
function up_Function() {
    var lower="hello world";
    var upper=lower.toUpperCase();
    document.getElementById("upper").innerHTML=upper;
}

//Search//
function search_Function() {
    var look="My purple house";
    var search=look.search("purple");
    document.getElementById("search").innerHTML=search;
}

//toString//
function string_Function() {
    var thing=4000000;
    document.getElementById("stringy").innerHTML=thing.toString();
}

//Precision//
function precise_Function() {
    var bignumber=75453.8765;
    document.getElementById("precise").innerHTML=bignumber.toPrecision(7);
}

//Tofixed//
function fix_Function() {
    var fixnumber=17.23;
    document.getElementById("fixed").innerHTML=fixnumber.toFixed(1);
}

//Valueof//
function value_Function() {
    var value="What type of data am i";
    document.getElementById("value").innerHTML=value.valueOf();
}