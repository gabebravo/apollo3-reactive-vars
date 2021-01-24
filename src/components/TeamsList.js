import React from 'react';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { GET_TEAM_ITEMS } from '../gql/queries';
import TeamItem from './TeamItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function TeamsList() {
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_TEAM_ITEMS);
  console.log('data', data);

  if (loading) return <CircularProgress />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div>
      <h2>Dream Teams</h2>
      {data?.teamItems.length === 0 ? (
        <p>No teams built yet</p>
      ) : (
        <>
          {data?.teamItems.map((team) => (
            <TeamItem key={team.id} {...team} />
          ))}
        </>
      )}
    </div>
  );
}
