import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo-client";
//import LoadingPage from './components/loadingPage/LoadingPage';


ReactDOM.render(
      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>,
       document.getElementById('root'));