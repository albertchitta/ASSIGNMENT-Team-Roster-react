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

export default function Player({ player }) {
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
          <Button>Button</Button>
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
};
