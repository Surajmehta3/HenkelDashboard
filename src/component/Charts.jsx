import React, { useEffect } from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Charts = () => {
  const token = sessionStorage.getItem("token");
  const nagivate = useNavigate();

  useEffect(() => {
    const token= sessionStorage.getItem("id")
    if(token){
      console.log("authorised")
    }else{
      nagivate("/login")
    }
    // axios
    //   .get("https://fire-hot-hardhat.glitch.me/auth", {
    //     headers: { Authorization: "Bearer " + token },
    //   })
    //   .then((res) => {
    //     if (res.data.message === "Authorized") {
    //       console.log("Authorized");
    //     }
    //   })
    //   .catch((err) => {
    //     nagivate("/");
    //   });
  }, []);

  return (
    <>
      <main>
        <div className="main_table-export">
          <div className="export">
            <h1>EXPORT</h1>
          </div>
        </div>
        <div className="main_table-heading">
          <div className="heading">
            <AiOutlineAreaChart
              className="heading-icon"
              style={{ color: "orange" }}
            />
            <h1>CHARTS </h1>
          </div>
        </div>
        <iframe
          style={{
            background: "#21313C",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width: "100vw",
            height: "100vh",
          }}
          src="https://charts.mongodb.com/charts-project-0-ixrdr/embed/dashboards?id=e3cee981-7399-44e3-9ebc-1d73c0443cd1&theme=dark&autoRefresh=true&maxDataAge=300&showTitleAndDesc=true&scalingWidth=fixed&scalingHeight=fixed"
        ></iframe>
      </main>
    </>
  );
};

export default Charts;
