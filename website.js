// 1. Project data
const projectDetails = {
    hydrosustain: {
        title: "HydroSustain",
        description:
            "An integrated hydroponic and dehumidification system for sustainable indoor plant cultivation.",
        image: "assets/imgs/HydroSustain.png",
    },
    inksight: {
        title: "InkSight",
        description:
            "An interactive XR reading experience that enhances comprehension and user engagement.",
        image: "assets/imgs/InkSight.png",
    },
    hypertrack: {
        title: "HyperTrack",
        description:
            "A self-monitoring app for hypertension patients, helping track and improve health behaviors.",
        image: "assets/imgs/HyperTrack.png",
    },
    fadedsoul: {
        title: "FadedSoul",
        description:
            "A third-person 3D platformer game with immersive shaders and particle effects.",
        image: "assets/imgs/FadedSoul.png",
    },
};

// 2. Select elements
const workListItems = document.querySelectorAll(".work-list li");
const workDisplay = document.getElementById("workDisplay");

// 3. Handle click on list items
workListItems.forEach((item) => {
    item.addEventListener("click", () => {
        const key = item.getAttribute("data-work");
        const project = projectDetails[key];

        // 4. Display project content
        workDisplay.innerHTML = `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}" style="max-width: 100%; border-radius: 10px;" />
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;
    });
});