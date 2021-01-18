import { gql } from "apollo-boost";
/* import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

var userToken = Cookies.get('token');
var decoded = jwt_decode(userToken); */

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
      destination_id
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