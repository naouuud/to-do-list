import { allProjects } from "./arrays";
import { createProject, deleteProject } from "./project";
import { newElement } from "./dom-creation";
import { renderItems } from "./items-dom";

export function renderProjects() {
    const homePage = document.querySelector(".homepage");
    homePage.innerHTML = "";
    newElement({type: "div", class: "header", text: "My To Do List", parent: homePage});
    const projectsFlex = newElement({type: "div", class: "projects-flex", parent: homePage});
    newElement({type: 'div', class: 'projects', parent: projectsFlex});
    allProjects.forEach(project => {
        const newProject = newElement({ type: "div", id: `${project.name}`, className: "project", parent: ".projects" });
        newProject.setAttribute("index", allProjects.indexOf(project));
        const header = newElement({ type: "div", className: "project-header", parent: newProject });
        newElement({ type: "span", textContent: `${project.name}`, parent: header });
        const deleteButton = newElement({ type: "div", parent: header });
        deleteButton.addEventListener("click", () => {
            deleteProject(newProject.getAttribute("index"));
            renderProjects();
        });
        newElement({ type: "img", src: "../src/images/delete-icon.svg", alt: "garbage bin", parent: deleteButton });
        const body = newElement({ type: "div", className: "project-body", parent: newProject });
        newElement({ type: "ul", className: "item-list", parent: body });
    })
    newElement({ type: "div", id: "new-project", className: "project", textContent: "+ New Project", parent: ".projects" });
    renderItems();
    document.querySelector("div#new-project").addEventListener("click", () => {
        createProject(prompt("Choose a name for your project:", "Untitled"));
        renderProjects();
    });

}