// ==============================================================
// +++++++++++++++++++ JS practuce code sheet ++++++++++++++++++
// ==============================================================



console.log('I am Batman!'.toUpperCase());
// ".toUpperCase()" turns text into all caps
console.log('Hello'.length);
// ".length" counts number of characters
console.log('   Spiderman   '.trim());
// ".trim()" Removes Whitespace
console.log(Math.floor(Math.random() * 600));
/* ".random()" prints any number from 0-600 and ".floor()"
 rounds down to the nearest whole number */
console.log(Math.random() * 50);
// prints any number from 0-50
console.log(Number.isInteger(44))
console.log(Math.ceil(33.4))
// ".ceil()" rounds up to the nearest whole number
console.log(Math.floor(33.4))
// ".floor()" rounds down to the nearest whole number
console.log('Hey ' + 'AK');
var myName = 'Tang San';
console.log(myName);
myName = 'Xiao Wu';
console.log(myName);
let yourName = 'Xiao Yan';
console.log(yourName);
yourName = 'Xun er';
console.log(yourName);
let story = "johnny said, 'I am innocent, dad!' ";
console.log(story)
let Speed = 'FirstLine\n\t\\SecondLine\n\t\\ThirdLine'
// using a variety of Escape Characters with the let variable
console.log(Speed);
var name = 'AK'
var string = 'This is for ' + name + ' who is my master';
console.log(string)
// concatenations with varibles
var space = "planets "
var galaxy = "In space there are so many "
space+=galaxy
console.log(galaxy=space)//Concatenation with variables
var myArray = [50,53,35, "earth"]
console.log(myArray [3]) // Showing how to fint a piece of data in an array
myArray [3] = "mars"
console.log (myArray)
var shrekTeam = [['TS', 'XW'], ['DM', 'ZZ'], ['O', 'NR'], ['MH', 'BC']]
console.log(shrekTeam[3][1])
/* Showing how to print a specific data in a multi-dimensional arrays i.e.an array within an array. the first data array is the blocks so ['MH', 'BC'], then the second data array being specific, so it is ['BC']. In pprogramming the data always starts with the first number which is 0 and the 1 which will be 2 */
var sport = [2, 'Basketball']
sport.push([3, 'Football'])
console.log(sport) // .push() adds info
var life = [9, 3,5]
life.pop([3])
console.log(life) // .pop() removes info
var char = [["XY", "XG"], ["NB", "FN"], ["TS", "XW"]];
char.unshift(["XY", "QM"]) // Using ".unshift()" will add ["XY", "QM"] to the beginning of the list
console.log(char)
var char = [["XY", "QM"], ["XY", "XG"], ["NB", "FN"], ["TS", "XW"]];
char.shift() // Using ".shift()" will remove ["XY", "QM"] from the beginning of the list  
console.log(char)
var slChar = "Tang San";
console.log("In Soul Land ${slChar} is the best")
let food = false;
// This is an if/else Statement bases on the variable if it's true or false
if (food) {
  console.log("nice");
} else {
  console.log("not nice");
}// Adding Comparison Operators like Greater Than (<), Less Than (>), Less Than or Equal to(=>). Greater Than or Equal to (<=), Equal to (===)
let hungerLevel = 7;
if (hungerLevel >= 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}
// Adding Logical Operators like AND Operator(&&).OR Operator (||), NOT Operator (!)
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');

// Short Circuit Evaluation
let tool = "";
tool = "marker";
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";
console.log(`The ${writingUtensil} is mightier than the sword.`);}
//Short-hand if/else statement using the Ternary Operator (?)
let isLocked = false;
/*if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}*/
isLocked  ? console.log("You will need a key to open the door.")
: console.log("You will not need a key to open the door.");
let isCorrect = true;
/*if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}*/
isCorrect ? console.log("Correct") : console.log("Incorrect.");
let favoritePhrase = "Love That!";
/*if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
} */
favoritePhrase === "Love That!" ?  console.log('I love that!')
:console.log('I don\'t love that!');
// Including else/if, this adds 2 more options
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log ('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!'); 
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because It\'s summer!'); 
} else {
  console.log("Invalid season.");
}
// Using Switch Statement this includes switch, case, break and default
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
    case 'second place':
      console.log('You get the silver medal!');
    break;
    case 'third place':
      console.log('You get the bronze medal!');
    break;
    default:
      console.log('No medal awarded.'); break;
}
