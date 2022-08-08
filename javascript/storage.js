//localstorage
localStorage.setItem("Name1", "Banu");
console.log(localStorage.getItem("Name1"));
localStorage.setItem("Name2", "Sai");
console.log(localStorage.getItem("Name2"));
localStorage.setItem("Name3", "Pranavi");
console.log(localStorage.getItem("Name3"));
//localStorage.removeItem("Name1");
//localStorage.clear();

//sessionStorage
sessionStorage.setItem("Name4", "raghu");
console.log(sessionStorage.getItem("Name4"));
sessionStorage.setItem("Name5", "prasath");
console.log(sessionStorage.getItem("Name5"));
//sessionStorage.removeItem("Name4");
//sessionStorage.clear();

//cookie
document.cookie = "Name5=sree";
document.cookie = "Name6=sara;expires=" + new Date(2022, 10, 12); //we can set the expiry date
