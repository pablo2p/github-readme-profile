import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { authLink } from './auth';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GITHUB_API_URL,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
