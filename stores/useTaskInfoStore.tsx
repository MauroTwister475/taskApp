import { create } from "zustand";

export type TaskType = {
  name: string,
  description: string,
}

interface TaskProps {
  task: TaskType,
  onSetTask: (task: TaskType) => void;
}

export const useTaskStore = create<TaskProps>((set) => ({
  task: {
    name: "",
    description: "",
  },
  onSetTask: (task: TaskType) => set((state) => ({ task: task }))
}));

