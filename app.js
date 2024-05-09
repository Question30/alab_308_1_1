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
//Average cost of fuel per gallon
const costOfFuel = 3;

//How many gallons of fuel will you need for the entire trip?
//Trip 1 you get 30 miles per gallon
const trip1Gallons = tripTotalMiles / 30;
//Trip 2 you get 28 miles per gallon
const trip2Gallons = tripTotalMiles / 28;
//Trip 3 you get 23 miles per gallon
const trip3Gallons = tripTotalMiles / 23;

//Total cost of fuel for trip
const trip1Cost = trip1Gallons * costOfFuel;
const trip2Cost = trip2Gallons * costOfFuel;
const trip3Cost = trip3Gallons * costOfFuel;

//Will your budget be enough to cover the fuel expense?
const isTrip1InBudget = trip1Cost < fuelBudget;
const isTrip2InBudget = trip2Cost < fuelBudget;
const isTrip3InBudget = trip3Cost < fuelBudget;

//How long will the trip take, in hours?
const trip1Duration = tripTotalMiles / 55;
const trip2Duration = tripTotalMiles / 60;
const trip3Duration = tripTotalMiles / 75;

//Check which trip is cheaper
const trip1 = trip1Cost < trip2Cost && trip1Cost < trip3Cost;
const trip2 = trip2Cost < trip1Cost && trip1Cost < trip3Cost;
const trip3 = trip3Cost < trip1Cost && trip1Cost < trip2Cost;

//Logged all trip durations gallons needed, and if its within the budget
console.log(
  `Trip 1 at 55mph will take ${trip1Duration}hrs, you will need ${trip1Gallons} gallons, this is within the budget: ${isTrip1InBudget}`
);
console.log(
  `Trip 2 at 60mph will take ${trip2Duration}hrs, you will need ${trip2Gallons} gallons, this is within the budget: ${isTrip2InBudget}`
);
console.log(
  `Trip 3 at 75mph will take ${trip3Duration}hrs, you will need ${trip3Gallons} gallons, this is within the budget: ${isTrip3InBudget}`
);

//Log all compared trips
console.log(
  `Which trip is the most efficient? Trip1: ${trip1}, Trip2: ${trip2}, Trip3: ${trip3}`
);
