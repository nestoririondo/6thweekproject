import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "3cyqwn46rya8",
    accessToken: "lir5IsnHIY3FFJAeW0h_f7BbL19u4zARnXOaxut7Y8I",
    host: "preview.contentful.com",
  });

  const getRecipes = async () => {
    try {
      let response = await client.getEntries({
        content_type: "recipe",
        order: "fields.title", // order alfabetically
      });
      return response.items;
    } catch (error) {
      console.log(error);
    }
  };

  return { getRecipes };
};

export default useContentful;
