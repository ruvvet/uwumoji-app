import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import uwuRequest from '../../../utils';
import './upload.css';

export default function Upload() {
  const { register, handleSubmit } = useForm();

  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [preview, setPreview] = useState();

  const upload = async (emojiFile) => {
    console.log('calling uwu-api, is anyboyd home');
    console.log(emojiFile);

    const formData = new FormData();
    formData.append('emojiName', emojiFile.name);
    formData.append('emojiImg', emojiFile.file[0]);

    await uwuRequest('/create', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    });
  };

  return (
    <div className="upload-container">
      {img && (
        <>
          <img src={img ? URL.createObjectURL(img) : null} />
          <div>{img.name}</div>
          <div>{name}</div>
        </>
      )}

      <div className="file-upload">
        <form onSubmit={handleSubmit(upload)}>
          <div className="form-group">
            <input
              ref={register}
              type="file"
              name="file"
              onChange={(e) => {
                setImg(e.target.files[0]);
                //     const reader = new FileReader();
                //   reader.readAsDataURL(img);
                //   setPreview(reader.result)
              }}
            />
            <span className="highlight"></span>
            <span className="form-bar"></span>
          </div>
          <div className="form-group">
            <input
              ref={register}
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="form-bar"></span>
          </div>
          <input type="submit" className="upload-btn" />
        </form>
      </div>
    </div>
  );
}
