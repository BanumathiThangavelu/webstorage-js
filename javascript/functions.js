//sample function
function addition() {
  console.log(2 + 3);
}

addition();

//passing attributes
function sub(a, b) {
  console.log(a - b);
}

sub(5, 2);

//return
function samplefun(a, b) {
  return a + b;
}
x = samplefun(4, 7);
console.log(x);

//anonymous function
sample_function = function () {
  console.log("anonymous function");
};
sample_function();

//callback function
function mainFun(getcallFun) {
  console.log("Main function executed");
  getcallFun();
}
function callback() {
  console.log("callback function executed");
}
mainFun(callback);

//self invoking function ()()
(function sampleFunction() {
  console.log("Self Invoking Function");
})();

//setTimeout
/*setTimeout(() => {
  console.log("Execute after 4sec");
}, 4000);

//setInterval
setInterval(() => {
  console.log("Execute every two seconds");
}, 2000);*/

//setTimeout
console.log(1);
console.log(2);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

//setInterval and stop the process of setInterval
let id1 = setInterval(() => {
  console.log(1);
}, 1000);

setTimeout(() => {
  clearInterval(id1);
}, 2001);

//promise
let promise = new Promise(function (resolve, reject) {
  reject("sorry some error occured!!");
  resolve("process is successfull");
});

//promise
//  .then((value) => {
//    console.log(value);
//  })
//  .catch((err) => {
//    console.log(err);
//  });

//instead of using then,catch we can use async,await
const getData = async () => {
  try {
    const data = await promise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
getData();

//promises

const willCleanTheRoom = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cleanRoom = false;
    if (cleanRoom) {
      resolve("Room is clean");
    } else {
      reject("Room is still dirty");
    }
  }, 3000);
});

//const removeGarbage = new Promise((resolve))

willCleanTheRoom
  .then((resolveStatus) => {
    console.log("resolveStatus::", resolveStatus);
  })
  .catch((rejectStatus) => {
    console.log("rejectStatus::", rejectStatus);
  })
  .finally(() => {
    console.log("will be called regardless");
  });
