import { allItems, allProjects } from "./arrays";
import { newElement } from "./dom-creation";
import { renderProjects } from "./projects-dom";
import { deleteItem } from "./item";
import { renderNewWindow, renderEditWindow } from "./edit-dom";
import format from "date-fns/format";

export function renderItems() {
    allProjects.forEach(project => {
        document.querySelector(`#${project.name} .project-body .item-list`).innerHTML = "";
    })
    allItems.forEach(item => {
        const li = newElement({ type: "li", parent: `#${item.project} .project-body .item-list` });
        li.setAttribute("index", allItems.indexOf(item));
        const left = newElement({type: 'div', class: "flex-left", parent: li});
        const right = newElement({type: 'div', class: 'flex-right', parent: li});
        const checkbox = newElement({ type: "img", parent: left });
        checkbox.addEventListener("click", () => checkItem(item));
        let shortTitle = item.title.substring(0, 35);
        if (shortTitle.length >= 35) shortTitle += "...";
        const title = newElement({ type: "span", textContent: shortTitle, parent: left });
        title.addEventListener("click", () => checkItem(item));
        const priority = newElement({type: "img", parent: right});
        priority.addEventListener("click", () => renderEditWindow(allItems.indexOf(item)));
        renderPriority(item);
        const date = format(new Date(`${item.due}`), "MMM d");
        const dateSpan = newElement({type: 'span', text: date, parent: right});
        dateSpan.addEventListener("click", () => renderEditWindow(allItems.indexOf(item)));
        const editIcon = newElement({type: 'img', className: "item-edit-icon", parent: right, src: "./../src/images/progress-pencil.svg", alt: "Item edit icon"})
        editIcon.addEventListener("click", () => renderEditWindow(allItems.indexOf(item)));
        const deleteIcon = newElement({ type: "img", className: "item-delete-icon", parent: right, src: "./../src/images/delete-outline.svg", alt: "Item delete icon" })
        deleteIcon.addEventListener("click", () => {
            deleteItem(allItems.indexOf(item));
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

function renderPriority(item) {
    const element = document.querySelector(`.project-body .item-list li[index="${allItems.indexOf(item)}"] .flex-right img:first-child`);
    if (item.priority == "1") {
        element.src = "./../src/images/sunny.png";
        element.alt = "Sunny icon";
    } else if (item.priority == "2") {
        element.src = "./../src/images/rainy.png";
        element.alt = "Rainy icon";
    } else if (item.priority == "3") {
        element.src = "./../src/images/flames.png";
        element.alt = "Flames icon";
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