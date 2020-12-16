import React, { useState, useEffect } from 'react';
import uwuRequest from '../utils';
import GuildEmojis from './main/GuildEmojis';
import './main.css';

export default function Main() {
  const [guildEmojis, setGuildEmojis] = useState();

  useEffect(() => {
    const getGuildEmojis = async () => {
      const response = await uwuRequest('/guilds/emojis', {
        method: 'GET',
      }).catch(() => null);

      console.log(response);

      if (response) {
        setGuildEmojis(response);
      }
    };

    getGuildEmojis();
  }, []);

const renderGuildEmojis = () => {
  if (!guildEmojis) {
    return null;
  }

  const guildEmojisArr = [];

  for ( const [guildName,emojis] of Object.entries(guildEmojis)){
    guildEmojisArr.push([guildName,emojis])
  }

console.log(guildEmojisArr)

return guildEmojisArr.map((guildEmojis, idx) => (
<div className = "guild-emoji-gallery"><GuildEmojis name = {guildEmojis[0]} emojis={guildEmojis[1]}/></div>
))

}


return (  <div className="main-container">
{renderGuildEmojis()}
</div>)
}
