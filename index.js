// Variables In javaScript

var number1 = 45
var number2 = 45
console.log(number1+number2);

//Data Types In JavaScript
// 1. Premetives : undefined,null,number,string,boolean,symbol
// 2. Refrence : Arrays,Objects

//1.Numbers

var num1 = 45
var num2 = 98.99

console.log(num1)
console.log(num2)

//2.String

var str1 = "This is Yogesh"
var str2 = 'This is Yogesh'

console.log(str1)
console.log(str2)

//3.Object

var marks = {
    pavan : 45,
    yogesh : 50
}

console.log(marks)

//4.Boolean

var a = true
var b = false

console.log(a)
console.log(b)

//4.Undefined

// var und = undefined;
var und;
console.log(und);

var n =null;
console.log(n);

// Arrays

var arr = [1,2,3,4,"Yogesh"]

// Operators In JavaScript
//1.Arithmetic Operators

var a = 100;
var b = 10;
console.log('The value of a+b is', a+b);
console.log('The value of a+b is', a-b);
console.log('The value of a+b is', a*b);
console.log('The value of a+b is', a/b);

//2.Assignment Operaotors

var c = b
c =+ b; // c = c + b
c -= b;
c *= b;
c /= b;

//3.Comparison Operators

var x =35
var y = 30
console.log(x == y)
console.log(x >= y)
console.log(x <= y)
console.log(x > y)
console.log(x < y)

//4.Logical Operators

//Logical AND (&&)

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

//Logical OR (||)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

//Logical NOT (!)

console.log(!false)
console.log(!true)

//Functions In JavaScript
// DRY = Do Not Repeat Yourself

function avg(a,b){
    return (a+b)/2;
}

c1 = avg(4,6);
c2 = avg(14,16);
console.log(c1,c2);

// Conditionals in JavaScript

var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
if(age > 18){
    console.log('You can drink rasna water');
}
else{
    console.log('You cannot drink rasna water');
}

// if-else Ladder

age = 25;
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");







