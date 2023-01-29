import "./style.css";
import { collectFormData } from "./item-form";
import { allItems } from "./arrays";
import { createItem, pushItem } from "./item";
import { renderProjects } from "./project-dom";

document.querySelector("button[type=submit]").addEventListener("click", (e) => {
    e.preventDefault();
    const obj = collectFormData();
    const newItem = createItem(obj);
    pushItem(newItem);
    console.log(allItems);
});

renderProjects();