interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

type Category = "general" | "work" | "gym" | "hobby";
