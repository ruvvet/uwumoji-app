import React, { useEffect, useState } from 'react';
import uwuRequest from '../../../utils';
import LoadingSpinner from '../../shared/LoadingSpinner';
import Guild from '../Guild/Guild';
import './guilds.css';

export default function Guilds({ selectGuild }) {
  const [guilds, setGuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getGuilds = async () => {
      const response = await uwuRequest('/guilds', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (response) {
        setGuilds(response);
      }

      setLoading(false);
    };

    getGuilds();
  }, []);

  // user pfp = avatars/user_id/user_avatar.png **

  const renderGuilds = () => {
    if (loading) {
      return null;
    }
    if (error) {
      return <LoadingSpinner />;
    }


    return guilds.map((guild, i) => (
      <li key={i}>
        <Guild guild={guild} selectGuild={selectGuild} />
      </li>
    ));
  };

  return (
    <div className="guilds-container">
      <ul>{renderGuilds()}</ul>
    </div>
  );
}
