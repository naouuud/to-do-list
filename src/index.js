import "./style.css";
import { newElement } from "./dom-creation";
import { collectFormData } from "./item-form";
import { allItems, allProjects } from "./arrays";
import { createItem } from "./item";
import { createProject, deleteProject } from "./project"
import { renderHome } from "./homepage-dom";
import { renderItems } from "./project-dom"

window.newElement = newElement;
window.createProject = createProject;
window.deleteProject = deleteProject;
window.allProjects = allProjects;
window.createItem = createItem;
window.allItems = allItems;

document.querySelector("button[type=submit]").addEventListener("click", (e) => {
    e.preventDefault();
    createItem(collectFormData());
    renderItems();
});

createProject("Adventure");
createProject("RPG");
createProject("Souls");
createItem({ title: "Tunic", description: "Explore, be happy", due: "2023-02-28", priority: "2", complete: false, project: "Adventure" });
createItem({ title: "CrossCode", description: "Help an AI avatar find meaning in life", due: "2023-03-31", priority: "1", complete: false, project: "RPG" });
createItem({ title: "Dark Souls III", description: "Fight your worst fears", due: "2023-06-30", priority: "3", complete: false, project: "Souls" })

renderHome();

// document.querySelector(".header").appendChild(newElement({type: "div", text: "Hello World!"}));