import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import UserNav from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/authSelectors';

const Header = ({ isAuth }) => {
  return (
    <header>
      <ul>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Phonebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink to="/">Home</NavLink>
              </Nav.Link>
              {isAuth && (
                <Nav.Link>
                  <NavLink to="/contacts">Contacts</NavLink>
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              {isAuth ? (
                <Nav.Link>
                  <UserNav />
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link>
                    <NavLink to="/register">Register</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/login">Login</NavLink>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </ul>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuth: authSelectors.gotAuth(state),
});

export default connect(mapStateToProps)(Header);
