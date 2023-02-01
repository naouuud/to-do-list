export function newElement(obj) {
    const element = document.createElement(obj.type);
    if (obj.class) element.classList.add(obj.class);
    if (obj.id) element.id = obj.id;
    if (obj.text) element.textContent = obj.text;
    if (obj.parentS) document.querySelector(obj.parentS).appendChild(element);
    if (obj.parentV) obj.parentV.appendChild(element);
    for (const property in obj) {
        if (property != "type" && property != "class" && property != "id" && property != "text" && property != "parentS" && property != "parentV") {
            element.setAttribute(`${property}`, obj[property]);
        }
    }
    return element;
}