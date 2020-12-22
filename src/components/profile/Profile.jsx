import React, { useEffect, useState } from 'react';
import uwuRequest from '../../utils';
import LoadingSpinner from '../shared/LoadingSpinner';
import './profile.css';

export default function Profile() {
  //useState()= >> undefined >> no value was provided
  // null is an explicit "no value"
  // null is not the same as undefined

  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getProfile = async () => {
      const response = await uwuRequest('/user/profile', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {
        setError(true);
        return null;
      });

      if (response) {
        setProfile(response);
      }

      setLoading(false);
    };

    getProfile();
  }, []);

  // user pfp = avatars/user_id/user_avatar.png **

  const renderProfile = () => {
    if (loading) {
      return null;
    }
    if (error) {
      return <LoadingSpinner />;
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
