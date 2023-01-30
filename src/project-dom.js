import { allProjects } from "./arrays";
import { createProject, displayProjects, deleteProject } from "./project";

export function renderProjects() {
    // document.querySelector(".projects").innerHTML = `<div class="project" id="all-projects">All Projects</div>`;
    document.querySelector(".projects").innerHTML = "";
    allProjects.forEach(project => {
        const newProject = document.createElement('div');
        newProject.classList.add("project");
        newProject.setAttribute("index", allProjects.indexOf(project));
        newProject.textContent = `${project.name}`;
        document.querySelector(".projects").appendChild(newProject);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            deleteProject(newProject.getAttribute("index"));
            renderProjects();
        });
        newProject.appendChild(deleteButton);
    })
    recreateAddButton();
    document.querySelector("div#new-project").addEventListener("click", () => {
        createProject();
        displayProjects();
        renderProjects();
    });
}

function recreateAddButton() {
    const createNew = document.createElement("div");
    createNew.id = "new-project";
    createNew.classList.add("project");
    createNew.textContent = "New Project...";
    document.querySelector(".projects").appendChild(createNew);
}

// load new/edit window