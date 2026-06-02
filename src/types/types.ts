export type Theme = "dark" | "light";

export type Priority = "all" | "high" | "medium" | "low";

export type SortBy = "newest" | "oldest" | "priority";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  isCompleted: boolean;
}

export interface FormErrors {
  id?: string;
  title?: string;
  description?: string;
  priority?: string;
  dueDate?: string;
  isCompleted?: boolean;
}