import axios from "axios";

export const postListApi = async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return result.data;
};
