import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deletePlayer, updatePlayer } from '../api/data/playerData';

const PlayerStyle = styled.div`
  margin: 5px;
  .card-body {
    background-color: #fdb927;
    color: #552583;

    .card-title {
      font-size: 24px;
    }

    .btn {
      color: white;
      margin-right: 8px;
    }
  }
`;

export default function Player({ player, setPlayers, setEditPlayer }) {
  const history = useHistory(); // Needed for routing and pushing new browser page to navigate

  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player).then(setPlayers);
    } else {
      updatePlayer(player).then(setPlayers);
    }
  };

  return (
    <PlayerStyle>
      <Card>
        <CardImg top width="100%" src={player.imageUrl} alt={player.name} />
        <CardBody>
          <CardTitle tag="h5">
            {player.number} | {player.name}
          </CardTitle>
          <CardText>{player.position}</CardText>
          <Button
            className="btn btn-info"
            onClick={() => {
              setEditPlayer(player);
              history.push('/new');
            }}
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
    </PlayerStyle>
  );
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    firebaseKey: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func,
};

Player.defaultProps = { setEditPlayer: () => {} };
