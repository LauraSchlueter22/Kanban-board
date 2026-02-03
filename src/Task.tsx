export type ColumnId = "todo" | "inprogress" | "done";

export interface Task {
    id: number;
    title: string;
    description: string;
    column: ColumnId;
}

export const Tasks: Task[] = [
  { id: 1, title: "Design login page", description: "Create forms for login, as well as add create account button", column: "todo" },
  { id: 2, title: "Design new account page", description: "Add inputs and forms for new account", column: "todo" },
  { id: 3, title: "Create API key", description: "Create API key for App", column: "inprogress" },
  { id: 4, title: "Create company logo", description: "Create logo for app", column: "done" },
];
