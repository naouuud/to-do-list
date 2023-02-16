import { allItems, storeItems } from "./arrays";

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
    storeItems();
}

export function deleteItem(index) {
    allItems.splice(index, 1);
    storeItems();
}

export function editItem(index, obj) {
    const complete = allItems[index].complete;
    const editedItem = {
        title: obj.title,
        description: obj.description,
        priority: obj.priority,
        due: obj.due,
        project: obj.project,
        complete
    };
    allItems.splice(index, 1, editedItem);
    storeItems();
}

export function checkItem(item) {
    if (!item.complete) item.complete = true;
    else item.complete = false;
    storeItems();
}