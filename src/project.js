import { allProjects } from "./arrays";

export function createProject(name) {
    return { name };
}

export function pushProject(obj) {
    allProjects.push(obj);
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