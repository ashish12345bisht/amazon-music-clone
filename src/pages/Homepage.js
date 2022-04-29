import React from "react";
import Card from "../components/Card";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <div style={{ width: "95vw", margin: "auto" }}>
      <div style={{ marginBottom: "3em" }}>
        <h2 style={{ color: "white", padding: "1em 0em" }}>90's & 2000's</h2>
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
      <div style={{ marginBottom: "3em" }}>
        <h2 style={{ color: "white", padding: "1em 0em" }}>
          Trending Playlists
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
      <div style={{ marginBottom: "3em" }}>
        <h2 style={{ color: "white", padding: "1em 0em" }}>Top Stations</h2>
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
      <div style={{ marginBottom: "3em" }}>
        <h2 style={{ color: "white", padding: "1em 0em" }}>Top Stations</h2>
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

export default Homepage;
