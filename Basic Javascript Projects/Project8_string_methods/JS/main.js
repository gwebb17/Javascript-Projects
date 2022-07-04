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