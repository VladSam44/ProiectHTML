const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const locationInput = document.querySelector("#location");
const phoneInput = document.querySelector("#phone");
const editBtn = document.querySelector(".edit-button");
const saveBtn = document.querySelector(".save-button");
const formFields = document.querySelectorAll(
  "#profile-form input, #profile-form textarea, #profile-form select"
);
const params = new URLSearchParams(window.location.search);
const username = params.get("username");
const id = params.get("id");
const user = JSON.parse(localStorage.getItem(username));
const users = JSON.parse(localStorage.getItem("users")) || [];
const logoutButton = document.querySelector(".logout-button");

//seteaza casetele cu datele utilizatorului
document.getElementById("username").value = user.username;
document.getElementById("email").value = user.email;
document.getElementById("location").value = user.location;
document.getElementById("phone").value = user.phone;

editBtn.addEventListener("click", () => {
  formFields.forEach((field) => {
    if (field.id !== "username") {
      field.removeAttribute("disabled");
    }
  });
  editBtn.setAttribute("disabled", true);
});

saveBtn.addEventListener("click", () => {
  const userIndex = users.findIndex((user) => user.username === username);
  console.log(userIndex);
  const olduser = users[userIndex];

  olduser.email = document.getElementById("email").value;
  olduser.location = document.getElementById("location").value;
  olduser.phone = document.getElementById("phone").value;

  users[userIndex] = olduser;

  localStorage.setItem(user.username, JSON.stringify(olduser));
  localStorage.setItem("users", JSON.stringify(users));

  window.location.href =
    "/Mainpage/mainpage.html?id=" + user.id + "&username=" + user.username;
});

document.querySelector("#profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  editBtn.removeAttribute("disabled");
  formFields.forEach((field) => {
    field.setAttribute("disabled", true);
  });
});

// log out sterge cookie ul isLoggedIn
logoutButton.addEventListener("click", function () {
  document.cookie =
    "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "/Mainpage/mainpage.html";
});
