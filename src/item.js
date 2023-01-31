import { allItems } from "./arrays";

export function createItem(obj) {
    const newItem = {
        title: obj.title,
        description: obj.description,
        due: obj.due,
        priority: obj.priority,
        complete: obj.complete,
        project: obj.project,
        complete: false
    };
    allItems.push(newItem);
    return newItem;
}