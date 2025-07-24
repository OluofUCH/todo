import React from "react";
import Columnheader from "./columnHeader";
import Taskcard from "./taskCard";

interface BoardColumnProps {
  columnId: string;
  onAdd: () => void;
  task: Array<TaskData>;
  refresh: () => void;
  edit: (taskId: string, columnId: string) => void;
}
interface TaskData {
  title: string;
  description: string;
  category: string;
  owner: string[];
  columnId: string;
  id: string;
}
export default function Boardcolumn({
  columnId,
  onAdd,
  task,
  refresh,
  edit,
}: BoardColumnProps) {
  return (
    <div className="h-full min-h-full p-[24px] flex flex-col gap-[24px] w-full rounded-[24px] bg-[#EEF2F5]">
      <Columnheader columnId={columnId} onAdd={onAdd} />
      {task.map((data: TaskData, index: number) => (
        <div key={index} className="flex flex-col gap-[16px] ">
          <Taskcard
            {...data}
            edit={() => edit(data.id, data.columnId)}
            refresh={refresh}
          />
        </div>
      ))}
      {task.length === 0 && (
        <div className="text-lg text-black">
          <p>No {columnId} task yet </p>
          <p className="text-gray-500">Click the + button to add a new task.</p>
        </div>
      )}
    </div>
  );
}
