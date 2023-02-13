import { allItems } from "./arrays";
import { newElement } from "./dom-creation";
import { collectFormData } from "./item-form";
import { displayProjects } from "./project";
import { renderProjects } from "./projects-dom";
import { editItem } from "./item";

export function renderNewWindow(proj) {
    const homePage = document.querySelector(".homepage");
    homePage.innerHTML = "";
    newElement({ type: "div", class: "header", text: "My To Do List", parent: homePage });
    const itemEdit = newElement({ type: 'div', class: 'item-edit', parent: homePage })
    const form = newElement({ type: "form", className: "item-edit-form", parent: itemEdit });
    const title = newElement({ type: 'div', className: 'label-input-pair title', parent: form });
    newElement({ type: "label", textContent: "Title", for: 'title', parent: title });
    const titleInput = newElement({ type: 'input', id: 'title', placeholder: "Choose a title", parent: title });
    titleInput.setAttribute("type", "text");
    const description = newElement({ type: 'div', className: 'label-input-pair description', parent: form });
    newElement({ type: 'label', for: 'description', text: 'Description', parent: description });
    const descriptionInput = newElement({ type: "textarea", id: 'description', placeholder: 'Add a description', maxlength: '300', parent: description });
    const cancel = newElement({ type: 'div', class: 'item-cancel', parent: form });
    const cancelIcon = newElement({ type: 'img', src: './../src/images/close-circle-outline.svg', alt: 'Close icon', parent: cancel });
    cancelIcon.addEventListener("click", renderProjects);
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
    const projectName = newElement({ type: 'select', name: 'project', id: 'project', parent: project });
    displayProjects();
    if (proj) projectName.value = proj.id;
    const submit = newElement({ type: 'div', class: 'submit', parent: form });
    const submitButton = newElement({ type: 'button', text: 'Submit', parent: submit });
    submitButton.setAttribute('type', 'submit');
    submitButton.addEventListener("click", submitNew);
    return { titleInput, descriptionInput, prioritySlider, dueCalendar, projectName, submitButton};
}

function submitNew(e) {
    e.preventDefault();
    createItem(collectFormData());
    renderProjects();
}

export function renderEditWindow(index) {
    const form = renderNewWindow(null);
    const item = allItems[index];
    form.titleInput.value = item.title;
    form.descriptionInput.value = item.description;
    form.prioritySlider.value = item.priority;
    form.dueCalendar.value = item.due;
    form.projectName.value = item.project;
    form.submitButton.removeEventListener("click", submitNew);
    form.submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        editItem(index, collectFormData());
        renderProjects()
    })
}