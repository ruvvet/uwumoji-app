import React, { useState } from 'react';
import './guild.css';

export default function Guild({ guild, selectGuild }) {

  //const handleClick = ()=>{selectGuild(guild.id)}
  // onclick takes a function
  // when i passed the function as prop it was being called, and not given to onclick as an event

  // guild icon = https://cdn.discordapp.com/icons/[guild_id]/[guild_icon].png



  return (
    <button onClick={(e)=> selectGuild(guild.id)}>
      <div>
        <img
          src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
        />
        <p>{guild.name}</p>
      </div>
    </button>
  );
}
