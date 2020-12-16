import React from 'react';

export default function Emoji({ name, url }) {
  return (
    <>
      <a href="#">
        <img className ="emoji" src={`${url}`} alt={`${name}`}></img>
        <div><span>{name}</span></div>
      </a>
    </>
  );
}
