import { allProjects } from "./arrays";
import { createProject, displayProjects, pushProject } from "./project";

export function renderProjects() {
    document.querySelector(".projects").innerHTML = "";
    allProjects.forEach(obj => {
        const newProject = document.createElement('div');
        newProject.textContent = `${obj.name}`;
        document.querySelector(".projects").appendChild(newProject);
    });
    const button = document.createElement("button");
    button.id = "new-project";
    button.textContent = "Add Project";
    document.querySelector(".projects").appendChild(button);

    document.querySelector("button#new-project").addEventListener("click", () => {
        const name = prompt("Choose a name for your project:", "Untitled")
        const newProject = createProject(name);
        pushProject(newProject);
        renderProjects();
        displayProjects();
    });
}

// load new/edit window
// document.querySelector("div#start").innerHTML = " ";