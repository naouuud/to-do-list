import { allItems } from "./arrays";

export function createItem(obj) {
    return {
        title: obj.title,
        description: obj.description,
        due: obj.due,
        priority: obj.priority,
        complete: obj.complete,
        project: obj.project,
        complete: false
    };
}

export function pushItem(obj) {
    allItems.push(obj);
}