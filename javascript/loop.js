//if condition
//let hrs = new Date();
//console.log(hrs);
//console.log(hrs.getHours());
hour = new Date().getHours();
if (hour >= 0 && hour <= 13) {
  console.log("Good Morning");
} else if (hour >= 13 && hour <= 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

//switch case
let grade = "B";

switch (grade) {
  case "S":
    console.log("Super Grade");
    break;
  case "A":
  case "B": //if use of two case
    console.log("Excellent Grade");
    break;
  case "E":
    console.log("Just Pass");
    break;
  case "U":
    console.log("Failed");
    break;
  default:
    console.log("Unknown Grade");
}

//for loop
for (let i = 0; i <= 5; i++) {
  console.log("Number #", i);
}

for (let i = 10; i >= 1; i--) {
  //here i-inine type.we can use this i within this loop only.
  if (i % 2 !== 0) {
    console.log("Odd Number #" + i);
  }
}

//while loop
let i = 10;
while (i >= 1) {
  if (i % 2 == 0) {
    console.log("Even Numbers #" + i);
  }
  i--;
}

//do-while
let j = 10;
do {
  if (j % 2 == 0) {
    console.log("Even" + j);
  }
  j--;
} while (j >= 1);

//for-in
//used in objects
const person = { name: "Banu", age: 30, sex: "Female" };
for (let key in person) {
  console.log(key + ":", person[key]);
}

//used in array
let colors = ["red", "blue", "green"];
for (let i in colors) {
  console.log(i);
  //console.log(colors[i]);
}

//for-of
let col = ["red", "blue", "green"];
for (let clr of col) {
  console.log("color:" + clr);
}

//scope
//global scope
let message = "Hello World";
function hi() {
  console.log(message);
}
hi();

//local scope
function greet() {
  let msg = "Hai Banu";
  console.log(msg);
}
//console.log(msg);
greet();
