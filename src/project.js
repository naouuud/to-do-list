import { allItems, allProjects } from "./arrays";

export function createProject(name) {
    if (name != null) {
        const newProject = { name };
        allProjects.push(newProject);
    }
}

export function deleteProject(n) {
    const projectName = allProjects[n].name.toLowerCase();
    const index = allItems.findIndex(item => item.project == projectName);
    allItems.splice(index, 1);
    allProjects.splice(n, 1);
}

export function displayProjects() {
    document.querySelector("select#project").innerHTML = "";
    allProjects.forEach(obj => {
        const option = document.createElement("option");
        option.value = obj.name;
        option.textContent = obj.name;
        document.querySelector("select#project").appendChild(option);
    })
}