import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './App.css';
import { Home, Post } from './app/pages';
import UserDetail from './app/containers/userDetail';
import Navbar from './app/components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={`${ROUTES.POST}/:postId`}>
          <Post />
        </Route>
        <Route path={`${ROUTES.USER}/:userId`}>
          <UserDetail />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
