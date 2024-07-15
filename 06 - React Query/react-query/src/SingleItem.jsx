import { useMutation, useQueryClient } from "@tanstack/react-query";
import customInstance from "./utils";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {
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

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: ({ taskId }) => {
      return customInstance.delete(`${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banana"] });
      toast.warning("Task Deleted");
    },
  });

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />

      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}>
        {item.title}
      </p>

      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask({ taskId: item.id, isLoading: !item.isLoading })}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
