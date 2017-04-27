// 1. Write a function that accepts two parameters: a potential nickname (string) and a fullName (string). 
//Return true if the nickname is valid for the provided full name, and false otherwise.

// The nickname is valid if it's shorter than the full name and 
//contains all letters in the order they appear in the full name. 
//For example, "Lusa" is a valid nickname for "LUke SegArs" but "Luek" and "Sek" are not.
import test from 'ava';



// function compName(fullName, nickName) {
//     // let isNickNameShorter = nickName.length < fullName.length;
//     // let doesFullNameContainNickName = fullName.search(nickName) >= 0; //search the fullname for the nickname and find at what index (>=0) it is found 
//     // console.log(fullName.search(nickName)); 

//     // if ( isNickNameShorter && doesFullNameContainNickName ) { 
//         if (nickName.length < fullName.length && fullName.search(nickName) >= 0) {
//             return true; 
//             } else {
//             return false;
//         }
//     }
// console.log(compName('victoria', 'tori')); 

// test('names', function (t) {
//     t.deepEqual(compName('victoria', 'tori'), true);
// });

// test('names', function (t) {
//     t.deepEqual(compName('mitchell', 'mik'), false);
// });

// test('names', function (t) {
//     t.deepEqual(compName('donny', 'tommy'), false);
// });




//create function that passes two parameters: nickname and fullName
//  - needs to be shorter - create array of letters using split and compare lengths
// if leghth of nickname is shorter than length of full name, it should return true
//  
//  - needs to contain all letters - create array using split, and go through the letters
// to compare letters for matches in the order they appear

// 2. Write a function that accepts one parameter: a number (number). 
//Return the number with all digits sorted in descending (largest to smallest) order.
//For example, descending(5614) should return the number 6541. Make sure you're returning a number, not a string!

// let num = 5614;

// function descend(number) {

//     if (typeof (number) !== 'number') {
//         return undefined; // return will always end the loop
//     }
//     //console.log(typeof(number)); 

//     let newNum = number.toString();
//     let spltNum = newNum.split('');
//     let newArr = [];
//     newArr = spltNum.sort(function (a, b) {
//         let ia = parseInt(a);
//         let ib = parseInt(b);
//         return ib - ia;
//     });
//     let returnNum = newArr.join('');
//     return parseInt(returnNum);
// }
// console.log(descend(num));

// test('number', function (t) {
//     t.deepEqual(descend(6541), 6541);
// });

// test('number', function (t) {
//     t.deepEqual(descend('5614'), undefined);
// });

// test('number', function (t) {
//     t.deepEqual(descend('x'), undefined);
// });

// 3. Write a function that accepts one parameter: a sequence (string). 
//Return the length of the longest continuous string of x's.
//For example, abxxaxterxtxxxa should return 3.

let str = 'abxxaxterxtxxxa';

function longest(sequence) {
    let total = 0;
    let max = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === 'x') {
            total++;
        } else { 
            if ( total > max ) {
                max = total;
            }
            total = 0;
        }
        console.log( "s[i] = " + sequence[i] + ", total = " + total + ", max = " + max );
    }
    return max;
}
console.log(longest(str)); 

test('isItX', function (t) {
    t.deepEqual(longest('kgjhgfg'), 0);
});

test('isItX', function (t) {
    t.deepEqual(longest('x'), 0);
});

test('isItX', function (t) {
    t.deepEqual(longest('1xs'), 1);
});

