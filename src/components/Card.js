import React from 'react'
import '../styles/Card.css'

function Card() {
  return (
    <div className="custom__card">
      <img src="https://m.media-amazon.com/images/I/51epBGrMe-L._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg" />
      <h3>Title</h3>
      <h5>Artists</h5>
    </div>
  );
}

export default Card