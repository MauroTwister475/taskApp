import { TaskData } from "@/types/TaskType";
import { create } from "zustand";


interface CurrentTaskProps {
  currentTask: TaskData;
  onSetCurrentTask: (currentTask: TaskData) => void;
}

export const useCurrentTaskStore = create<CurrentTaskProps>()((set) => ({
  currentTask: {
    id: 1,
    task: "",
    priority: "",
    category: "",
    description: "",
    status: "unconcluded",
  },
  onSetCurrentTask: (currentTask: TaskData) => set((state) => ({ currentTask: currentTask }))
}));
