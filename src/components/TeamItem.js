import React from 'react';

export default function TeamItem({ team, players }) {
  return (
    <div>
      <h4>{team}</h4>
      <ul style={{ listStyleType: 'none' }}>
        {players.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
