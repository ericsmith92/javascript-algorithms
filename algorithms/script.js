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
**23. Chunky Monkey (split an array, return two dimensional array)
**24. Circle Of Numbers
**25. Convert String
**26. Domain Type
**27. Max Multiple 
**28. Missing Letters
**29. Pages numbering with ink
**30. Sum All Prime Numbers
**31. Sort by length
**32. Stolen Lunch
**33. Century From Year
**34. Character Parity
**35. Check Palindrome
**36. Chess Board Cell Color
**37. Compare Integers
**38. Compose Ranges (return to this problem)
**39. Confirm Ending
**40. Contains Close Nums
**41. Contains Duplicates
**42. Celcius to Fahrenheit
**43. Deposit Profit
**44. Different Symbols Naive
**45. Digit Degree
**46. Election Winners
**47. Enclose in Brackets
**48. Even Digits Only
**49. Extract Each Kth element
**50. Extract Matrix Column
**51. Factorialize a Number
**52. Fancy Ride 
**53. Fare Estimator
**54. Find Closest Pair (return to this problem)
**55. Find Email Domain
**56. First Digit
**57. First Duplicate
**58. First Not Repeating Character
**59. Flatten Array (with recursion :) Yay!)
**60. Growing Plant
**61. House Number Sum
**62. HTML End Tag By Start Tag
**63. Incorrect Password Attempts
**64. Integer To String of Fixed Width 
**65. Internal Backups
**66. Is Lucky
**67. Is Tandem Repeat
**68. Largest of Four
**69. Largest Number
**70. Proper Noun Correction
**71. Rating Threshold
**72. Reflect String
**73. Sort by Height
**74. Array Conversion
**75. Sum of Two
**76. Task Type
**77. Bishop and Pawn
**78. Common Character Count
**79. Company Bot Strategy
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

candies(3, 10);

//23. Chunky Monkey
//Write a function that splits an array (first arg) into groups the length of the size (second arg)
//and returns a two dimensional array
//Ex. chunkyMonkey(['a', 'b', 'c', 'd'], 2) returns [['a', 'b'], ['c', 'd']]
//chunkyMonkey([0, 1, 2, 3, 4, 5], 4) returns [[0, 1, 2, 3], [4, 5]]
//hints slice

function chunkyMonkey(array, n){

    const firstArray = array.slice(0, n);
    const secondArray = array.slice(n);

    return [firstArray, secondArray];
}

chunkyMonkey(['a', 'b', 'c', 'd'], 2);
chunkyMonkey([0, 1, 2, 3, 4, 5], 4);

//24. Circle Of Numbers
//Consider the integer numbers 0 to n - 1 written down along a circle in such a way that the distance
//between any two neighbouring numbers is equal (like the face of a clock) ***not that 0 and n-1 are neibouring, too ***
//Given n and firstNumber, find the number which is written in the radically opposite position to first number (like 12 and 6 on a clock)
//Ex.
//For n = 10 and firstNumber = 2, the output of circleOfNumbers(n, firstNumber) = 7
//Hints:
//push()

function circleOfNumbers(n, firstNumber){
    const numArray = [];
    const halfWay = n / 2;

    for (let i = 0; i < n; i++){
        numArray.push(i);
    }

    return firstNumber < halfWay ?  numArray[firstNumber + halfWay] :  numArray[firstNumber - halfWay];
}

circleOfNumbers(10, 2);
circleOfNumbers(10, 3);


//25. Convert String
//For s = 'ceoydefthf5iyg5h5yts' and t = 'codefights', output convertString(s, t) = true;
//For s = 'addbyca' and t = 'abcd', output convertString(s, t) = false;
//for now, lets assume s is always bigger(longer) than t
//Hints
//concat()
//split()

const s = 'ceoydefthf5iyg5h5yts'; 
const t = 'codefights';

function convertString(s, t){
    //first, let's turn our strings into arrays
    const sArray = s.split('');
    let tIndex = 0;
    let word = '';

    for(let i = 0; i < sArray.length; i++){
        if(sArray[i] === t[tIndex]){
            word += sArray[i];
            tIndex++;
            if(word === t){
                return true;
            }
        }
    }
    
    return false;
}

convertString(s, t);

//26. Domain Type
//for domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"]
//domainType(domains) = ["organization", "commercial", "network", "information"]

const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];

function domainType(domains){
    const domainTypes = [];

    domains.forEach((element) => {
        const topLevel = element.split('.')[element.split('.').length - 1];

        switch(topLevel) {
            case 'org':
              domainTypes.push('organization');
              break;
            case 'com':
                domainTypes.push('commercial');
              break;
            case 'net':
                domainTypes.push('network');
              break;
            case 'info':
                domainTypes.push('information');
            break;
            default:
               domainTypes.push('unknown');
          }
    });

    return domainTypes;
}

domainType(domains);

//27. Max Multiple
//Given a divisor and a bound, find the largest integer N such that:
//N is divisible by divisor
//N is less than or equal to bound
//N is greater than 0
//It is Guranteed that such a number exists
//Ex.
//For divisor = 3 and bound = 10, maxMultiple(divisor, bound) = 9

function maxMultiple(divisor, bound){
    for(let i = bound; i > 0; i--){
        if(i % divisor === 0 && i <= bound){
            return i;
        }
    } 
}

maxMultiple(3, 10);

//28. Missing Letters
//Find the missing letter in the passed letter range and return it
//If all letters are present in the range, return undefined
//Ex.
//missingLetters('abce') should return 'd'
//missingLetters('abcdefghjklmno') should return 'i'
//missingLetters('abcdefghijklmnopqrstuvwxyz') should return undefined
//Hints
//split()

function missingLetters(string){
    const stringArray = string.split('');
    let previousCharCode = '';    

    for(let i = 0; i < stringArray.length; i++){
        if(i !== 0){
            if(stringArray[i].charCodeAt(0) !== previousCharCode + 1){
                return String.fromCharCode(previousCharCode + 1);
            }
        }
        
        previousCharCode = stringArray[i].charCodeAt(0);
    }   
}

missingLetters('abce');

//29. Pages numbering with ink
/*
You work in a company that prints and publishes books. You are responsible for designing the page
numbering mechanism in the printer. You know how many digits a printer can print with the leftover
ink. Now you want to write a function to determine what the last page of the book is that you can 
number given the current page and numberOfDigits left. A page is considered numbered if it has the
full number printed on it (e.g. if we are working with page 102 but have ink only for two digits
then this page will no be considered numbered).

It's guranteed that you can number the current page, and that you can't number the last one in the book.

Ex.
For current = 1 and numberOfDigits = 5, output should be pagesNumberingWIthInk(current, numberOfDigits) = 5
//hints
toString()
*/

function pagesNumberingWithInk(current, numberOfDigits){
    while(numberOfDigits > 0){
        numberOfDigits = numberOfDigits - current.toString().length;
        let next = current + 1;
        if(numberOfDigits >= next.toString().length){
            current++;
        }
    }
    return current;
}

pagesNumberingWithInk(1, 5);

