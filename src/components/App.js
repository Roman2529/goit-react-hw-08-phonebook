import React, { Component, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Container from 'react-bootstrap/Container';
import authOperations from '../redux/auth/authOperation';
import authSelector from '../redux/auth/authSelectors';
import PrivateRoute from './routesStatus/PrivateRoute';
import PublicRoute from './routesStatus/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.isCurrentUser();
  }

  render() {
    return (
      <Suspense fallback={<h2>Load</h2>}>
        <Container fluid="md">
          <div>
            <Header />
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
            </Switch>
          </div>
        </Container>
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: authSelector.gotAuth,
});

export default connect(mapStateToProps, {
  isCurrentUser: authOperations.currentUser,
})(App);
