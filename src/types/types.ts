export interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

export enum Category {
  General = "general",
  Hobby = "hobby",
  Work = "work",
  Gym = "gym",
}
