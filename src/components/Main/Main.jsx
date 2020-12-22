import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import uwuRequest, { sleep } from '../../utils';
import BrowseMain from '../browse/BrowseMain';
import Edit from '../edit/Edit';
import Upload from '../edit/Upload';
import GuildEmojis from '../guilds/GuildEmojis';
import LoadingSpinner from '../shared/LoadingSpinner';
import './main.css';

export default function Main() {
  const [guildEmojis, setGuildEmojis] = useState({});
  const [selectedEmoji, setSelectedEmoji] = useState('');
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

  const handleClickEmoji = (name, url, id) => {
    setSelectedEmoji(id);
  };

  const renderGuildEmojis = () => {
    if (loading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return null;
    }

    return Object.entries(guildEmojis).map(([name, emojis], i) => (
      <div key={i}>
        <GuildEmojis
          name={name}
          emojis={emojis}
          handleClickEmoji={handleClickEmoji}
        />
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
            <div className="action-panel">
              <Upload />
              <Edit emojiID={selectedEmoji} />
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
