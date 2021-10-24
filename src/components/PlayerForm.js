import React, { useState, useEffect } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { createPlayer, updatePlayer } from '../api/data/playerData';

const FormStyle = styled.div`
  border-style: solid;
  border-color: gray;
  border-width: 1px;
  padding: 16px;
  width: 644px;
  margin: 42px auto;

  Label {
    color: white;
  }

  Button {
    margin-top: 24px;
  }
`;

const initialState = {
  name: '',
  number: '',
  position: '',
  imageUrl: '',
};

export default function PlayerForm({
  player,
  setPlayers,
  setEditPlayer,
  user,
}) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory(); // Needed for routing and pushing new browser page to navigate

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (player.firebaseKey) {
        setFormInput({
          name: player.name,
          number: player.number,
          firebaseKey: player.firebaseKey,
          position: player.position,
          imageUrl: player.imageUrl,
          uid: user.uid,
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [player]);

  const resetForm = () => {
    setFormInput(initialState);
    setEditPlayer({});
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(formInput).then((players) => {
        setPlayers(players);
        resetForm();
        history.push('/team');
      });
    } else {
      createPlayer({ ...formInput, uid: user.uid }).then((players) => {
        setPlayers(players);
        resetForm();
        history.push('/team');
      });
    }
  };

  return (
    <FormStyle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Add a name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="number" sm={2}>
            Number
          </Label>
          <Input
            type="text"
            name="number"
            id="number"
            placeholder="Add a number"
            value={formInput.number}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="imageUrl" sm={2}>
            Image URL
          </Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="Add an image URL"
            value={formInput.imageUrl}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="position" sm={2}>
            Position
          </Label>
          <Input
            className="form-select"
            type="select"
            name="position"
            id="position"
            value={formInput.position}
            onChange={handleChange}
            required
          >
            <option hidden value="">
              Select a position
            </option>
            <option value="Point Guard">Point Guard</option>
            <option value="Shooting Guard">Shooting Guard</option>
            <option value="Small Forward">Small Forward</option>
            <option value="Power Forward">Power Forward</option>
            <option value="Center">Center</option>
          </Input>
        </FormGroup>
        <Button type="submit" className="btn btn-success">
          {player.firebaseKey ? 'Update' : 'Submit'}
        </Button>
      </Form>
    </FormStyle>
  );
}

PlayerForm.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    firebaseKey: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    uid: PropTypes.string,
  }),
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

PlayerForm.defaultProps = { player: {} };
