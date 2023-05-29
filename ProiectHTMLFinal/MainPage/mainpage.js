const menuCard = document.getElementById("menu-card");
const userLink = document.getElementById("user-link");
const feedBackLink = document.getElementById("feedback");
const cartPage = document.getElementById("cart");
const canvas = document.getElementById('myCanvas');
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
const username = urlParams.get("username");

function getDecryptedCookie(cookieName) {
  const cookies = document.cookie.split(";").map(cookie => cookie.trim());
  const secretKey = "aBcD1234!@#$";

  for (const cookie of cookies) {
    if (cookie.startsWith(`${cookieName}=`)) {
      const encryptedValue = cookie.split("=")[1];
      const decryptedValue = CryptoJS.AES.decrypt(decodeURIComponent(encryptedValue), secretKey).toString(CryptoJS.enc.Utf8);
      return decryptedValue;
    }
  }

  return null; // Cookie not found or invalid format
}

document.addEventListener('DOMContentLoaded', () => {
  const userId = getDecryptedCookie('userId');
  const username = getDecryptedCookie('username');

  if (userId && username) {
    if (window.location.pathname !== "/Mainpage/mainpage.html") {
      window.location.href = "/Mainpage/mainpage.html?id=" + userId + "&username=" + username;
    }
    
    // Perform further actions with the userID and username
  } else {
    console.log('Remember Me nu e setat.');
  }
});




//navigarea intre pagini
userLink.addEventListener("click", () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    userLink.href = "/Profile/profil.html?id=" + userId + "&username=" + username;
  } else {
    userLink.href = "/Login/login.html";
  }
});


menuCard.addEventListener("click", function () {
  window.location.href =
    "/Menupage/menupage.html?id=" + userId + "&username=" + username;
});

feedBackLink.addEventListener("click", function () {
  window.location.href =
    "/FeedBack/feedback.html?id=" + userId + "&username=" + username;
});

cartPage.addEventListener("click", function () {
  window.location.href =
    "/ShoppingKart/shoppingkart.html?id=" + userId + "&username=" + username;
});

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (let cookie of cookies) {
    const parts = cookie.split("=");
    if (parts[0] === name) {
      return parts[1];
    }
  }
  return undefined;
}

//animatie canvas footer
const ctx = canvas.getContext('2d');
canvas.width = 120;
canvas.height = 100;

const saltShakerImg = new Image();
saltShakerImg.src = '/images/salt.jpg';

const saltParticles = [];
for (let i = 0; i < 100; i++) {
  saltParticles.push({
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: Math.random() * 10 - 5,
    vy: Math.random() * 10 - 5,
    size: Math.random() * 5,
  });
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(saltShakerImg, canvas.width/2-50, canvas.height / 2 - 50, 100, 100);
  saltParticles.forEach(particle => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.1;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'gray';
    ctx.fill();
  });
}
animate();

