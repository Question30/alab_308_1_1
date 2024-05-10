//Part 1: Math Problems

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

console.log(`Is the sum of all four numbers 50? ${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

console.log(`Are there at least 2 even numbers? ${isTwoOdd} `);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

console.log(`Are any numbers over 25? ${isOver25}`);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(`Are all numbers under 25? ${isUnder25}`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`Are all numbers unique? ${isUnique}`);
// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(`Are the four numbers valid and meet the criteria? ${isValid}`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

//Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivisibleByFive =
  n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`Are all four numbers divisible by 5? : ${isDivisibleByFive}`);

//Check if the first number is larger than the last. Cache the result in a variable.
const isFirstGreaterThanLastNum = n1 > n4;
console.log(
  `Is the first number greater than the last number? : ${isFirstGreaterThanLastNum}`
);

/**
 * Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
 */

const chainResult = ((n2 - n1) * n3) % n4;
console.log(
  `The Result of ((${n2} - ${n1}) * ${n3}) % ${n4} is : ${chainResult}`
);

//Part Two

const tripTotalMiles = 1500;
const fuelBudget = 175;
const costOfFuel = 3;

//Function
function calcTrip(tripNum, milesPerGallon, milesPerHour) {
  //Cost of Fuel for the trip
  const costOfTrip = (tripTotalMiles / milesPerGallon) * costOfFuel;
  //Is it in the budget
  const isTripInBudget = costOfTrip < fuelBudget;
  //Duration of the trip
  const duration = tripTotalMiles / milesPerHour;

  console.log(
    `Trip ${tripNum} at ${milesPerHour} will take ${duration}hrs. Is this trip within the budget? : ${isTripInBudget}`
  );

  return costOfTrip;
}

calcTrip(1, 30, 55);
calcTrip(2, 28, 60);
calcTrip(3, 23, 75);

function mostEfficent(num1, num2, num3) {
  let answer = num1;

  if (num2 < answer) {
    answer = num2;
  }

  if (num3 < answer) {
    answer = num3;
  }
  return answer;
}

console.log(
  `the most efficient trip will cost ${mostEfficent(
    calcTrip(1, 30, 55),
    calcTrip(2, 28, 60),
    calcTrip(3, 23, 75)
  )} and is Trip number one`
);
