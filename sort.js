const subjects = ["English", "Math", "Physics", "Chemistry", "Biology", "english", "Economics"];
const sortedSubjects = subjects.sort();
console.log(sortedSubjects);

// sort ==>
  
/**
 * Ascending ===> smaller to larger: [2, 3, 4, 6, 7, 8]
 * Descending ===> larger to smaller: [8, 7, 6, 4, 3, 2]
*/

const numbers = [4, 7, 2, 8, 3, 6];

const numbers_asc = numbers.sort();
console.log(numbers_asc);

const numbers2 = [4, 7, 12, 8, 43, 6, 1];

// const numbers_asc2 = numbers2.sort(); // not working
const numbers_asc2 = [...numbers2].sort(function (a, b) { return a - b});
const numbers_dsc = [...numbers2].sort(function (a, b) { return b - a});

console.log(numbers_asc2);
console.log(numbers_dsc);