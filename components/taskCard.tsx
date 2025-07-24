import React from 'react'
import Taskcardheader from "./taskCardHeader"
import Taskowner from './taskOwner'


export default function Taskcard(props: TaskData) {

  return (
    <div className="flex text-black rounded-[20px] flex-col gap-[16px] p-[24px] bg-white ">
        <div className='flex flex-col gap-[8px]'>
            <Taskcardheader  category={props.category} id={props.id} columnId={props.columnId} edit={props.edit} refresh={props.refresh}/>
        <p className='font-[500] text-[18px] tracking-[0%] text-wrap leading-[100%]'>
            {props.title}
        </p>
         <p className='font-[400] text-[12px] tracking-[0%] leading-[100%]'>
          {props.description}
        </p>
        </div>
        <Taskowner owner={props.owner}/>
    </div>
  )
}
interface TaskData {
  title: string
  description: string
  category: string
  owner: string[]
  columnId: string
  id: string
  edit: (id)=>void;
  refresh: ()=>void;
}