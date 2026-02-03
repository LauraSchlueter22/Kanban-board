import React from "react";
import { Task, ColumnId } from "./Task";
import TaskCard from "./TaskCard";

interface ColumnProps {
    id: ColumnId;
    title: string;
    color: string;
    tasks: Task[];
    onDragStart: (e: React.DragEvent, taskId: number) => void;
    onDragOver: (e: React.DragEvent) => void;
    onDrop: (e: React.DragEvent, columnId: ColumnId) => void;
    onDelete: (taskId: number) => void;
}

const Column = ({ id, title, color, tasks, onDragStart, onDragOver, onDrop, onDelete }: ColumnProps) => {
    return (
    <div
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, id)}
    >
        <h1>{title}</h1>
        {tasks.map((task) => (
            <TaskCard key={task.id}
            task={task}
            onDragStart={onDragStart}
            onDelete={onDelete} />
        ))}
    </div>
    );
};

export default Column;