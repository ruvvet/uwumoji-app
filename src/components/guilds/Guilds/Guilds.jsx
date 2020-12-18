import React, { useState, useEffect } from 'react';
import uwuRequest from '../../../utils';
import Guild from '../Guild/Guild';
import './guilds.css';

export default function AllGuilds({selectGuild}) {
  const [guilds, setGuilds] = useState([]);

  useEffect(() => {
    const getGuilds = async () => {
      const response = await uwuRequest('/guilds', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', },
      }).catch(() => null);

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

    return guilds.map((guild, i) => (
      <li key={i}>
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
