import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import PlayerForm from '../components/PlayerForm';

export default function New() {
  const [editPlayer, setEditPlayer] = useState([]);

  return (
    <>
      <PlayerForm obj={editPlayer} setEditPlayer={setEditPlayer} />
    </>
  );
}

// New.propTypes = {
//   setPlayers: PropTypes.func.isRequired,
// };
