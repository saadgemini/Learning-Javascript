// console.log("S");
// console.log("A");
// console.log("A");
// console.log("D");

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("A");
    console.log("D");
}

// sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// addTwoNumbers(2, 5)         // 7
// addTwoNumbers(2, "a")       // 2a
// addTwoNumbers("b", 9)       // b9
// addTwoNumbers("c", "a")     // ca
// addTwoNumbers(2, null)      // 2
// addTwoNumbers(2, undefined) // NaN


// function addTwoNums(num3, num4){
//     // console.log(num3 + num4);
// }

// let result = addTwoNums(7, 9)       // 16
// console.log("Result ", result);     // undefined => console only print the values, not return the value


function addTwoNums(num3, num4){
    // let result = num3 + num4
    // return result
    // console.log("SAAD");        // after return keyword no other code is executed

    return num3 + num4
}

// let result = addTwoNums(7, 9)       
// console.log("Result ", result);

function loginUserMessage(username = "Harry"){      // we can give some default value to avoid if condition
    if (!username) {
        console.log("Pleasen enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Saad"));


function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(200, 300, 500, 1500));

const user = {
    name : "Saad",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    name : "Samar",
    price : 599
})

const newArray = [200, 500, 700, 800, 900]

function getSecondValue(getArray){
    return getArray[1]
}

console.log(getSecondValue(newArray));

console.log(getSecondValue([15, 25, 50, 75]));