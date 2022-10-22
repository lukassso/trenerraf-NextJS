import { GraphQLClient } from 'graphql-request';
import { API_TOKEN, API_URL } from './constans';

export function request({ query, variables }) {
  const client = new GraphQLClient(API_URL, {
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}
