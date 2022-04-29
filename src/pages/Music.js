import React from "react";
import HistoryLess from "../components/HistoryLess";
import "../styles/Music.css";
import { Routes, Route } from "react-router-dom";
import PodcastComponent from "../components/PodcastComponent";
import Playlist from "../components/Playlist";
import SAAComponent from "../components/SAAComponent";
import MusicHeader from "../components/MusicHeader";

function Music() {
  return (
    <div>
      <div style={{ width: "95vw", margin: "auto" }}>
        <div className="music__button__container">
          <MusicHeader />
        </div>
        <HistoryLess />
      </div>
    </div>
  );
}

export default Music;
