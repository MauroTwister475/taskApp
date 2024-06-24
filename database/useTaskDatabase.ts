import { TaskDataType, TaskData } from "@/types/TaskType";
import { useSQLiteContext } from "expo-sqlite";

export function useTaskDatabase() {
  const DB = useSQLiteContext();

  async function create(data: TaskDataType) {
    try {
      const res = await DB.runAsync(
        "INSERT INTO TASKS (task, description, category, priority) VALUES (?,?,?,?)",
        data.task,
        data.description,
        data.category,
        data.priority
      );

      const lastId = res.lastInsertRowId;
      return { lastId };
    } catch (error) {
      console.log("Erro ao criar uma tarefa BACK");
      console.log(error);
    } 
  }

  async function listTasks() {
    try {
      const allTasks = await DB.getAllAsync<TaskData>(
        "SELECT * FROM tasks ORDER BY id desc"
      );
      return { allTasks };
    } catch (error) {
      console.log("Erro ao criar uma tarefa");
    }
  }
  async function listTaskById(id: string) {
    try {
      const ID = Number(id);
      const task = await DB.getFirstAsync<TaskData>(
        "SELECT * FROM tasks WHERE id = ?",
        ID
      );

      return { task };
    } catch (error) {
      console.log("Erro ao listar uma tarefa");
    }
  }

  async function listLimitedTasks() {
    try {
      const limitedTasks = await DB.getAllAsync<TaskData>(
        "SELECT * FROM tasks ORDER BY id desc LIMIT 4"
      );

      return { limitedTasks };
    } catch (error) {
      console.log("Erro ao criar uma tarefa");
    }
  }

  async function updateTask(newData: TaskData) {
    try {
      const updatedTask = await DB.runAsync(
        "UPDATE tasks SET task = ?, description = ?, category = ?, priority = ? WHERE id = ?",
        newData.task,
        newData.description,
        newData.category,
        newData.priority,
        newData.id,
      );

      return { updatedTask };
    } catch (error) {
      console.log("Erro ao updated uma tarefa");
    }
  }

  async function deleteTask(id: number) {
    try {
      const deletedTask = await DB.runAsync(
        "DELETE FROM tasks WHERE id = $id",
        { $id: id }
      );

      return { deletedTask };
    } catch (error) {
      console.log("Erro ao deletar uma tarefa");
    }
  }

  return {
    create,
    listTasks,
    listTaskById,
    listLimitedTasks,
    updateTask,
    deleteTask,
  };
}
