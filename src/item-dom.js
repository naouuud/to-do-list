import { allItems, allProjects } from "./arrays";
import { newElement } from "./dom-creation";
import { renderHome } from "./homepage-dom";
import { deleteItem } from "./item";

export function renderItems() {
    allProjects.forEach(project => {
        document.querySelector(`#${project.name} .project-body .item-list`).innerHTML = "";
    })
    allItems.forEach(item => {
        const li = newElement({ type: "li", parent: `#${item.project} .project-body .item-list` });
        li.setAttribute("index", allItems.indexOf(item));
        const imgCheck = newElement({ type: "img", parent: li });
        imgCheck.addEventListener("click", () => {
            if (!item.complete) item.complete = true;
            else item.complete = false;
            renderCheckbox(item);
        })
        newElement({ type: "span", textContent: item.title, parent: li });
        const imgDelete = newElement({ type: "img", className: "item-delete-icon", parent: li, src: "./../src/images/delete-outline.svg", alt: "Item delete icon" })
        imgDelete.addEventListener("click", () => {
            deleteItem(item.title);
            renderHome();
        });
        renderCheckbox(item);
    });
    renderNewItem();
}

function renderCheckbox(item) {
    const element = document.querySelector(`.project-body .item-list li[index="${allItems.indexOf(item)}"] img`);
    if (!item.complete) {
        element.className = "unchecked";
        element.src = "./../src/images/checkbox-blank-outline.svg";
        element.alt = "Unmarked checkbox";
    } else {
        element.className = "checked";
        element.src = "./../src/images/checkbox-outline.svg"
        element.alt = "Marked checkbox";
    }
}

function renderNewItem() {
    document.querySelectorAll(".project-body .item-list").forEach(project => {
        newElement({type: "li", className: "new-item", textContent: "+ New Item", parent: project});
    });
}