import { TaskData } from "@/types/TaskType";
import { create } from "zustand";

interface TaskType {
  tasks: TaskData[],
  onSetTask: (tasks: TaskData[]) => void,
}

export const useTaskStoreGlobal = create<TaskType>((set) => ({
  tasks: [],
  onSetTask: (tasks: TaskData[]) => set((state) => ({ tasks: tasks }))
}))