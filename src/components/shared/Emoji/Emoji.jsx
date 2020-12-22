import React from 'react';


export default function Emoji({ name, url, id, handleClick }) {

  return (
    <button onClick={()=>handleClick(name, url, id)}>
      <img className="emoji" src={url} alt={name}></img>
      <div>
        <span>{name}</span>
      </div>
    </button>
  );
}
