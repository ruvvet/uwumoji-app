import React from 'react';
import Emoji from '../../shared/Emoji';
import './guildemojis.css';

export default function GuildEmojis({ name, emojis }) {

  const renderEmojis = () => {
    if (!emojis) {
      return null;
    }

    return emojis.map((emoji, idx) => (
      <li key={idx} className="btn"><Emoji name={emoji.name} url={emoji.url} /></li>
    ));
  };

  return (
    <div className="guild-emojis-container">
      <h1>{name}</h1>
      <ul id="hover" className="hover">{renderEmojis()}</ul>
    </div>
  );
}
