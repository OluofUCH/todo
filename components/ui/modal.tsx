import React, { useState, useEffect } from 'react'
import {useRouter} from "next/navigation"
interface TaskData {
  title: string
  description: string
  category: string
  owner: string[]
  columnId: string
  id: string
}

interface ModalProps {
  onClose: () => void;
  columnId: string;
  onTaskAdded?: () => void;
  editTask: TaskData | null;
  isEditing: boolean;
}

export default function Modal(props: ModalProps) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('DESIGN SYSTEM');
  const [owner, setOwner] = useState('');
  const [id, setId] = useState("");

  useEffect(() => {
    if (props.isEditing && props.editTask) {
      setTitle(props.editTask.title);
      setDescription(props.editTask.description);
      setCategory(props.editTask.category);
      setOwner(props.editTask.owner.join(', '));
      setId(props.editTask.id);
    } else {
      setId(Math.random().toString(36).substr(2,9))
    }
  }, [props.isEditing, props.editTask])

  const saveToLocalStorage = (taskData: TaskData) => {
    try {
      let storageKey = '';
      switch (props.columnId.toLowerCase()) {
        case 'tododata':
          storageKey = 'todoData';
          break;
        case 'ongoingdata':
          storageKey = 'ongoingData';
          break;
        case 'donedata':
          storageKey = 'doneData';
          break;
        default:
          storageKey = 'todoData';
      }

      const existingData: TaskData[] = JSON.parse(localStorage.getItem(storageKey) || '[]');
      
      if (props.isEditing && props.editTask) {
    
        const taskIndex = existingData.findIndex(task => task.id === props.editTask!.id);
        if (taskIndex !== -1) {
          existingData[taskIndex] = taskData;
        }
      } else {
        existingData.push(taskData);
      }
      
      localStorage.setItem(storageKey, JSON.stringify(existingData));
      
    } catch (error) {
      console.error('Error saving task to localStorage:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim() || !owner.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    
    const taskData: TaskData = {
      title: title.trim(),
      description: description.trim(),
      category,
      owner: owner.split(',').map(o => o.trim().substring(0, 2)).filter(o => o.length > 0),
      columnId: props.columnId,
      id: id
    };

    saveToLocalStorage(taskData);

    if (!props.isEditing) {
      setTitle('');
      setDescription('');
      setCategory('DESIGN SYSTEM');
      setOwner('');
      setId("");
    }

    props.onTaskAdded?.();
    props.onClose();

  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onClose();
  };

   return (
    <div className="flex bg-transparent fixed justify-center items-center backdrop-blur-base z-99 min-h-[80dvh] w-[80dvw] md:w-5/6">
      <form onSubmit={handleSubmit} className='shadow-2xl text-gray-800 flex justify-center flex-col h-1/2 w-full md:w-1/3 p-8 rounded-2xl gap-8 bg-white/95 backdrop-blur-xl border border-white/20'>
        <div className="flex justify-between">
          <p className="text-[20px] font-[700] text-black ">
          {props.isEditing ? 'Edit Task' : `Create New Task`}
          </p>
          <button type="button" onClick={handleCancel} className="text-xl font-bold text-red-500 p-2 rounded-full ">
            ×
          </button>
        </div> 
        
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-auto h-12 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl px-4 border-2 border-gray-200 placeholder-gray-500' 
          placeholder='Enter task name'
          required
        />
        
        <input 
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-auto h-12 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl px-4 border-2 border-gray-200 placeholder-gray-500' 
          placeholder='Enter task description'
          required
        />
        
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='w-auto h-12 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl px-4 border-2 border-gray-200  cursor-pointer'
        >
          <option value="DESIGN SYSTEM">DESIGN SYSTEM</option>
          <option value="TYPOGRAPHY">TYPOGRAPHY</option>
          <option value="DEVELOPMENT">DEVELOPMENT</option>
        </select>
        
        <input 
          type="text" 
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          className='w-auto h-12 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl px-4 border-2 border-gray-200 placeholder-gray-500' 
          placeholder='Enter task owners (comma separated)'
          required
        />
        
        <div className="flex gap-4">
          <input 
            type="submit" 
            value={props.isEditing ? 'Edit Task' : `Create Task`}
            className='flex-1 h-12 bg-black hover:bg-gray-500 text-white font-semibold shadow-lg rounded-xl cursor-pointer '
          />
        </div>
      </form>
    </div>
  );
}