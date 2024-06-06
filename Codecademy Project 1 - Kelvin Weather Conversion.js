// ========================================================|
// Project 1 - Kelvin Weather Conversion		|
// --------------------------------------------------------|
// Description: Convert Kelvin to Celsius and Fahrenhiet	|
// ========================================================|



// Forecast is 293. Variable is Kelvib
const kelvin = 0;
// Converting forecast to celsius
const celsius = kelvin - 273;
// working  out Fahrenhiet
let fahrenhiet = celsius * (9 / 5) + 32;
fahrenhiet = Math.floor(fahrenhiet);
// Rounding the decimal down
console.log(`The temperature is ${fahrenhiet} degrees Fahrenhiet.`);


// -----------------------------------
// ++++++++++++++++++++++++++++++++++|
// Bonus Round			  |
// ++++++++++++++++++++++++++++++++++|
// -----------------------------------

let newton = celsius * (33/100);

newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);