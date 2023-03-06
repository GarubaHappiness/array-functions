// In JavaScript, array methods can be divided into two categories: mutating and non-mutating.

// Mutating array methods modify the original array, whereas non-mutating methods return a new array without modifying the original array.

// Mutating Array Methods:

// push() - Adds one or more elements to the end of an array.
// pop() - Removes the last element from an array.
// shift() - Removes the first element from an array.
// unshift() - Adds one or more elements to the beginning of an array.
// splice() - Adds or removes elements from an array at a specific index.
// Non-Mutating Array Methods:

// slice() - Returns a new array that contains a portion of an existing array.
// concat() - Joins two or more arrays and returns a new array.
// filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// map() - Creates a new array with the results of calling a provided function on every element in the calling array.
// reduce() - Executes a provided function for each value of the array and returns a single value.

// =====================================================================//
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
let index = languages.indexOf('PHP');
languages.splice(index, 1, 'Go', 'Rust');

// ===============================================//
// The value of fruit after calling the changeFruit function will be ['apple', 'mango', 'orange'].

// ====================================================//
function max(arr) {
    let maxVal = arr[0]; 
    for (let i = 1; i < arr.length; i++) {  
      if (arr[i] > maxVal) {  
        maxVal = arr[i];
      }
    }
    return maxVal;  // Return the maximum value
  }
  
//==================================================//
function valTimesIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * i);
    }
    return result;
  }
  