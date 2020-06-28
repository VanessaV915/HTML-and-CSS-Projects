function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote.":"You can vote!";
    document.getElementById("vote").innerHTML = Can_vote + " ";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactures in " + Erik.Vehicle_Year;
}

function Drink_Order(Drink, Size, Shots, Flavor, milkType) {
    this.Drink_Order_Drink = Drink;
    this.Drink_Order_Size = Size;
    this.Drink_Order_Shots = Shots;
    this.Drink_Order_Flavor = Flavor;
    this.Drink_Order_milkType = milkType;
}
var Bob = new Drink_Order("Mocha", 16, 2, "Chocolate", "Hemp");
var Tom = new Drink_Order("Americano", 24, 5, "Caramel Sauce", "Cream");
var Katie = new Drink_Order("Candied Pecan", 20, 3, "Brown Sugar Cinnamon and Butter Pecan", "Whole");
function morning_Rush() {
    document.getElementById("new_drinks").innerHTML =
    "Make Tom's drink, a " + Tom.Drink_Order_Size + "oz " + Tom.Drink_Order_Drink + " with " + Tom.Drink_Order_Shots + 
    " shots, " + Tom.Drink_Order_Flavor + "," + " and " + Tom.Drink_Order_milkType + ".";
}

function Nested() {
    document.getElementById("Nested_Function").innerHTML = nest();
    function nest() {
        var Starting_point = 13;
        function Plus() {Starting_point += 57};
        Plus();
        return Starting_point;
        }
    }
