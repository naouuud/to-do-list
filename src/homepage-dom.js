import { allProjects } from "./arrays";
import { createProject, displayProjects, deleteProject } from "./project";
import { newElement } from "./dom-creation";
import { renderItems } from "./project-dom";

export function renderHome() {
    document.querySelector(".projects").innerHTML = "";
    allProjects.forEach(project => {
        const newProject = newElement({ type: "div", id: `${project.name.toLowerCase()}`, className: "project", parent: ".projects" });
        newProject.setAttribute("index", allProjects.indexOf(project));
        const header = newElement({ type: "div", className: "project-header", parent: newProject });
        const name = newElement({ type: "span", textContent: `${project.name}`, parent: header });
        const deleteButton = newElement({ type: "div", parent: header });
        deleteButton.addEventListener("click", () => {
            deleteProject(newProject.getAttribute("index"));
            renderHome();
        });
        const deleteIcon = newElement({ type: "img", src: "../src/images/delete-icon.svg", alt: "garbage bin", parent: deleteButton });
        const body = newElement({ type: "div", className: "project-body", parent: newProject });
        const list = newElement({ type: "ul", className: "item-list", parent: body });
    })
    newElement({ type: "div", id: "new-project", className: "project", textContent: "+ New Project", parent: ".projects" });
    displayProjects();
    renderItems();
    document.querySelector("div#new-project").addEventListener("click", () => {
        createProject(prompt("Choose a name for your project:", "Untitled"));
        renderHome();
    });
}