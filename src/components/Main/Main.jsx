import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import uwuRequest from '../../utils';
import BrowseMain from '../browse/BrowseMain';
import Edit from '../edit/Edit';
import Upload from '../edit/Upload';
import GuildEmojis from '../guilds/GuildEmojis';
import LoadingSpinner from '../shared/LoadingSpinner';
import './main.css';

export default function Main({ guild }) {
  const [guildEmojis, setGuildEmojis] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getGuildEmojis = async () => {
      const response = await uwuRequest('/guilds/emojis', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (response) {
        setGuildEmojis(response);
      }

      setLoading(false);
    };

    getGuildEmojis();
  }, []);

  const renderGuildEmojis = () => {
    if (loading) {
      return null;
    }
    if (error) {
      return <LoadingSpinner />;
    }

    return Object.entries(guildEmojis).map(([name, emojis], i) => (
      <div key={i}>
        <GuildEmojis name={name} emojis={emojis} />
      </div>
    ));
  };

  return (
    <div className="main">
      <Switch>
        <Route path="/browse">
          <BrowseMain />
        </Route>

        <Route path="/">
          <div className="main-container">
            <div className="guild-emoji-gallery">{renderGuildEmojis()}</div>
            <div className="upload">
              <Upload guild={guild} />
            </div>
            <div className="edit">
              <Edit />
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
