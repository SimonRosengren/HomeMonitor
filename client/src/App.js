import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/main/Main';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const apolloClient = new ApolloClient({
  uri: '/api/graphql'
})

function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
