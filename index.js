const tabData = [
  {
    title: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    imageSrc: "./images/illustration-features-tab-1.svg",
  },
  {
    title: "Intelligent search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    imageSrc: "./images/illustration-features-tab-2.svg",
  },
  {
    title: "Share your bookmarks",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    imageSrc: "./images/illustration-features-tab-3.svg",
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
