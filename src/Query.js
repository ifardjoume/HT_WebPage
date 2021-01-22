import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
  mutation login(
    $username:String!
    $password:String!
  ) {
    login(
      username:$username
      password:$password
    ){
      token
    }
  }
`;

export const GET_USERNAME= gql`
  query($user_id: Int!){
    user(user_id: $user_id){
    username
  }
}
`;

export const GET_COMPANY= gql`
  query($user_id: Int!){
    user(user_id: $user_id){
    company_id
  }
}
`;

export const GET_SHIPMENTS= gql`
  query{
    shipments {
      shipment_id
      origin_id
      origin_user_id
      destination_user_id
      destination_id
      departure
      arrival
      status
      alerts {
        type
        value
        x
        y
        z
      }
    }
  }
`;

export const GET_BRANCHES= gql`
query{
  company {
      branches {
      branch_id
        name
      }
    }
  }
`;

export const GET_USERNAMES= gql`
query{
    users{
    user_id
    username
  }
}
`;

export const GET_SHIPMENT_TEMP=gql`
query($shipment_id:Int!){
    shipments(shipment_id:$shipment_id) {
    temperature_readings{
      value
    }
    }
  }
`