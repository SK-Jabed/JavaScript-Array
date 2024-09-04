/**
 * Looping Techniques
 * 1. for loop
 * 2. while loop
 * 3. do while loop ==> ignore
 * 4. for of ==> apply in array
 * 5. for in ==> apply in object
 * 
*/

const friends = ["Elon Mask", "Bill Gates", "Mark Zuku", "Waren"];
for(const friend of friends) {
  // console.log(friend);
}

// for(let i = 0; i < 10; i++) {
for(let i = 0; i <= friends.length; i++) {
  console.log(i);
  console.log(friends[i]);
}

const numbers = [5, 10, 15, 20, 25, 30];
for (let i = 0; i <= numbers.length; i++) {
    // console.log(numbers[i]);
}

let i = 0;
while(i < friends.length) {
  console.log(friends[i]);
  i++;
}

let n = 0;
while(n < numbers.length) {
  console.log(numbers[n]);
  n++;
}

