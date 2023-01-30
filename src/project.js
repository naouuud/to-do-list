import { allProjects } from "./arrays";

export function createProject() {
    const name = prompt("Choose a name for your project:", "Untitled");
    if (name != null) {
        const newProject = { name };
        allProjects.push(newProject);
    }
}

export function deleteProject(n) {
    allProjects.splice(n, 1);
} 

export function displayProjects() {
    document.querySelector("select#project").innerHTML = "";
    allProjects.forEach(obj => {
        const option = document.createElement("option");
        option.value = obj.name;
        option.textContent = obj.name;
        document.querySelector("select#project").appendChild(option)
    })
}