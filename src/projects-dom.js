import { allProjects } from "./arrays";
import { createProject, deleteProject, moveDown, moveUp } from "./project";
import { newElement } from "./dom-creation";
import { renderItems } from "./items-dom";

export function renderProjects() {
    const homePage = document.querySelector(".homepage");
    homePage.innerHTML = "";
    newElement({ type: "div", class: "header", text: "My To Do List", parent: homePage });
    const container = newElement({ type: 'div', class: "projects-flex", parent: homePage });
    const sidebar = newElement({ type: 'div', class: "sidebar", parent: container });
    const list = newElement({ type: 'ul', class: 'project-list', parent: sidebar });
    allProjects.forEach(project => {
        const listItem = newElement({ type: 'li', parent: list });
        const upArrow = newElement({ type: 'img', src: './../src/images/triangle.svg', parent: listItem });
        upArrow.addEventListener("click", () => {
            moveUp(allProjects.indexOf(project));
            renderProjects();
        });
        const downArrow = newElement({ type: 'img', src: './../src/images/triangle.svg', parent: listItem });
        downArrow.addEventListener("click", () => {
            moveDown(allProjects.indexOf(project));
            renderProjects();
        });
        newElement({ type: 'span', text: project.name, parent: listItem });
    });
    const projects = newElement({ type: "div", class: "projects", parent: container });
    allProjects.forEach(project => {
        const newProject = newElement({ type: "div", id: `${project.name}`, className: "project", parent: projects });
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
    const newProject = newElement({ type: "div", id: "new-project", className: "project", parent: ".projects" });
    const newProjectText = newElement({ type: 'span', text: "+ New Project", parent: newProject });
    newProjectText.addEventListener("click", () => {
        createProject(prompt("Choose a name for your project:", "Untitled"));
        renderProjects();
    });
    renderItems();
}