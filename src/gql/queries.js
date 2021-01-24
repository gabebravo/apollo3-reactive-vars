import gql from 'graphql-tag';

export const GET_TEAM_ITEMS = gql`
  query GetTeamItems {
    teamItems @client
  }
`;
