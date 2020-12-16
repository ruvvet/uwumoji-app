import React, {useState} from 'react';

export default function Guild({ guild, selectGuild }) {



  // guild icon = https://cdn.discordapp.com/icons/[guild_id]/[guild_icon].png
  return (

    <button onClick={selectGuild(guild.id)}>
        <div>
      <img
        src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
      ></img>
      <p>{guild.name}</p>
      </div>
    </button>
  );
}
