// import { isToday } from "date-fns";

const toDoActions = {
    markComplete() {
        this.complete = true;
    },
    markIncomplete() {
        this.complete = false;
    },
    changePriority(num) {
        if (num < 0 || num > 2) return;
        this.priority = num;
    },
    changeTitle(string) {
        this.title = string;
    },
    changeDescription(string) {
        this.description = string;
    },
    changeParent(string) {
        this.parent = string
    }
}

function newItem(obj) {
    return Object.assign(Object.create(toDoActions), {
    title: obj.title,
    description: obj.description,
    // item.due = obj.due;
    priority: obj.priority,
    complete: obj.complete,
    parent: obj.parent,
    });
}

const travel = {
    title: "Travel",
    description: "Wander the world",
    // due: 
    priority: 0,
    complete: false,
    parent: "Bucket List"
}

const myItem = newItem(travel);
export { myItem };