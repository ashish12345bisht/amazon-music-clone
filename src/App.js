import React from "react";
import Homepage from "./pages/Homepage";
import Podcasts from "./pages/Podcasts";
import Music from "./pages/Music";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PodcastComponent from "./components/PodcastComponent";
import SAAComponent from "./components/SAAComponent";
import Playlist from "./components/Playlist";
import PodcastMiniComponent from "./components/PodcastMiniComponent";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/library" element={<Music />} />
          <Route path="/library/podcast" element={<PodcastComponent />} />
          <Route
            path="/library/songs"
            element={<SAAComponent title={"SONGS"} />}
          />
          <Route
            path="/library/albums"
            element={<SAAComponent title={"ALBUMS"} />}
          />
          <Route
            path="/library/artists"
            element={<SAAComponent title={"ARTISTS"} />}
          />

          <Route
            index
            path="/library/podcast"
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
          <Route path="/library/content" element={<Content />} />
          {/* <Route path="*" element={<h1>No Page</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
