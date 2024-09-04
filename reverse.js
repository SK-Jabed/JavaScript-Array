const numbers = [1, 2, 3, 4, 5, 6, 7];
//              [7, 6, 5, 4, 3, 2, 1];

// console.log(numbers);

// numbers.reverse();

// console.log(numbers);

// const reversed = numbers.reverse();

// console.log(reversed);


const revNumbers = [];

for(const num of numbers) {
  // console.log(num);
  // revNumbers.push(num);
  revNumbers.unshift(num);
}
// console.log(revNumbers);

// for loop 

const reversed_numbers = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reversed_numbers.unshift(num);
}
console.log(reversed_numbers);

// reverse side 

const rev_reversed_numbers = []; 
for (let i = numbers.length -1; i >= 0; i--) {
  const num = numbers[i];
  console.log(num);
  rev_reversed_numbers.push(num);
}
console.log(rev_reversed_numbers);