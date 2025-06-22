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
    hypertrack: {
        title: "HyperTrack",
        category: "Health-Focused App Design",
        skills: ["Figma"],
        description:
            "A self-monitoring app for hypertension patients that supports behavior change.",
        image: "assets/imgs/HyperTrack.png",
        link: "https://www.behance.net/gallery/219798105/HyperTrack",
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
};

document.addEventListener("DOMContentLoaded", function () {
    const workItems = document.querySelectorAll(".work-list li");
    const workDisplay = document.getElementById("workDisplay");

    workItems.forEach((item) => {
        item.addEventListener("click", () => {
            const key = item.dataset.work;
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
            ${project.skills.map(skills => `<span class="skills-bubble">${skills}</span>`).join('')}
          </div>
        </div>
      </div>
    </a>
  `;
            }
        });
    });
});