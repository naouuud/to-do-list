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
        imgCheck.addEventListener("click", () => checkItem(item));
        let shortTitle = item.title.substring(0, 22);
        if (shortTitle.length >= 22) shortTitle += "...";
        const textSpan = newElement({ type: "span", textContent: shortTitle, parent: li });
        textSpan.addEventListener("click", () => checkItem(item));
        const imageSpan = newElement({ type: "span", parent: li });
        const imgEdit = newElement({type: 'img', className: "item-edit-icon", parent: imageSpan, src: "./../src/images/progress-pencil.svg", alt: "Item edit icon"})
        imgEdit.addEventListener("click", () => renderEditWindow(allItems.indexOf(item)));
        const imgDelete = newElement({ type: "img", className: "item-delete-icon", parent: imageSpan, src: "./../src/images/delete-outline.svg", alt: "Item delete icon" })
        imgDelete.addEventListener("click", () => {
            deleteItem(item.title);
            renderProjects();
        });
        renderCheckbox(item);
    });
    renderNewItem();
} 

function checkItem(item) {
    if (!item.complete) item.complete = true;
    else item.complete = false;
    renderCheckbox(item);
    strikeThrough(item);
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

function strikeThrough(item) {
    const element = document.querySelector(`.project-body .item-list li[index="${allItems.indexOf(item)}"] span`);
    if (!item.complete) {
        element.style.textDecoration = "none";
    } else {
        element.style.textDecoration = "line-through";
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