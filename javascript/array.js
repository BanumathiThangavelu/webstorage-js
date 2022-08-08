//array sample
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

//join two arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);
console.table(children);

//join three arrays
const arr3 = ["Cecilie", "Lone"];
const arr4 = ["Emil", "Tobias", "Linus"];
const arr5 = ["Robin"];
const childrens = arr3.concat(arr4, arr5);
console.table(childrens);

//Concatenate nested arrays
const a1 = [1, 2, [3, 4]];
const a2 = [[5, 6], 7, 8];
const a3 = a1.concat(a2);
console.log(a3);
console.table(a3);

//array constructor
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text1 = fruits.constructor;
console.log(text1);

//creating array using constructor
let construc = new Array("Banu", 30, true, { m1: 100, m2: 45, m3: 67 });
console.log(construc);
console.table(construc);

//fill
//1.fill all elements
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.fill("Kiwi");
console.log(fruit);

//2.fill last two elements
fru = ["Banana", "Orange", "Apple", "Mango"];
fru.fill("Kiwi", 2, 4);
console.log(fru);

//filter
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

//find
const age_1 = [3, 30, 16, 40, 50];
const result_1 = age_1.find(checkAdult);

function checkAdult(age) {
  return age > 18;
}
console.log(result_1);

//findindex(using callback fn)
const num = [10, 3, 18, 20];

let even = num.findIndex((number) => {
  return number % 2 == 0;
});
console.log(even);
//using function

//y = num.findIndex(even);
//
//function even(number) {
//  return number % 2 == 0;
//}
//console.log(y);

//forEach-iterate each value
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.forEach((value) => {
  console.log(value);
});

number.forEach((value, index) => {
  console.log("Index:" + index, "value:" + value);
});

const mark = [
  { m1: 20, m2: 45, m3: 60 },
  { m1: 25, m2: 50, m3: 61 },
  { m1: 90, m2: 44, m3: 65 },
  { m1: 60, m2: 87, m3: 63 },
  { m1: 80, m2: 98, m3: 76 },
];
mark.forEach((value) => {
  console.log(value.m1);
});

//map
numbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqrt = numbers_1.map((value) => {
  return Math.sqrt(value);
});
console.log(sqrt);
console.table(sqrt);

numbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqrt_1 = numbers_1.map((value) => {
  return Math.sqrt(value).toFixed(2);
});
console.log(sqrt_1);
console.table(sqrt_1);

//slice
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
console.log("slice:" + numbers.slice());
console.log("slice(2):" + numbers.slice(2));
console.log("slice(2,5):" + numbers.slice(2, 5));

//splice-remove elements from array
const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("before splice:" + n1);
let removed_elements = n1.splice(2);
console.log("removed elements:" + removed_elements);
console.log("after splic n1:" + n1);

const n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("before splice:" + n2);
let removed_element = n2.splice(2, 5);
console.log("removed elements:" + removed_element);
console.log("after splic n2:" + n2);

const n3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("before splice:" + n3);
let removed_ele = n3.splice(2, 5, 11, 12);
console.log("removed elements:" + removed_ele);
console.log("after splic n3:" + n3);

//sort
fname = ["Banu", "Sai", "Raghu", "Pranavi", "Thamizh"];
console.log("before sort:" + fname);

fname.sort();
console.log("after sort:" + fname);

count = [1, 20, 39, 43, 9, 4, 8, 2];
console.log("before sort:" + count);

count.sort();
console.log("after sort:" + count);
//ascending
count.sort((a, b) => {
  return a - b;
});
console.log(count);
//descending
count.sort((a, b) => {
  return b - a;
});
console.log(count);

//filter
let electronics = ["tv", "mobilephone", "fridge"];
const result1 = electronics.filter(checkmobiles);

function checkmobiles(value) {
  return value != "tv";
}
console.log(result1);

//above function using arrow fn
let electronicss = ["tv", "mobilephone", "fridge"];
const result2 = electronicss.filter(checkmobiles);

checkmobiles = (value) => {
  return value != "tv";
};
console.log(result2);

//arrow function
let electronicssss = ["tv", "mobilephone", "fridge"];
const resultsss1 = electronicssss.filter((i) => i != "fridge");

console.log(resultsss1);

//map--like for loop...iterate all the elements in a array
//used to get the elements from array
const arr = [1, 2, 3, 4, 5];
arr.map((item, a) => {
  console.log(item, a); //a for getting index.
});

//map used in objects to get a particular value and also its index
const users = [
  {
    name1: "banu",
    contact: 9787812965,
  },
  {
    name1: "shalu",
    contact: 9176989353,
  },
  {
    name1: "banu",
    contact: 9176989353,
  },
  {
    name1: "mathi",
    contact: 9876532965,
  },
];
users.map((item) => {
  console.log(item.name1);
});

//filter -used to get the filtered array based on some condition.
const names = users.filter((user) => {
  return user.name1 != "mathi";
});
console.log(names);

//addition using map
let sum = 0;
arr.map((item) => {
  sum = sum + item;
});
console.log(sum);

//samething achieved by reduce function
let initialValue = 0;
const sum1 = arr.reduce((previousvalue, currentvalue) => {
  return previousvalue + currentvalue;
}, initialValue); //if u remove this initial value here,
//it will assign previous value as 0 initially.
console.log(sum1);
