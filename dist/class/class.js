import { Category } from "../types/types.js";
var TaskClass = /** @class */ (function () {
    function TaskClass(name, done, category, createdAt) {
        if (category === void 0) { category = Category.General; }
        if (createdAt === void 0) { createdAt = new Date().toLocaleTimeString(); }
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = createdAt;
    }
    return TaskClass;
}());
export { TaskClass };
