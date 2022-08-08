function test() {
  var uid = document.getElementById("username").value;
  var em = document.getElementById("email").value;
  var pw = document.getElementById("password").value;

  alert(uid + em + pw);

  localStorage.setItem("uid", uid);
  localStorage.setItem("em", em);
  localStorage.setItem("pw", pw);

  //var user = localstorage.getItem("uid");
  //var email = localstorage.getItem("em");
  //var pass = localstorage.getItem("pw");

  console.log(localStorage.getItem("uid"));
  console.log(localStorage.getItem("em"));
  console.log(localStorage.getItem("pw"));
}

function del() {
  //localStorage.removeItem("pw");
  localStorage.clear();
}
