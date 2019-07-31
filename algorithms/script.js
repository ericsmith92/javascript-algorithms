/*TABLE OF CONTENTS
**1. Remove Adjacent Duplicates From a String
**2. Fizz Buzz
**3. Reverse a String
**4. Draw Triangle
**5. Concatenate array to sentence 
**6. Write a function that returns the value of two number
**7. Seats in theater
**8. Seek and Destroy
**9. Add Two Digits
**10. Return largets adjacent element product
**11. Largest strings in array of strings
**12. Almost strictly increasing sequence
**13. Alphabetic Shift
**14. Check whether the given string is a subsequence of the plaintext alphabet
**15. Odd and even sums returned in two item array 
**16. Are equally strong
**18. Are Similar 
**19. Minimal Moves to Stricly Increasing Sequence 
**20. Is a string a palindrome?
**21. Array Replace
**22. Candies

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
    const rowsBehind = nRows - myRow;
    const colsToLeft = nCols - (myCol -1);
    
    return rowsBehind * colsToLeft;

}

blockedPeople(16, 11, 5, 3);

//8. Seek and Destroy, given two arrays, return values in initial array not found in the second one
//ex. seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]) should return 1
//ex. seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]) should return [1, 5, 1]
//hints:
//filter()
//includes()

function seekAndDestroy(array1, array2){
    return array1.filter(element => !array2.includes(element));
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));

//9. Draw border
//for picture = ['abc',
//               'ded']
//output = ['*****',
//          '*abc*',
//          '*abc*',
//          '*****']
//hints
//concat() - merge arrays
//unshift() - add to begining of an array
//push() - add to end of an array

/*
function drawBorder(array){
    const firstLastRow = '*'.repeat(array[0].length + 2);

    for(let i = 0; i < array.length; i++){
       array[i] = String('*' + array[i] + '*');
    }
    
    array.unshift(firstLastRow)
    array.push(firstLastRow);

    return array;

}

console.log(drawBorder(['abc','ded']));
*/

//using concat() this time 

function drawBorder(array){
    const firstLastRow = '*'.repeat(array[0].length + 2);

    for(let i = 0; i < array.length; i++){
       array[i] = '*'.concat(array[i], '*');
    }
    
    array.unshift(firstLastRow)
    array.push(firstLastRow);

    return array;

}

console.log(drawBorder(['abc','ded']));

//9. Add Two Digits
// Input:
//Single positive 2 digit interger ex. 29
// Guranteed Constraints:
// 10 <= n <= 99
// Output:
//the sum of it's two digits 
// Hints:
//split()
//parseInt()
//toString()
//reduce()

function addTwoDigits(int){
    const arrayFromInt = int.toString().split('');

    return parseInt(arrayFromInt[0]) + parseInt(arrayFromInt[1]);
}

console.log(addTwoDigits(29));

//10. Return largets adjacent element product
//ex. for inputArray = [3, 6, -2, -5, 7, 3]
//output = 21 (7 * 3)
//hints: none, but you'll probably need to iterate through the array

function adjacentElementsProduct(array){
    let largestProduct = array[0] * array[1];

    //start i at 1 (skip 1), since we know array[0] is taken care of
    //it only multiplies to value on right, that's it.
    //use array.length - 1 (skip 1), because on the right most number
    //no number to the right of it to multiply
    for(let i = 1; i < array.length - 1; i++){
        //product is equal to current index * next index 
        const product = array[i] + array[i + 1];

        //if largestProduct less than product, return product
        //else set it back to it's own value
        largestProduct = largestProduct < product ? product: largestProduct;
    }

    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));


//11. Largest strings in array of strings
//For inputArray = ['aba','aa', 'vcd', 'aba'] 
//output should be = ['aba', 'vcd', 'aba']

