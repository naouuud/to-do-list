export function collectFormData() {
    const title = document.querySelector(".title input");
    const description = document.querySelector(".description textarea");
    const project = document.querySelector(".project-edit select");
    const priority = document.querySelector(".priority input");
    const due = document.querySelector(".due input");
    return {
        title: title.value,
        description: description.value,
        project: project.value,
        priority: priority.value,
        due: due.value
    }
}