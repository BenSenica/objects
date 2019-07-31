var aboutMe = {
    name: "Ben Senica",
    age: "30",
    gender: "male",
    favoriteFood: "Lasagna",
    favoriteSeries: "none",
    favoriteMovies: "Robin Hood: Men in tights",
    single: "no"
};

document.getElementById("aboutMe").innerHTML = aboutMe.name + " </br>" + aboutMe.age + " </br>" + aboutMe.gender + " </br>" + aboutMe.favoriteFood + " </br>" + aboutMe.favoriteSeries + " </br>" + aboutMe.favoriteMovies + " </br>" + aboutMe.single;

function FamilyMember(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var father = new FamilyMember("Jean Senica", "59", "Male");
var mother = new FamilyMember("Nadine Leroy", "58", "Female");
var oldestSister = new FamilyMember("Marijke Senica", "39", "Female");
var youngestSister = new FamilyMember("Karolien Senica", "37", "Female");

document.getElementById("father").innerHTML = father.name + " </br>" + father.age + " </br>" + father.gender;
document.getElementById("mother").innerHTML = mother.name + " </br>" + mother.age + " </br>" + mother.gender;
document.getElementById("oldestSister").innerHTML = oldestSister.name + " </br>" + oldestSister.age + " </br>" + oldestSister.gender;
document.getElementById("youngestSister").innerHTML = youngestSister.name + " </br>" + youngestSister.age + " </br>" + youngestSister.gender;

/*
document.getElementById("btnFather").addEventListener("click", function () {
    document.getElementById("fatherimg").src = "/white-king.png"
});
document.getElementById("btnMother").addEventListener("click", function () {
    document.getElementById("motherimg").src = "/white-queen.png"
});
document.getElementById("btnSister").addEventListener("click", function () {
    document.getElementById("sisterimg").src = "/white-pawn.png"
});
*/
