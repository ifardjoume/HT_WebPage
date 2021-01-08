import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
  mutation login(
    $username:String!
    $password:String!
  ) {
    login(
      username:$username password:$password
    ){
      token
    }
  }
`;


export const GET_COMPANY= gql`
  query{
  company(company_id:2){
    name
    location
  }
}
`;