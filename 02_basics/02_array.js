const marvel_heroes = ["Spiderman", "Ironman", "Thor"]

const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// let all_heroes = marvel_heroes.concat(dc_heroes) // CONCAT combines two or more arrays and returs a new ARRAY

// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // ...(SPREAD operator) allows us 
                                                        // to copy all or part of existing array 
                                                        // or object into another array or object
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5], [7, 5, [4, 5, 6]]]

const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements
                                                // concatenated into it recursively up to the specified depth

// console.log(real_another_array);


console.log(Array.isArray("Saad"));
console.log(Array.from("Saad"));        // Creates array from an iterable objects

console.log(Array.from({name : "saad"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // Returns a new array from a set of elements

