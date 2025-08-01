var swiper = new Swiper(".influencers-swiper", {
  slidesPerView: "auto",
  breakpoints: {
    576: {
      spaceBetween: 30,
      navigation: {
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    320: {
      spaceBetween: 15,
      navigation: {
        enabled: false,
      },
    },
  },
});

var swiper = new Swiper(".testimonials-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brands-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.getElementsByClassName("app-header")[0];

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop === 0) {
      header.classList.remove("has-shown");
    } else if (scrollTop < lastScrollTop) {
      header.classList.add("has-shown");
    } else {
      header.classList.remove("has-shown");
    }
    lastScrollTop = Math.max(scrollTop, 0);
  });
});

function searchToggle() {
  const searchbar = document.getElementsByClassName("search-bar")[0];
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  if (!isMobile) return;
  searchbar.classList.toggle("visible");
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementsByClassName("typing-input")[0];
  const texts = [
    "find your influencer",
    "What are you looking for",
    "And search here...",
  ];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[textIndex].length) {
      input.setAttribute(
        "placeholder",
        input.getAttribute("placeholder") + texts[textIndex].charAt(charIndex)
      );
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      input.setAttribute(
        "placeholder",
        texts[textIndex].substring(0, charIndex - 1)
      );
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
    }
  }

  type();
});
