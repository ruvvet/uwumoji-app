import React, { useEffect, useState } from 'react';
import uwuRequest from '../../utils';
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

      setLoading(false);

      if (response) {
        setProfile(response);
      }
    };

    getProfile();
  }, []);

  // user pfp = avatars/user_id/user_avatar.png **

    const renderProfile = () => {
    if (loading) {
      return null;
    }
    if (error) {
      return <div> Error</div>;
      //TODO:
      //return a funny image
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
