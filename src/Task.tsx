export type ColumnId = "todo" | "inprogress" | "done";

export interface Task {
    id: number;
    title: string;
    description: string;
    column: ColumnId;
}

export const Tasks: Task[] = [];
