import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "../styles/Podcasts.css";
import Card from '../components/Card';
import {Link} from 'react-router-dom';


function Podcasts() {
  return (
    <div>
      <div className="podcasts__banner__top">
        <p>FEATURED PODCAST</p>
        <h1>WOICE WITH WARIKOO PODCAST</h1>
        <p>Dealing with Imposter Syndrome</p>
        <Link to="/library/content">
          <button>
            <BsFillPlayFill /> Play
          </button>
        </Link>
      </div>
      <div className="podcasts__banner__bottom"></div>
      <div style={{ width: "95vw", margin: "auto", marginBottom: "3em" }}>
        <h2 style={{ marginTop: "2em", color: "white" }}>
          Most Played on Amazon Music (India)
        </h2>
        <div className="homepage__slider">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div style={{ width: "95vw", margin: "auto", marginBottom: "3em" }}>
        <h2 style={{ marginTop: "2em", color: "white" }}>Trending Podcasts</h2>
        <div className="homepage__slider">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div style={{ width: "95vw", margin: "auto", marginBottom: "3em" }}>
        <h2 style={{ marginTop: "2em", color: "white" }}>Top Stations</h2>
        <div className="homepage__slider">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div style={{ width: "95vw", margin: "auto", marginBottom: "3em" }}>
        <h2 style={{ marginTop: "2em", color: "white" }}>Motivational Shows</h2>
        <div className="homepage__slider">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
