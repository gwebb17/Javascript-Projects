function myFunction() {
    var A = "this is a string";
    var B = A.fontcolor("blue");
    document.getElementById("paragraph").innerHTML=B; //alter the innner text of the "paragraph element"
}
//document refers to html doc that this is linked too
//get element by id which element of the document you want to select ("pararaph ")is the id we want to select\
//innerHTML instructs program that we want to alter the text between <p> and </p>

function yourFunction() {
    var fragment = "I walked to the ";
    fragment += " grocery store.";
    document.getElementById("paragraph2").innerHTML=fragment;
}