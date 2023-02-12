import { newElement } from "./dom-creation";
import { collectFormData } from "./item-form";
import { renderItems } from "./item-dom";
import { displayProjects } from "./project";
import { renderHome } from "./homepage-dom";

export function renderEditWindow() {
    const homePage = document.querySelector(".homepage");
    homePage.innerHTML = "";
    newElement({type: "div", class: "header", text: "My To Do List", parent: homePage});
    const itemEdit = newElement({type: 'div', class: 'item-edit', parent: homePage})
    const form = newElement({ type: "form", className: "item-edit-form", parent: itemEdit });
    const title = newElement({ type: 'div', className: 'label-input-pair title', parent: form });
    newElement({ type: "label", textContent: "Title", for: 'title', parent: title });
    const titleInput = newElement({ type: 'input', id: 'title', placeholder: "Choose a title", parent: title });
    titleInput.setAttribute("type", "text");
    const description = newElement({ type: 'div', className: 'label-input-pair description', parent: form });
    newElement({ type: 'label', for: 'description', text: 'Description', parent: description });
    newElement({ type: "textarea", id: 'description', placeholder: 'Add a description', maxlength: '300', parent: description });
    const priority = newElement({ type: 'div', class: 'label-input-pair priority', parent: form });
    newElement({ type: 'label', text: 'Priority', for: 'priority', parent: priority });
    const prioritySlider = newElement({ type: 'input', min: '1', max: '3', value: '2', class: 'slider', id: 'priority', parent: priority });
    prioritySlider.setAttribute('type', 'range');
    const due = newElement({ type: 'div', class: 'label-input-pair due', parent: form });
    newElement({ type: 'label', for: "due-date", text: "Due date", parent: due });
    const dueCalendar = newElement({ type: 'input', id: 'due-date', parent: due });
    dueCalendar.setAttribute('type', 'date');
    const project = newElement({ type: 'div', class: 'label-input-pair project-edit', parent: form });
    newElement({ type: 'label', text: 'Project', for: 'project', parent: project });
    newElement({ type: 'select', name: 'project', id: 'project', parent: project });
    displayProjects();
    const submit = newElement({ type: 'div', class: 'submit', parent: form });
    const submitButton = newElement({ type: 'button', text: 'Submit', parent: submit });
    submitButton.setAttribute('type', 'submit');
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        createItem(collectFormData());
        renderHome();
    });
}