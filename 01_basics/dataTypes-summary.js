// Javascript is a dynamic typing language.

// When you declare a variable, you do not need to specify what type this variable is.

// Javascript engine infers what type this variable is based on the value assigned to at run time.

// Primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100

const scoreValue = 100.3

const isLoggedIn = false

const outSideTemp = null

let userMail;

const id = Symbol("123")

const anotherId = Symbol("123")

console.log(id === anotherId);


// Reference (Non - Primitive)

// Array, Objects, Functions

const heros = ["Ironman", "Spiderman", "Batman"]

let myObj = {
    name : "Saad",
    age : 26,
}

let myFunction = function(){
    console.log("hello world");
}

console.log(typeof outSideTemp);


// ****** typeof *****

// number => number
// string => string
// boolean => boolean
// null => object
// undefined => undefined
// array => object
// objects => object
// functions => function object


// **** Storage In JavaScript *****

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Saad Gemini"

let anotherName = myYoutubeName;

anotherName = "Gems Of Gemini"

console.log(myYoutubeName);

console.log(anotherName);

let userOne = {
    name : "saad",
    mail : "saad@gmail.com",
}

let userTwo = userOne;

// console.log(userOne.mail);

// console.log(userTwo.mail);

userTwo.mail = "saad123@gmail.com"

console.log(userOne.mail);

console.log(userTwo.mail);