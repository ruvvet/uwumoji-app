import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Callback from './components/Callback';
import Main from './components/Main';
import Profile from './components/profile/Profile';
import Guilds from './components/guilds/AllGuilds';
import Nav from './components/navbar/Nav';

import './App.css';

function App() {

  const [selectedGuild, setSelectedGuild] = useState({});


  const selectGuild = (guild) =>{
setSelectedGuild(guild)

  }

  return (
    <div className="App">
      <div className="layout-header"> uwumoji</div>
      <div className="layout-panel">credits</div>
      <div className="search"></div>

      <div className="profile">
        <Switch>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </div>

      <div className="guilds">
        <Switch>
          <Route path="/">
            <Guilds selectGuild={selectGuild}/>
          </Route>
        </Switch>
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
        <Switch>
          <Route path="/">
            <Nav />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
