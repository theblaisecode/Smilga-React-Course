import { useState, useEffect } from "react";
const url = "https://www.course-api.com/react-tours-project";

function Component() {
  //tours
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch tours...`);
        }
        const rawData = await res.json();
        console.log(rawData);
      } catch (error) {
        const msg =
          error instanceof Error ? error.message : "There was am error...";
        setIsError(msg);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (isError) {
    return <h3>Error {isError} </h3>
  }

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Fetch Data</h2>
    </div>
  );
}
export default Component;
