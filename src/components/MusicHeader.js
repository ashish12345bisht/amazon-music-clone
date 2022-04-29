import React from "react";
import { Link } from "react-router-dom";
import "../styles/Music.css";

function MusicHeader() {
  return (
    <div className="music__header">
      <h2 style={{ color: "white", marginTop: "50px" }}>Library</h2>
      <nav>
        <ul>
          <li>
            <Link to="/library/podcast">
              <button className="music__buttons">Podcasts</button>
            </Link>
          </li>
          <li>
            <Link to="/library/podcast/playlist">
              <button className="music__buttons">Playlists</button>
            </Link>
          </li>
          <li>
            <Link to="/library/songs">
              <button className="music__buttons">Songs</button>
            </Link>
          </li>
          <li>
            <Link to="/library/albums">
              <button className="music__buttons">Albums</button>
            </Link>
          </li>
          <li>
            <Link to="/library/artists">
              <button className="music__buttons">Artists</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MusicHeader;
