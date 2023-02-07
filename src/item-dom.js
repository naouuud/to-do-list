import { allItems, allProjects } from "./arrays";
import { newElement } from "./dom-creation";

export function renderItems() {
    allProjects.forEach(project => {
        document.querySelector(`#${project.name} .project-body .item-list`).innerHTML = "";
    })
    allItems.forEach(item => {
        newElement({ type: "li", textContent: item.title, parent: `#${item.project} .project-body .item-list` });
    });
}