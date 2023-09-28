import React from "react";
import "../styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile from "../img/deep-avatar.jpg";



function RightMenu() {
  return (
    <div className="rightContainer">
      <div className="goPro">
       

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        
        <i>
          <FaCogs />
        </i>

        <div className="profileImage">
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
