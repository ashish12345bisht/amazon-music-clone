import React,{useState} from "react";
import { AiFillHome, AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FaPodcast,
  FaHeadphonesAlt,
  FaSearch,
  FaRegUserCircle,
} from "react-icons/fa";
import "../styles/Header.css";

function Header() {
  const [visible,setVisible]=useState(false);
  const [width,setWidth]=useState(200);
  window.addEventListener("click",()=>{
    setWidth(200);
  })
  return (
    <div className="header">
      <div className="header__right">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img
                  className="logo"
                  src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg"
                />
              </Link>
            </li>
            <li> 
              <Link to="/">
                <div className="header-links">
                  <AiFillHome className="header-icons" />
                  <h3>HOME</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/podcasts">
                <div className="header-links">
                  <FaPodcast className="header-icons" />
                  <h3>PODCASTS</h3>
                </div>
              </Link>
            </li>
            <li>
              <div className="header-links">
                <FaHeadphonesAlt className="header-icons" />
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dd-button"
                    onClick={()=>setVisible(!visible)}
                  >
                    LIBRARY<AiFillCaretDown/>
                  </button>
                  {visible && 
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                      style={{display:"block",paddingLeft:"1em"}}
                    >
                      <li>
                        <Link to="/library">Music</Link>
                      </li>
                      <li>
                        <Link to="/library/podcast">Podcasts</Link>
                      </li>
                    </ul>
                  }
                </div>
              </div>
            </li>
          </ul>
                  
        </nav>
      </div>
      <div className="header__left">
        <div className="searchbar-container">
          <input placeholder="Search" style={{width:width}} onChange={()=>setWidth(700)}/>
          <FaSearch style={{ color: "#d3d3d3", fontSize: "1.5em" }} />
        </div>
        <FaRegUserCircle className="header-icons" />
      </div>
    </div>
  );
}

export default Header;
