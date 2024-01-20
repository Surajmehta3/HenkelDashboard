import video from "../assets/production ID_5200378.mp4";
import { useAuth0 } from "@auth0/auth0-react";

import React from "react";
import { NavLink } from "react-router-dom";

const FirstPage = () => {
  return (
    <>
      <img src="img1" alt="" />
      <div className="">
        <video src={video} autoPlay loop type="video/mp4"></video>
        <div className="content">
          <h1 style={{ fontSize: "100px" }}>
            Welcome To{" "}
            <span style={{ color: "red", fontSize: "7rem" }}>APML </span>
          </h1>
          <div className="btn">
            <NavLink to="/login">
              <button id="myBtn">START YOUR ENGINE</button>;
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
