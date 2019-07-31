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
var onfather = "/white-king.png";
var onMother = "/white-queen.png";
var onSister = "/white-pawn.png"
var off = "";
var state = false;
var fatherimg = document.getElementById("fatherimg");
var motherimg = document.getElementById("motherimg");
var sisterimg = document.getElementById("sisterimg");
var btnfather = document.getElementById("btnfather");
var btnmother = document.getElementById("btnmother");
var btnsister = document.getElementById("btnsister");

document.getElementById("btnFather").addEventListener("click", function () {
    if (state) {
        fatherimg.src = off;
        state = false;
    } else {
        fatherimg.src = onfather;
        state = true;
    }
})

document.getElementById("btnMother").addEventListener("click", function () {
    if (state) {
        motherimg.src = off;
        state = false;
    } else {
        motherimg.src = onMother;
        state = true;
    }
})

document.getElementById("btnSister").addEventListener("click", function () {
    if (state) {
        sisterimg.src = off;
        state = false;
    } else {
        sisterimg.src = onSister;
        state = true;
    }
})

/*==================================================================================================
        ======================================== Magic Happens Here! =======================================
        ==================================================================================================*/
//Variables are declared.
let base_url = "https://pokeapi.co/api/v2/";
let poke_search = document.getElementById("pokesearch");
let search = document.getElementById("search");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let list = document.getElementById("list");
let pokemon_name;
let pokemon_id;
let pokemon_moves;
let pokemon_abilities;
let pokemon_image;
let pokemon_weight;

//EventListeners are added to HTML elements.
search.addEventListener("click", function () {
    LoadPokemon(poke_search.value);
});
poke_search.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        LoadPokemon(poke_search.value);
    }
})
previous.addEventListener("click", function () {
    if (pokemon_id === undefined) {
        pokemon_id = 2;
    }
    LoadPokemon(--pokemon_id);
});
next.addEventListener("click", function () {
    if (pokemon_id === undefined) {
        pokemon_id = 0;
    }
    LoadPokemon(++pokemon_id);
})
//Function that looks up the data for a pokemon when it's given the pokemon's name or id number.
function LoadPokemon(pokemon) {
    let request = new XMLHttpRequest();
    let dots = 1;
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200 && pokemon !== "") {
            SetVariables(JSON.parse(this.responseText));
        } else {
            SetVariables(dots++);
        }
    }
    request.open("GET", base_url + "pokemon/" + pokemon.toString().toLowerCase(), true);
    request.send();
}
//This function changes the variables with the most recent pokemon's information.
function SetVariables(data) {
    if (typeof data === "number") {
        console.log("Searching for data" + ".".repeat(data))
    } else {
        console.log("Data found!")
        pokemon_name = data.name;
        pokemon_id = data.id;
        pokemon_moves = data.moves.map(x => x.move.name);
        pokemon_abilities = data.abilities.map(x => x.ability.name);
        pokemon_image = data.sprites.front_default;
        pokemon_weight = data.weight;
        DoThingsWithTheDom();
    }
}
//This function loads all of the pokemons and stores them in a list in your HTML.
//Clicking one of the list items will then look up data for that specific pokemon!
function LoadPokemonList() {
    let request = new XMLHttpRequest();
    list.innerHTML = "";
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
            let pokemon_list = JSON.parse(this.responseText).results.map(x => x.name);
            for (pokemon of pokemon_list) {
                let li = document.createElement("li");
                li.innerHTML = pokemon;
                li.addEventListener("click", function () {
                    LoadPokemon(this.innerHTML);
                })
                list.append(li);
            }
        }
    }
    request.open("GET", base_url + "pokemon?offset=0&limit=807", true);
    request.send();
}
//Function that you can call to see the current pokemon's information
function LogPokeData() {
    console.log("Name: " + pokemon_name +
        "\n" + "ID: " + pokemon_id +
        "\n" + "Moves:", pokemon_moves, "\n" + "Abilities:", pokemon_abilities, "\n" + "Image URL: " + pokemon_image +
        "\n" + "Weight: " + pokemon_weight);
}
/*==================================================================================================
======================================== Magic Ends Here! ==========================================
==================================================================================================*/
function DoThingsWithTheDom() {
    /*
    Write your code here!
    The following variables contain data for you to use. Be careful with the data types (some are numbers, some are strings and some are arrays)! 
        pokemon_name
        pokemon_id
        pokemon_moves
        pokemon_abilities
        pokemon_image
        pokemon_weight
    The goal of the exercise is for you to display this information in your HTML.
    You can do this by placing empty tags in your HTML, and the assigning their content with JS.
    But you can also generate the HTML with document.createElement().
    */
    let randomMove1 = pokemon_moves[Math.floor(Math.random() * pokemon_moves.length)];
    let randomMove2 = pokemon_moves[Math.floor(Math.random() * pokemon_moves.length)];

    console.log(randomMove1, randomMove2);
    document.getElementById("pokemon-name").innerHTML = pokemon_name;
    document.getElementById("pokemon-id").innerHTML = pokemon_id;
    document.getElementById("pokemon-image").setAttribute("src", pokemon_image);
    document.getElementById("pokemon-abilities").innerHTML = pokemon_moves;
    document.getElementById("pokemon-weight").innerHTML = pokemon_weight;

}
document.getElementById("list").innerHTML = LoadPokemonList();
