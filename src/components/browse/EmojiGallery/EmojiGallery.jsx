import React from 'react';
import uwuRequest from '../../../utils';
import Emoji from '../../shared/Emoji';
import LoadingSpinner from '../../shared/LoadingSpinner';
import './emojigallery.css';

export default function EmojiGallery({ galleryName, emojis }) {

  const handleAddEmoji = async (name, url, id) => {
    console.log('button clicked, adding an emoji');
    const response = await uwuRequest('/emoji/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        url,
        guild: localStorage.getItem('SELECTED_GUILD'),
      }),
    }).catch(()=>null)
  };

  const renderEmojis = () => {


    if (galleryName === 'Discord' || galleryName === 'Uwumoji') {
      return emojis.map((emoji, i) => (
        <li key={i} className="btn">
          <Emoji name={emoji.name} url={emoji.url} id={''} handleClick={handleAddEmoji} />
        </li>
      ));
    }

    if (galleryName === "Emoji.gg") {
      return emojis.map((emoji, i) => (
        <li key={i} className="btn">
          <Emoji name={emoji.title} url={emoji.image} id={''} handleClick={handleAddEmoji}/>
        </li>
      ));
    }
  };

  return (
    <div className="emoji-gallery-container">
      <ul id="hover" className="hover">
        {renderEmojis()}
      </ul>
    </div>
  );
}
