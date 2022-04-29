import React from 'react'
import { Link } from "react-router-dom";
import '../styles/PodcastComponent.css'

function PodcastComponentHeader() {
  return (
    <div className="podcast__component">
      <nav>
        <ul>
          <li>
            <Link to="/library/podcast">LATEST</Link>
          </li>
          <li>
            <Link to="/library/podcast/shows">SHOWS</Link>
          </li>
          <li>
            <Link to="/library/podcast/playlist">PLAYLIST</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PodcastComponentHeader