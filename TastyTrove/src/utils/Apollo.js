import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://10.0.0.243:3000/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
