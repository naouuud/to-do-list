import { allItems, allProjects } from "./arrays";
import { newElement } from "./dom-creation";
import { renderProjects } from "./projects-dom";
import { deleteItem } from "./item";
import { renderNewWindow, renderEditWindow } from "./edit-dom";

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
        const span = newElement({ type: "span", textContent: item.title, parent: li });
        span.addEventListener("click", () => renderEditWindow(allItems.indexOf(item)));
        const imgDelete = newElement({ type: "img", className: "item-delete-icon", parent: li, src: "./../src/images/delete-outline.svg", alt: "Item delete icon" })
        imgDelete.addEventListener("click", () => {
            deleteItem(item.title);
            renderProjects();
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
    const projects = document.querySelectorAll(".project");
    projects.forEach(proj => {
        const body = proj.lastElementChild;
        if (body) {
            const list = body.lastElementChild;
            const newItem = newElement({ type: "li", className: "new-item", textContent: "+ New Item", parent: list });
            newItem.addEventListener("click", () => renderNewWindow(proj));
        }
    });
}