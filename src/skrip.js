document.addEventListener("DOMContentLoaded", () => {
  const reservationButton = document.getElementById("reservationButton");
  const reservationPanel = document.getElementById("reservationPanel");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Toggle reservation panel
  reservationButton.addEventListener("click", () => {
    reservationPanel.classList.toggle("translate-x-full");
  });

  // Toggle mobile nav menu
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });

  // Navbar fixed effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      header.classList.add("nav-fix");
      navbar.classList.add("bg-scrolled");
    } else {
      header.classList.remove("nav-fix");
      navbar.classList.remove("bg-scrolled");
    }
  });
});

// JavaScript to handle loading more items
document.addEventListener("DOMContentLoaded", function () {
  const menuGrid = document.getElementById("menu-grid");
  const swipeMore = document.getElementById("swipe-more");

  menuGrid.addEventListener("scroll", function () {
    const scrollHeight = menuGrid.scrollHeight;
    const scrollTop = menuGrid.scrollTop;
    const clientHeight = menuGrid.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      swipeMore.style.display = "none";
    } else {
      swipeMore.style.display = "block";
    }
  });
});

// Fungsi untuk menampilkan ulasan dari LocalStorage
function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const reviewSection = document.getElementById("review-section");
  reviewSection.innerHTML = ""; // Kosongkan ulasan lama

  reviews.forEach((review) => {
    const card = createReviewCard(review.name, review.rating, review.review);
    reviewSection.appendChild(card);
  });
}

// Fungsi untuk membuat elemen card ulasan
function createReviewCard(name, rating, review) {
  const card = document.createElement("div");
  card.classList.add("card", "bg-white", "shadow-lg", "rounded-lg", "p-4", "m-2", "flex-shrink-0");
  card.style.width = "250px";

  const nameElement = document.createElement("h2");
  nameElement.classList.add("text-lg", "font-bold");
  nameElement.textContent = name;

  const ratingElement = document.createElement("div");
  ratingElement.classList.add("flex", "items-center", "mb-2");
  const starElement = document.createElement("div");
  starElement.classList.add("text-yellow-500");
  starElement.textContent = "★".repeat(rating);

  const reviewElement = document.createElement("p");
  reviewElement.classList.add("text-gray-600");
  reviewElement.textContent = review;

  ratingElement.appendChild(starElement);
  card.appendChild(nameElement);
  card.appendChild(ratingElement);
  card.appendChild(reviewElement);

  return card;
}

// Fungsi untuk menambahkan ulasan baru
function addReview() {
  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const review = document.getElementById("review").value;

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const newReview = { name, rating, review };

  reviews.unshift(newReview); // Tambahkan ulasan baru di awal array
  localStorage.setItem("reviews", JSON.stringify(reviews));

  // Tambahkan card baru ke section ulasan
  const reviewSection = document.getElementById("review-section");
  const card = createReviewCard(name, rating, review);
  reviewSection.insertBefore(card, reviewSection.firstChild);

  // Reset form
  document.getElementById("review-form").reset();
}

// Panggil fungsi displayReviews saat halaman dimuat
window.onload = displayReviews;
