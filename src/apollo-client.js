import { ApolloClient } from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import {setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

const httpLink = createHttpLink({
  uri: "http://ec2-3-15-39-161.us-east-2.compute.amazonaws.com:3000/graphql",
   credentials: 'include'
})

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('token')
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }

})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export { client };