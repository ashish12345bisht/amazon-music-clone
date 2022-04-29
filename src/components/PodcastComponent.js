import React from 'react'
import PodcastComponentHeader from './PodcastComponentHeader';
import { Routes, Route } from "react-router-dom";
import PodcastMiniComponent from './PodcastMiniComponent';

function PodcastComponent() {
  return (
    <div>
      <PodcastComponentHeader />
      {/* <Routes>
        <Route
          path="/library/podcast/latest"
          element={
            <PodcastMiniComponent
              title={"LATEST"}
              text={
                "Follow your favourite podcasts, and come back here for the latest episodes."
              }
            />
          }
        />
        <Route
          path="/library/podcast/shows"
          element={
            <PodcastMiniComponent
              title={"SHOWS"}
              text={
                "Shows you love. Start following your favourite shows and always find them here."
              }
            />
          }
        />
        <Route
          path="/library/podcast/playlist"
          element={
            <PodcastMiniComponent
              title={"PLAYLIST"}
              text={
                "Listen later. Add episodes to your playlist and always find them here."
              }
            />
          }
        />
      </Routes> */}
    </div>
  );
}

export default PodcastComponent