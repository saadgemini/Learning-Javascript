// Singleton instance is created when we use object Contructor

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Saad",
    "full name" : "Saad Ansari",
    [mySym] : "mykey1",             // Synatax of accessing a SYMBOL using [] brackets
    age : 27,
    email  : "saad@gmail.com",
    city : "Mau",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);       // Another way to fetch the data
                                    // SQUARE NOTATION
// console.log(JsUser["full name"]);   // when we declare any key in JS it is consider as a STRING,
                                    // then we use SQUARE NOTATION to fetch the data

// console.log(JsUser.mySym);          // this format gives result as a STRING
// console.log(typeof JsUser.mySym);

// console.log(JsUser[mySym]);


JsUser.email = "saad@google"

// Object.freeze(JsUser)               // when we want to unchange any data then we use Object.freeze

JsUser.email = "saad@outlook.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user`);
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());