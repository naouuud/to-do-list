import { allItems, allProjects, updateItemsArray } from "./arrays";
import { newElement } from "./dom-creation";
import { renderProjects } from "./projects-dom";
import { deleteItem, checkItem } from "./item";
import { renderNewWindow, renderEditWindow } from "./edit-dom";
import { format, parseISO, isPast, isToday, isTomorrow } from "date-fns";
import pencil from "./../src/images/progress-pencil.svg";
import bin from "./../src/images/delete-icon.svg";
import blankCheckbox from "./../src/images/checkbox-blank-outline.svg";
import markedCheckbox from "./../src/images/checkbox-outline.svg";
import sun from "./../src/images/sunny.png"
import rain from "./../src/images/rainy.png"
import flames from "./../src/images/flames.png"

export function renderItems() {
    updateItemsArray();
    allItems.forEach(item => {
        const projectIndex = allProjects.findIndex(project => project.name == item.project);
        const li = newElement({ type: "li", parent: `.project[index="${projectIndex}"] .project-body .item-list` });
        li.setAttribute("index", allItems.indexOf(item));
        const left = newElement({ type: 'div', class: "flex-left", parent: li });
        const right = newElement({ type: 'div', class: 'flex-right', parent: li });
        const checkbox = newElement({ type: "img", parent: left });
        checkbox.addEventListener("click", () => {
            checkItem(item);
            renderCheckbox(item);
            renderStrikeThrough(item);
        });
        let shortTitle = item.title.substring(0, 35);
        if (shortTitle.length >= 35) shortTitle += "...";
        const title = newElement({ type: "span", textContent: shortTitle, parent: left });
        title.addEventListener("click", () => renderEditWindow(allItems.indexOf(item)));
        const priority = newElement({ type: "img", parent: right });
        priority.addEventListener("click", () => renderEditWindow(allItems.indexOf(item)));
        renderPriority(item);
        let dateSpan;
        if (item.due) {
            const date = format(new Date(`${item.due}`), "MMM d");
            dateSpan = newElement({ type: 'span', text: date, parent: right });
            if (isPast(parseISO(item.due))) dateSpan.classList.add("red");
            if (isToday(parseISO(item.due))) {
                dateSpan.classList.remove("red");
                dateSpan.textContent = "Today";
            }
            if (isTomorrow(parseISO(item.due))) dateSpan.textContent = "Tomorrow";
        } else dateSpan = newElement({ type: 'span', text: 'No date', parent: right });
        dateSpan.addEventListener("click", () => renderEditWindow(allItems.indexOf(item)));
        const editIcon = newElement({ type: 'img', className: "item-edit-icon", parent: right, src: pencil, alt: "edit icon" })
        editIcon.addEventListener("click", () => renderEditWindow(allItems.indexOf(item)));
        const deleteIcon = newElement({ type: "img", className: "item-delete-icon", parent: right, src: bin, alt: "garbage bin" })
        deleteIcon.addEventListener("click", () => {
            deleteItem(allItems.indexOf(item));
            renderProjects();
        });
        renderCheckbox(item);
        renderStrikeThrough(item);
    });
    renderNewItem();
}

function renderCheckbox(item) {
    const element = document.querySelector(`.project-body .item-list li[index="${allItems.indexOf(item)}"] img`);
    if (!item.complete) {
        element.src = blankCheckbox;
        element.alt = "unmarked checkbox";
    } else {
        element.src = markedCheckbox;
        element.alt = "marked checkbox";
    }
}

function renderStrikeThrough(item) {
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
        element.src = sun;
        element.alt = "sun";
    } else if (item.priority == "2") {
        element.src = rain;
        element.alt = "rain";
    } else if (item.priority == "3") {
        element.src = flames;
        element.alt = "flames";
    }
}

function renderNewItem() {
    const projects = document.querySelectorAll(".project");
    projects.forEach(proj => {
        const span = proj.firstElementChild.firstElementChild;
        if (span) {
            if (proj.lastElementChild) {
                const newItem = newElement({ type: "li", className: "new-item", parent: proj.lastElementChild.lastElementChild });
                const newItemText = newElement({ type: 'span', text: '+ New Item', parent: newItem });
                newItemText.addEventListener("click", () => renderNewWindow(span.textContent));
            }
        }
    });
}