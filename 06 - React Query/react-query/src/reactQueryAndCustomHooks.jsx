import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import customInstance from "./utils";

export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["banana"],
    queryFn: () => customInstance.get("/"),
  });
  return { isLoading, isError, data };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customInstance.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banana"] });
      toast.info("Task Completed");
    },
  });

  return { editTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: ({ taskId }) => {
      return customInstance.delete(`${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banana"] });
      toast.warning("Task Deleted");
    },
  });

  return { deleteTask };
};
