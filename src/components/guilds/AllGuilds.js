import React, { useState, useEffect } from 'react';
import uwuRequest from '../../utils';
import Guild from './Guild';
import './guilds.css';

export default function AllGuilds({selectGuild}) {
  const [guilds, setGuilds] = useState([]);

  useEffect(() => {
    const getGuilds = async () => {
      const response = await uwuRequest('/user/guilds', {
        method: 'GET',
      }).catch(() => null);

      console.log(response);

      if (response) {
        setGuilds(response);
      }
    };

    getGuilds();
  }, []);

  // user pfp = avatars/user_id/user_avatar.png **

  const renderGuilds = () => {
    if (!guilds) {
      return null;
    }

    return guilds.map((guild, idx) => (
      <li key={`guild-${idx}`}>
        <Guild guild={guild} selectGuild = {selectGuild}/>
      </li>
    ));
  };

  return (
    <div className="guilds-container">
      <ul>{renderGuilds()}</ul>
    </div>
  );
}
