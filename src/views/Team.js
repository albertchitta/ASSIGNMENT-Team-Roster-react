import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Player from '../components/Player';

const TeamStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 42px; auto;
`;
export default function Team({ players, setPlayers, setEditPlayer }) {
  return (
    <>
      <h1>Team Roster</h1>
      <TeamStyle>
        {players.length ? (
          players.map((player) => (
            <Player
              key={player.firebaseKey}
              player={player}
              setEditPlayer={setEditPlayer}
              setPlayers={setPlayers}
            />
          ))
        ) : (
          <h3>No Players Added</h3>
        )}
      </TeamStyle>
    </>
  );
}

Team.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};
