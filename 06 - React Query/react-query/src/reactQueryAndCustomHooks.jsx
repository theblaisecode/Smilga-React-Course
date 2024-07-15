import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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

export const useCreateTask = () => {
  const [newItemName, setNewItemName] = useState("");

  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskList) => {
      return customInstance.post("/", { title: taskList });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banana"] });
      toast.success("Success! Task Added");
      setNewItemName("");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response.data.msg);
    },
  });

  return { createTask, isLoading, setNewItemName, newItemName };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customInstance.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banana"] });
      toast.info("Task Status Updated");
    },
  });

  return { editTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
    mutationFn: ({ taskId }) => {
      return customInstance.delete(`${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banana"] });
      toast.warning("Task Deleted");
    },
  });

  return { deleteTask, deleteTaskLoading };
};
