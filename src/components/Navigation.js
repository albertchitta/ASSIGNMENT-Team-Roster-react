import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { ButtonGroup } from 'reactstrap';
import { signOutUser } from '../api/auth';
import logo from '../img/logo.jpg';

const NavigationStyle = styled.div`
  .container-fluid {
    background-color: black;
    margin-right: 24px;
    display: flex;
    float: left;
  }

  img {
    width: 120px;
    height: 80px;
  }

  .nav-link:hover {
    text-decoration: underline;
    text-decoration-color: #fdb927;
  }

  .nav-link {
    font-size: 24px;
    color: white;
  }

  .space {
    flex: 1;
  }

  button {
    margin-right: 32px;
  }
`;

export default function Navigation() {
  // const history = useHistory(); // Needed for routing and pushing new browser page to navigate

  return (
    // <div className="text-center mb-3">
    //   <ButtonGroup size="lg">
    //     <button
    //       onClick={() => history.push('/')}
    //       type="button"
    //       className="btn btn-light border border-dark"
    //     >
    //       Home
    //     </button>
    //     <button
    //       onClick={() => history.push('/team')}
    //       type="button"
    //       className="btn btn-light border border-dark"
    //     >
    //       Team
    //     </button>
    //     <button
    //       onClick={() => history.push('/new')}
    //       type="button"
    //       className="btn btn-light border border-dark"
    //     >
    //       New
    //     </button>
    //     <button
    //       onClick={signOutUser}
    //       type="button"
    //       className="btn btn-danger border border-dark"
    //     >
    //       Logout
    //     </button>
    //   </ButtonGroup>
    // </div>
    <NavigationStyle>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Los Angeles Lakers Logo" />
          </Link>
          <Link className="nav-link active team" to="/team">
            Team
          </Link>
          <Link className="nav-link active new" to="/new">
            New
          </Link>
          <div className="space" />
          <button
            onClick={signOutUser}
            type="button"
            className="btn btn-danger border border-dark"
          >
            Logout
          </button>
        </div>
      </nav>
    </NavigationStyle>
  );
}
