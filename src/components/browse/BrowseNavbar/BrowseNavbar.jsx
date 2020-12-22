import React from 'react';
import {Link } from 'react-router-dom'
import './browsenavbar.css'

export default function BrowseNavbar() {
  return (
    <div class="emojinav shift-fx">
      <ul>
        <li>
          <Link to="/browse">⭐ UWUMOJI</Link>
        </li>
        <li>
          <Link to="/browse/emojigg/0">⚡ EMOJI.GG</Link>
        </li>
        <li>
          <Link to="/browse/discord/0">🔥 DISCORD </Link>
        </li>
        <li>
          <Link to="/">🙃 TBD</Link>
        </li>
      </ul>
    </div>
  );
}
