import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Callback from './components/auth/Callback';
import Main from './components/Main';
import Profile from './components/Profile';
import Guilds from './components/guilds/Guilds';
import Navbar from './components/Navbar';

import './App.css';

function App() {


  return (
    <div className="App">
      <div className="layout-header"> uwumoji </div>
      <div className="layout-panel"> credits </div>
      <div className="search"></div>

      <div className="profile">
        <Profile />
      </div>

      <div className="guilds">
        <Guilds />
      </div>

      <div className="main">
        <Switch>
          <Route path="/callback">
            <Callback />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>

      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
