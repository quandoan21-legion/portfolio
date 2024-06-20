let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    var selected = document.getElementsByClassName("active");
    selected[0].className = selected[0].className.replace(" active", "");
    link.className += " active";
  });
});

document.querySelector(".icon").addEventListener("click", () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

// Validate form data
const submitBtn = document.getElementById("submit-btn");

const validate = (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (name.value === "") {
    alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (email.value === "") {
    alert("Please enter your email address.");
    email.focus();
    return false;
  }

  if (message.value === "") {
    alert("Please enter your message address.");
    message.focus();
    return false;
  }

  if (!emailIsValid(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  return true; // Can submit the form data to the server
};

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

submitBtn.addEventListener("click", validate);
