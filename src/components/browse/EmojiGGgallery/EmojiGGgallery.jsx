import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import uwuRequest from '../../../utils';
import EmojiGallery from '../EmojiGallery';
import './emojiGGgallery.css';

export default function EmojiGGgallery() {
  const { page } = useParams();

  const [emojis, setEmojis] = useState();
  const [emojiPage, setEmojiPage] = useState([]);
  const [leftNav, setLeftNav] = useState(true);
  const [rightNav, setRightNav] = useState(true);

  useEffect(() => {
    const getEmojis = async () => {
      const response = await uwuRequest('/browse/emojigg', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => null);

      if (response) {
        setEmojis(response);
      }
    };

    getEmojis();
  }, []);

  useEffect(() => {
    if (!emojis) {
      return;
    }

    const emojisPerPage = 100;

    let start = page * emojisPerPage;
    let end = start + emojisPerPage;

    let lastPage = Math.ceil(emojis.length / emojisPerPage) - 1;

    if (page <= 0) {
      start = 0;
      end = start + emojisPerPage;
      setLeftNav(false);
    }

    if (page > lastPage) {
      end = Math.ceil(emojis.length / emojisPerPage) * emojisPerPage;
      start = end - emojisPerPage;
      setRightNav(false);
    }

    setEmojiPage(emojis.slice(start, end));
  }, [page, emojis]);

  const renderGallery = () => {
    // TODO: loading/spinner

    return (
      <div>
        <EmojiGallery galleryName="Emoji.gg" emojis={emojiPage} />
      </div>
    );
  };

  return (
    <div>
      <div>
        {/* {leftNav && <img className="paginate" src="/img/left-arrow.png" />} */}
        {leftNav ? (
          <img className="paginate" src="/img/left-arrow.png" />
        ) : null}
        <span>Emoji.gg</span>
        {rightNav ? (
          <img className="paginate" src="/img/right-arrow.png" />
        ) : null}
      </div>
      {renderGallery()}
    </div>
  );
}
