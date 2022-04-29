import React from 'react'
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import {BsFillPlayFill} from 'react-icons/bs'
function ContentBanner() {
  return (
    <div>
      <div className="content__banner__bottom"></div>
      <div className="content__banner">
        <img src="https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/8758eb1c-1457-4758-ac9e-b869db7e853d/8758eb1c-1457-4758-ac9e-b869db7e853d-675762403._SX768_SY768_BL0_QL100__UX358_FMwebp_QL85_.jpeg" />
        <div>
          <h4>PODCAST</h4>
          <h1>THE STORIES OF MAHABHARATA</h1>
          <h6>Sudipta Bhawnik</h6>
          <div className="buttons__container">
            <button>
              <BsFillPlayFill />
            </button>
            <button dis>
              <AiOutlineHeart />
              Follow
            </button>
            <button>
              <AiOutlineShareAlt />
            </button>
          </div>
        </div>
      </div>

      <h2 style={{color:"white"}}>
        A serialized story-telling of the epic The Mahabharata - part of the
        mythology of ancient India
      </h2>
    </div>
  );
}

export default ContentBanner