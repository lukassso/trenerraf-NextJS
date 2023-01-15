import { GraphQLClient } from 'graphql-request';
import { API_DATOCMS_TOKEN, API_DATOCMS_URL } from './constants';

export function request({ query, variables }) {
  const client = new GraphQLClient(API_DATOCMS_URL, {
    headers: {
      authorization: `Bearer ${API_DATOCMS_TOKEN}`,
    },
  });
  return client.request(query, variables);
}
