import { allItems, allProjects } from "./arrays";
import { newElement } from "./dom-creation";

export function renderItems() {
    allProjects.forEach(project => {
        document.querySelector(`#${project.name} .project-body .item-list`).innerHTML = "";
    })
    allItems.forEach(item => {
        const li = newElement({ type: "li", parent: `#${item.project} .project-body .item-list` });
        const imgCheck = newElement({ type: "img", class: "item-check-icon unchecked", parent: li, src: "./../src/images/checkbox-blank-outline.svg", alt: "Item check icon (unchecked)" })
        const span = newElement({ type: "span", textContent: item.title, parent: li });
        const imgDelete = newElement({ type: "img", class: "item-delete-icon", parent: li, src: "./../src/images/delete-outline.svg", alt: "Item delete icon" })
    });
}