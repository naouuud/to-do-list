import { allItems, allProjects } from "./arrays";
import { newElement } from "./dom-creation";

export function renderItems() {
    allProjects.forEach(project => {
        document.querySelector(`#${project.name.toLowerCase()} .project-body .item-list`).innerHTML = "";
    })
    allItems.forEach(item => {
        newElement({ type: "li", textContent: item.title, parent: `#${item.project} .project-body .item-list` });
    });
}

// note: deleting projects but not the items which belong to them! this is further support for the argument that items objects should be under a parent project object