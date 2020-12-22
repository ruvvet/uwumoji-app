import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import uwuRequest from '../../../utils';
import LoadingSpinner from '../../shared/LoadingSpinner';
import './edit.css';

export default function Edit({ emojiID }) {

  console.log(emojiID)

  const [emojiDetails, setEmojiDetails] = useState();
  const [emojiName, setEmojiName] = useState('');
  const [emojiTags, setEmojiTags] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getEmojiDetails = async () => {
      console.log('fetching...', emojiID)
      const response = await uwuRequest('/emoji/details', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emojiID:'hello' }),
      }).catch(() => {
        setError(true);
        return null;
      });

      if (response) {
        setEmojiDetails(response);
      }

      setLoading(false);
    };

    getEmojiDetails();
  }, [emojiID]);

  const renderEmojiDetails = () => {
    if (loading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return null;
    }

    return <div>hi</div>;
  };

  return <div className="edit-container">{renderEmojiDetails()}</div>;
}
