import React from 'react';

export default function Guild({ guild }) {
  // guild icon = https://cdn.discordapp.com/icons/[guild_id]/[guild_icon].png
  return (
    <>
      <img
        src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
      ></img>
      <div>{guild.name}</div>
    </>
  );
}
