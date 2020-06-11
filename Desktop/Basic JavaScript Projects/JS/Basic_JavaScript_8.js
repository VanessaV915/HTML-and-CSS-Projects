function sliced_M () {
    var tasi = "Operation is a popular children's game.";
    var section = tasi.slice(23,34);
    document.getElementById("Sliced").innerHTML=section;
}

function upper_C() {
    var str = "Please excuse me";
    document.getElementById("Upper").innerHTML=str.toUpperCase();
}

function search_M() {
    var x = "Would you like to play a game of chess?";
    document.getElementById("Search").innerHTML=x.search("game");
}

function string_M() {
    var a = "495";
    document.getElementById("N_to_S").innerHTML = a.toString();
}

function P_M() {
    var b = 13.54326784321;
    document.getElementById("Precise").innerHTML = b.toPrecision(5);
}

function fix_M() {
    var c = 71.34254;
    document.getElementById("Fixed").innerHTML = c.toFixed(13);
}

function primitive_V() {
    var d = 53.5424621;
    document.getElementById("Value_Of").innerHTML = d.valueOf();
}