// Open fixed navbar when toggle menu is clicked in mobile.
let navCollapseEle = document.getElementById("collapse");

navCollapseEle.addEventListener("click", () => {
  navCollapseEle.classList.toggle("open");
  document.querySelector("nav").classList.toggle("fixed-nav");
});

// Add active class to navbar links when they are clicked.

let navLinks = document.querySelectorAll(".nav-links .link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((a) => {
      a.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Show move up when scrolling down in the web page.
window.onscroll = () => {
  if (window.scrollY > 800) {
    moveUp.style.opacity = "1";
    moveUp.style.bottom = "3rem";
  } else {
    moveUp.style.opacity = "0";
    moveUp.style.bottom = "-5rem";
  }
};

// Open modal of portfolio images

let portfolioLinks = document.querySelectorAll(".portfolio-item .layer .links .link:first-child");

portfolioLinks.forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault();

    let modal = document.createElement("div");
    modal.className = "modal";
    modal.addEventListener("click", (event) => {
      if (event.target.className == "modal") {
        modal.remove();
      }
    });

    let closeBtn = document.createElement("button");
    closeBtn.innerHTML = "&times;";
    closeBtn.className = "close";
    closeBtn.onclick = () => modal.remove();

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    let img = document.createElement("img");
    img.src = link.href;

    modalContent.appendChild(img);
    modal.appendChild(modalContent);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
  };
});
