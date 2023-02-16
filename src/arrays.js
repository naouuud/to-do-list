export let allItems = [];
export let allProjects = [];

export function updateProjectsArray() {
    if (localStorage['projects']) allProjects = JSON.parse(localStorage.getItem('projects'));
}

export function storeProjects() {
    localStorage.setItem('projects', JSON.stringify(allProjects));
}

export function updateItemsArray() {
    if (localStorage['items']) allItems = JSON.parse(localStorage.getItem('items'));
}

export function storeItems() {
    localStorage.setItem('items', JSON.stringify(allItems));
}