//30. Sum All Prime Numbers
/*
Sum all prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For
example, 2 is a prime number because it's only divisible by one and two.

The provider number may not be a prime

Ex.

sumAllPrimes(10) should return 17
sumAllPrimes(977) should return 73156

Hints
push()
reduce()
1 is not a prime number
*/

function isPrime (num) {
    if (num <= 1) {
      return true
    } else if (num <= 3) {
      return true
    } else if (num % 2 === 0 || num % 3 === 0) {
      return false
    }
   
    let i = 5
    while (i*i <= num) {
      if (num % i === 0 || num % (i+2) === 0) {
        return false
      }
      i += 6
    }

    return true
}

function sumAllPrimes(n){
    const numArray = [];
    const primeNumArray = [];

    for(let i = 2; i <= n; i++){
        numArray.push(i);
    }

    numArray.forEach(num => {
        if(isPrime(num)){
            primeNumArray.push(num);
        }
    });

   return primeNumArray.reduce( (previous, current) => previous + current);

}

sumAllPrimes(10);
sumAllPrimes(977);

//31. Sort by length
/*
Given an array of strings, sort them in the order of increasing lengths. If two strings have the same
length, their relative order must be the same as in the initial array

Ex.
inputArray = ['abc', '', 'aaa', 'a', 'zz']

sortByLength(inputArray) = ['', 'a', 'zz', 'abc', 'aaa']

Hints:
sort()
*/

function sortByLength(array){
    return array.sort((a, b) => {
        if(a.length < b.length){
            return -1;
        }
        if(a.length > b.length){
            return 1;
        }
    });
}

sortByLength(['abc', '', 'aaa', 'a', 'zz']);

//32. Stolen Lunch
/*
There's a bully at school that steals your nephews lunch and locks it away in a locker. He leaves a 
coded message. Your nephew gave you one of the notes to decipher, and you decide to write a function
to help him decode them in the future. It looks like all the digits and replaced with letters, and vice 
versa. Digit 0 is replace with 'a', 1 is replaced with 'b', and so on, with digit 9 replaced by 'j'

Ex.
note = 'you'll n4v4r 6u4ss 8t: cdja'
stolenLunch(note) = 'you'll never guess it: 2390

Hints
split()
hasOwnProperty()
*/

function stolenLunch(string){
    const dictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    const sentence = string.split(':')[0];
    const digits = string.split(':')[1].trim();

    const sentenceArray = sentence.split('').map( letter => {
        
        if(Number.isNaN(parseInt(letter))){
            return letter = letter;
        }else{
            return letter = dictionary[parseInt(letter)];
        } 
    });

    const digitsArray = digits.split('').map( letter => dictionary.indexOf(letter) );

    return sentenceArray.join('') + ': ' + digitsArray.join('');
}

stolenLunch("you'll n4v4r 6u4ss 8t: cdja");

//33. Century From Year
/*
Given a year, return the century it is in. The first century spans from the year 1 up to ad including
the year 100, the second - from year 101 up to and including the year 200, etc.

Ex.
For year = 1905, centuryFromYear(year) = 20
For year = 1700, centuryFromYear(year) = 17

Hints
Math.floor()
*/
/*
function centuryFromYear(year){
    //handle 1 - 100
    if(year <= 100){
        return 1;
    }

    if(year % 100 === 0){
        return year / 100;
    }else{
        return year.toString().length > 3 ? parseInt(year.toString().substring(0, 2)) + 1 : parseInt(year.toString().charAt(0)) + 1;
    }
}

centuryFromYear(101);
*/

function centuryFromYear(year){
   const century = year / 100;

   if( year % 100 === 0){
       return century;
   }

   return Math.floor(century) + 1;
}

centuryFromYear(99);

//34. Character Parity
/*
For symbol = '5', characterParity(symbol) === 'odd'
For symbol = '8', characterParity(symbol) === 'even'
For symbol = 'q', characterParity(symbol) === 'not a digit'

Hints:
isNaN()
parseInt()
*/

function characterParity(symbol){
    if(isNaN(parseInt(symbol))){
        return 'not a digit'
    }else{
        return parseInt(symbol) % 2 === 0 ? 'even' : 'odd';
    }
}

characterParity('5');
characterParity('8');
characterParity('q');

//using double ternary 
function characterParity(symbol){
  const result = parseInt(symbol);

  return isNaN(result) ? 'not a digit' : result % 2 === 0 ? 'even' : 'odd';
}

characterParity('5');
characterParity('8');
characterParity('q');

//35. Check Palindrome
/* 
Given the string, check if palindrome
We've already done this before and this is super easy, but let's do it again

Ex.
For inputString = 'aabaa' checkPalindrome(inputString) = true
For inputString = 'abac' checkPalindrome(inputString) = false
For inputString = 'a' checkPalindrome(inputString) = true

Hints
toLowerCase()
split()
reverse()
join()
*/

function checkPalindrome(inputString){
    return inputString.toLowerCase() === inputString.split('').reverse().join('').toLowerCase();
}

checkPalindrome('aabaa');

//36. Chess Board Cell Color
/*
Give two cells on the standard chess board, determine whether they have the same color or not
Ex.
For cell1 = 'A1' and cell2 = 'C3', chessBoardCellColor(cell1, cell2) = true
For cell1 = 'A1' and cell2 = 'H3', chessBoardCellColor(cell1, cell2) = false
*/

function determineCellColor(array){
    if(array[0] % 2 === 0 && array[1] % 2 === 0){
        return 'black';
    }else if (array[0] % 2 !== 0 && array[1] % 2 !== 0){
        return 'black';
    }else{
        return 'white';
    }
}

function chessBoardCellColor(cell1, cell2){
    const colXValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    const cellArray1 = cell1.split('');
    const cellArray2 = cell2.split('');

    cellArray1[0] = colXValues.indexOf(cellArray1[0]) + 1;
    cellArray2[0] = colXValues.indexOf(cellArray2[0]) + 1;

    cellArray1[1] = parseInt(cellArray1[1]);
    cellArray2[1] =  parseInt(cellArray2[1]);

    return determineCellColor(cellArray1) === determineCellColor(cellArray2);
}

chessBoardCellColor('A1', 'C3');

//better solution

function chessBoardCellColor(cell1, cell2){
    const board = {
        'A' : 1,
        'B' : 2,
        'C' : 3,
        'D' : 4,
        'E' : 5,
        'F' : 6,
        'G' : 7,
        'H' : 8,
    };
}

chessBoardCellColor('A1', 'C3');

//37. Compare Integers
/* 
Compare two integers given as strings

For a = '12' and b = '13', compareIntegers(a, b) = 'less'
For a = '875' and b = '799', compareIntegers(a, b) = 'greater'
For a = '1000' and b = '1000', compareIntegers(a, b) = 'equal'
*/

function compareIntegers(a, b){
    const aInt = parseInt(a);
    const bInt = parseInt(b);

    if(a < b){
        return 'less';
    }else if(a > b){
        return 'greater';
    }else{
        return 'equal';
    }
}

compareIntegers('12', '13');
compareIntegers('875', '799');
compareIntegers('1000', '1000');

//38. Compose Ranges
/*
Give a sorted integer array that does not contain any duplicates, return a summary of the number
ranges it contains

Ex.
For nums = [-1, 0 , 1, 2, 6, 7, 9], composeRanges(nums) = ["-1->2", "6->7", "9"]

Hints
push()
*/

