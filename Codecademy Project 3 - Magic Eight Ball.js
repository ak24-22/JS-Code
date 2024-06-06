// ========================================================|
// Project 3 - Magic Eight Ball				|
// --------------------------------------------------------|
// Description: Building A Magic Eight Ball		|
// ========================================================|



let userName = "AK";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello");
const userQuestion = "are we going to the park?";
console.log(`${userName} asked, ` + userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = "";

// Using If/Else Statements

if (randomNumber === 0) {
  eightBall = "it is certain";
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 3) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 4) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 5) {
  eightBall = "Do not count on it";
} else if (randomNumber === 6) {
  eightBall = "My sources say no";
} else if (randomNumber === 7) {
  eightBall = "Outlook not so good";
} else if (randomNumber === 8) {
  eightBall = "Signs point to yes";
}

console.log(`The Magic Eight Ball says, ${eightBall}.`);

// Using Switch Statement

switch (randomNumber) {
  case 0:
    eightBall = "it is certain";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "It is decidedly so";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  case 8:
    eightBall = "Signs point to yes";
    break;
}

console.log(`The Magic Eight Ball says, ${eightBall}.`);
