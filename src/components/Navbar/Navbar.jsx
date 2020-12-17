import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar shift-fx">
      <ul className="nav-ul">
        <li className="nav-li">
          <div className="nav-img-div">
            <a href="/">
              <img className="nav-icon" src="/img/nav-main.png" />
            </a>
          </div>
        </li>
        <li className="nav-li">
          <div className="nav-img-div">
            <a href="/create">
              <img className="nav-icon" src="/img/nav-upload.png" />
            </a>
          </div>
        </li>

        <li className="nav-li">
          <div className="nav-img-div">
            <a href="/browse">
              <img className="nav-icon" src="/img/nav-search.png" />
            </a>
          </div>
        </li>
        <li className="nav-li">
          <div className="nav-img-div">
            <a href="/logout">
              <img className="nav-icon" src="/img/nav-logout.png" />
            </a>
          </div>
        </li>
        <li className="nav-li">
          <div className="nav-img-div">
            <a href="/info">
              <img className="nav-icon" src="/img/nav-info.png" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
