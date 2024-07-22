import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "158b8ogzx9gn",
  environment: "master",
  accessToken: "17SU7joH1oTPhwV647LAXDETuMsaqpjCNHArgmmteVk",
});

export const useGetProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  async function getData() {
    try {
      const res = await client.getEntries({ content_type: "projects" });
      const projects = res.items.map((item) => {
        console.log(item);
        const { title, url, img } = item.fields;
        const id = item.sys.id;
        const imgs = img?.fields?.file?.url;
        return { title, url, id, imgs };
      });

      const reversedProjects = projects.reverse();

      setProjects(reversedProjects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};

client.getEntries({ content_type: "projects" }).then((res) => console.log(res));
