import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://ec2-3-15-39-161.us-east-2.compute.amazonaws.com:3000/graphql"
});

export { client };