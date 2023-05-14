const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
const username = urlParams.get("username");

function submitReview() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var rating = document.getElementById("rating").value;
  var review = document.getElementById("review").value.trim();

  //validarile recenziei
  if (!name || name.length < 3) {
    alert("Numele trebuie să conțină cel puțin 3 caractere!");
    return;
  }

  if (!email || !email.includes("@")) {
    alert("Introduceți o adresă de e-mail validă!");
    return;
  }

  if (!rating) {
    alert("Vă rugăm să selectați o evaluare!");
    return;
  }

  if (!review || review.length < 10) {
    alert("Recenzia trebuie să conțină cel puțin 10 caractere!");
    return;
  }

  var reviewObj = {
    name: name,
    email: email,
    rating: rating,
    review: review,
  };

  var reviews = localStorage.getItem("reviews");
  if (reviews) {
    reviews = JSON.parse(reviews);
  } else {
    reviews = [];
  }
  reviews.push(reviewObj);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  alert("Recenzia a fost trimisă cu succes!");
  document.getElementById("review-form").reset();
  window.location.href =
    "/Mainpage/mainpage.html?id=" + userId + "&username=" + username;
}
