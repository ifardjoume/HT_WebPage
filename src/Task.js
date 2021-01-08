import React from "react";
import { GET_USERS } from "./Query";
import { useQuery } from "@apollo/react-hooks";

const Task = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <h2>{data.user.username}</h2>
  )
};

export { Task };