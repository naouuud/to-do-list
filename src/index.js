import "./style.css";
import { newElement } from "./dom-creation.js";
import { collectFormData } from "./item-form.js";
import { allItems, allProjects } from "./arrays.js";
import { createItem } from "./item.js";
import { createProject, deleteProject } from "./project.js"
import { renderHome } from "./homepage-dom.js";
import { renderItems } from "./item-dom.js"

window.newElement = newElement;
window.createProject = createProject;
window.deleteProject = deleteProject;
window.allProjects = allProjects;
window.createItem = createItem;
window.allItems = allItems;

// move to item dom module
document.querySelector("button[type=submit]").addEventListener("click", (e) => {
    e.preventDefault();
    createItem(collectFormData());
    renderItems();
});

createProject("Adventure");
createProject("RPG");
createProject("Roguelite");
createItem({ title: "TUNIC (Secret Legend)", description: "Explore, be happy", due: "2023-02-28", priority: "2", complete: false, project: "Adventure" });
createItem({ title: "Ori and the Will of the Wisps", description: "Remember to love", due: "2023-06-30", priority: "1", complete: false, project: "Adventure" });
createItem({ title: "CrossCode", description: "Help an AI avatar find meaning in life", due: "2023-03-31", priority: "1", complete: false, project: "RPG" });
createItem({ title: "Dark Souls 3", description: "Fight your worst fears", due: "2023-06-30", priority: "3", complete: false, project: "RPG" })
createItem({ title: "Dwarf Fortress", description: "Wrap you head around this", due: "2024-02-07", priority: "1", complete: false, project: "Roguelite" });
createItem({ title: "The Binding of Isaac", description: "Defeat mom", due: "2023-08-31", priority: "2", complete: false, project: "Roguelite" });

renderHome();

// document.querySelector(".header").appendChild(newElement({type: "div", text: "Hello World!"}));