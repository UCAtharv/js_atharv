// THERE ARE TWO TYPES OF DATA TYPES 

 // PRIMITVE 
   
 // THERE ARE 7 TYPES OF PRIMITIVE DATA TYPES 

 /*1.NUMBER
   2.String
   3.Boolean
   4.null
   5.undefined
   6.big int 
   7.symbol*/

   // examples of all primitive data types 
   let no = 100 , name = "atharv" , bool = true , non = null , why ; bignumber = 1646561446864562646323652636n
 console.log(typeof no);    
 console.log(typeof name);
 console.log(typeof bool);
 console.log(typeof non);
 console.log(typeof why);
 console.log(typeof bignumber);

 let id = Symbol(123)           // a symbol data type is used to keep pur data unique
 let anotherID = Symbol (123)
 console.log(id);
 console.log(anotherID);
console.log(id == anotherID);

console.log("***********");

// REFERENCE OR U CAN SAY NON PRIMITIVE DATA TYPES

/*there are three types of non primitive datatypes
 1. array
 2.object
 3.function */
 
 let myArray = ["atharv","survi","rohit","arnav","parth"]
 console.log(myArray);
 console.log(typeof myArray);          // type of all these non primitive datatype is object only

 let myObj = {  name : "atharv",
                age : 20
 }
 console.log(myObj);
 console.log(typeof myObj);

 console.log("**********");
 
 

 let myFuntion = function() { 
   
 }
 

 console.log(myFuntion);
 console.log(typeof myFuntion); // here the type of function will be shhown as function but really what it is called is object function
 
 
 
 
 
 
 




   