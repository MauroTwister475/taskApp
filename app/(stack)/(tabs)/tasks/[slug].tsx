import { useEffect } from "react";
import { useTaskDatabase } from "@/database/useTaskDatabase";
import { useLocalSearchParams } from "expo-router";
import { TaskItemDetail } from "@/screens/task-screen-detail";
import { useCurrentTaskStore } from "@/stores/useCurrentTask";

export default function ListTasksDetails() {
  const { onSetCurrentTask, currentTask } = useCurrentTaskStore();

  const { listTaskById } = useTaskDatabase();
  const { slug } = useLocalSearchParams<{ slug: string }>();

  useEffect(() => {
    async function getTaskById() {
      try {
        const resById = await listTaskById(slug!);
        if (resById !== undefined && resById.task !== undefined) {
          onSetCurrentTask(resById.task!);
        } else {
          console.error("Tarefa não encontrada ou inválida.");
        }
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    }
    getTaskById();
  }, [slug])

  return <TaskItemDetail data={currentTask} />;
}
