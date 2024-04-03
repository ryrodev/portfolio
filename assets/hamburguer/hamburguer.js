const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.links-menu');

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            menu.classList.toggle("active");
        })