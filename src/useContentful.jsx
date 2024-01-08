import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_REACT_APP_CONTENTFUL_ACCESS_TOKEN,
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