/*
Thoughts:
-consider using map and storing the previous value of the element for comparison
-alternatively, consider using forEach, pushing into a new array, and freely writing logic
*/

function composeRanges(nums){
    let prev;
    let firstInRange;
    const ranges = [];

    nums.forEach((element, index) => { 
        if(index === 0){
            console.log('first condition fired');
            prev = element;
            firstInRange = element;
        }else if(element === prev + 1){
            console.log('second condition fired');
            prev = element;
        }else{
            console.log('catch all condition fired');
            /*if(index === nums.length -1 && element !== prev + 1){
                ranges.push(`${element}`);
            }else{*/
                ranges.push(`${firstInRange}->${prev}`);
                firstInRange = element;
           /* } */
        }

        prev = element;

        console.log(prev);
        console.log(firstInRange);
    });

    console.log(ranges);
}

composeRanges([-1, 0 , 1, 2, 6, 7, 9]); 

//**39. Confirm Ending
/*
Check if a string (first argument, str) ends with a given target string (second argument, target)
This challenge can be solved with .endsWith(), but for this challenge, use one of the JavaScript 
substring methods intead

Ex.
confirmEnding("Abstraction", "action") returns true;
confirmEnding("Open sesame", "pen") returns false;

Hints
substring()
*/

function confirmEnding(str, target){
    const strLength = str.length;
    const targetLength = target.length;

    return str.substring(strLength - targetLength, strLength) === target;

}

confirmEnding("Abstraction", "action");

//40. Contains Close Nums
/*
for nums = [0, 1, 2, 3, 5, 2] and k = 2
containsCloseNums(nums, k) = false
The absolute difference between the position of the two 2s is 3, which is more than K

Hints
Math.abs()
*/

function containsCloseNums(nums, k){
    const sortedNums = [...nums].sort();
    let prev;
    let duplicate;
    let indexes= [];

    for(let i = 0; i < sortedNums.length; i++){
        if(prev !== undefined){
            if(prev === sortedNums[i]){
                duplicate = sortedNums[i];
            }
        }
        prev = sortedNums[i];
    }

    if(duplicate !== undefined){
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === duplicate){
                indexes.push(i);
            }
        }
    }

    return Math.abs(indexes[0] - indexes[1]) <= k;
}

containsCloseNums([0, 1, 2, 3, 5, 2], 2);
containsCloseNums([0, 1, 2, 3, 5, 2], 3);

//forloop inside forloop solution

function containsCloseNums(nums, k){
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
                if(nums[i] === nums[j]){
                    if(Math.abs(i - j) <= k){
                        return true;
                    }
                }
            }
        }
    }

    return false;
}

containsCloseNums([0, 1, 2, 3, 5, 2], 2);
containsCloseNums([0, 1, 2, 3, 5, 2], 3);

//41. Contains Duplicates
/*
Give an array of integers, write a function that determines whether the array contains any duplicates
Your function should return true if any element appears at least twice in the array, and it should
return false if every element is distinct

Ex.
For a = [1, 2, 3, 1] containsDuplicates(a) = true;
For a = [3, 1] containsDuplicates(a) = false;

Hints
sort()
*/

function containsDuplicates(array){
    array.sort();
    let prev;

    for(let i = 0; i < array.length; i++){
        if(prev !== undefined){
            if(prev === array[i]){
                return true;
            }
        }

        prev = array[i];
    }
    
    return false;
}

containsDuplicates([1, 2, 3, 1]);
containsDuplicates([1, 2, 3, 4, 5, 6, 7, 8]);

//I'm an idiot and could have got the next value in the array this way below

function containsDuplicates(array){
    array.sort();

    for(let i = 0; i < array.length; i++){
        if(array[i] === array[i + 1]){
            return true;
        }
    }
    
    return false;
}

containsDuplicates([1, 2, 3, 1]);
containsDuplicates([1, 2, 3, 4, 5, 6, 7, 8]);

//42. Celcius to Fahrenheit
/*
-The algorithm to convert from Celcius to Fahrenheight is the temperature in 
Celcius x 9/5, plus 32
*/

function celciusToFahrenheit(celciusTemp){
    return celciusTemp * (9/5) + 32;
}

celciusToFahrenheit(-30);

//43. Deposit Profit
/*
You have deposited a specific amount of dollars into your bank account. Each year your balance
incerases at the same growth rate. Find out how long it would take for your balance to pass a
specific threshold with the assumption that you don't make any additional deposits.

Ex.
For deposit = 100, rate = 20, and threshold = 170, depositProfit(deposit, rate, threshold) = 3
*/

function depositProfit(deposit, rate, threshold){
    let count = 0;
    while(deposit < threshold){
        deposit = deposit * (rate / 100 + 1);
        count++;
    }
    return count;
}

depositProfit(100, 20, 170);

//44. Different Symbols Naive
/* 
Give a string, find the number of different chracters in it

Ex.
for s = 'cabca', output should be differentSymbolsNaive(s) = 3

There are different characters a, b, and c

Hints
includes()
split()
push()
*/

function differentSymbolsNaive(str){
    const strArray = str.split('');
    strArray.sort();
    const uniqueCharsArray = [];

    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] !== strArray[i + 1]){
            uniqueCharsArray.push(strArray[i]);
        }
    }

    return uniqueCharsArray.length;
}

differentSymbolsNaive('cabca');
differentSymbolsNaive('abhacopberh');

//Alternatively, without relying on sort we could...

function differentSymbolsNaive(str){
    const strArray = str.split('');
    const uniqueCharsArray = [];

    strArray.forEach( char => {
        if(!uniqueCharsArray.includes(char)){
            uniqueCharsArray.push(char);
        }
    });

    return uniqueCharsArray.length;
}

differentSymbolsNaive('cabca');

//Alternatively, using an object

/*basically, keys have to be unique in an object, so when we come accross a duplicate it is just
reassigning an arbitrary value of one to the key, not duplicating it or adding another index like
and array
*/
function differentSymbolsNaive(str){
    const strArray = str.split('');
    const uniqueCharsObj = {};

    strArray.forEach( char => {
        uniqueCharsObj[char] = 1;
    });

    return Object.keys(uniqueCharsObj).length;
}

differentSymbolsNaive('cabca');

//Lastly, and most favorably, we could make use of Sets

//45. Digit Degree
/*
Let's define digit degree of some positive integer as the number of times we need to replace 
this number with the sum of its digits until we get to a one digit number

Given an integer, find its digit degree

For n = 5, digitDegree(n) = 0; (already 1 digit number)
For n = 100, digitDegree(n) = 1; (1 + 0 + 0 = 1)
For n = 91. digitDegree(n) = 2; (9 + 1 = 0 -> 1 + 0 = 1)

Hints
toString()
parseInt()
split()
reduce()
*/

function reducer(arr){
    return arr.reduce( (previous, current) => {
        return parseInt(previous) + parseInt(current);
    });
}

function digitDegree(n){
    if(n <= 9){
        return 0;
    }else{
        let count = 0;
        while(n.toString().split('').length > 1){
            const numArray = n.toString().split('');
            n = reducer(numArray);

            count++;
        }
        return count;
    }
}

