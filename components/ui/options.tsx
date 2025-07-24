"use client";
import { useRef, useEffect } from "react";

interface TaskData {
  title: string;
  description: string;
  category: string;
  owner: string[];
  columnId: string;
  id: string;
}
interface OptionProps {
  id: string;
  columnId: string;
  cancel: () => void;
  refresh: () => void;
  edit: () => void;
}

export default function Options(props: OptionProps) {
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!optionsRef.current.contains(event.target as Node)) {
        props.cancel();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  const removeTask = () => {
    console.log("HI", props.columnId, props.id);
    const todoData = JSON.parse(localStorage.getItem(props.columnId) || "[]");
    const data = todoData;
    console.log(data);
    const index = data.findIndex((item: TaskData) => item.id === props.id);
    console.log(index);
    if (index === -1) return false;
    data.splice(index, 1);
    localStorage.setItem(props.columnId, JSON.stringify(data));
    props.cancel();
    props.refresh();
  };
  const markHasOngoing = () => {
    const oldData = JSON.parse(localStorage.getItem(props.columnId) || "[]");
    const newData2 = JSON.parse(localStorage.getItem("ongoingData") || "[]");
    const index = oldData.findIndex((item: TaskData) => item.id === props.id);
    console.log(index);
    if (index === -1) return false;
    oldData[index].columnId = "ongoingData";
    const task = oldData[index];
    oldData.splice(index, 1);
    newData2.push(task);
    localStorage.setItem(props.columnId, JSON.stringify(oldData));
    localStorage.setItem("ongoingData", JSON.stringify(newData2));

    props.cancel();
    props.refresh();
  };
  const markHasDone = () => {
    if (props.columnId === "doneData") {
      return null;
    }
    console.log("HI", props.columnId, props.id);
    const oldData = JSON.parse(localStorage.getItem(props.columnId) || "[]");
    const newData2 = JSON.parse(localStorage.getItem("doneData") || "[]");
    const index = oldData.findIndex((item: TaskData) => item.id === props.id);
    console.log(index);
    if (index === -1) return false;
    oldData[index].columnId = "doneData";
    const task = oldData[index];
    oldData.splice(index, 1);
    newData2.push(task);
    localStorage.setItem(props.columnId, JSON.stringify(oldData));
    localStorage.setItem("doneData", JSON.stringify(newData2));

    props.cancel();
    props.refresh();
  };
  const edit = () => {
    props.edit();
    props.cancel();
  };

  return (
    <>
      <div
        ref={optionsRef}
        className="flex absolute z-99 bg-white shadow-md justify-center h-auto w-auto p-2"
      >
        <div className="flex flex-col w-full text-black text-sm">
          <button onClick={removeTask} className="hover:bg-blue-200">
            Delete
          </button>
          <button onClick={edit} className="hover:bg-blue-200">
            Edit
          </button>
          <button onClick={props.cancel} className="hover:bg-blue-200">
            Cancel
          </button>

          {props.columnId === "todoData" && (
            <button onClick={markHasOngoing} className="hover:bg-blue-200">
              Mark as Ongoing
            </button>
          )}
          {(props.columnId === "todoData" ||
            props.columnId === "ongoingData") && (
            <button onClick={markHasDone} className="hover:bg-blue-200">
              Mark as Done
            </button>
          )}
        </div>
      </div>
    </>
  );
}
