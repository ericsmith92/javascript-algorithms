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

