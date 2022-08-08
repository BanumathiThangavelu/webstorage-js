//string
//concatenation
let first_name = "Banu";
let last_name = "mathi";
a = first_name + " " + last_name;
console.log("concatenation:" + a);

//concat
a = first_name.concat(" ", last_name);
console.log("concat:" + a);

//append
a = "Banu ";
a += "mathi";
console.log("append:" + a);

//Escaping
a = "she can't run";
console.log(a);
//a='she can't run'//cant use this
a = "she can't run";
console.log(a);

//length
a = first_name.length;
console.log("length:" + a);

//to change upper case
a = first_name.toUpperCase();
console.log("Uppercase:" + a);

//to change lower case
a = first_name.toLowerCase();
console.log("Lowercase:" + a);

//index of char
second_name = "pranavika";
a = second_name.indexOf("r");
console.log("indexof r:" + a);

//lastindex
a = second_name.lastIndexOf("a");
console.log("lastindexof a:" + a);

//char of index
a = second_name.charAt(3);
console.log("charAt 3:" + a);

//ASCII of char
a = second_name.charCodeAt(3);
console.log("charcodeAt 3:" + a);

//substring
a = second_name.substr(0, 3);
console.log("substr:" + a);

a = second_name.substring(0, 3);
console.log("substring:" + a);

let text = "0123457890";
a = text.substring(0, 4);
console.log("substring: " + a);

a = text.substring(4); //when mousehover got ? at end.so tats not important
console.log("subsstring: " + a);

a = text.substring(4, 0);
console.log("substring: " + a);

a = text.substring(25, 30);
console.log("substring invalid length: " + a);

a = text.substring(-3);
console.log("substring negative index: " + a);

//slice
a = text.slice(0, 4);
console.log("slice: " + a);
a = text.slice(2, 4);
console.log("slice: " + a);

a = text.slice(4); //when mousehover got ? at end.so tats not important
console.log("slice: " + a);

a = text.slice(4, 0);
console.log("slice: " + a);

a = text.slice(25, 30);
console.log("slice invalid length: " + a);

a = text.slice(-3);
console.log("slice negative index: " + a);

//split
let str = "welcome to all";
a = str.split(" ");
console.log("split:" + a);
console.table(a);

//replace
a = "I am from Madurai";
console.log("before replace:" + a);

a = a.replace("Madurai", "Chennai");
console.log("after replace:" + a);

//includes
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
console.log(pets.includes("rat"));

//trim
a = " Banu ";
console.log("Before trim:" + a.length);
a = a.trim();
console.log("After trim:" + a.length);

//padStart padEnd
a = "5";
a = a.padStart(4, 0);
console.log(a);

a = "5";
a = a.padEnd(4, 0);
console.log(a);

a = "5";
a = a.padEnd(4, "$");
console.log(a);

//long literals
//method-1
let longString =
  "C is a general-purpose computer programming language." +
  "It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential." +
  "By design, C's features cleanly reflect the capabilities of the targeted CPUs.";
console.log(longString);

//method-2
let longString1 =
  "C is a general-purpose computer programming language.\
  It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential.\
  By design, C's features cleanly reflect the capabilities of the targeted CPUs.";
console.log(longString1);

//String.fromCharCode()
console.log(String.fromCharCode(65));
console.log(String.fromCharCode(65, 66, 67, 68));
console.log(String.fromCharCode(97, 98, 99, 122));

//Template string
let full_name = "Ram";
let age = "35";
let city = "Madurai";
let role = "sw Engineer";

let output = "";
output =
  "<table border='1'><tr><th>Names</th><td>" +
  full_name +
  "</td></tr><tr><th>age</th><td>" +
  age +
  "</td></tr><tr><th>city</th><td>" +
  city +
  "</td></tr><tr><th>role</th><td>" +
  role +
  "</td></tr></table>";

//es-5
output =
  "<hr><table border='1'>" +
  "<tr><th>Names</th><td>" +
  full_name +
  "</td></tr>" +
  "<tr><th>Age</th><td>" +
  age +
  "</td></tr>" +
  "<tr><th>city</th><td>" +
  city +
  "</td></tr>" +
  "<tr><th>role</th><td>" +
  role +
  "</td></tr>" +
  "</table>";

//es-6
output = `<hr><table border='1'>
  <tr><th>Names</th><td>
  ${full_name}
  </td></tr>
  <tr><th>Age</th><td>
  ${age} 
  </td></tr>
  <tr><th>city</th><td>
  ${city}
  </td></tr>
  <tr><th>role</th><td>
  ${role}</td></tr>
  </table>`;

document.body.innerHTML = output;
