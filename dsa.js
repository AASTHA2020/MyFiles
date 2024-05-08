/*--------FIZBUZZ-------*/
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }



/*------REVERSE STRING-----*/

// Method 1:
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Method 2 (Using Loop):
  function reverseStringAlt(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

  

/*-----CHECK PALINDROME---------*/

// Method 1:
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  // Method 2 (Using Loop):
  function isPalindromeAlt(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  
/*---------FIND LARGEST NUMBER---------*/

// Method 1:
function findLargest(arr) {
    return Math.max(...arr);
  }
  
  // Method 2 (Using Loop):
  function findLargestAlt(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  


/*---------COUNT VOWELS----------*/

// Method 1:
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  // Method 2 (Using Regular Expression):
  function countVowelsAlt(str) {
    return (str.match(/[aeiou]/gi) || []).length;
  }

  
/*----------FACTORIAL---------------*/


function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
 
/*----------REMOVE DUPLICATES---------*/

// Method 1:
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  // Method 2 (Using Loop):
  function removeDuplicatesAlt(arr) {
    const uniqueArr = [];
    for (let item of arr) {
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
    }
    return uniqueArr;
  }
  


/*---------CHECK PRIME NUMBERS---------*/  

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


/*--------LONGEST WORD------*/

// Method 1:
function findLongestWord(str) {
    return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
  }
  
  // Method 2 (Using Loop):
  function findLongestWordAlt(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }



/*------------CHECK AMAGRAM--------------*/

// Method 1:
function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  
  // Method 2 (Using Character Map):
  function isAnagramAlt(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const charMap1 = buildCharMap(str1);
    const charMap2 = buildCharMap(str2);
    for (let char in charMap1) {
      if (charMap1[char] !== charMap2[char]) {
        return false;
      }
    }
    return true;
  }
  
  function buildCharMap(str) {
    const charMap = {};
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  }
 
  

/*------------SUM OF TWO NO. IN AN ARRAY---------------*/ 

function twoSumAlt(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }


/*-----------FIND DUPLICATES------------ */

// Method 1:
function findDuplicates(nums) {
    const numMap = {};
    const duplicates = [];
    for (let num of nums) {
      if (num in numMap) {
        duplicates.push(num);
      } else {
        numMap[num] = true;
      }
    }
    return duplicates;
  }
  
  // Method 2 (Using Filter and Includes):
  function findDuplicatesAlt(nums) {
    return nums.filter((num, index) => nums.indexOf(num) !== index);
  }

  

/*------FIND WORDS WITH LENGTH GREATER THAN 5--------- */

// Method 1:
function filterWordsByLength(words) {
    return words.filter(word => word.length > 5);
  }
  
  // Method 2 (Using Loop):
  function filterWordsByLengthAlt(words) {
    const result = [];
    for (let word of words) {
      if (word.length > 5) {
        result.push(word);
      }
    }
    return result;
  }

  
/*--------MERGE TWO ARRAYS------- */

V// Method 1:
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  
  // Method 2 (Using Concat and Filter):
  function mergeArraysAlt(arr1, arr2) {
    return arr1.concat(arr2.filter(item => !arr1.includes(item)));
  }

  
/*---------Map Operation on Even/Odd Numbers------------ */


// Method 1:
function mapOperation(nums) {
    return nums.map(num => num % 2 === 0 ? num * 2 : num / 2);
  }
  
  // Method 2 (Using Loop):
  function mapOperationAlt(nums) {
    const result = [];
    for (let num of nums) {
      result.push(num % 2 === 0 ? num * 2 : num / 2);
    }
    return result;
  }
  