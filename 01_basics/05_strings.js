const name = "Saad"

const repoCount = 50

// console.log(name + repoCount + " value"); //old ways to console data

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //use this method to console data


const gameName = new String("saad-ansari-com")

// console.log(gameName[5]); // characters also counted 

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));

// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 6)

console.log(newString);

const anotherString = gameName.slice(0, 5)

console.log(anotherString);

const newStringOne = ("   Saad    ")

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saad.com/saad%20gemini"

console.log(url.replace('%20', '-'));

console.log(url.includes('saad'));
console.log(url.includes('ansari'));

console.log(gameName.split('-'));