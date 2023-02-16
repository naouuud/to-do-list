import { allItems, allProjects, storeItems, storeProjects, updateProjectsArray } from "./arrays";
import { newElement } from "./dom-creation";

export function createProject(name) {
    if (!/\S/.test(name)) name = "Untitled";
    const newProject = { name };
    if (allProjects.some(project => project.name == newProject.name)) {
        alert("Project already exists. Please pick another name.");
        return
    }
    allProjects.push(newProject);
    storeProjects();
}

export function deleteProject(n) {
    const projectName = allProjects[n].name;
    allProjects.splice(n, 1);
    storeProjects();
    function deleteLoop() {
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].project == projectName) {
                allItems.splice(i, 1);
                deleteLoop()
            }
        }
    }
    deleteLoop();
    storeItems();
}

export function displayProjects() {
    document.querySelector("select#project").innerHTML = "";
    allProjects.forEach(obj => {
        newElement({ type: 'option', text: obj.name, value: obj.name, parent: "select#project" });
    })
}

export function moveUp(index) {
    if (index == 0) return;
    allProjects.splice(index - 1, 0, allProjects[index]);
    allProjects.splice(index + 1, 1);
    storeProjects();
}

export function moveDown(index) {
    if (index == allProjects.length - 1) return;
    allProjects.splice(index + 2, 0, allProjects[index]);
    allProjects.splice(index, 1);
    storeProjects();
}