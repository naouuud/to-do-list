import { allItems } from "./arrays";

export function createItem(obj) {
    const newItem = {
        title: obj.title,
        description: obj.description,
        due: obj.due,
        priority: obj.priority,
        project: obj.project,
        complete: false
    };
    allItems.push(newItem);
}

export function deleteItem(title) {
    const index = allItems.findIndex(item => item.title == title);
    allItems.splice(index, 1);
}

export function editItem(index, obj) {
    const editedItem = {
        title: obj.title,
        description: obj.description,
        due: obj.due,
        priority: obj.priority,
        complete: obj.complete,
        project: obj.project,
    };
    allItems.splice(index, 1, editedItem);
}