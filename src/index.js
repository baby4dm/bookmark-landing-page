const tabData = [
  {
    title: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    imageSrc: "/images/illustration-features-tab-1.svg",
  },
  {
    title: "Intelligent search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    imageSrc: "/images/illustration-features-tab-2.svg",
  },
  {
    title: "Share your bookmarks",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    imageSrc: "/images/illustration-features-tab-3.svg",
  },
];

const tabElements = document.querySelectorAll(".features-element");
const contentImage = document.querySelector(".description-img");
const contentTitle = document.querySelector(".title");
const contentParagraph = document.querySelector(".content");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".close-btn");

function updateContent(index) {
  contentTitle.style.opacity = "0";
  contentParagraph.style.opacity = "0";
  contentImage.style.opacity = "0";

  tabElements.forEach((element, i) => {
    if (i === index) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });

  setTimeout(() => {
    contentTitle.textContent = tabData[index].title;
    contentParagraph.textContent = tabData[index].content;
    contentImage.src = tabData[index].imageSrc;

    contentTitle.style.opacity = "1";
    contentParagraph.style.opacity = "1";
    contentImage.style.opacity = "1";
  }, 250);
}

tabElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    updateContent(index);
  });
});

updateContent(0);

menuToggle.addEventListener("click", () => {
  mobileNav.classList.add("open");
  menuToggle.classList.add("hidden");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  menuToggle.classList.remove("hidden");
  document.body.style.overflow = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("emailInput");
  const errorIcon = document.getElementById("errorIcon");
  const errorMessage = document.getElementById("errorMessage");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const SUCCESS_CLASS = "input-success-border";
  const ERROR_CLASS = "input-invalid";
  const ERROR_BOTTOM_FIX_CLASS = "input-invalid-bottom-fix";
  const SUCCESS_MESSAGE_TEXT = "Thank you! We'll be in touch.";
  const ERROR_MESSAGE_TEXT = "Whoops, make sure it's an email";

  const resetStyles = () => {
    emailInput.classList.remove(
      ERROR_CLASS,
      ERROR_BOTTOM_FIX_CLASS,
      SUCCESS_CLASS
    );
    errorIcon.classList.add("hidden");
    errorMessage.classList.add("hidden");
    errorMessage.textContent = ERROR_MESSAGE_TEXT;
  };

  const validateAndToggleError = (input) => {
    const value = input.value.trim();
    const isEmailValid = emailRegex.test(value);
    const isEmpty = value === "";
    resetStyles();

    if (isEmpty || !isEmailValid) {
      input.classList.add(ERROR_CLASS, ERROR_BOTTOM_FIX_CLASS);
      errorIcon.classList.remove("hidden");
      errorMessage.classList.remove("hidden");
      errorMessage.textContent = ERROR_MESSAGE_TEXT;
      return false;
    } else {
      return true;
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = validateAndToggleError(emailInput);

    if (isValid) {
      resetStyles();
      emailInput.classList.add(SUCCESS_CLASS);

      errorMessage.classList.add("success-message");
      errorMessage.classList.remove("hidden");
      errorMessage.textContent = SUCCESS_MESSAGE_TEXT;

      setTimeout(() => {
        emailInput.value = "";
        resetStyles();
      }, 3000);

      return;
    }

  });

  emailInput.addEventListener("input", () => {
    validateAndToggleError(emailInput);
  });

  resetStyles();
});
