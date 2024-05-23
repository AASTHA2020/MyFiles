console.log("DSA code here");
// Example DSA code
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));





function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Example usage:
console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5])); // Output: 15





function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage:
console.log("Even numbers in [1, 2, 3, 4, 5]:", filterEvenNumbers([1, 2, 3, 4, 5])); // Output: [2, 4]






function findMax(arr) {
    return Math.max(...arr);
}

// Example usage:
console.log("Maximum number in [3, 7, 2, 10]:", findMax([3, 7, 2, 10])); // Output: 10





function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log("Reverse of 'hello':", reverseString("hello")); // Output: "olleh"





function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log("Number of vowels in 'hello':", countVowels("hello")); // Output: 2






function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log("Is 17 a prime number?", isPrime(17)); // Output: true
console.log("Is 15 a prime number?", isPrime(15)); // Output: false





function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Example usage:
console.log("Capitalized sentence:", capitalizeWords("hello world")); // Output: "Hello World"





function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    return str === str.split('').reverse().join('');
}

// Example usage:
console.log("Is 'radar' a palindrome?", isPalindrome("radar")); // Output: true
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); // Output: false





const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log("Original Array:", numbers); // Output: [1, 2, 3, 4, 5]
console.log("Doubled Array:", doubledNumbers); // Output: [2, 4, 6, 8, 10]
//Explanation:map applies a function to each element in an array and returns a new array with the modified elements (num * 2 doubles each number).





// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(num =&gt; num % 2 === 0);

// console.log("Original Array:", numbers); // Output: [1, 2, 3, 4, 5]
// console.log("Even Numbers Array:", evenNumbers); // Output: [2, 4]
//Explanation:filter creates a new array with elements that pass a test (num % 2 === 0 checks for even numbers).




// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) =&gt; acc + num, 0);

// console.log("Original Array:", numbers); // Output: [1, 2, 3, 4, 5]
// console.log("Sum of Array:", sum); // Output: 15
// //Explanation:reduce applies a function to each element of an array (from left to right) to reduce it to a single value (acc + num sums all numbers, starting with an initial value of 0).




//total price
const cart = [
    { product: 'Shirt', price: 25 },
    { product: 'Jeans', price: 40 },
    { product: 'Shoes', price: 60 },
    { product: 'Hat', price: 15 }
];

const totalPrice = cart
    .map(item => item.price)         // Extract prices into an array
    .reduce((acc, price) => acc + price, 0); // Sum all prices

console.log("Shopping Cart:", cart);
console.log("Total Price:", totalPrice); // Output: 140 (25 + 40 + 60 + 15)









// const numbers = [-2, 7, 3, -1, 0, 8, -5, 11];

// const positiveNumbers = numbers
//     .filter(num => num > 0);        // Filter positive numbers

// const average = positiveNumbers.length > 0 ?
//     positiveNumbers.reduce((acc, num) => acc + num, 0) / positiveNumbers.length : 0; // Calculate average

// console.log("Original Array:", numbers); // Output: [-2, 7, 3, -1, 0, 8, -5, 11]
// console.log("Positive Numbers:", positiveNumbers); // Output: [7, 3, 8, 11]
// console.log("Average of Positive Numbers:", average); // Output: 7.25 ((7 + 3 + 8 + 11) / 4)
















// /*--------FIZBUZZ-------*/
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//         console.log("Fizz");
//       } else if (i % 5 === 0) {
//         console.log("Buzz");
//       } else {
//         console.log(i);
//       }
//     }
//   }


// /*------REVERSE STRING-----*/

// // Method 1:
// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   // Method 2 (Using Loop):
//   function reverseStringAlt(str) {
//     let reversedStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
//     return reversedStr;
//   }

  


// /*------------CHECK AMAGRAM--------------*/

// // Method 1:
// function isAnagram(str1, str2) {
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
//     return sortedStr1 === sortedStr2;
//   }
 
 

// /*------------SUM OF TWO NO. IN AN ARRAY---------------*/ 

// function twoSumAlt(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//     return [];
//   }


/*-----------FIND DUPLICATES------------ */

  // Method 2 (Using Filter and Includes):
  function findDuplicatesAlt(nums) {
    return nums.filter((num, index) => nums.indexOf(num) !== index);
  }
  
  const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6];
  const duplicates = findDuplicatesAlt(nums);
  
  console.log("Duplicate elements:", duplicates); // Output: [2, 4, 6]
  
   
  
  

// /*------FIND WORDS WITH LENGTH GREATER THAN 5--------- */

// // Method 1:
// function filterWordsByLength(words) {
//     return words.filter(word => word.length > 5);
//   }
 
  
// /*--------MERGE TWO ARRAYS------- */

// // Method 1:
// function mergeArrays(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])];
//   }
 
  
// /*---------Map Operation on Even/Odd Numbers------------ */


// // Method 1:
// function mapOperation(nums) {
//     return nums.map(num => num % 2 === 0 ? num * 2 : num / 2);
//   }
  
//   // Method 2 (Using Loop):
//   function mapOperationAlt(nums) {
//     const result = [];
//     for (let num of nums) {
//       result.push(num % 2 === 0 ? num * 2 : num / 2);
//     }
//     return result;
//   }
  





//   valid parenthesis
  