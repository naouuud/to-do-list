import { allProjects, updateProjectsArray } from "./arrays";
import { createProject, deleteProject, editProjectName, moveDown, moveUp } from "./project";
import { newElement } from "./dom-creation";
import { renderItems } from "./items-dom";
import pencil from "./../src/images/progress-pencil.svg";
import bin from "./../src/images/delete-icon.svg";
import triangle from "./../src/images/triangle.svg";

export function renderProjects() {
    updateProjectsArray();
    const homePage = document.querySelector(".homepage");
    homePage.innerHTML = "";
    newElement({ type: "div", class: "header", text: "My To Do List", parent: homePage });
    const projectsFlex = newElement({ type: 'div', class: "projects-flex", parent: homePage });
    const sidebar = newElement({ type: 'div', class: "sidebar", parent: projectsFlex });
    const list = newElement({ type: 'ul', class: 'project-list', parent: sidebar });
    allProjects.forEach(project => {
        const listItem = newElement({ type: 'li', parent: list });
        const upArrow = newElement({ type: 'img', src: triangle, parent: listItem });
        upArrow.addEventListener("click", () => {
            moveUp(allProjects.indexOf(project));
            renderProjects();
        });
        const downArrow = newElement({ type: 'img', src: triangle, parent: listItem });
        downArrow.addEventListener("click", () => {
            moveDown(allProjects.indexOf(project));
            renderProjects();
        });
        newElement({ type: 'span', text: project.name, parent: listItem });
    });
    if (!document.querySelector(`.sidebar ul li`)) newElement({ type: 'li', text: "(no projects)", parent: list });
    const gridBuffer = newElement({ type: "div", class: "grid-buffer", parent: projectsFlex });
    const projects = newElement({ type: "div", class: "projects", parent: gridBuffer });
    allProjects.forEach(project => {
        const newProject = newElement({ type: "div", className: "project", parent: projects });
        newProject.setAttribute("index", allProjects.indexOf(project));
        const header = newElement({ type: "div", className: "project-header", parent: newProject });
        const leftSide = newElement({ type: "span", textContent: `${project.name}`, parent: header });
        const rightSide = newElement({ type: "div", parent: header });
        const editButton = newElement({ type: 'img', src: pencil, alt: "edit icon", parent: rightSide });
        editButton.addEventListener("click", () => {
            header.innerHTML = "";
            const newNameForm = newElement({ type: 'form', parent: header });
            const newNameInput = newElement({ type: 'input', parent: newNameForm, maxlength: "22" });
            const newNameButtons = newElement({ type: 'div', parent: newNameForm });
            const newNameSubmit = newElement({ type: 'button', text: 'Confirm', parent: newNameButtons });
            const newNameCancel = newElement({ type: 'button', text: "Cancel", parent: newNameButtons });
            newNameSubmit.addEventListener("click", e => {
                e.preventDefault();
                editProjectName(allProjects.indexOf(project), newNameInput.value);
                renderProjects();
            });
            newNameCancel.addEventListener("click", e => {
                e.preventDefault();
                renderProjects();
            });
        });
        const deleteButton = newElement({ type: "img", src: bin, alt: "garbage bin", parent: rightSide });
        deleteButton.addEventListener("click", () => {
            deleteProject(newProject.getAttribute("index"));
            renderProjects();
        });

        const body = newElement({ type: "div", className: "project-body", parent: newProject });
        newElement({ type: "ul", className: "item-list", parent: body });
    })
    const newProject = newElement({ type: "div", id: "new-project", className: "project", parent: ".projects" });
    const newProjectText = newElement({ type: 'span', text: "+ New Project", parent: newProject });
    newProjectText.addEventListener("click", () => {
        newProject.innerHTML = "";
        const newProjectForm = newElement({ type: 'form', parent: newProject });
        const newProjectInput = newElement({ type: 'input', parent: newProjectForm, maxlength: "22" });
        const newProjectButtons = newElement({ type: 'div', parent: newProjectForm });
        const newProjectSubmit = newElement({ type: 'button', text: 'Confirm', parent: newProjectButtons });
        newProjectSubmit.addEventListener("click", e => {
            e.preventDefault();
            createProject(newProjectInput.value);
            renderProjects();
        })
        const newProjectCancel = newElement({ type: 'button', text: "Cancel", parent: newProjectButtons });
        newProjectCancel.addEventListener("click", e => {
            e.preventDefault();
            renderProjects();
        })
    });
    const footer = newElement({ type: 'div', class: 'footer', parent: gridBuffer });
    footer.innerHTML = `<span>Website by <a href="https://github.com/naouuud?tab=repositories" target="_blank">Nour Aoude</a>.</span>`;
    renderItems();
}