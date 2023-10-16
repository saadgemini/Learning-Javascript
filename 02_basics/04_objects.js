// const tinderUSer = new Object()

const tinderUSer = {}

tinderUSer.id = "123abc"
tinderUSer.name = "Saad"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer);

const regularUser = {
    email : "saad@gmail.com",
    fullName : {
        userFullName : {
            userFirstName : "Saad",
            userLastName : "Ansari"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.userFirstName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj5 = {5 : "e", 6 : "f"}

const obj3 = Object.assign(obj1, obj2, obj5) // Copy the values of all of the enumerable own properties 
                                        //from one or more source objects to a target object. 
                                        // Returns the target object.

const obj4 = Object.assign({}, obj1, obj2, obj5)

// console.log(obj3);         // targeted object is obj1 and obj1 and obj2 objects are copied into obj1
// console.log(obj4);      // targeted object is empty and obj1 and obj2 objects are copied into empty object

const obj6 = {...obj1, ...obj2, ...obj5}

// console.log(obj6);

const user =[
    {
        id : 1,
        email : "saad@gmail.com"
    },
    {
        id : 1,
        email : "saad@gmail.com"
    },
    {
        id : 1,
        email : "saad@gmail.com"
    }, 
]

user[1].email
console.log(tinderUSer);
console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer)); // Returns an array of key/values of the enumerable properties of an object

console.log(tinderUSer.hasOwnProperty('isLoggedIn')); // Determines whether an object has a property with the specified name
