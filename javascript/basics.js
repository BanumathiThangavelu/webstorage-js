//console types
console.log("welcome Banumathi");
console.log(1234567);
console.log(18.25);
console.log(true);
console.log([24, 56, 76, 98]);
console.log({ fname: "sara", age: 7 });
console.table({ fname: "sara", age: 7 });
console.error("sample error");
console.warn("custom sample error");
window.alert(5 + 6);
//console.clear();
console.time("Timer");
for (i = 0; i < 10; i++) {
  console.log(i);
}
console.timeEnd("Timer");
//keywords used in variable declaration
/*
1997
var
2015 E6
let
const*/
var a = 20;
var b = 30;
console.log(a + b);

//diff between var,let and const
//1.scope(var-global scope,let & const-local scope)
if (true) {
  //var msg = "welcome";
  //let msg = "Banumathi";
  const msg = "Welcome Banu";
  console.log(msg);
}
//console.log(msg);

//2.redeclaration
/*var a = 25;
console.log(a);
var a = 35;
console.log(a);*/

const c = 10;
console.log(c);
//let c = 35;
console.log(c);
const D = 40;
console.log(D);
//const D = 60;
//console.log(D);

//3.value reassign(doesnt reassign-const,others -can assign)
/*var a = 08;
console.log(a);
a = 07;
console.log(a);*/
let e = 08;
console.log(e);
e = 07;
console.log(e);

const d = 02;
console.log(d);
//const d = 06;//constant error
//console.log(d);

//To change const value
const student = { name: "Banu", Dept: "ECE" };
console.log(student);
console.table(student);
console.log(student.name);
student.name = "sai";
console.table(student);

//Data Types
/*Dynamic programming-C,C++,Java,.Net
Static programming-JS ,Python(No need to initialise the datatypes)
*/
//primitive data types
/*1.String
2.Numbers 
2.Boolean
3.Null
4.Undefinded
5.Symbols (added in ES6-2015)
*/
//refernce types
/*Arrays
functions
Object literals
Date*/
let C = 27;
console.log(typeof C);
let fname = "Raghu";
console.log(typeof fname);
let phone = null;
console.log(typeof phone);
let B;
console.log(typeof B);

const s1 = Symbol(); //fddhghkjh79978
console.log(s1);
const s2 = Symbol(); //uiiuybhvjh797
console.log(s2);
console.log(s1 == s2);

//reference type
let courses = ["C", "C++", "Java"]; //array
console.log(typeof courses);
let stud = { name: "pranav", age: 12 }; //object
console.log(typeof stud);
let f = new Date();
console.log(f);
console.log(typeof f);

//Type conversion-String Conversion
let I;
I = 50;
console.log(I, typeof I);
I = String(I);
console.log(I, typeof I);

I = true;
console.log(I, typeof I);
I = String(I);
console.log(I, typeof I);

I = new Date();
console.log(I, typeof I);
I = String(I);
console.log(I, typeof I);

I = [1, 2, 3, 4, 5];
console.log(I, typeof I);
I = String(I);
console.log(I, typeof I);

//toString
I = 68;
console.log(I, typeof I);
I = I.toString();
console.log(I, typeof I);

//Type conversion-Number Conversion
a = "125";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = "welcome";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);
//parse
a = "25";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

a = "25.78";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

a = "25.78";
console.log(a, typeof a);
a = parseFloat(a);
console.log(a, typeof a);

//Type Coercion
let g = "28";
let h = 05;
console.log(g + h);

g = Number(g);
console.log(g + h);

//Arithmetic Operation
let G = 100;
let H = 20;
let J;

J = G + H;
console.log(J);

J = G - H;
console.log(J);

J = G * H;
console.log(J);

J = G / H;
console.log(J);

J = G % H;
console.log(J);

J = 2 ** 3; //This format released in 2016
console.log(J);

J = ++G;
console.log(J);

J = --H;
console.log(J);

//Assignment Operators =
//(Arithmetic assignmetic operators)
let A = 10;
//A = A + 5;
A += 5; //15
console.log(A);

A -= 5; //10
console.log(A);

A *= 5; //50
console.log(A);

A /= 5; //10
console.log(A);

A %= 5; //0
console.log(A);

//Math Functions
let S;
S = Math.PI;
console.log(S);

S = Math.E;
console.log(S);

S = Math.round(5.8);
console.log(S);

S = Math.round(5.2);
console.log(S);

S = Math.floor(5.4);
console.log(S);

S = Math.ceil(5.4);
console.log(S);

S = Math.sqrt(4);
console.log(S);

S = Math.abs(-78);
console.log(S);

S = Math.trunc(2.56);
console.log(S);

S = Math.pow(2, 3);
console.log(S);

S = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(S);

S = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(S);

S = Math.random();
console.log(S);

S = Math.floor(Math.random() * 50 + 1);
console.log(S);

S = Math.sign(35);
console.log(S);

S = Math.sign(-35);
console.log(S);

S = Math.sign(0);
console.log(S);

S = Math.sin(45);
console.log(S);

S = Math.cos(45);
console.log(S);

S = Math.log(45);
console.log(S);

S = Math.log2(45);
console.log(S);

S = Math.log10(45);
console.log(S);

//Comparison Operators
let x = 10;
let y = "10";
console.log(x == y);
console.log(x === y);
console.log(x != y);

//Relational Operators
let k = 10;
let l = 20;
console.log("Greater :", k > l);
console.log("Lesser :", k < l);
console.log("Greater Than Equal :", k >= l);
console.log("Lesser Than Equal :", k <= l);

//logical Operators
/*
&& logical and
|| logical or
! logical not
*/
//35-100 check pass r fail
mark = 45;
console.log(mark >= 35 && mark <= 100);

mark = 25;
console.log(mark >= 35 && mark <= 100);

let z = 5;
//2,5
console.log(z == 2 || z == 5);

p = false;
console.log(!p);
p = true;
console.log(!p);

//ternary operator
age = 13;
let type = age > 18 ? "adult" : "child";
console.log(type);

//spread operator
const shopping_cart = ["Maggi", "Beans", "Masala"];
const additional_cart = ["Matchbox", "Salt"];
//using concat
/*let recipe = shopping_cart.concat(additional_cart);
console.log(recipe);
console.table(recipe);*/
//using spead operator
let recipe = [
  ...shopping_cart,
  33,
  { 1: "Noodles", 2: "fried-rice" },
  ...additional_cart,
];
console.table(recipe);
