import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { deletePlayer, updatePlayer } from '../api/data/playerData';

export default function Player({ player, setPlayers, setEditPlayer }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey).then(setPlayers);
    } else {
      updatePlayer(player).then(setPlayers);
    }
  };

  return (
    <>
      <Card>
        <CardImg top width="100%" src={player.imageUrl} alt={player.name} />
        <CardBody>
          <CardTitle tag="h5">{player.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {player.number}
          </CardSubtitle>
          <CardText>{player.position}</CardText>
          <Button
            className="btn btn-info"
            onClick={() => setEditPlayer(player)}
          >
            Edit
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => handleClick('delete')}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
    firebaseKey: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func,
};

Player.defaultProps = { setEditPlayer: () => {} };
