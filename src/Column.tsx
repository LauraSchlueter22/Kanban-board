import React from "react";
import { Task, ColumnId } from "./Task";
import TaskCard from "./TaskCard";
import styles from "./Column.module.css"

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
    className={styles.column}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, id)}
    >
        <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.badge} style={{ backgroundColor: color + "22", color: color }} >
                {tasks.length}
            </span>
        </div>
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