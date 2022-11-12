import { Category } from "../types/types.js";
var TaskClass = /** @class */ (function () {
    function TaskClass(name, done, category) {
        if (category === void 0) { category = Category.General; }
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date().toLocaleTimeString();
    }
    TaskClass.prototype.logCreationDate = function (extra) {
        console.log("Task zosta\u0142 wygenerowany o godzinie ".concat(this.createdAt, "s ").concat(extra));
    };
    return TaskClass;
}());
export { TaskClass };
