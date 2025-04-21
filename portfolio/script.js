document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      {
        name: "Weather App",
        description: "Fetches live weather using an API.",
        link: "#"
      },
      {
        name: "To-Do List",
        description: "Manage your tasks easily.",
        link: "#"
      },
      {
        name: "Currency Converter",
        description: "Convert the currency of one county to another",
        link: "#"
      }
    ];
  
    const container = document.querySelector(".project-list");
  
    projects.forEach(project => {
      const card = document.createElement("div");
      card.innerHTML = `<h3>${project.name}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">View</a>`;
      container.appendChild(card);
    });
  });
  