digitDegree(5);
digitDegree(100);
digitDegree(91);

//46. Election Winners
/*
Given an array of the numbers of votes given to reach of the candidates so far, and an integer
k equal to the number of voters who haven't cast their vote yet, find the number of candidates who 
still have a chance to win the election

The winner of the election must secure strictly more votes than any other candidate, if two or
more candidates receive the same (maximum) number of votes, assume there is no winner at all.

Ex.
For votes = [2, 3, 5, 2] and k = 3, electionWinners(votes, k) = 2
*** only the candidate with 3 votes and candidate with 5 votes can win ***

Hints
sort()
Math.max()
*/

function electionWinners(votes, k){
    votes.sort();
    let count = 0;

    const mostVotes = Math.max(...votes);

    votes.forEach( element => {
        if( element + k > mostVotes){
            count++;
        }
    });

    return count;
}

electionWinners([2, 3, 5, 2], 3);

//47. Enclose in Brackets
/*
Given a string, enclose it in round brackets

Ex
inputString = 'abacaba'
encloseInBrackets(inputString) = '(abacaba)'
*/

function encloseInBrackets(inputString){
    const inputArray = inputString.split('');

    inputArray.unshift('(');
    inputArray.push(')');
    return inputArray.join('');
}

encloseInBrackets('abacaba');

//OR if I wasn't overthinking it

function encloseInBrackets(inputString){
   return `(${inputString})`;
}

encloseInBrackets('abacaba');

//48. Even Digits Only
/*
For n = 248622, evenDigitsOnly(n) = true;
For n = 642386, evenDigitsOnly(n) = false;

Hints
toString()
split()
every()
parseInt()
*/

function isEven(n){
    return parseInt(n) % 2 === 0;
}

function evenDigitsOnly(n){
    const numArray = n.toString().split('');

    return numArray.every(isEven);
}

evenDigitsOnly(248622);
evenDigitsOnly(642386);

// using an implicit return instead
function evenDigitsOnly(n){
    const numArray = n.toString().split('');

    return numArray.every( num => parseInt(num) % 2 === 0);
}

evenDigitsOnly(248622);
evenDigitsOnly(642386);

//49. Extract Each Kth element
/*
Given an array of integers, remove each kth (multiples of k) from it.

Ex.
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], & k = 3
extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10] (all multiples of 3 have been removed)

Hints
filter()
*/

function extractEachKth(inputArray, k){
    return inputArray.filter( element => element % k !== 0 );
}

extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

//50. Extract Matrix Column
/*
For matrix = [[1, 1, 1, 2],[0, 5, 0, 4],[2, 1, 3, 6]];
and column = 2
extractMatrixColumn(matrix, column) = [1, 0, 3]

Hints
push()
*/

function extractMatrixColumn(matrix, column){
    const matrixCol = [];

    matrix.forEach( element => {
        matrixCol.push(element[column]);
    });

    return matrixCol;
}

extractMatrixColumn([[1, 1, 1, 2],[0, 5, 0, 4],[2, 1, 3, 6]], 2);

//51. Factorialize a Number
/*
Return the factorial of the provided integer

If the integer is represented with the letter n, a factorial is the product of all positive 
integers less than or equal to n.

Factorials are often represented with the shortand notation n!

For Ex. 
5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function

factorializeANumber(5) returns 120;
factorializeANumber(10) returns 3628800;
*/

function factorializeANumber(n){
    const factorArray = [];
    for(let i = 1; i <= n; i++){
        factorArray.push(i);
    }

    return factorArray.reduce( (prev, current) => prev * current );
}

factorializeANumber(5);
factorializeANumber(10);

//or without using arrays and likely faster

function factorializeANumber(n){
    let total = 1;
    for(let i = 1; i <= n; i++){
        total *= i;
    }

    return total;
}

factorializeANumber(5);
factorializeANumber(10);

//52. Fancy Ride 
/*
Being a new Uber user, you have $20 off your first ride. You want to make the most out of it and drive in
the fanciest car you can afford, without spending any out-of-pocket money. There are 5 , options, from the 
least to most expensive: "UberX", "UberXL", "UberPlus", "UberBlack", and "UberSuv"

You know the length (l) of your ride in miles and how much one mile costs for each car. Find the best car
you can afford.

Ex.
For l = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], fancyRide(l, fares) = "UberXL"

The cost of the ride in this car would be $15, which you can afford, but "UberPlus" would cost $21, 
which is too much
*/

function fancyRide(l, fares){
    const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSuv"];

    for(let i = 0; i < fares.length; i++){
        if( l * fares[i] > 20){
            return rides[ i - 1];
        }
    }
}

fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]);

//53. Fare Estimator
/*
Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it.
It works by passing approximated ride distance and ride time through this formula:

(Cost per minute) * (ride time) + (Cost per mile) * (ride distance)

Where cost per minute and Cost per mile depend on the car type.

You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per mile 
for each car type, as well as ride distance and ride time, return the fare estimates for all car types.

Ex.
For ride_time = 30, ride_distance = 7, cost_per_minute = [0.2, 0.35, 0.4, 0.45] 
and 
cost_per_mile = [1.1, 1.8, 2.3, 3.5] the output should be:

fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38];

Since:

30 * 0.2 + 7 * 1.1 = 6 + 7.7 = 13.7
30 * 0.35 + 7 * 1.8 = 10.5 + 12.6 = 23.1
30 * 0.4 + 7 * 2.3 = 12 + 16.1 = 28.1
30 * 0.45 + 7 * 3.5 = 13.5 + 24.5 = 38
Hint 
push()

*/


function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile){
    const costs = [];

    for(let i = 0; i < cost_per_minute.length; i++){
        costs.push((cost_per_minute[i] * ride_time) + (cost_per_mile[i] * ride_distance));
    }

    return costs;
}

fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]);

//54. Find Closest Pair
/*
Given an array of integers, we'd like to find the closest pair of elements that add up to a sum.
Return the distance between the closes pair (absolute difference between the two indices).
If there isn't a pair that adds up to the sum, return -1

Ex.
for numbers = [1, 0, 2, 4, 3, 0] and sum = 5, findClosestPair(numbers, sum) = 2

1 and 4 have a sum of 5, but 2 and 3 are closer together

for numbers = [2, 3, 7] and sum = 8, findClosestPair(numbers, sum) = -1, no pairs add up to 8

Hints
Math.abs()
*/

function findClosestPair(numbers, sum){
    const pairs = [];

    for(let i = 0; i < numbers.length; i++){
        for(let j = numbers.length - 1; j >= 0; j--){
            if( numbers[i] + numbers[j] === sum ){
                pairs.push(numbers[i]);
                pairs.push(numbers[j]);
            }
        }
    }

    return pairs;

}   

findClosestPair([1, 0, 2, 4, 3, 0], 5);

