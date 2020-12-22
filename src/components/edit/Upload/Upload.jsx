import React, { useState, useEffect } from 'react';
import uwuRequest from '../../../utils';
import './upload.css';

export default function Upload() {
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [preview, setPreview] = useState();

  const upload = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('img', img);
    formData.append('guild', localStorage.getItem('SELECTED_GUILD'))

    await uwuRequest('/emoji/new', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div className="upload-container">
      <img className = "emoji" src="img/outbox.png"/>
      {img && (
        <>
          <img src={URL.createObjectURL(img)} />
          <div>{img.name}</div>
          <div>{name}</div>
        </>
      )}

      <div className="file-upload">
          <form>
        <div className="form-group">
          <input
            type="file"
            name="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <span className="highlight"></span>
          <span className="form-bar"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <span className="highlight"></span>
          <span className="form-bar"></span>
        </div>
        <input type="submit" onClick={upload} className="upload-btn" />
        </form>
      </div>
    </div>
  );
}


//TODO: ternary

// {img && (
//   <>
//     <img src={img ? URL.createObjectURL(img) : "img/outbox.png"} />
//     <div>{img.name}</div>
//     <div>{name}</div>
//   </>
// )}