function allLongestStrings(array){

    //first, we need to find the length of the longest string in array
    //initialize to 0
    let longestLength = 0;
    //empty array for longest strings to be pushed into and later returned
    const longestWords = [];

    //iterate through array, checking each string to see if length is longer than longestLength
    array.forEach(word =>{
        //let's use a ternary, if longestLength is LESS than word.length, set
        //longestLength to word.length, otherwise, return longestLength
        longestLength = longestLength < word.length ? word.length : longestLength;
        //once our last iteration completes, we will have the longest length stored
    });

    //check the lenth of each string against longestLength, if it matches, push into 
    //array containing strings that equal longest length
    array.forEach(word =>{
        if(word.length === longestLength){
            longestWords.push(word);
        }
    });

    return longestWords;
}

console.log(allLongestStrings(['aba','aa', 'vcd', 'aba']));

//12. Almost strictly increasing sequence
//Give a sequence of integers as an array, determine whether it is possible
//to obtan a strictly increasing sequence by removing no more than one element in the array.
//ex. for sequence [1, 3, 2, 1] should return false
//for sequence [1, 3, 2] should return true

function almostIncreasingSequence(array){
    //initialize count to 0
    //if it is larger than one at the end, return false
    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] <= array[i - 1]){
            count ++;
            
            if(sequence[i] <= sequence [i - 2] && sequence[i + 1] <= sequence[i - 1]){
                //we know at this point we've hit our two mistakes
                //so we can simply return false
                //no need for another iteration
                return false;
            }

        }
    }

    return count <= 1;
}


console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));


//13. Alphabetic Shift - Given a string, replace each character by the next one in the 
//English alphabet (z would be replaced by a).
//Ex. input = 'crazy', output = 'dsbaz'
//Hints:
//split();
//indexOf();
//join();

function alphebeticShift(string){
    //split string into array so we can work with characters individually
    const strArray = string.split('');
    //iterate through array, increasing each character by 1
    for(let i = 0; i < strArray.length; i++){
        strArray[i] = String.fromCharCode(strArray[i].charCodeAt(0) + 1) === '{' ? 'a' : String.fromCharCode(strArray[i].charCodeAt(0) + 1);
    }
    
    return strArray.join('');
}

console.log(alphebeticShift('crazy'));

//14. Check whether the given string is a subsequence of the plaintext alphabet
//ex. for s = 'effg', function should return false
//    for s = 'ace', function should return true
//Hints:
//size property
//charCodeAt();

function isSubsequenceAlphabet(string){
    let count = 0;

    //lets loop through, comparing current with next value in array
    for(let i = 0; i <= string.length - 1; i++){

        if(string.charCodeAt(i) >= string.charCodeAt(i + 1)){
            count++;
        } 
    }

    return count > 0 ? false : true;
}

isSubsequenceAlphabet('effg');
isSubsequenceAlphabet('abcd');

//15. Odd and even sums returned in two item array
//Several people are standing in a row and need to be divided into two teams. The first person goes into
//team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
//You are given an array of positive integers - the weights of the people. Return an array of two
//integers, where the first element is the total weight of team 1, and the second element is the total
//weight of team 2 after the division is complete.

//Example:

//For a = [50, 60, 60, 45, 70], output should be alternatingSums(a) = [180, 105]

function alternatingSums(array){
    let evenSum = 0;
    let oddSum = 0;

    array.forEach((element, index) => {
        (index % 2 === 0) ? evenSum += element : oddSum += element;
    });

    return [evenSum, oddSum];
}

alternatingSums([50, 60, 60, 45, 70]);

//16. Are equally strong
//Call two arms equally strong if the heaviest weight they each are able to lift are equal.
//Call two people equall strong if their strongest arms are equally strong (the strongest arm can
//be both the right and the left), and so are their weakest arms.
//Given your and your friend's arms' lifting capabilities, find out if you two are equally strong
//Example:
//For yourLeft = 10, yourRight = 15, friendsLeft = 15, friendsRight = 10, output = true;
//For yourLeft = 15, yourRight = 10, friendLeft = 15, friendsRight = 10, output = true;
//For yourLeft = 15, yourRight = 10, friendsLeft = 15, friendsRight = 9, output = false;


