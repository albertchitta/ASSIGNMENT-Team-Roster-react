import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlayers = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
  // .get(`${dbUrl}/players.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createPlayer = (player) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/players.json`, player)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/players/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getPlayers(player.uid).then(resolve);
        });
    })
    .catch(reject);
});

const updatePlayer = (player) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/players/${player.firebaseKey}.json`, player)
    .then(() => getPlayers().then(resolve))
    .catch(reject);
});

const deletePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/players/${firebaseKey}.json`)
    .then(() => getPlayers().then(resolve))
    .catch(reject);
});

export {
  getPlayers, createPlayer, updatePlayer, deletePlayer,
};
