/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

let hobbies = ['dancing', 'backpacking', 'jewelry-making', 'motorcycles'];
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log(`Total hobbies: ${hobbies.length}`);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

let colors = ['green', 'teal', 'orange', 'aqua', 'teal', 'pink'];
let tealCount = 0;
for (let i=0; i <= colors.length; i+= 1) {
    if (colors[i] === 'teal') {
        tealCount += 1;
    }
}
console.log(colors);
console.log('Teal was found in colors:', tealCount, 'times');




// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers =[];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i+=1) {
    if(numbers[i]%2 === 0) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumbers.push(numbers[i]);
    }
}
console.log('The original array is: ', numbers);
console.log('The odd numbers are: ', oddNumbers);
console.log('The even numbers are: ', evenNumbers);



/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */


// Example output
// true, false, true, true
// Toggled false, true, false, false

let booleanValues = [false, true, true, false];
let toggled = [];

for (let value of booleanValues) {
    if (value){
        toggled.push(false);
    }
    else{
        toggled.push(true);
    }
}
console.log('The original array is ', booleanValues);
console.log('The toggled array is ', toggled);

/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

let newNumbs = [17, 5, 0, 8, 9, 0, 0, 0];
console.log('Before loop: ', newNumbs);
while (newNumbs.lastIndexOf(0) === newNumbs.length - 1){
    newNumbs.pop();
}

console.log('After loop: ', newNumbs);



/**
 * #6 (STRETCH) Greatest Position Distance
 * --------------------
 * 1. Create a largish array of numbers, including at least two different
 *    numbers that repeat (e.g. 0, 2, 2, 7, 4, 1, 7, 8)
 * 2. Write a loop that finds the greatest position distance between
 *    repeating numbers in your array. In the above example, the 2's have
 *    a distance of 1, while the 7's have a distance of 3, so the
 *    greatest position distance for that array is 3.
 * 3. Output the array and its greatest position distance
 */


// Example output
// 5, 1, 8, 2, 9, 1, 4, 5, 0
// Greatest Position Distance: 7


let largish = [5, 11, 3, 7, 8, 11, 18, 2, 5];
let counters = [];
 
for (let item of largish) {
    if(counters[item] >= 0) {
        counters[item] +=1;
    } else {
        counters[item] = 1
    }
}
console.table(counters);