//55. Find Email Domain
/*
An email address such as 'John.Smith@example.com' is made up of a local part ('John.Smith'),
an '@' symbol, then a domain part ('example.com')

The domain name part of an email address may only consist of letters, digits, hyphens, and dots.
The local part, however, also allows a lot of different special characters. Here you can look at
several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part

Ex.
For address = 'prettyandsimple@example.com', the output should be findEmailDomain(address) = 'example.com'

For address = '<>[];;@'!#$%&+*{}|~@example.com', the output should be findEmailDomain(address) = 'example.org'

Hints
lastIndexOf()
slice()
*/

function findEmailDomain(address){
    const lastIndex = address.lastIndexOf('@');
    return address.slice(lastIndex + 1);
}

findEmailDomain('prettyandsimple@example.com');
findEmailDomain("<>[];;@'!#$%&+*{}|~@example.org");

//56. First Digit
/*
For inputString = 'var_1__Int', firstDigit(inputString) = '1'
For inputString = 'q2q-q', firstDigit(inputString) = '2'
For inputString = '0ss', firstDigit(inputString) = '0'

Hints
split()
includes()
*/

function firstDigit(inputString){
    const inputStringArray = inputString.split('');

    for(let i = 0; i < inputStringArray.length; i++){
        if(!Number.isNaN(parseInt(inputStringArray[i]))){
            return inputStringArray[i];
        }
    }
}

firstDigit('var_1__Int');
firstDigit('q2q-q');
firstDigit('0ss');

//isNaN() also seems to work without parseInt

function firstDigit(inputString){
    const inputStringArray = inputString.split('');

    for(let i = 0; i < inputStringArray.length; i++){
        if(!Number.isNaN(inputStringArray[i])){
            return inputStringArray[i];
        }
    }
}

firstDigit('var_1__Int');
firstDigit('q2q-q');
firstDigit('0ss');

//57. First Duplicate
/*
Given an array that contains only numbers in the range from 1 to a.length, find the first duplicate
number for which the second occurence has the minimal index. In other words, if there are more than 1
duplicate numbers, return the number for which the second occurence has a smaller index than the second 
occurence of the other number does. If there are no such elements, return -1

Ex.
for a [2, 1, 3, 5, 3, 2] , firstDuplicate(a) = 3

for a [2, 4, 3, 5, 1], firstDuplicate(a) = -1

Hints 
hasOwnProperty
*/

function firstDuplicate(a){
    const aSorted = [...a].sort();
    const duplicates = [];

    for(let i = 0; i < aSorted.length; i++){
        if(aSorted[i] === aSorted[i + 1]){
            duplicates.push(aSorted[i]);
        }
    } 

    if(duplicates.length === 0){
        return -1;
    }

    return a.lastIndexOf(duplicates[0]) < a.lastIndexOf(duplicates[1]) ?  duplicates[0] : duplicates[1];
}

firstDuplicate([2, 1, 3, 5, 3, 2]);
firstDuplicate([2, 4, 3, 5, 1]);

//lets try working with an object
function firstDuplicate(a){
    const firstDup = {};

    for(let i = 0; i < a.length; i++){
        if(firstDup.hasOwnProperty(a[i])){
            return a[i];
        }else{
            firstDup[a[i]] = a[i];
        }
    } 

    return -1;
}

firstDuplicate([2, 1, 3, 5, 3, 2]);
firstDuplicate([2, 4, 3, 5, 1]);

//much cleaner

//58. First Not Repeating Character
/* 
Write a solution that iterates over the string once and uses O(1) additional memeory, since this is what
you would be asked to do during a real interview

Given a string s, find and return the first instance of a non-repeating character in it. If there is no 
such character, return '_'.

Ex.
For s = 'abacabad', firstNotRepeatingCharacter(s) = 'c'

There are two non-repeating chars in the string, 'c' and 'd', but 'c' appears first

For s = 'abacabaabacaba', firstNotRepeatingCharacter(s) = '_'

There are no chars in the string that don't repeat

Hints
split()
hasOwnProperty()

*/

function firstNotRepeatingCharacter(s){
    const strArray = s.split('');
    const duplicates = {};

    for(let i = 0; i < strArray.length; i++){
        if(duplicates.hasOwnProperty(strArray[i])){
            delete duplicates[strArray[i]];
        }else{
            duplicates[strArray[i]] = strArray[i];
        }
    }
    
    if(Object.keys(duplicates).length){
        return duplicates[Object.keys(duplicates)[0]];
    }else{
        return '_';
    }
    
}

firstNotRepeatingCharacter('abacabad');
firstNotRepeatingCharacter('abacabaabacaba');

//59. Flatten Array
/*
Flatten a nested array. You must account for varying levels of nesting.

Ex.
steamRollArray([[['a']], [['b']]]) = ["a", "b"]
steamRollArray([1, [2], [3, [[4]]]]) = [1, 2, 3, 4]

Hints
isArray()
push()
*/


function steamRollArray(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? steamRollArray(toFlatten) : toFlatten);
    }, []);
  }

steamRollArray([[['a']], [['b']]]);
steamRollArray([1, [2], [3, [[4]]]]);

//the above uses recursion (calls itself until job is done)
//to better understand, lets solve the above recursively different ways

function steamRollArray(arr){
    const flatArr = [];

    //kick off entire thing by calling our flatten function
    flatten(arr);

    function flatten(arr){
        //if element is array, call flatten on it again
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                flatten(arr[i]);
            }else{
                //otherwise, push into new array
                flatArr.push(arr[i]);
            }
        }    
    }
    return flatArr;
}

steamRollArray([[['a']], [['b']]]);
steamRollArray([1, [2], [3, [[4]]]]);

//again with foreach to really drive the point home

function steamRollArray(arr){
    const flatArr =  [];

    flatten(arr);

    function flatten(arr){
        arr.forEach( element => {
            if(Array.isArray(element)){
                flatten(element);
            }else{
                flatArr.push(element);
            }
        });
    }

    return flatArr;
}

steamRollArray([[['a']], [['b']]]);
steamRollArray([1, [2], [3, [[4]]]]);

//60. Growing Plant
/*
Each day a plant is growing by upSpeed meters. Each night, that plant's height decreases by downSpeed
meters. Initially, the plant is 0 meters tall. We plant the seed at the beginning of the day. We want
to know when the height of the plant will reach a certain level.

for upSpeed = 100, downSpeed = 10 and desired height = 910

growingPlant(upSpeed, downSpeed, desiredHeight) = 10;
*/

function growingPlant(upSpeed, downSpeed, desiredHeight){
    let days = 0;
    let height = 0;

    while(height < desiredHeight){
        height += upSpeed;
        days++;

        if(height < desiredHeight){
            height -= downSpeed;
        }
    }

    return days;
}

growingPlant(100, 10, 910);

//61. House Number Sum
/*
Return the sum of all numbers in an array that appear before 0

Ex.
for inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2] houseNumbersSum(inputArray) = 11

5 + 1 + 2 + 3 = 11
*/

function houseNumbersSum(arr){
    let total = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            return total;
        }else{
            total += arr[i];
        }
    }
}

houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]);

//62. HTML End Tag By Start Tag
/*
You are implementing your own HTML editor. To make it more comfortable for developers you would like to
add an auto-complete feature to it. Given the starting HTML tag, find the appropriate end tag which your
editor should propose.

Example 
for startTag = "<button type='button' disabled>", the output should be 
htmlEndTagByStartTag(startTag) = "</button>"

for startTag = "<i>", the output should be 
htmlEndTagByStartTag(startTag) = "</i>"

Hints
split()
toString()
*/

