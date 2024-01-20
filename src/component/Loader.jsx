import React from "react";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <div className="main-loader">
        <div className="main-spinner">
        <div class="lds-hourglass"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;