import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
});

const Roles = () => (
    <Query query={gql`
        {
            roles {
              id
              name
            }
        }
    `}>
        {({ loading, error, data:{roles} = {} }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
                <ul>
                    {roles.map(({id,name})=><li key={id}>{name}</li>)}
                </ul>
            );
        }}
    </Query>
);

const App = () => (
    <ApolloProvider client={client}>
        <div>
            <h2>My first Apollo app</h2>
            <Roles/>
        </div>
    </ApolloProvider>
);

export default App;
