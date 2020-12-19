import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router';
import uwuRequest from '../../../utils';
import EmojiGallery from '../EmojiGallery';
import './emojiGGgallery.css';

export default function EmojiGGgallery() {
  const { page } = useParams();
  const location = useLocation();
  const history = useHistory();

  const [emojis, setEmojis] = useState();
  const [pageNum, setpageNum] = useState(page);
  const [leftNav, setLeftNav] = useState(true);
  const [rightNav, setRightNav] = useState(true);

  useEffect(() => {
    const getEmojis = async () => {
      const response = await uwuRequest('/browse/emojigg', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => null);

      if (response) {
        const emojisPerPage = 100;

        let start = page * emojisPerPage;
        let end = start + emojisPerPage;

        let lastPage = Math.ceil(response.length / emojisPerPage) - 1;

        if (page <= 0) {
          start = 0;
          end = start + emojisPerPage;
          setLeftNav(false);
        }

        if (page > lastPage) {
          end = Math.ceil(response.length / emojisPerPage) * emojisPerPage;
          start = end - emojisPerPage;
          setRightNav(false);
        }

        setEmojis(response.slice(start, end));
      }
    };

    getEmojis();
  }, [page]);

  const renderGallery = () => {
    if (!emojis) {
      return null;
    }
    console.log(leftNav, rightNav);
    return (
      <div>
        <EmojiGallery galleryName={'Emoji.gg'} emojis={emojis} />
      </div>
    );
  };

  return (
    <div>
      <div>
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
