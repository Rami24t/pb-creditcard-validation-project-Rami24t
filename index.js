// // # Project
// # Credit Card Validation

//------------------------------------------------------------------------------------------

// **Bonus #1:**  A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:
// -   `9999-7777-8888-0000`
// -   `6666-6666-6666-1666`

// Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)

// **Bonus #2:**  Return an object indicating whether the credit card is valid, and if not, what the error is  
// `{ valid: true, number: '9923-3211-9c01-1112' }`  
// `{ valid: false, number: '9923-3211-9c01-1112', error: ‘wrong_length’ }`

// ----------

// **Bonus #3:**  Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the  [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)  for inspiration.

function validateCreditCard(creditCardNum) {
// returns  `true`  or  `false`
return is16digits(creditCardNum) && isNumber(creditCardNum) && includesDifferent(creditCardNum) && isLastEven(creditCardNum)  && isSumGT16(creditCardNum);
};

// Is it 16 digits
function is16digits(n){
    // returns  `true`  or  `false`
    return n.length == 16;
}

// Are all numbers - n should be a string of numbers - +n tries to turn n into a number.
function isNumber(n){
    // returns  `true`  or  `false`
   return +n === +n;
   // return Number(n) === Number(n);
}

// Has at least two different digits represented (all of the digits cannot be the same)
// n='4444444444444444'
function includesDifferent(n){
    // returns  `true`  or  `false`
    l=n.length-1;
    let different=false;
    for(let i=0;i<l;i++)
    {
        if(n[i]!=n[i+1])
        {
        different=true;
        return true;
        }
    }
    return different;
}

// The last digit must be even
function isLastEven(n){
    // returns  `true`  or  `false`
return +n[15]%2==0
}



// Is the sum of all the digits must be greater than 16
// Gives true only if the sum of all digits is greater than 16, otherwise gives false.
function isSumGT16(n){
    // returns  `true`  or  `false`
    let sum=0;
    for(let i=0;i<n.length;i++)
    {
        sum+= +n[i];
    }
    return sum>16;
}



/** tests for part 1 **/
console.log('Tests part 1:\n',
'Valid: ', validateCreditCard('9999777788880000'), validateCreditCard('6666666666661666'), '\n',
 'Invalid: ', validateCreditCard('a92332119c011112'), validateCreditCard('4444444444444444'), validateCreditCard('1111111111111110'), validateCreditCard('6666666666666661'));




// /**** tests *****/
// console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
// console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
// console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
// console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
// console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }
