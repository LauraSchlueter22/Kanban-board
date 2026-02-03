import React from "react";
import { Task } from "./Task";

interface TaskCardProps {
    task: Task;
    onDragStart: (e: React.DragEvent, taskId: number) => void;
    onDelete: (Id: number) => void;
}

const TaskCard = ({ task, onDragStart, onDelete }: TaskCardProps) => {
    return (
        <div draggable={true} onDragStart={(e) => onDragStart(e, task.id)}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    )
};

export default TaskCard;