function htmlEndTagByStartTag(startTag){
    const tagArr = startTag.split('');
    let partialTag = '';

    for(let i = 0; i < tagArr.length; i++){
        if( tagArr[i] === ' ' || tagArr[i] === '>'){
            return buildClosingTag(partialTag);
        }else{
            partialTag += tagArr[i];
        }
    }

    function buildClosingTag(tag){
        const endTagArr = tag.split('');
        endTagArr.splice(1, 0, '/');
        endTagArr.push('>');

        return endTagArr.join('');
    }

}   

htmlEndTagByStartTag("<button type='button' disabled>");
htmlEndTagByStartTag("<i>");

//63. Incorrect Password Attempts
/*
Opening a dropbox mobile app requires a four-digit passcode. For security reasons, the account is locked
after 10 consecutive failed passcode attempts. We need to implement a function that given an array of 
attempts made throughout the day and the correct passcode checks to see if the device should be locked,
i.e. 10 or more consecutive failed passcode attempts were made.

Ex.
for passcode = '1111'

and

attempts = ['1111', '4444', '3333', '5555', '6666', '7777', '8888', '9999', '1010', '5432', '8765', '1111'];

incorrectPasscodeAttempts(passcode, attempts) = true;
*/

const passcode = '1111';
const attempts = ['1111', '4444', '3333', '5555', '6666', '7777', '8888', '9999', '1010', '5432', '6563', '1111'];

function incorrectPasscodeAttempts(passcode, attempts){
    
    if(attempts.indexOf(passcode) === -1){
        return true;
    }
   
   let failedAttempts = 0;

   for(let i = 0; i < attempts.length; i++){
        if(attempts[i] === passcode){
            failedAttempts = 0;
        }

        if(failedAttempts === 10){
           return true;
       }

       failedAttempts++;
   }

}

incorrectPasscodeAttempts(passcode, attempts);

//what's the rule here that we can implement to be better in the future?
//In this case, we don't know the length of our attemps array, other than it should be atleast 10 values
//we are looking for any streak of failed attempts exceding our number (10) between successful attempts
//in these kind of cases, we should use an incremeter solution as above

//64. Integer To String of Fixed Width 
/* 
Given a positive integer number and a certain length, we need to modify the given number to have a 
specified length. We are allowed to do that either by cutting out leading digits (if the number needs to
be shortned) or by adding 0s in front of the original number

Examples
for number = 1234 and width = 2, output integerToStringOfFixedWidth(number, width) = '34'
for number = 1234 and width = 4, output integerToStringOfFixedWidth(number, width) = '1234'
for number = 1234 and width = 5, output integerToStringOfFixedWidth(number, width) = '01234'

Hints
concat()
subString()
toString()
*/

function integerToStringOfFixedWidth(number, width){
    const numString = number.toString();

    if(numString.length === width){
        return numString;
    }else if(numString.length > width){
        return numString.substring(width);
    }else if(numString.length < width){
        let frontStr = '';

        while(width - numString.length > 0){
            frontStr += '0';
            width--;
        }

        return frontStr.concat(numString);
    }
}

integerToStringOfFixedWidth(1234, 2);
integerToStringOfFixedWidth(1234, 4);
integerToStringOfFixedWidth(1234, 5);


//lets refactor a bit

function integerToStringOfFixedWidth(number, width){
    const numString = number.toString();

    if(numString.length > width){
        return numString.substring(width);
    }
    
    if(numString.length < width){
        let frontStr = '';

        while(width - numString.length > 0){
            frontStr += '0';
            width--;
        }

        return frontStr.concat(numString);
    }

    return numString;
}

integerToStringOfFixedWidth(1234, 2);
integerToStringOfFixedWidth(1234, 4);
integerToStringOfFixedWidth(1234, 5);

//65. Internal Backups
/*
One of the easiest ways to back up files is with incremental backups. This method only backs up files
that have changed since last backup.

You are given a list of changes that were made to the files in your database, where for each valid i, 
changes[i][0] is the timestamp of the time the change was made, and changes[i][1] is the file id.

Knowing the timestamp of the last backup lastBackupTime, your task is to find the files which should
be included in the next backup. Return the ids of the files that should be backed up as an array sorted
in ascending order.

Example
For lastBackupTime = 461620205

changes = [
    [461620203, 1], 
    [461620204, 2], 
    [461620205, 6], 
    [461620206, 5], 
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]
]

incrementalBackups(lastBackUpime, changes) = [1, 3, 5]

Hints
includes()
push()
sort()
*/

function incrementalBackups(changes, lastBackupTime){
    const requireBackup = [];

    changes.forEach( element => {
        if(element[0] > lastBackupTime && !requireBackup.includes(element[1])){
            requireBackup.push(element[1]);
        }
    });

    return requireBackup.sort();
}

incrementalBackups([[461620203, 1], [461620204, 2], [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], [461620208, 1]], 461620205);

function incrementalBackups(changes, lastBackupTime){
    const requireBackup = {};

    changes.forEach( element => {
        if(element[0] > lastBackupTime && !requireBackup.hasOwnProperty(element[1])){
            requireBackup[element[1]] = element[1];
        }
    });

    return Object.keys(requireBackup).sort();
}

incrementalBackups([[461620203, 1], [461620204, 2], [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], [461620208, 1]], 461620205);

//lastly, lets try using an object and just overwritting the values

console.time(incrementalBackups);

function incrementalBackups(changes, lastBackupTime){
    const requireBackup = {};

    changes.forEach( element => {
        if(element[0] > lastBackupTime){
            requireBackup[element[1]] = element[1];
        }
    });

    return Object.keys(requireBackup).sort();
}

incrementalBackups([[461620203, 1], [461620204, 2], [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], [461620208, 1]], 461620205);

console.timeEnd(incrementalBackups);

//this might not actually be faster
//BUT remember, when you're using includes() on an array before pushing, using objects is an option

//66. Is Lucky
/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum
of the firt half of the digits is equal to the sum of the second half

Ex.
for n = 1230, isLucky(n) = true
for n = 239017, isLucky(n) = false
*/

function isLucky(n){
    const ticketNumString = n.toString();
    const firstHalf = ticketNumString.substring(0, ticketNumString.length / 2);
    const secondHalf = ticketNumString.substring(ticketNumString.length / 2);
    
    const firstHalfSum = firstHalf.split('').reduce( (a, b) => parseInt(a) + parseInt(b));
    const secondHalfSum = secondHalf.split('').reduce( (a, b) => parseInt(a) + parseInt(b));
    
    return firstHalfSum === secondHalfSum;
}

isLucky(1230);
isLucky(239017);

//67. Is Tandem Repeat
/*
Determine whether the given string can be obtained by one concatenation of some string to itself

Ex.
inputString = 'tandemtandem', output should be isTandemRepeat(inputString) = true;
inputString = '2w2ww', output should be isTandemRepeat(inputString) = false;
inputString = 'qqq', output should be isTandemRepeat(inputString) = false;

basically, cut original string in half, and see if firsthalf = secondhalf

Hints:
slice()
*/

