import { GET_COMPANY } from "./Query";
import { useQuery } from "@apollo/react-hooks";

const Task = () => {
  const { loading, error, data } = useQuery(GET_COMPANY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data.company.name);
  return(null)
};

export { Task };