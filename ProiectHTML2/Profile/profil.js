const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const locationInput = document.querySelector('#location');
const phoneInput = document.querySelector('#phone');
const editBtn = document.querySelector(".edit-button");
const formFields = document.querySelectorAll("#profile-form input, #profile-form textarea, #profile-form select");

editBtn.addEventListener("click", () => {
  formFields.forEach((field) => {
    field.removeAttribute("disabled");
  });
  editBtn.setAttribute("disabled", true);
});

document.querySelector("#profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // salvare profil
  editBtn.removeAttribute("disabled");
  formFields.forEach((field) => {
    field.setAttribute("disabled", true);
  });
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const userData = {
    username: usernameInput.value,
    email: emailInput.value,
    location: locationInput.value,
    phone: phoneInput.value,
  };
  
  localStorage.setItem('userData', JSON.stringify(userData));
  
  alert('Datele au fost salvate în localStorage!');
});
