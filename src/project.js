import { allItems, allProjects } from "./arrays";

export function createProject(name) {
    if (name != null) {
        const newProject = { name };
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
        const option = document.createElement("option");
        option.value = obj.name;
        option.textContent = obj.name;
        document.querySelector("select#project").appendChild(option);
    })
}