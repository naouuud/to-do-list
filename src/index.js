import "./style.css";
import { allItems, allProjects } from "./arrays.js";
import { createItem } from "./item.js";
import { createProject } from "./project.js"
import { renderProjects } from "./projects-dom.js";

window.createProject = createProject;
window.createItem = createItem;
window.allProjects = allProjects;
window.allItems = allItems;

createProject("Adventure");
createProject("RPG");
createProject("Roguelite");
createItem({ title: "TUNIC (Secret Legend)", description: "Explore, be happy", due: "2023-02-28", priority: "2", complete: false, project: "Adventure" });
createItem({ title: "Ori and the Will of the Wisps", description: "Remember to love", due: "2023-06-30", priority: "1", complete: false, project: "Adventure" });
createItem({ title: "CrossCode", description: "Help an AI avatar find meaning in life", due: "2023-03-31", priority: "1", complete: false, project: "RPG" });
createItem({ title: "Dark Souls 3", description: "Fight your worst fears", due: "2023-06-30", priority: "3", complete: false, project: "RPG" })
createItem({ title: "Dwarf Fortress", description: "Wrap you head around this", due: "2024-02-07", priority: "1", complete: false, project: "Roguelite" });
createItem({ title: "The Binding of Isaac", description: "Defeat mom", due: "2023-08-31", priority: "2", complete: false, project: "Roguelite" });

renderProjects();