import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { getPlayers } from '../api/data/playerData';
import Player from '../components/Player';

export default function Team() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getPlayers('gk8kFU85zIfl21eFEbJFHJNoTZq2').then((playersArray) => {
      if (isMounted) setPlayers(playersArray);
    });
    return () => {
      isMounted = false;
    };
  }, [players]);

  return (
    <div>
      <h1>TEAM</h1>
      {players.length ? (
        players.map((player) => <Player player={player} />)
      ) : (
        <h3>No Players Added</h3>
      )}
    </div>
  );
}
