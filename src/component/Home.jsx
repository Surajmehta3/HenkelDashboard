import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Main from "./Main";

export default function Home() {
  const token = sessionStorage.getItem("token");
  const nagivate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("id")
    if (token) {
         console.log("authorised")
        }else{
          nagivate("/login");
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
  });
  return (
    <>
      <main>
        <Main />
      </main>
    </>
  );
}
