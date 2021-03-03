import { ApolloClient } from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import {setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { split } from 'apollo-link';

const httpLink = createHttpLink({
  uri: "https://api.h-trace.com/graphql" 
  /* "https://ec2-3-15-39-161.us-east-2.compute.amazonaws.com:3000/graphql" */,
   credentials: 'include'
});
const token = Cookies.get('token')
const wsLink = new WebSocketLink({
  uri: "wss://api.h-trace.com/subscriptions" 
  /* "ws://ec2-3-15-39-161.us-east-2.compute.amazonaws.com:3000/subscriptions" */,
  options: {
    reconnect: true,
    lazy:true,
    connectionParams: {
      authorization : `Bearer ${token}`
    },
  }
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('token')
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }

})

var httpLinkToken = authLink.concat(httpLink);
//var wsLinkToken = authLink.concat(wsLink);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLinkToken
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

export { client };