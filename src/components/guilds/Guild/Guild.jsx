import React, { useState } from 'react';
import './guild.css';

export default function Guild({ guild }) {
  const selectGuild = (guild) => {
    localStorage.setItem('SELECTED_GUILD', guild);
    console.log(localStorage.getItem('SELECTED_GUILD'));
  };

  // guild icon = https://cdn.discordapp.com/icons/[guild_id]/[guild_icon].png

  return (
    <button onClick={(e) => selectGuild(guild.id)}>
      <div>
        <img
          src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
        />
        <p>{guild.name}</p>
      </div>
    </button>
  );
}
