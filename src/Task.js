import { GET_USERNAME } from "./Query";
import { useQuery } from "@apollo/react-hooks";

const Task = () => {
  const { loading, error, data } = useQuery(GET_USERNAME);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return(null)
};

export { Task };