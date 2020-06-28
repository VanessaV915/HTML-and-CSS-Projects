function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 30) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function St_Length() {
    var str = "Congratulations on the baby!";
    document.getElementById("Length").innerHTML = str.length;
}

var Instruments = ["Drums", "Piano", "Cello", "Flute", "Trumpet", "Guitar"];
var Items = "";
var A;
function for_Loop() {
    for (A = 0; A < Instruments.length; A++) {
    Items += Instruments[A] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Items;
}

function array_Function() {
    var Days = [];
    Days[0] = "Sunday";
    Days[1] = "Monday";
    Days[2] = "Tuesday";
    Days[3] = "Wednesday";
    Days[4] = "Thursday";
    Days[5] = "Friday";
    Days[6] = "Saturday";
    document.getElementById("Array").innerHTML = "My work week starts on " +
        Days[0] + ".";
}

function constant_function() {
    const Household_Appliance = {type:"fridge", brand:"Kenmore", color:"black"};
    Household_Appliance.price = "$1,399.99";
    Household_Appliance.color = "stainless steel";
    document.getElementById("Constant").innerHTML = "The cost of the" + Household_Appliance.type +  " was " + Household_Appliance.price;
}

var bravo = 23;
document.write(bravo);
{
    let bravo = 31;
    document.write("<br>" + bravo);
}
document.write("<br>" + bravo);

let car = {
    make: "Hyundai ",
    model: "Sonata ",
    year: "2020 ",
    color: "midnight blue ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model + "<br>";
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

function ret_Function(name) {
    return "Hello " + name;
}
document.getElementById("Claim").innerHTML = ret_Function("John") + "<br>";


function br_Function() {
    var text = "";
    var i = 0;
    while (i < 5) {
        text += "<br>The number is " + i;
        i++;
        if (i === 3) {
            break;
        }
    }
document.getElementById("break_function").innerHTML = text;
}

function con_Function() {
    var text = "";
    var c;
    for (c = 0; c < 5; c++) {
        if (c === 3) {
            continue;
        }
        text += "The number is " + c + "<br>";
    }
    document.getElementById("continue_Function").innerHTML = text;
}
