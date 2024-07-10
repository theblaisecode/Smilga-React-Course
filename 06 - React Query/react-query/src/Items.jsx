import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import customInstance from "./utils";

const Items = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customInstance.get("/"),
  });

  console.log(data);

  if (isLoading) {
    return (
      <p style={{ marginTop: "4rem", textAlign: "center", fontWeight: "bold" }}>
        Your Tasks Are Loading...
      </p>
    );
  }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
