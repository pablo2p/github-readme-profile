import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_TOKEN_AUTH;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export { authLink };
