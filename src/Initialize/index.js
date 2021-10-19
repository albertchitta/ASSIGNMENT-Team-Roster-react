import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../api/apiKeys';
import Routes from '../routes';
import SignIn from '../views/SignIn';
import Navigation from '../components/Navigation';

const Container = styled.div`
  width: 644px;
  margin: auto;
  padding: 50px 0;

  h1 {
    text-align: center;
    font-size: 64px;
    font-weight: normal;
  }

  h3 {
    color: white;
    margin-top: 20px;
    text-align: center;
  }

  h4 {
    color: white;
    margin-top: 20px;
  }
`;

function Initialize() {
  const [user, setUser] = useState(null); // Need in React if a user is loading

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
        // getTeam().then(setTeam);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <Container>
      {user ? (
        <>
          <Navigation />
          <h1>LOS ANGELES LAKERS</h1>
          <Routes />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </Container>
  );
}

export default Initialize;
