import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import customInstance from "./utils";

const Items = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["banana"],
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

  if (isError) {
    return (
      <p style={{ marginTop: "4rem", textAlign: "center", fontWeight: "bold" }}>
        There was an Error...
      </p>
    );
  }

  console.log(error);

  // if (error) {
  //   return (
  //     <p style={{ marginTop: "4rem", textAlign: "center", fontWeight: "bold" }}>
  //       {/* {error.message} */}
  //       {error.response.data}
  //     </p>
  //   );
  // }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
