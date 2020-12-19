import React, { useState, useEffect } from 'react';
import Emoji from '../../shared/Emoji';
import './emojigallery.css';

export default function EmojiGallery({ galleryName, emojis }) {
  console.log(galleryName);
  const renderEmojis = () => {
    if (!emojis) {
      return null;
    }

    if (galleryName === 'Discord' || galleryName === 'Uwumoji') {
      return emojis.map((emoji, i) => (
        <li key={i} className="btn">
          <Emoji name={emoji.name} url={emoji.url} />
        </li>
      ));
    }

    if (galleryName === 'Emoji.gg') {
      return emojis.map((emoji, i) => (
        <li key={i} className="btn">
          <Emoji name={emoji.title} url={emoji.image} />
        </li>
      ));
    }
  };

  return (
    <div className = "emoji-gallery-container">
      <ul id="hover" className="hover">
        {renderEmojis()}
      </ul>
    </div>
  );
}
