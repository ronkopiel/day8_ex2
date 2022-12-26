// Write a function that will print out the numbers from 1 to 10 using a while loop.
function countToTen() {
    let counter = 1;
    while(counter<=10) {
        console.log(counter);
        counter++;
    }
}
countToTen();

// Write a function that will print out the even numbers from 2 to 10 using a while loop.
function countEvenToTen() {
    let counter = 2;
    while(counter<=10) {
        console.log(counter);
        counter+=2;
    }
}
countEvenToTen();

// Write a function that will print out the odd numbers from 1 to 10 using a while loop.
function countOddsToTen() {
    let counter = 1;
    while(counter<=10) {
        console.log(counter);
        counter+=2;
    }
}
countOddsToTen();

// Write a function that will print out the numbers from 10 to 1 using a while loop.
function countFromTen() {
    let counter = 10;
    while(counter>=1) {
        console.log(counter);
        counter--;
    }
}
countFromTen();

//Write a function that will prompt the user to enter a number, and then print out the numbers from 1 to the entered number using a while loop.
function countToNumber() {
    let counter = 1;
    let endCount = prompt("enter a number")
    if (endCount <= 0) {
        while(counter >= endCount) {
            console.log(counter);
            counter--;
        }
    }
    else {
        while(counter <= endCount) {
        console.log(counter);
        counter++;
        }
    }    
}
// countToNumber();

// Write a function that will prompt the user to enter a number, and then print out the sum of the numbers from 1 to that number using a while loop.
function sumtoNumber(){
    let counter = 1;
    let sum = 0;
    let endCount = prompt("enter a number")
    if (endCount <= 0) {
        while(counter >= endCount) {
            sum += counter;
            counter--;
        }
        console.log(sum);
    }
    else {
        while(counter <= endCount) {
            sum += counter;
            counter++;
        }
        console.log(sum);
    }    
}
// sumtoNumber ();

// Write a function that will prompt the user to enter a number, and then print out the factorial of that number using a while loop. (The factorial of a number is the product of all the numbers from 1 to that number. For example, the factorial of 5 is 1 * 2 * 3 * 4 * 5 = 120.)
function factorialToIndex() {
    let counter = 1;
    let factorial = 1;
    let endCount = prompt("enter a number")
    while(counter <= endCount) {
        factorial *= counter;
        counter++;
    }
    console.log(factorial);    
}
// factorialToIndex();

// Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive value greater than 5000 but less than 30000.
function fuelLevel() {
    let startingFuelLevel = prompt("enter starting fuel level");
    while (startingFuelLevel <= 5000 || startingFuelLevel >= 30000) {
        startingFuelLevel = prompt("enter starting fuel level");
    }
}
fuelLevel();

