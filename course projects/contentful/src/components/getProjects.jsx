import { createClient } from "contentful";

const cliet = createClient({
  space: "158b8ogzx9gn",
  environment: "master",
  accessToken: "17SU7joH1oTPhwV647LAXDETuMsaqpjCNHArgmmteVk",
});

cliet
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response));

const usegetProjects = () => {
  
}