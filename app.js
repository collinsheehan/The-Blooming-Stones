// NAVBAR- show/hide links on click

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});

//CAROUSEL

let imgIndex = 1;
showImg(imgIndex);

function nextImg(n) {
    showImg(imgIndex += n);
}

function currentImage(n) {
    showImg(imgIndex = n);
}

function showImg(n) {
    let i;
    let images = document.getElementsByClassName("flower-wall-img");
    if (n > images.length) {
        imgIndex = 1;
    };
    if (n < 1) {
        imgIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[imgIndex-1].style.display = "block";
}

//Form Validation
function validateForm() {
    let x = document.forms["contactForm"]["femail"].value;
    if (x == "") {
      alert("email must be filled out");
      return true;
    } else {
        alert("Thank you!");
    }
  }