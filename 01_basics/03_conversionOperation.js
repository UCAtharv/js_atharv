/* here score was a number value so the type of it came to be number but user can give any input infront end
and then the backend would throw error*/
let score = 33
console.log(score);
console.log(typeof score);

/*here is the example of it */
let score1 = 33
console.log(score1)
console.log(typeof score1)

/*to convert this strin into a nummber we do this then the number in the string will be converted in number*/
let stringTOnumber = Number(score1)
console.log(stringTOnumber)
console.log(typeof stringTOnumber)

/* but what if the user entered a number and also some alphabets  */
let score2 = "33abc"
console.log(score2)
console.log(typeof score2)

stringTOnumber = Number(score2) /* in this part we used string to number function to a input which was containing alphabets
as well as numbers and the type of it came to be NaN which means not a number */
console.log(stringTOnumber)

// conversion of numbers or string to boolean values

let value = 0 // converting a number to string 
let numberTObool = Boolean (value)
console.log(numberTObool)                    // if we gave a number input to and then convert it to boolean then the output was true
console.log(typeof numberTObool)


let value1 = "abc" // converting string to boolean 
let strinTObool = Boolean (value1)
console.log(strinTObool)               // also the value of a string came out to be true
console.log(typeof strinTObool)

let value2 = "" // here the string is empty
 strinTObool = Boolean (value2)
 console.log(strinTObool)        // here the string value was emty so the boolean value came out to be false
 console.log(typeof strinTObool)

 // lets try to convert string to boolean or number

 let value3 = 33
 let numberTOstring = String (value3)
 console.log(numberTOstring)                // HERE WE CONVERTED A NUMBER VALUE INTO A STRING 
 console.log(typeof numberTOstring)