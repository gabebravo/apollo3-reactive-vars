import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: 110,
  },
}));

export default function AddTeam() {
  const classes = useStyles();

  return (
    <div>
      <h2>Your Team</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Enter Team Name"
          variant="outlined"
        />
        <Button className={classes.button} variant="contained" color="primary">
          Add Team
        </Button>
      </form>
    </div>
  );
}
