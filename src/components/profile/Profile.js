import React, { useState, useEffect } from 'react';
import uwuRequest from '../../utils';
import './profile.css';

export default function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const response = await uwuRequest('/user/profile', {
        method: 'GET',
      }).catch(() => null);

      if (response) {
        setProfile(response);
      }
    };

    getProfile();
  }, []);

  // user pfp = avatars/user_id/user_avatar.png **

  const renderProfile = () => {

    if (!profile) {
      return null;
    }

    return (
      <>
        <img
          src={`https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`}
        ></img>
        <div>{profile.username}</div>
      </>
    );
  };

  return <div className="profile-container">{renderProfile()}</div>;
}
