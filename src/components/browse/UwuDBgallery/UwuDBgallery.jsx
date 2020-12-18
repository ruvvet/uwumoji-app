import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router';
import uwuRequest from '../../../utils';
import EmojiGallery from '../EmojiGallery'
import './uwuDBgallery.css';

export default function UwuDBgallery() {

  const { page } = useParams();
  const location = useLocation();
  const history = useHistory();


  const [emojis, setEmojis] = useState();

  useEffect(() => {
    const getEmojis = async () => {
      const response = await uwuRequest(`/browse/uwumoji/${page}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => null);

      if (response) {
        setEmojis(response.emojis);

      }
    };

    getEmojis();
  }, []);

  const renderEmojis = () => {
    if (!emojis) {
      return null;
    }

    return <div>uwumoji</div>;
  };

  return <div>{renderEmojis()}</div>;
}
