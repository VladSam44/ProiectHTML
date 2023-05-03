function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    if (user != null && JSON.parse(user).password == password) {
        alert("Autentificare reușită!");
    } else {
        alert("Nume de utilizator sau parolă incorectă!");
    }
}

function register() {
    var username = document.getElementById("reg-username").value;
    var password = document.getElementById("reg-password").value;
    var user = {username: username, password: password};
    localStorage.setItem(username, JSON.stringify(user));
    alert("Înregistrare reușită!");
}