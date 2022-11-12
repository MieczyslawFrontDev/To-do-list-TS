import { Category } from "../types/types.js";

export class TaskClass {
  name: string;
  done: boolean;
  category?: Category;
  createdAt: string;

  constructor(
    name: string,
    done: boolean,
    category: Category = Category.General
  ) {
    this.name = name;
    this.done = done;
    this.category = category;
    this.createdAt = new Date().toLocaleTimeString();
  }

  logCreationDate(extra?: string) {
    console.log(
      `Task został wygenerowany o godzinie ${this.createdAt}s ${extra}`
    );
  }
}
