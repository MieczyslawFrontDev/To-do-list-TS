import { Category } from "../types/types.js";

export class TaskClass {
  name: string;
  done: boolean;
  category?: Category;
  createdAt: string;

  constructor(
    name: string,
    done: boolean,
    category: Category = Category.General,
    createdAt: string = new Date().toLocaleTimeString()
  ) {
    this.name = name;
    this.done = done;
    this.category = category;
    this.createdAt = createdAt;
  }
}
