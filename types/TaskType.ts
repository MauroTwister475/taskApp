export type TaskData = {
  id: number,
  task: string,
  description: string,
  category: string,
  priority: string,
  status?: "concluded" | "unconcluded",
}

export type TaskDataType = Omit<TaskData, "id">