// import { useState, useEffect } from "react";
// import { type Tour, tourSchema } from "./types";

// const url = "https://www.course-api.com/react-tours-project";

// function Component() {
//   //tours
//   const [tours, setTours] = useState<Tour[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isError, setIsError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);

//       try {
//         const res = await fetch(url);
//         if (!res.ok) {
//           throw new Error(`Failed to fetch tours...`);
//         }
//         const rawData: Tour[] = await res.json();
//         const result = tourSchema.array().safeParse(rawData);

//         if (!result.success) {
//           console.log(result.error.message);
//           throw new Error(`Failed to parse tours`);
//         }

//         setTours(result.data);
//       } catch (error) {
//         const msg =
//           error instanceof Error ? error.message : "There was am error...";
//         setIsError(msg);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <h3>Loading...</h3>;
//   }

//   if (isError) {
//     return <h3>Error {isError} </h3>;
//   }

//   return (
//     <div>
//       <h2>React & Typescript</h2>
//       <h2>Fetch Data</h2>

//       <div>
//         <h2 className="mb-1">Tours</h2>
//         {tours.map((tour) => {
//           return <p key={tour.id} className="mb-1">
//             {tour.name}
//           </p>
//         })}
//       </div>
//     </div>
//   );
// }
// export default Component;


//////////////////////////////////////////////
// Data fetching for axios  //////////////////
//////////////////////////////////////////////
