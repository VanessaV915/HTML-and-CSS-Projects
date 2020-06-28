var a = 13;
function Multiply_1() {
    document.write(13 * a + "<br>");
}
function Multiply_2() {
    document.write(a * 4 + "<br>");
}
Multiply_1();
Multiply_2();

function Subtract_1() {
    b = 23;
    document.write(100 - b + "<br>");
}
Subtract_1();

function Add_1() {
    var x = 6;
    console.log(67 + x + "<br>");
}
function Add_2() {
    console.log(3 + x + "<br>");
}
Add_1();
Add_2();


function after_Hours() {
    if (new Date().getHours()>12) {
    document.getElementById("A_F").innerHTML="What can I do for you this evening?";
    }
}

if (13 < 17) {
    document.write("Thirteen is less than seventeen." + "<br>");
}

function Time_F() {
    Time = document.getElementById("Time").value;
    if (Time>1200) {
        Drank = "Pop that bottle and start day drinking!";
    }
    else {
        Drank = "Wait a few hours before consuming alcohol...";
    }
    document.getElementById("What_time_is_it?").innerHTML=Drank;
}

function Time_Function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time<12==Time>0){
        Reply = "It is morning time!";
    }
    else if(Time>12==Time<18){
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}


