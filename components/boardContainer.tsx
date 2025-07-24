"use client";
import React from "react";
import Boardcolumn from "./boardColumn";
import Modal from "@/components/ui/modal";
import { useState, useEffect } from "react";
import fetchTaskData from "@/lib/task";

interface TaskData {
  title: string;
  description: string;
  category: string;
  owner: string[];
  columnId: string;
  id: string;
}

export default function BoardContainer() {
  const [todoTasks, setTodoTasks] = useState<TaskData[]>([]);
  const [ongoingTasks, setOngoingTasks] = useState<TaskData[]>([]);
  const [doneTasks, setDoneTasks] = useState<TaskData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [editingTask, setEditingTask] = useState<TaskData | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const refreshData = () => {
    const { todoData, ongoingData, doneData } = fetchTaskData();
    setTodoTasks(todoData);
    setOngoingTasks(ongoingData);
    setDoneTasks(doneData);
  };
  useEffect(() => {
    refreshData();
  }, []);

  const handleAddTask = (columnId: string) => {
    setIsEditing(false);
    setEditingTask(null);
    setIsOpen(true);
    setId(columnId);
  };
  const handleEditTask = (taskId: string, columnId: string) => {
    let task: TaskData;

    switch (columnId) {
      case "todoData":
        task = todoTasks.find((t) => t.id === taskId) || null;
        break;
      case "ongoingData":
        task = ongoingTasks.find((t) => t.id === taskId) || null;
        break;
      case "doneData":
        task = doneTasks.find((t) => t.id === taskId) || null;
        break;
    }

    if (task) {
      setEditingTask(task);
      setIsEditing(true);
      setId(columnId);
      setIsOpen(true);
    }
  };

  const handleCancel = () => {
    console.log("hi");
    setIsOpen(false);
    refreshData();
  };
  return (
    <>
      {isOpen && (
        <Modal
          onClose={handleCancel}
          columnId={id}
          editTask={editingTask}
          isEditing={isEditing}
        />
      )}
      <div className="w-full h-full px-4 pt-[36px] grid lg:grid-cols-3 gap-[24px]">
        <Boardcolumn
          columnId="To do"
          onAdd={() => handleAddTask("todoData")}
          task={todoTasks}
          refresh={refreshData}
          edit={handleEditTask}
        />
        <Boardcolumn
          columnId="Ongoing"
          onAdd={() => handleAddTask("ongoingData")}
          task={ongoingTasks}
          refresh={refreshData}
          edit={handleEditTask}
        />
        <Boardcolumn
          columnId="Done"
          onAdd={() => handleAddTask("doneData")}
          task={doneTasks}
          refresh={refreshData}
          edit={handleEditTask}
        />
      </div>
    </>
  );
}
