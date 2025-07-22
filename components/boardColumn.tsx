import React from 'react'
import Columnheader from './columnHeader' 
import Taskcard from './taskCard'  


interface BoardColumnProps {
  columnId: string;
  onAdd: () => void;
  data: Array<TaskData>;
  refresh: () => void;
} 
interface TaskData {
  title: string
  description: string
  category: string
  owner: string[]
  columnId: string
  id: string
}
export default function Boardcolumn(props: BoardColumnProps) {
  
  return (
    <div className='h-full min-h-full p-[24px] flex flex-col gap-[24px] w-full rounded-[24px] bg-[#EEF2F5]'>
        <Columnheader columnId={props.columnId} onAdd={props.onAdd} />
        {props.data.map((data: TaskData, index: number)=>(

          <div key={index} className='flex flex-col gap-[16px] '>

        <Taskcard owner={data.owner} id={data.id} columnId={data.columnId} title={data.title} desc={data.description} category={data.category} refresh={props.refresh}/>
        </div>
        ))}
        {props.data.length === 0 && (
  <div className="text-lg text-black">
    <p>No {props.columnId} task yet </p>
    <p className="text-gray-500">Click the + button to add a new task.</p>
  </div>
)}

    </div>
  )
}
