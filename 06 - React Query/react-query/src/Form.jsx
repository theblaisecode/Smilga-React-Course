import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import customInstance from "./utils";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const {
    mutate: crrateTask,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: () => {
      customInstance.post("/", { title: "Some title" });
    },
  });

  // console.log(result);

  const handleSubmit = (e) => {
    e.preventDefault();

    crrateTask()
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>

      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />

        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};

export default Form;
