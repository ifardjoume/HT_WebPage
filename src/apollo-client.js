import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import {setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "http://ec2-3-15-39-161.us-east-2.compute.amazonaws.com:3000/graphql",
   credentials: 'include'
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjowLCJleHBpcmVzIjoiMjAyMS0wMS0wOFQxODozMjo0OC41MTNaIiwicmVmcmVzaFRva2VuIjpmYWxzZSwiY2xpZW50QWRtaW4iOnRydWUsImlhdCI6MTYxMDA0NTU2OH0.4fwcjDZVdqO9rGY0du_oPsJTIyPSOXycKlmYV0HrzdQ"
    }
  }

})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export { client };