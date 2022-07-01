function my_Dictionary() {
    var Phrygian = {
        unique: "b 2",
        mood: "foreboding",
        variation: "Phrygian Dominant",
        notes:7,
        associated:"min7 add b9",
        alternate:"harmonic minor",
    };
    delete Phrygian.associated;//returns "undefined" when you run it below//
    document.getElementById("Dictionary").innerHTML=Phrygian.associated;
    }