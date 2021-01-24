import { InMemoryCache, makeVar } from '@apollo/client';

export const teamVar = makeVar([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        teamItems: {
          read() {
            return teamVar();
          },
        },
      },
    },
  },
});
