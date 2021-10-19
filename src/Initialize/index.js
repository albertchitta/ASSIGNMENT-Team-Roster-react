import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../api/apiKeys';
import SignIn from '../views/SignIn';

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
    <>
      {user ? (
        <>
          <h1>LOS ANGELES LAKERS</h1>
        </>
      ) : (
        <SignIn user={user} />
      )}
    </>
  );
}

export default Initialize;
