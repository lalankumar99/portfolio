/* =========================================================
   LALAN KUMAR PORTFOLIO
   PROJECTS JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PROJECT DATA
    ====================================================== */

    const projects = [

        {
            id: 1,

            title: "Polytechnic Hub",

            description:
                "An educational platform for Polytechnic students with notes, courses, quizzes and study resources.",

            image:
                "assets/images/projects/project-1.png",

            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ],

            link: "#"
        },


        {
            id: 2,

            title: "Personal Portfolio",

            description:
                "A responsive personal portfolio website designed with a modern Electrical Engineering technology theme.",

            image:
                "assets/images/projects/project-2.png",

            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ],

            link: "#"
        }

    ];


    /* =====================================================
       PROJECT CONTAINER
    ====================================================== */

    const projectContainer =
        document.querySelector(
            ".projects-grid"
        );


    /*
     * The HTML already contains project cards.
     *
     * Therefore we do not automatically replace
     * them here.
     *
     * Project data is available for future features
     * such as filtering, searching and dynamic cards.
     */


    /* =====================================================
       PROJECT LINKS
    ====================================================== */

    const projectLinks =
        document.querySelectorAll(
            ".project-link"
        );


    projectLinks.forEach((link, index) => {

        link.addEventListener(
            "click",
            (event) => {

                const project =
                    projects[index];


                if (
                    !project ||
                    !project.link ||
                    project.link === "#"
                ) {

                    event.preventDefault();

                    console.log(
                        `Project ${project?.title || "Unknown"} link is not configured yet.`
                    );

                    return;

                }

                link.href =
                    project.link;

            }
        );

    });


    /* =====================================================
       PROJECT CARD HOVER EFFECT
    ====================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "project-hover"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "project-hover"
                );

            }
        );

    });


    /* =====================================================
       PROJECT COUNT
    ====================================================== */

    const projectCount =
        document.querySelector(
            ".project-count"
        );


    if (projectCount) {

        projectCount.textContent =
            projects.length;

    }


    /* =====================================================
       EXPORT DATA FOR FUTURE USE
    ====================================================== */

    window.portfolioProjects =
        projects;

});
