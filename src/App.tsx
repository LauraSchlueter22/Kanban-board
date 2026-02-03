import { useState } from "react";
import { Tasks, ColumnId, Task } from "./Task";
import Column from "./Column";

const Columns = [
  { id: "todo" as ColumnId, title: "To Do", color: "#60a5fa" },
  { id: "inprogress" as ColumnId, title: "In Progress", color: "#fb923c" },
  { id: "done" as ColumnId, title: "Done", color: "#34d399" },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(Tasks);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskDescrip, setNewTaskDescrip] = useState<string>("");

  const handleCreateTask = () => {
    if (!newTaskTitle || newTaskTitle.trim() === "") return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTaskTitle,
        description: newTaskDescrip,
        column: "todo",
      },
    ]);
    setNewTaskTitle("");
    setNewTaskDescrip("");
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleDragStart = (e: React.DragEvent, taskId: number) => {
    e.dataTransfer.setData("taskId", String(taskId));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, columnId: ColumnId) => {
    e.preventDefault();
    const taskId = Number(e.dataTransfer.getData("taskId"));

    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, column: columnId } : task,
      ),
    );
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
        <input 
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <input
          type="text"
          placeholder="Description"
          value={newTaskDescrip}
          onChange={(e) => setNewTaskDescrip(e.target.value)}
          />
          <button onClick={handleCreateTask}>Add Task</button>
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
        {Columns.map((col) => (
          <Column
            key={col.id}
            id={col.id}
            title={col.title}
            color={col.color}
            tasks={tasks.filter((task) => task.column === col.id)}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default App;
