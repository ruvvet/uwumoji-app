import React, { useState, useEffect } from 'react';
import uwuRequest from '../utils';
import GuildEmojis from './main/GuildEmojis';
import Upload from './edit/Upload';
import Edit from './edit/Edit';
import './main.css';

export default function Main() {
  const [guildEmojis, setGuildEmojis] = useState();

  useEffect(() => {
    const getGuildEmojis = async () => {
      const response = await uwuRequest('/guilds/emojis', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
      }).catch(() => null);

      if (response) {
        setGuildEmojis(response);
      }
    };

    getGuildEmojis();
  }, []);

  const renderGuildEmojis = () => {
    if (!guildEmojis) {
      return null;
    }

    return Object.entries(guildEmojis).map(([name, emojis], idx) => (
      <div key={idx}>
        <GuildEmojis name={name} emojis={emojis} />
      </div>
    ));
  };

  return (
    <div className="main-container">
      <div className="guild-emoji-gallery">{renderGuildEmojis()}</div>
      <div className="upload">
        <Upload />
      </div>
      <div className="edit">
        <Edit />
      </div>
    </div>
  );
}
