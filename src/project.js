import { allItems, allProjects } from "./arrays";
import { newElement } from "./dom-creation";

export function createProject(name) {
    if (name != null) {
        const newProject = { name };
        if (allProjects.some(project => project.name == newProject.name)) {
            alert("Project already exists. Please pick a new name.");
            return
        }
        allProjects.push(newProject);
    }
}

export function deleteProject(n) {
    const projectName = allProjects[n].name;
    function deleteLoop() {
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].project == projectName) {
                allItems.splice(i, 1);
                deleteLoop()
            }
        }
    }
    deleteLoop();
    allProjects.splice(n, 1);
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
}

export function moveDown(index) {
    if (index == allProjects.length - 1) return;
    allProjects.splice(index + 2, 0, allProjects[index]);
    allProjects.splice(index, 1);
}