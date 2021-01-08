import { gql } from "apollo-boost";

export const GET_USERS = gql`
  query user{
    user(user_id:1){
      username
    }
  }
`;