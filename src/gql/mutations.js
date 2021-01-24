import { teamVar } from './cache';

const createTeam = (team) => {
  const teams = teamVar();
  teamVar([...teams, team]);
};

const deleteTeam = (id) => {
  const teams = teamVar();
  teamVar([...teams].filter((team) => team.id !== id));
};

const editTeam = (newTeam) => {
  const teams = teamVar();
  teamVar([...teams].map((team) => (team.id === newTeam.id ? newTeam : team)));
};

export default {
  createTeam,
  deleteTeam,
  editTeam,
};
