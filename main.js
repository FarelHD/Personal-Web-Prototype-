// anim 1

window.addEventListener("scroll", function () {
  var element = document.querySelector(".left");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".right");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".center");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

//anim 2
window.addEventListener("scroll", function () {
  var element = document.querySelector(".left1");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".right1");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".center1");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

//anim 3
window.addEventListener("scroll", function () {
  var element = document.querySelector(".left2");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".right2");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".center2");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

//anim 4
window.addEventListener("scroll", function () {
  var element = document.querySelector(".left3");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".right3");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".center3");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

// anim footer
window.addEventListener("scroll", function () {
  var element = document.querySelector(".totheTop");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

// anim judul
window.addEventListener("scroll", function () {
  var element = document.querySelector(".JTop");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".JTop2");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".JTop3");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".JTop4");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});

// animasi about

document.addEventListener("DOMContentLoaded", () => {
  const anim = document.querySelectorAll(".transLeft, .transRight");

  const slide = () => {
    anim.forEach((slider) => {
      const slideTop = slider.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (slideTop < windowHeight - 100) {
        slider.classList.add("visible");
      }
    });
  };

  slide();

  window.addEventListener("scroll", slide);
});
