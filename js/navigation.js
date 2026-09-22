/* =========================================================
   LALAN KUMAR PORTFOLIO
   NAVIGATION JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");


    /* =====================================================
       MOBILE MENU TOGGLE
    ====================================================== */

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuBtn.setAttribute(
                "aria-label",
                isOpen
                    ? "Close Menu"
                    : "Open Menu"
            );

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuBtn.textContent =
                isOpen
                    ? "✕"
                    : "☰";

        });


        /* =================================================
           CLOSE MENU AFTER CLICKING A LINK
        ================================================== */

        const navItems =
            navLinks.querySelectorAll("a");

        navItems.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* =================================================
           CLOSE MENU WHEN CLICKING OUTSIDE
        ================================================== */

        document.addEventListener("click", (event) => {

            const clickedInsideMenu =
                navLinks.contains(event.target);

            const clickedButton =
                menuBtn.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedButton &&
                navLinks.classList.contains("active")
            ) {

                navLinks.classList.remove("active");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION LINK
    ====================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const links =
        document.querySelectorAll(
            ".nav-links a"
        );


    function updateActiveLink() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        links.forEach((link) => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href === `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    updateActiveLink();

});
