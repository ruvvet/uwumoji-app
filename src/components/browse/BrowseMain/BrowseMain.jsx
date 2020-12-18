import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import UwuDBgallery from '../UwuDBgallery';
import EmojiGGgallery from '../EmojiGGgallery';
import Discordgallery from '../Discordgallery';
import BrowseNavbar from '../BrowseNavbar'
import './browsemain.css';

export default function Upload() {
  return (
    <div className="browse-container">
      <div> <BrowseNavbar/></div>
      <Switch>
        <Route path="/browse/uwumoji">
          <UwuDBgallery />
        </Route>
        <Route path="/browse/emojigg/:page">
          <EmojiGGgallery />
        </Route>
        <Route path="/browse/emojigg">
          <EmojiGGgallery />
        </Route>
        <Route path="/browse/discord/:page">
          <Discordgallery />
        </Route>
        <Route path="/browse/discord">
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
