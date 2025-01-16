// import { z } from "zod";

// export const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   info: z.string(),
//   image: z.string(),
//   price: z.string(),
//   something: z.string(),
// });

// export type Tour = z.infer<typeof tourSchema>;

//////////////////////////////////////////////
// Data fetching for axios  //////////////////
//////////////////////////////////////////////
import axios from "axios";

const url = "https://www.course-api.com/react-tours-project";
