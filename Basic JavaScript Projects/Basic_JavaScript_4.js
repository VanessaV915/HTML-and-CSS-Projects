function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Blue",
        Breed:"Pitbull",
        Age:2,
        Sound:"Bark!"
    };
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}