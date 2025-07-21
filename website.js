const projects = {
    hydrosustain: {
        title: "HydroSustain",
        category: "Sustainable Product Design",
        skills: ["Arduino", "Laser Cutting"],
        description:
            "An integrated hydroponic and dehumidification system for sustainable indoor plant cultivation.",
        image: "assets/imgs/HydroSustain.png",
        link: "https://www.behance.net/gallery/213090811/HydroSustain",
    },
    inksight: {
        title: "InkSight",
        category: "User Research & XR Prototype",
        skills: ["Unity", "Figma", "ShapesXR"],
        description:
            "An interactive XR reading prototype designed to enhance comprehension and user engagement.",
        image: "assets/imgs/InkSight.png",
        link: "https://www.behance.net/gallery/210934825/InkSight",
    },

    fadedsoul: {
        title: "FadedSoul",
        category: "3D Game Development",
        skills: ["Unity"],
        description:
            "A third-person 3D platformer game with immersive particle systems and custom shaders.",
        image: "assets/imgs/FadedSoul.png",
        link: "https://feit-comp30019.github.io/2024s2/#/preview/play-station/2/364327ada9aedeaa09cf7fa91292a8de32c46e05",
    },

    hypertrack: {
        title: "HyperTrack",
        category: "Health-Focused App Design",
        skills: ["Figma"],
        description:
            "A self-monitoring app for hypertension patients that supports behavior change.",
        image: "assets/imgs/HyperTrack.png",
        link: "https://www.behance.net/gallery/219798105/HyperTrack",
    },

    studyhub: {
        title: "StudyHub",
        category: "Service Design",
        skills: ["WCAG", "Sketch", "Miro", "Voiceflow"],
        description:
            "An inclusive service designed to empower students with confidence and foster meaningful peer interactions.",
        image: "assets/imgs/StudyHub.png",
        link: "https://www.canva.com/design/DAGGaAuR8Z8/nM7iaGxZanvkQcaPZCZveg/view?utm_content=DAGGaAuR8Z8&utm_campaign=designshare&utm_medium=link&utm_source=editor#1",
    },


};

document.addEventListener("DOMContentLoaded", function () {
    const workItems = document.querySelectorAll(".work-list li");
    const workDisplay = document.getElementById("workDisplay");

    function showProject(key) {
        const project = projects[key];
        if (project) {
            workDisplay.innerHTML = `   
                <a href="${project.link}" target="_blank" class="project-card-link">
                    <div class="project-card">
                        <img src="${project.image}" alt="${project.title}" class="project-image" />
                        <div class="project-content">
                            <p class="project-category">${project.category}</p>
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="project-skills">
                                ${project.skills.map(skill => `<span class="skills-bubble">${skill}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </a>
            `;
        }
    }

    // Show default project on page load
    showProject("hydrosustain");

    // Click event to switch projects
    workItems.forEach((item) => {
        item.addEventListener("click", () => {
            const key = item.dataset.work;
            showProject(key);
        });
    });

    // Removed custom cursor element creation and related code

    // Show label and change cursor style by showing tooltip instead
    function addPointerState(labelText) {
        let tooltip = document.getElementById("hover-tooltip");
        if (!tooltip) {
            tooltip = document.createElement("div");
            tooltip.id = "hover-tooltip";
            tooltip.style.position = "fixed";
            tooltip.style.background = "rgba(255, 214, 229, 0.9)";
            tooltip.style.color = "rgb(195, 90, 128)";
            tooltip.style.padding = "6px 12px";
            tooltip.style.borderRadius = "6px";
            tooltip.style.fontSize = "16px";
            tooltip.style.pointerEvents = "none";
            tooltip.style.zIndex = "100";
            document.body.appendChild(tooltip);
        }
        tooltip.textContent = labelText;
        document.addEventListener("mousemove", positionTooltip);
        tooltip.style.display = "block";
    }

    function positionTooltip(e) {
        const tooltip = document.getElementById("hover-tooltip");
        if (tooltip) {
            tooltip.style.left = (e.clientX + 15) + "px";
            tooltip.style.top = (e.clientY + 15) + "px";
        }
    }

    // Reset cursor style and remove label by hiding tooltip
    function removePointerState() {
        const tooltip = document.getElementById("hover-tooltip");
        if (tooltip) {
            tooltip.style.display = "none";
            document.removeEventListener("mousemove", positionTooltip);
        }
    }

    // Hover behavior for project names
    const projectNameElements = document.querySelectorAll(".work-list li");
    projectNameElements.forEach(el => {
        el.addEventListener("mouseenter", () => addPointerState("Click for Project Overview"));
        el.addEventListener("mouseleave", removePointerState);
    });

    // Hover behavior for project card
    const projectCardContainer = document.getElementById("workDisplay");
    projectCardContainer.addEventListener("mouseenter", (e) => {
        if (e.target.closest(".project-card")) {
            addPointerState("Click for Details");
        }
    }, true);

    projectCardContainer.addEventListener("mouseleave", (e) => {
        if (e.target.closest(".project-card")) {
            removePointerState();
        }
    }, true);
});