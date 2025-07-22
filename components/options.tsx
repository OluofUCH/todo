'use client'
import React from 'react'

interface TaskData {
  title: string
  description: string
  category: string
  owner: string[]
  columnId: string
  id: string
}

interface OptionProps{
    id: string
    columnId: string
    cancel: ()=>void
    refresh: ()=>void
}

export default function Options(props: OptionProps) {
    
    var newColumnId = ""
    switch (props.columnId) {
        case 'todoData':
          newColumnId = 'ongoingData';
          break;
        case 'ongoingData':
          newColumnId = 'doneData';
          break;
        case 'doneData':
          newColumnId = 'doneData';
          break;
        default:
          newColumnId = 'todoData';
      }
    const removeTask = ()=>{
        console.log("HI", props.columnId, props.id);
        const todoData = JSON.parse(localStorage.getItem(props.columnId) || '[]');
        const data =  todoData;
        console.log(data)
        const index = data.findIndex((item: TaskData)=> item.id === props.id);
        console.log(index)
        if(index === -1) return false
            data.splice(index, 1);
            localStorage.setItem(props.columnId, JSON.stringify(data));
            props.cancel();
            props.refresh();
        
    }
    const updateTask = ()=>{
        console.log("HI", props.columnId, props.id);
        const oldData = JSON.parse(localStorage.getItem(props.columnId) || '[]');
        const newData2 = JSON.parse(localStorage.getItem(newColumnId) || '[]');
        const index = oldData.findIndex((item: TaskData)=> item.id === props.id);
        console.log(index)
        if(index === -1) return false
        oldData[index].columnId = newColumnId;
        const task = oldData[index];
        oldData.splice(index, 1);
            newData2.push(task)
            localStorage.setItem(props.columnId, JSON.stringify(oldData));
            localStorage.setItem(newColumnId, JSON.stringify(newData2));
            
            props.cancel();
            props.refresh();
        
    }

  return (
    <div className="flex fixed z-99 bg-white shadow-md justify-center h-20 w-18 p-2">
        <div className='flex flex-col w-full text-black text-sm'>
        <button onClick={removeTask} className='hover:bg-blue-200'>
         Delete
        </button>
        <button onClick={props.cancel} className='hover:bg-blue-200'>
            Cancel
        </button>
        <button onClick={updateTask} className='hover:bg-blue-200'>
            Update
        </button>
        </div>
    </div>
  )
}