// ========================================================|
// Project 4 - Race Day					|
// --------------------------------------------------------|
// Description:Race times to racers under and over 18 c	|
// ========================================================|


let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`${raceNumber} will star the reca at 9:30`);a
} else if (!early && age > 18) {
  console.log(`${raceNumber} will star the reca at 11:00`);
} else if (age < 18) {
  console.log(`${raceNumber} will star the reca at 12:30`);
} else {
  console.log("Other runners go to reg desk");
}