function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight){

    //set strongest and weakest for each person to strongest and equal values,
    //regardless of whether it's left or right
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    
    //compare strongest and weakest values, this way, we CAN be comparing either right to right,
    //and left to left, or we can be comparing right to left left to right
    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}


areEquallyStrong(10, 15, 15, 10);
areEquallyStrong(15, 10, 15, 10);
areEquallyStrong(15, 10, 15, 9);

//18. Are Similar 
//Two array are called similar if one can be obtained from another by swapping at most one pair
//of elements in one of the arrays
//Given two arrays a and b, check whether they are similar.

//Examples:
//for a = [1, 2, 3] and b = [1, 2, 3], areSimilar(a, b) = true
//for a = [1, 2, 3] and b = [2, 1, 3], areSimilar(a, b) = true
//for a = [1, 2, 2] and b = [2, 1, 1], areSimilar(a, b) = false

//Hints:
// toString()

function areSimilar(array1, array2){
    //case one, convert both arrays to string & compare for exact equality

    function swap(arrayToSwap){
        const first = arrayToSwap[0];
        const second = arrayToSwap[1];

        arrayToSwap[0] = second;
        arrayToSwap[1] = first;
         
        return arrayToSwap;
    }

    if(array1.toString() === array2.toString()){
        return true;
    } else if(array1.toString() === array2.reverse().toString()){
        return true;
    } else if(array1.toString() === swap(array2).toString()){
        return true;
    } else {
        return false;
    }
}

areSimilar([1, 2, 3], [1, 2, 3]);
areSimilar([1, 2, 3], [3, 2, 1]);
areSimilar([1, 2, 2], [2, 1, 1]);

//19. Minimal Moves to Stricly Increasing Sequence
//You are given an array of integers. On each move you are allowed to increase exactly one of its 
//elements by one. Find the minimal number of moves required to obtain a strictly increasing sequence
//from the input.

//Example:
//For inputArray = [1, 1, 1] arrayChange(inputArray) = 3
//Where 3 is total number of moves, since index 1 would need to be increased by 1 (one move), and 
//index 2 would need to be increased by 2 (2 moves) for total of 3 moves


function arrayChange(array){
    let count = 0;

    for(let i = 0; i <= array.length; i++){
        if(array[i] >= array[i + 1]){
            const difference = (array[i] + 1) - array[i + 1];
            array[i + 1] = array[i] + 1;

            count += difference;
        }
    }

    return count;
}


arrayChange([1, 1, 1]);

//20. Is a string a palindrome?
//Ex. string = 'madam' isPalindrome(string) = true
//Ex. string = 'Eric' isPalindrome(string) = false


function isPalindrome(string){
    //chain on toUpperCase() method on so to make comparison case insensitive
    //alternatively, leave off so that it is case sensitive comparison
    return string.toUpperCase() === Array.from(string).reverse().join('').toUpperCase();
}

isPalindrome('madam');


//21. Array Replace
//Given array of integeters, replace all the occurences of elemToReplace with substitutionElem
//Ex. For inputArray = [1, 2, 3], 
//elemToReplace = 1 and substitutionElem = 3
//outputArray = [3, 2, 3]

function arrayReplace(elemToReplace, substitutionElem, inputArray){
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === elemToReplace){
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}

console.log(arrayReplace(1, 3, [1, 2, 3]));

//21.1 using foreach

function arrayReplace(elemToReplace, substitutionElem, inputArray){
    inputArray.forEach((element, index) =>{
        if(element === elemToReplace){
            inputArray[index] = substitutionElem;
        }
    });
    return inputArray;
}

console.log(arrayReplace(1, 3, [1, 2, 3]));

//22. Candies
//n children have got m pieces of candy. They want to eat as much candy as they can, but each child must
//eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be 
//eaten by all the children together. Individual pieces of candy cannot by split.
//Ex.
// For n = 3 and m = 10, output should be candies (n, m) = 9
//hints Math.floor()

function candies(children, candies){


    return Math.floor(candies / children) * children;
}























