import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import UwuDBgallery from '../UwuDBgallery'
import EmojiGGgallery from '../EmojiGGgallery';
import Discordgallery from '../Discordgallery';
import './browsemain.css';

export default function Upload() {
  return (
    <div className="browse-container">
        <div> nav goes here</div>
      <Switch>
        <Route path="/browse/uwumoji">
          <UwuDBgallery />
        </Route>
        <Route path="/browse/emojigg">
          <EmojiGGgallery />
        </Route>
        <Route path="/browse/discord">
          <Discordgallery />
        </Route>

        <Route path="/">
          <div> hello</div>
        </Route>
      </Switch>
    </div>
  );
}
