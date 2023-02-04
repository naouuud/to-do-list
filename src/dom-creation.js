export function newElement(obj) {
    const element = document.createElement(obj.type);
    for (const property in obj) {
        if (property != "type" && property != "parent") {
            element[property] = obj[property];
        }
    }
    if (obj.parent) {
        if (typeof obj.parent === "string") document.querySelector(obj.parent).appendChild(element);
        else obj.parent.appendChild(element);
    }
    return element;
}