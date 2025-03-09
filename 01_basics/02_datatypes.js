"use strict"; // it is used to treat all JS code as newer version of it according to new standards and syntax

//alert ("hello")
//alert (3+3) we are not using browser we are using NODE JS

//console.log("Atharv") ;console.log('12344') you can write it like this but plz dont as ur code should be readable to others so use different lines

console.log(3+3)

//DATATYPES

let name ="Atharv"
let age =20
let isLoggedIn = false 
let state = null
console.log(isLoggedIn)
console.log(state)


/* PRIMITIVE DATA TYPES */
// number => 2 to the power 53
//bigint 
//string => "Atharv"
//boolean => true/false
//null => standalone value
// undefined => 
//symbol => unique

/* NON PRIMITIVE DATA TYPES*/

//object
console.log(typeof name)
console.log(typeof age )
console.log(typeof isLoggedIn)
console.log(typeof state)
let city ;
console.log(typeof city)

/*let state = null
  let city ;
  console.log(typeof state)
  console.log(typeof city)

  HERE WHAT HAPPEND IS WHEN WE SEEKED TYPE OF NUMBER OR STRING WE GOT A UNIQUE TYPE OF IT WHICH IS DATATYPE WHICH IS STRING AND NUMBER BUT FOR
  "NULL" AND "UNDEFINED " THE TYPE OF "NULL" CAME OUT TO BE AN OBJECT WHEREAS UNDERDEFINED GOT THE DATATYPE OF UNDEFINED WHICH IS 
  UNIQUE BUT THE NULL BEING SAID OBJECT SOME SAYS ITS AN ERROR OF LANGUAGE SOME SAY IT IS TRUE  
*/