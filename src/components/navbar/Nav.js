import React from 'react';
import './nav.css';

export default function Main() {
  return (
    <div class="navbar shift-fx">
      <ul class="nav-ul">
        <li class="nav-li">
          <div class="nav-img-div">
            <a href="/">
              <img class="nav-icon" src="/img/nav-main.png" />
            </a>
          </div>
        </li>
        <li class="nav-li">
          <div class="nav-img-div">
            <a href="/create">
              <img class="nav-icon" src="/img/nav-upload.png" />
            </a>
          </div>
        </li>

        <li class="nav-li">
          <div class="nav-img-div">
            <a href="/browse">
              <img class="nav-icon" src="/img/nav-search.png" />
            </a>
          </div>
        </li>
        <li class="nav-li">
          <div class="nav-img-div">
            <a href="/logout">
              <img class="nav-icon" src="/img/nav-logout.png" />
            </a>
          </div>
        </li>
        <li class="nav-li">
          <div class="nav-img-div">
            <a href="/info">
              <img class="nav-icon" src="/img/nav-info.png" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
