'use client'
import React from 'react'
import Boardcolumn from "./boardColumn"
import Modal from "./modal"
import  { useState, useEffect } from "react"
import fetchTaskData from '@/lib/data'

interface TaskData {
  title: string
  description: string
  category: string
  owner: string[]
  columnId: string
  id: string
}

export default function Boardcontainer() {

  const [todoTasks, setTodoTasks] = useState<TaskData[]>([]);
  const [ongoingTasks, setOngoingTasks] = useState<TaskData[]>([]);
  const [doneTasks, setDoneTasks] = useState<TaskData[]>([]);
   const refreshData = () => {
    const { todoData, ongoingData, doneData } = fetchTaskData();
    setTodoTasks(todoData);
    setOngoingTasks(ongoingData);
    setDoneTasks(doneData);
  }
   useEffect(() => {
    refreshData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
 const [id, setId] = useState("");

  const handleAddTask= (columnId: string)=>{
    setIsOpen(true);
    setId(columnId)
  }
    const handleCancel= ()=>{
    console.log("hi")
    setIsOpen(false);
    refreshData();
  }
  return (
    <>
    {isOpen && <Modal onClose={handleCancel} columnId={id}/>}
    <div className='w-full h-full px-4 pt-[36px] grid grid-cols-3 gap-[24px]'>
        <Boardcolumn columnId="To do" onAdd={() => handleAddTask("todoData")} data={todoTasks} refresh={refreshData}/>
        <Boardcolumn columnId="Ongoing" onAdd={() => handleAddTask("ongoingData")} data={ongoingTasks} refresh={refreshData}/>
        <Boardcolumn columnId="Done" onAdd={() => handleAddTask("doneData")} data={doneTasks} refresh={refreshData}/>
    </div>
    </>
  )
}

