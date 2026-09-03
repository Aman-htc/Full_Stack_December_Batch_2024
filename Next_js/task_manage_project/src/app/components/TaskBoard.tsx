"use client";

import {
  DndContext,
  DragEndEvent,
  closestCorners,
} from "@dnd-kit/core";

import { useState } from "react";
import TaskColumn from "./taskcolumn";

type TaskStatus = "todo" | "in-progress" | "completed";

type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Design Homepage",
    status: "todo",
  },
  {
    id: "2",
    title: "API Integration",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Responsive Design",
    status: "todo",
  },
  {
    id: "4",
    title: "Testing",
    status: "in-progress",
  },
];

const columns = [
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "in-progress",
    title: "In Progress",
  },
  {
    id: "completed",
    title: "Completed",
  },
] as const;

export default function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id.toString();

    const newStatus = over.id.toString() as TaskStatus;

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  }

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        {columns.map((column) => (
          <TaskColumn
            key={column.id}
            id={column.id}
            title={column.title}
            tasks={tasks.filter(
              (task) => task.status === column.id
            )}
          />
        ))}

      </div>
    </DndContext>
  );
}