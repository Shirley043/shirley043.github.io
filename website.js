const projects = {
    hydrosustain: {
        title: "HydroSustain",
        category: "Interactive System Design",
        tech: ["Adrino", "Laser Cutting"],
        description:
            "An integrated hydroponic and dehumidification system for sustainable indoor plant cultivation.",
        image: "assets/imgs/HydroSustain.png",
        link: "https://www.behance.net/gallery/213090811/HydroSustain",
    },
    inksight: {
        title: "InkSight",
        category: "Extended Reality Prototype",
        tech: ["Unity", "Figma", "ShapesXR"],
        description:
            "An interactive XR reading prototype designed to enhance comprehension and user engagement.",
        image: "assets/imgs/InkSight.png",
        link: "https://www.behance.net/gallery/210934825/InkSight",
    },
    hypertrack: {
        title: "HyperTrack",
        category: "Mobile Application Design",
        tech: ["Figma"],
        description:
            "A self-monitoring app for hypertension patients that supports behavior change.",
        image: "assets/imgs/HyperTrack.png",
        link: "https://www.behance.net/gallery/219798105/HyperTrack",
    },
    fadedsoul: {
        title: "FadedSoul",
        category: "Game Design",
        tech: ["Unity"],
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
                <a href="${project.link}" target="_blank" style="text-decoration: none; color: inherit;">
                  <div style="
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                    background-color: #fff;
                  ">
                    <div style="background-color: #e6f0ff; padding: 40px 0; text-align: center;">
                                            <img src="${project.image}" alt="${project.title}" style="width: 100%; object-fit: cover;" />
                    </div>
                    <div style="padding: 24px;">
                      <p style="color:rgb(195, 90, 128); font-weight: 600; font-size: 14px; letter-spacing: 0.5px; margin-bottom: 8px;">${project.category}</p>
                      <h3 style="font-size: 22px; font-weight: bold; margin-bottom: 12px; color: #1e293b;">${project.title}</h3>
                      <p style="font-size: 16px; color: #4b5563; margin-bottom: 20px;">${project.description}</p>
                      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${project.tech.map(tech => `<span style="background-color: rgb(255, 214, 229); padding: 4px 10px; border-radius: 16px; font-size: 14px;">${tech}</span>`).join('')}
                      </div>
                    </div>
                  </div>
                </a>
              `;
            }
        });
    });
});