function isTandemRepeat(inputString){
    const halfway = inputString.length / 2;

    //also could do just inputString.length, but we already have this instance
    if(halfway % 2 === 0){
        const firsthalf = inputString.slice(0, halfway);
        const secondhalf = inputString.slice(halfway, inputString.length);

        return firsthalf === secondhalf;
    }

    return false;
}

isTandemRepeat('tandemtandem');
isTandemRepeat('2w2ww');

//68. Largest of Four
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity,
the provided array will contain exactly for sub-arrays.

Ex.
largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]) returns [27, 5, 39, 1001];
*/

function largestOfFour(arr){
    const largestNums = [];
    
    for(let i = 0; i < arr.length; i++){
        const nestedArr = arr[i];
        let largest = 0;
        
        for(let j = 0; j < nestedArr.length; j++){
            largest = nestedArr[j] > largest ? nestedArr[j] : largest;
        }

        largestNums.push(largest);
    }

    return largestNums;
}

largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]);

//69. Largest Number
/*
For n = 2, the output should be largestNumber(n) = 99
(so basically, n repsents number of digts)

Hints:
concat()
parseInt()
*/

function largestNumber(n){
    let nines = '';

    while(n > 0){
        nines+='9';
        n--;
    }

    return parseInt(nines);
}

largestNumber(2);

//we can also leverage string repeat method


function largestNumber(n){
    let nines = '9'.repeat(n);

    return parseInt(nines);
}

largestNumber(2);

//70. Proper Noun Correction
/*
For a porper noun (name) ensure first letter is capitalized and the rest are lowercase

Ex.
For noun = 'pARiS', properNounCorrection(noun) = 'Paris',
For noun = 'John', properNounCorrection(noun) = 'John'
*/

function properNounCorrection(noun){
    const nounArr = noun.split('');

    for(let i = 0; i < nounArr.length; i++){
        if(i === 0){
            nounArr[i] = nounArr[i].toUpperCase();
        }else{
            nounArr[i] = nounArr[i].toLowerCase();
        }
    }

    return nounArr.join('');
}

properNounCorrection('pARiS'); 
properNounCorrection('John'); 


//much better solution below

function properNounCorrection(noun){
    const firstChar = noun[0].toUpperCase();
    const restOfWord = noun.slice(1, noun.length).toLowerCase();

    return firstChar.concat(restOfWord);
}

properNounCorrection('pARiS'); 
properNounCorrection('John'); 

/*
What's the rule here? We have access to indexes and strings, and in this case there was no need to 
change it to an array, loop through it, and perform all sorts of checks. If we're working with a string
and we always know what indices we need to modify, consider not converting to array and make better
use of string methods available to us.
*/

//71. Rating Threshold
/*
Users are able to rate Pros based on their experience working with them. Each rating is an integer
ranging from 1 to 5, and all ratings are averaged to produce a single number rating for any given
pro. Those Pros who have rating lower than a specified threshold are manuall reviewed by staff to
ensure high quality service.

You're given a list of ratings for some Pros. FInd out which Pros should manually reviewed.

Ex.
for threshold = 3.5 and ratings = [[3, 4], [3, 3, 3, 4], [4]], ratingThreshold(threshold, ratings) = [1]

First pros rating is 3.5, second is 3.25 (needs review), and last is 4

Hints
push()
*/

function ratingThreshold(threshold, ratings){
    const manualReviewIndices = [];

    ratings.forEach( (element, index) => {
        let total = element.reduce( (prev, current) => prev + current );
        const average = total / element.length;
        if(average < threshold){
            manualReviewIndices.push(index);
        }
    });

    return manualReviewIndices;
}

ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]);

//72. Reflect String
/*
Define an alphabet reflection as follows: a turns into z, b turns into y,..., n turns into m, 
m turns into n, a turns into a

Ex.
for inputString = 'name', reflectString(inputString) = 'mznv';
*/

function reflectString(inputString){
    const dictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const inputArray = inputString.split('');

    for(let i = 0; i < inputArray.length; i++){
        let newIndex = (dictionary.length - 1) - dictionary.indexOf(inputArray[i]);
        inputArray[i] = dictionary[newIndex];
    }

    return inputArray.join('');
}

reflectString('name');

//73. Sort by Height
/* 
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your
task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example
for a [-1, 150, 190, 170, -1, -1, 160, 180], sortByHeight(a) = [-1, 150, 160, 170, -1 ,-1, 180, 190]
*/

function sortByHeight(arr){
    const sortedArrayWithoutTrees = arr.filter( height => height !== -1).sort();
    const indices = [];
    
    arr.forEach((height, index) =>{
        if(height === -1){
            indices.push(index);
        }
    });

    indices.forEach( index => {
        sortedArrayWithoutTrees.splice(index, 0, -1);
    });

    return sortedArrayWithoutTrees;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

//74. Array Conversion
/*
Given an array of 2k integers (for some integer k), perform the following operations until 
the array contains only one element:

-On the 1st, 3rd, and 5th, etc. iterations (1-based) replace each pair of consecutive elements
with their sum;

-On the 2nd, 4th, 6tn, etc. iterations replace each pair of consecutive elemens with their 
product. After the algorithm has finished, there will be a single element left in the array.
return that element.

Ex.
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], arrayConversion(inputArray) = 186
We have -> [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186]
so the answer is 186

Hints
push()
*/

function reducer(array, count){
    const reducedArr = [];
    if(count % 2 !== 0){
        for(let i = 0; i < array.length; i+= 2){
            reducedArr.push(array[i] + array[i + 1]);
        }
    }else{
        for(let i = 0; i < array.length; i+= 2){
            reducedArr.push(array[i] * array[i + 1]);
        }
    }
    return reducedArr;
}

function arrayConversion(inputArray){
    let count = 1;

    while(inputArray.length > 1){
        inputArray =  reducer(inputArray, count);
        count++;
    }

    return inputArray[0];
}

arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]);

//75. Sum of Two
/*
You have two integer arrays, a and b, and an integer target value v. Determine whether there is
a pair of numbers, where one is taken from a and the other from b, that can be added together to 
get a sum of v. Return true if such a pair exists, otherwise return false.

Example
For a = [1, 2, 3], and b = [10, 20, 30, 40], and v = 42, sumOfTwo(a,b,v) = true

Since 2 (a[1]) and 40 (b[3]) = 42

Hints
hasOwnProperty()
*/
console.time("nestedLop");
function sumOfTwo(a, b, v){
    for(let i = 0; i < a.length; i++){
        const currentInt = a[i];
        
        for(let j = 0; j < b.length; j++){
            if (currentInt + b[j] === v){
                return true;
            } 
        }
    }

    return false;
}
console.timeEnd("nestedLop");

sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42);

//try the above using objects instead of nested loops
console.time("objectMap");
function sumOfTwo(a, b, v){
    const hashMap = {};

    for(let i = 0; i < a.length; i++){
        const difference = v - a[i];
        hashMap[difference] = difference;
    }

    for(let i = 0; i < b.length; i++){
        if(hashMap.hasOwnProperty(b[i])){
            return true;
        }
    }

    return false;
}
console.timeEnd("objectMap");

sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42);

//76. Task Type
/*
You have some tasks in your Asana account. For each ith of them you knows its deadlinesi, which is the 
last day by which it should be completed. As you can see in your calendar, today's date is day. Asana
labels each task in accordance with its due date.

-If the task is due today or it's already overdue, it is labeled as Today;
-If the task is due within a week but not today - that is, its deadline is somewhere between day + 1 and
day + 7 both inclusive - it is labeled as Upcoming;
-All other tasks are labeled as later;

Given an array of deadlines and today's date day, your goal is to find the number of tasks with each 
label type and return it as an array with the format [Today, Upcoming, Later] where Today, Upcoming, and
Later are the number of tasks that correspond to that label.

Ex.

For deadlines [1, 2, 3, 4, 5] and day = 2, output should be tasksTypes(deadlines, day) = [2, 3, 0]


*/

function tasksTypes(deadlines, day){
    let today = 0;
    let upcoming = 0;
    let later = 0;
    const tasks = [];

    deadlines.forEach( deadline => {
        if(deadline <= day){
            today++;
        }else if(deadline > day && deadline < day + 8){
            upcoming++;
        }else{
            later++;
        }
    });

    tasks.push(today);
    tasks.push(upcoming);
    tasks.push(later);

    return tasks;
}

tasksTypes([1, 2, 3, 4, 5] , 2);

//lets try with some destructuring to clean up our code

function tasksTypes(deadlines, day){
    let [today, upcoming, later] = [0 ,0 ,0];

    deadlines.forEach( deadline => {
        if(deadline <= day){
            today++;
        }else if(deadline > day && deadline < day + 8){
            upcoming++;
        }else{
            later++;
        }
    });

    return [today, upcoming, later];
}

tasksTypes([1, 2, 3, 4, 5] , 2);

//77. Bishop and Pawn
/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether
the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. 

Ex.
For bishop = 'a1' and pawn 'c3', the output should be bishopAndPawn(bishop, pawn) = true
*/

function bishopAndPawn(bishop, pawn){
    const boardColumnMap = {
        'a' : 1,
        'b' : 2,
        'c' : 3,
        'd' : 4,
        'e' : 5,
        'f' : 6,
        'g' : 7,
        'h' : 8
    };
    const bishopArr = bishop.split('');
    const pawnArr = pawn.split('');

    if( bishopArr[0] !== pawnArr[0] && bishopArr[1] !== pawnArr[1] ){
        const colDiff = Math.abs( boardColumnMap[bishopArr[0]] - boardColumnMap[pawnArr[0]] );
        const rowDiff = Math.abs( parseInt(bishopArr[1]) - parseInt(pawnArr[1]) );

        if( colDiff === rowDiff ){
            return true;
        }
    }

    return false;
}

bishopAndPawn('a1', 'c3');  

//78. Common Character Count
/*
Given two strings, find the number of common characters between them.

Example:
for s1= 'aabcc' and s2 = 'adcaa', commonCharsCount(s1, s2) = 3
-Strings have 3 common characters - 2 "a's" and 1 "c"

Hints
split()
hasOwnProperty()
*/

function findUniqueChars(array, object){
    for( let i = 0; i < array.length; i++ ){
        if( array[i] !== array[i + 1] ){
            object[array[i]] = 0;
        }
    }

    return object;
}

function countUniqueChars(charArray, uniqueCharsObject){
    charArray.forEach( char => {
        if( uniqueCharsObject.hasOwnProperty(char) ){
            uniqueCharsObject[char]++;
        }
    });

    return uniqueCharsObject;
}

function commonCharsCount(s1, s2){
    let count = 0;
    const str1Arr = s1.split('');
    const str2Arr = s2.split('');

    let uniqueChars1 = findUniqueChars(str1Arr, {});
    let uniqueChars2 = findUniqueChars(str2Arr, {});

    uniqueChars1 = countUniqueChars(str1Arr, uniqueChars1);
    uniqueChars2 = countUniqueChars(str2Arr, uniqueChars2);

   const uniqueCharKeys1 = Object.keys(uniqueChars1);
   const uniqueCharKeys2 = Object.keys(uniqueChars2);

   uniqueCharKeys1.forEach( key => {
        if( uniqueCharKeys2.includes(key) ){
            count += uniqueChars1[key] < uniqueChars2[key] ? uniqueChars1[key] : uniqueChars2[key];
        }
   });

   return count;

}

commonCharsCount('aabcc', 'adcaa');

//the above works, but seems very complicated and not optimized, nonetheless, it's the solution
//I came up with on my own before watching the video

function getCharList(charArray){
    const wordCount = {};

    charArray.forEach( char => {
        if( wordCount.hasOwnProperty(char) ){
            wordCount[char]++;
        } else {
            wordCount[char] = 1;
        }
    });

    return wordCount;
}

function commonCharsCount(s1, s2){
    const strArr1 = s1.split('');
    const strArr2 = s2.split('');
    const s1CharCount = getCharList(strArr1);
    const s2CharCount = getCharList(strArr2);
    let total = 0;

    for( const char in s1CharCount){
        if(s2CharCount.hasOwnProperty(char)){
            total+= s1CharCount[char] < s2CharCount[char] ? s1CharCount[char] : s2CharCount[char];
        }
    }

    return total;
}

commonCharsCount('aabcc', 'adcaa');

/*
above, we found unique chars + count in one iteration, the rest of the logic was more or 
less the same but we also cut out unneccessary steps working directly with the object as 
opposed to converting to array and accessing object properties
*/

//79. Company Bot Strategy
/*

-For each problem answered by each trainer, there is an answer time value and a correctness value,
where 1 is correct, -1 is incorrect, and 0 is no answer given

-The bots answer time is calculated based on the average of correct answers given by the trainers

Example:
For trainingData = [[3, 1], [6, 1], [4, 1], [5, 1]], companyBotStrategy(trainingData) = 4.5

//all trainers gave correct answers

For trainingData = [[4, 1], [4, -1], [0, 0], [6, 1]], companyBotStrategy(trainingData) = 5.0

//only the 1st and 4th trainers submitted correct solutions, so (4 + 6) / 2 = 5.0

For trainingData = [[4, -1], [0, 0], [5, -1]] companyBotStrategy(trainingData) = 0

//no correct answers were provided
*/

function companyBotStrategy(trainingData){
    const correctAnswers = trainingData.filter( answer => answer[1] === 1);
    let total = 0;

    if(!correctAnswers.length){
        return 0;
    }

    correctAnswers.forEach( answerTime => {
        total += answerTime[0];
    });

    return total / correctAnswers.length;
}

companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]);
companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]);
companyBotStrategy([[4, -1], [0, 0], [5, -1]]);

//let's try doing all our work inside the foreach, so we only iterate through the array once

function companyBotStrategy(trainingData){
    let totalAnswerTime = 0;
    let correctAnswers = 0;

    trainingData.forEach( answer => {
        console.log(answer[0]);
    });

    //return total / correctAnswers.length;
}

companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]);
companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]);
companyBotStrategy([[4, -1], [0, 0], [5, -1]]);