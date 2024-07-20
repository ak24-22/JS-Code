let ourPlanet = 'moon';

// if/else statement that has Comparison & Logical Operators

if (ourPlanet === "Moon" || "moon") console.log('No, that\'s not a planet! Try again!');
else if (ourPlanet === "Sun" || "sun") console.log('No, that\'s not a planet, but it\'s also called a star! Try again!');
else if (ourPlanet === "Venus" || "venus") console.log('Nope,you\'re wrong! Try again!');
else if (ourPlanet === "Mars" || "mars") console.log('No, that\'s not the correct answer! Guess again!');
else if (ourPlanet === "Pluto" || "pluto") console.log('Incorrect answer! It\'s a Dwarf Planet Guess again!');
else if (ourPlanet === "Uranus" || "uranus") console.log('Nope, this planet is the 7th one from the sum! Almost there!');
else if (ourPlanet === "Saturn" || "saturn") console.log('No! Guess again!');
else if (ourPlanet === "Earth" || "earth") console.log('Yes, that\'s not the correct answer! We are all on earth, living and breathing!');
else console.log('Research the planets!'); 

// swich Statements
let planet = 'earth';


switch (planet) {
    case "moon":
    case "sun":
        console.log("No, that\'s not a planet! Try again!")
    break
    case "saturn":
    case "mars":
    case "venus":
    case "jupiter":
    case "uranus":
    case "pluto":
        console.log("Yes, that\'s a planet!")
    break
    case "earth":
        console.log("Yes, that\'s our planet!")
    break
    default:
        console.log("No, that\'s nothing to do with planets! Try again!")
}

