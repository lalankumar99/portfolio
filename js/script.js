/* =========================================================
   LALAN KUMAR PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       1. CURRENT YEAR
    ====================================================== */

    const yearElement =
        document.querySelector(".footer-bottom p");

    if (yearElement) {

        const currentYear =
            new Date().getFullYear();

        yearElement.innerHTML =
            `© ${currentYear} Lalan Kumar. All Rights Reserved.`;

    }


    /* =====================================================
       2. SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .about-image, .about-content, .skill-card, .project-card, .certificate-card, .contact-info, .contact-form"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            element.classList.add(
                "reveal"
            );

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add(
                "is-visible"
            );

        });

    }


    /* =====================================================
       3. SMOOTH ANCHOR SCROLL
    ====================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    const header =
                        document.querySelector(
                            ".header"
                        );

                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;

                    const targetPosition =
                        target.getBoundingClientRect()
                            .top
                        +
                        window.scrollY
                        -
                        headerHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }

            }
        );

    });


    /* =====================================================
       4. CONTACT FORM
    ====================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    contactForm
                        .querySelector(
                            '[name="name"]'
                        )
                        ?.value
                        .trim();


                const email =
                    contactForm
                        .querySelector(
                            '[name="email"]'
                        )
                        ?.value
                        .trim();


                const subject =
                    contactForm
                        .querySelector(
                            '[name="subject"]'
                        )
                        ?.value
                        .trim();


                const message =
                    contactForm
                        .querySelector(
                            '[name="message"]'
                        )
                        ?.value
                        .trim();


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    alert(
                        "Please fill in all fields."
                    );

                    return;

                }


                /*
                 * Temporary form handling.
                 *
                 * Later we can connect this form
                 * with Formspree, EmailJS, Firebase
                 * or your own backend.
                 */

                alert(
                    `Thank you, ${name}! Your message has been received.`
                );


                contactForm.reset();

            }
        );

    }


    /* =====================================================
       5. IMAGE ERROR HANDLING
    ====================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

            }
        );

    });


    /* =====================================================
       6. PREVENT EMPTY PROJECT LINKS
    ====================================================== */

    const emptyLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    emptyLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

            }
        );

    });


    /* =====================================================
       7. BACK TO TOP
    ====================================================== */

    const backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 500
                ) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =====================================================
       8. CONSOLE INFORMATION
    ====================================================== */

    console.log(
        "Lalan Kumar Portfolio loaded successfully."
    );

});
