import { allProjects } from "./arrays";
import { createProject, displayProjects, deleteProject } from "./project";

export function renderProjects() {
    // document.querySelector(".projects").innerHTML = `<div class="project" id="all-projects">All Projects</div>`;
    document.querySelector(".projects").innerHTML = "";
    allProjects.forEach(project => {
        const newProject = document.createElement('div');
        newProject.classList.add("project");
        newProject.setAttribute("index", allProjects.indexOf(project));
        document.querySelector(".projects").appendChild(newProject);
        const header = document.createElement("div");
        header.classList.add("project-header");
        newProject.appendChild(header);
        const body = document.createElement("div");
        body.classList.add("project-body");
        body.textContent = "The lazy brown fox jumped over the dog";
        newProject.appendChild(body);
        const name = document.createElement("span");
        name.textContent = `${project.name}`;
        header.appendChild(name);
        const deleteButton = document.createElement("div");
        deleteButton.addEventListener("click", () => {
            deleteProject(newProject.getAttribute("index"));
            renderProjects();
        });
        header.appendChild(deleteButton);
        const deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("src", "../src/images/delete-icon.svg");
        deleteIcon.setAttribute("alt", "garbage icon");
        deleteButton.appendChild(deleteIcon);
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
    createNew.textContent = "+ New Project";
    document.querySelector(".projects").appendChild(createNew);
}

// load new/edit window