import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import shortid from 'shortid';
import teamMutations from '../gql/mutations';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  teamBtn: {
    width: 170,
  },
  playerBtn: {
    width: 150,
  },
}));

export default function AddTeam() {
  const classes = useStyles();
  const [teamField, setTeamField] = useState('');
  const [teamName, setTeamName] = useState('');
  const [playerField, setPlayerField] = useState('');
  const [team, setTeam] = useState([]);
  const { createTeam } = teamMutations;

  const saveTeam = (ev) => {
    ev.preventDefault();
    setTeamName(teamField);
    setTeamField('');
  };

  const savePlayer = (ev) => {
    ev.preventDefault();
    setTeam((players) => [
      ...players,
      { id: shortid.generate(), name: playerField },
    ]);
    setPlayerField('');
  };

  const AddTeam = (ev) => {
    ev.preventDefault();
    const savedTeam = {
      id: shortid.generate(),
      team: teamName,
      players: team,
    };
    createTeam(savedTeam);
  };

  return (
    <div>
      <h2>Your Team</h2>
      <div className={classes.root}>
        {!teamName ? (
          <>
            <TextField
              id="outlined-basic"
              label="Enter Team Name"
              variant="outlined"
              value={teamField}
              onChange={(e) => setTeamField(e.target.value)}
            />
            <Button
              onClick={saveTeam}
              className={classes.teamBtn}
              variant="contained"
              color="primary"
            >
              Add Team Name
            </Button>
          </>
        ) : (
          <>
            <TextField
              disabled={team.length === 5}
              id="outlined-basic"
              label="Enter Player Name"
              variant="outlined"
              value={playerField}
              onChange={(e) => setPlayerField(e.target.value)}
            />
            <Button
              onClick={team.length === 5 ? AddTeam : savePlayer}
              className={classes.playerBtn}
              variant="contained"
              color="primary"
            >
              {team.length === 5 ? 'Save Team' : 'Add Player'}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
