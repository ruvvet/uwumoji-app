import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router';
import uwuRequest from '../../../utils';
import EmojiGallery from '../EmojiGallery';
import './discordgallery.css';

export default function Discordgallery() {
  const { page } = useParams();
  const location = useLocation();
  const history = useHistory();

  const [emojis, setEmojis] = useState();

  useEffect(() => {
    const getEmojis = async () => {
      const response = await uwuRequest('/browse/discord', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => null);

      if (response) {
        const emojisPerPage = 100;

        let start = page * emojisPerPage;
        let end = start + emojisPerPage;
        let lastPage = Math.ceil(response.length / emojisPerPage) - 1;

        if (page < 0) {
          start = 0;
          end = start + emojisPerPage;
        }

        if (page > lastPage) {
          end =
            Math.ceil(response.length / emojisPerPage) * emojisPerPage;
          start = end - emojisPerPage;
        }

        setEmojis(response.slice(start, end));
      }
    };

    getEmojis();
  }, []);

  const renderGallery = () => {
    if (!emojis) {
      return null;
    }

    return (
      <div>
        <EmojiGallery galleryName={'Discord'} emojis={emojis} />
      </div>
    );
  };

  return <div>{renderGallery()}</div>;
}
