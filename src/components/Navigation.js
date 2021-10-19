import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  const history = useHistory(); // Needed for routing and pushing new browser page to navigate

  return (
    <div className="text-center mb-3">
      <ButtonGroup size="lg">
        <button
          onClick={() => history.push('/')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Home
        </button>
        <button
          onClick={() => history.push('/team')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Team
        </button>
        <button
          onClick={() => history.push('/new')}
          type="button"
          className="btn btn-light border border-dark"
        >
          New
        </button>
        <button
          onClick={signOutUser}
          type="button"
          className="btn btn-danger border border-dark"
        >
          Logout
        </button>
      </ButtonGroup>
    </div>
  );
}
