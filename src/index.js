import "./style.css";
import { newElement } from "./dom-creation";
import { collectFormData } from "./item-form";
import { allItems, allProjects } from "./arrays";
import { createItem } from "./item";
import { createProject, deleteProject } from "./project.js"
import { renderProjects } from "./homepage-dom";

window.newElement = newElement;
window.createProject = createProject;
window.deleteProject = deleteProject;
window.allProjects = allProjects;
window.createItem = createItem;
window.allItems = allItems;

document.querySelector("button[type=submit]").addEventListener("click", (e) => {
    e.preventDefault();
    createItem(collectFormData());
});

renderProjects();

// document.querySelector(".header").appendChild(newElement({type: "div", text: "Hello World!"}));