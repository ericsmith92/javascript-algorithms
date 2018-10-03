/*TABLE OF CONTENTS
**1. Remove Adjacent Duplicates From a String
**2. Fizz Buzz
**3. Reverse a String
**4. Draw Triangle
**5. Concatenate array to sentence 
**6. Write a function that returns the value of two number
**7. Seats in theater

*/

//1. Remove Adjacent Duplicates From a String (currently only works if string is only composed of adjacent duplicates)

function removeDuplicates(string){
    //take input string and turn into array
    const stringArr = Array.from(string);
    //we need to keep track of previous char, set to null for now
    let prevChar = null;
    //an array to hold only one instance of a character that appears twice
    let newArr = [];
    //count initialized to zero, if it is > 0, we know at least one duplicate has been found
    let count = 0;
    //loop through original array from string
    for(let i = 0; i < stringArr.length; i++){
        //store current index as current char
        let currentChar = stringArr[i];
        //if current char is equal to previous, push current index into new array
        if(currentChar === prevChar){
            newArr.push(stringArr[i]);
            count += 1;
        }
        //assign currentChar as prevChar at end of loop
        prevChar = currentChar;
    }
    //figure out which array needs to be returned
    return (count >= 1 ? newArr : stringArr);
}

//2.Fizz Buzz, print numbers from 1 - 100
//For numbers that are divisible by 3, write 'Fizz' in place of number
//For numbers that are divisibible by 5, write 'Buzz' in place of number
//For numbers that are divisible by 3 AND 5, write 'FizzBuzz' in place

for(let i = 1; i <= 100; i ++){
    //check BOTH first, otherwise other condition will always be satisfied
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }else if(i % 3 == 0){
        console.log('Fizz');
    }else if (i % 5 == 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

//3.Write a function that takes in a string and returns the reversed string

function revserseString(string){
    return Array.from(string).reverse().join('');
}

//4. Print out a Triangle to the console or screen like the one below
//*
//**
//***
//****

function drawTriangle(){
    const star = '*'; 
    for(let i = 1; i <= 4; i ++){
        console.log(star.repeat(i));
    }
}


//5. Concatenate array to sentence 

function concatenateArrayToSentence(array){
    let sentence = '';

    array.forEach(element => {
        if(array.indexOf(element) >= array.length -1){
            sentence += element + '.';
        }else{
            sentence += element + ' ';
        }
    });

    return sentence;
}

//6. Write a function that returns the value of two number

function addTwoNumbers(a, b){
    return a + b;
}

//6.1 Write a function that returns sum of all numbers, regardless of # of params
//lets use some new syntax, the rest parameter syntax allows as to pass an indefinite number of arguments to the function
function addAllNumbers(...theArgs){
    //use reduce to reduce our arguments to a single value
    //this value also executes a provided function for each value of the array (from left-to-right)
    //soo... for each of our arguments (numbers to sum) we add previous value to current value
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

//now let's try the above with a foreach loop, just for fun

function addAllNumbersWithForEach(...theArgs){
    //initialize total to 0
    let total = 0;

    //forEach through args, adding each to total
    theArgs.forEach((element) => { 
        total += element;
    });

    return total;
}

//7. Seats in theater. How many people will you disturb when you go to the bathroom?
//11 rows, 16 columns, you're sitting in seat col 5, row 3
//hint: 4 parameters, total col, total rows, col and row (seat) you're sitting in

function blockedPeople(nCols, nRows, myCol, myRow){
    let rowsBehind = nRows - myRow;
    let colsToLeft = nCols - (myCol -1);
    
    return rowsBehind * colsToLeft;

}

blockedPeople(16, 11, 5, 3);
