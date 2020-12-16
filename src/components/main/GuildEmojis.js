import React from 'react';
import Emoji from '../Emoji';
//import './main.css';

export default function GuildEmojis({ name, emojis }) {
  console.log(emojis);

  const renderEmojis = () => {
    if (!emojis) {
      return null;
    }

    return emojis.map((emoji, idx) => (
      <li className="btn"><Emoji name={emoji.name} url={emoji.url} /></li>
    ));
  };

  return (
    <>
      <h1>{name}</h1>
      <ul id="hover" className="hover">{renderEmojis()}</ul>
    </>
  );
}
