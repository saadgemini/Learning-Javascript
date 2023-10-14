// **** Array ****

const myArr = [0, 1, 2, 3, 4, 5]

const Heroes = ["Spiderman", "Batman", "Superman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr);
// console.log(Heroes[1]);

// **** Array Method ****

// myArr.push(6)        // PUSH add values from the END
// myArr.push(7)
// myArr.push(9)

// myArr.pop()          // POP remove values from the END

// myArr.unshift(8)        // UNSHIFT add values from the START
// myArr.unshift(10)

// myArr.shift()           // SHIFT remove values from the START

// console.log(myArr.includes(15));    // includes tells us that wether the element is present or not(TRUE/FALSE)
// console.log(myArr.indexOf(1));
// console.log(myArr.indexOf(17));     // if any element is not presenst at given index it gives "-1"

// console.log(myArr);

const newArr = myArr.join('-')          //JOIN method returns an Array as a String

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);


// ***** Slice - Splice *****

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // SLICE returns a part of given string (start index included, end index not included)
                                // doesn't affect the original array.

console.log("Slice result ", myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // SPLICE removes element from an Array (Start Index, How many)
                                // returns the affected values

// console.log("C ", myArr);
console.log(myn2);