export function collectFormData() {
    const title = document.querySelector(".title input");
    const description = document.querySelector(".description textarea");
    const project = document.querySelector(".project select");
    const priority = (function () {
        let checked;
        document.querySelectorAll(".priority input").forEach(element => { if (element.checked) checked = element });
        return checked;
    })();
    const due = document.querySelector(".due input");
    return {
        title: title.value,
        description: description.value,
        project: project.value,
        priority: priority.value,
        due: due.value
    }
}