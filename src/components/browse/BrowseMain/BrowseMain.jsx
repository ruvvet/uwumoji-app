import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowseNavbar from '../BrowseNavbar';
import Discordgallery from '../Discordgallery';
import EmojiGGgallery from '../EmojiGGgallery';
import UwuDBgallery from '../UwuDBgallery';
import './browsemain.css';

export default function Upload() {
  return (
    <div className="browse-container">
      <div>
        <BrowseNavbar />
      </div>
      <Switch>
        <Route path="/browse/uwumoji/:page">
          <UwuDBgallery />
        </Route>
        <Route path="/browse/emojigg/:page">
          <EmojiGGgallery />
        </Route>
        <Route path="/browse/discord/:page">
          <Discordgallery />
        </Route>
        <Route path="/">
          <div>
            hello - idk what to put here yet, maybe a search bar/preview of
            random emojis from the different galleries
          </div>
        </Route>
      </Switch>
    </div>
  );
}

