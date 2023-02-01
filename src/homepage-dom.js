import { allProjects } from "./arrays";
import { createProject, displayProjects, deleteProject } from "./project";
import { newElement } from "./dom-creation";

export function renderProjects() {
    // document.querySelector(".projects").innerHTML = `<div class="project" id="all-projects">All Projects</div>`;
    document.querySelector(".projects").innerHTML = "";
    allProjects.forEach(project => {
        const newProject = newElement({ type: "div", class: "project", index: allProjects.indexOf(project), parentS: ".projects" });
        const header = newElement({ type: "div", class: "project-header", parentV: newProject });
        const body = newElement({ type: "div", class: "project-body", text: "The lazy brown dog jumped over the fox", parentV: newProject });
        const name = newElement({ type: "span", text: `${project.name}`, parentV: header });
        const deleteButton = newElement({ type: "div", parentV: header });
        deleteButton.addEventListener("click", () => {
            deleteProject(newProject.getAttribute("index"));
            renderProjects();
        });
        const deleteIcon = newElement({ type: "img", src: "../src/images/delete-icon.svg", alt: "garbage bin", parentV: deleteButton });
    })
    recreateAddButton();
    document.querySelector("div#new-project").addEventListener("click", () => {
        createProject();
        displayProjects();
        renderProjects();
    });
}

function recreateAddButton() {
    const createNew = newElement({ type: "div", id: "new-project", class: "project", text: "+ New Project", parentS: ".projects" });
}

// load new/edit window