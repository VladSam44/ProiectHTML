function submitReview() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rating = document.getElementById("rating").value;
    var review = document.getElementById("review").value;
    
    var reviewObj = {
        name: name,
        email: email,
        rating: rating,
        review: review
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
}