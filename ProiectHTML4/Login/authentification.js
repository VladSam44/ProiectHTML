// functia logare verifica daca exista utilizatorul in local storage si seteaza un cookie care spune ca utilizatorul este logat

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = JSON.parse(localStorage.getItem(username));

  if (user != null && user.password == password) {
    alert("Autentificare reușită!");

    document.cookie =
      "isLoggedIn=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    window.location.href =
      "/Mainpage/mainpage.html?id=" + user.id + "&username=" + user.username;
  } else {
    alert("Nume de utilizator sau parolă incorectă!");
  }
}
function inrg(){
  window.location.href= "/Register/register.html"
}
//functie inregistrare cu validatoare
function register() {
  function isValidEmail(email) {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  var username = document.getElementById("reg-username").value;
  var password = document.getElementById("reg-password").value;
  var email = document.getElementById("reg-email").value;
  var location = document.getElementById("reg-location").value;
  var phone = document.getElementById("reg-phone").value;

  if (localStorage.getItem(username)) {
    alert("Acest nume de utilizator există deja. Vă rugăm să alegeți altul.");
    return;
  }
  if (username.length < 6) {
    alert("Username must be at least 6 characters");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Invalid email format");
    return;
  }

  if (!isValidPhone(phone)) {
    alert("Invalid phone number format");
    return;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];
  var userId = users.length + 1;

  var newUser = {
    id: userId,
    username: username,
    password: password,
    email: email,
    location: location,
    phone: phone,
  };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem(username, JSON.stringify(newUser));

  alert("Înregistrare reușită!");
}

function dejaC () {
  window.location.href= "/Login/login.html";
}