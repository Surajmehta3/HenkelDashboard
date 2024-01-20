import React, { useState } from "react";
// import "../../login.css";
import img from "../../assets/logo1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

export default function LoginForm() {
  const [input, setinput] = useState({
    email: "",
    password: ""
  })

  const [loader, setLoader] = useState();
  const navigate = useNavigate();

  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setinput({ ...input, [name]: value })

  }
  console.log(input, "input")
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    axios.get("https://apml-api-b1.glitch.me/api/v1/user/get?keyword3=Henkel").then((res) => {
      // console.log(res.data.data, "response")
      const data = res.data.data
      var id

      // console.log(loader, "loader")
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i], "response")

        const email = data[i].email
        const password = data[i].password
        if (email === input.email && password === input.password) {
          id = data[i]._id

          var customer = data[i].customer
        }
        console.log(id, "id")

      }
      if (id) {
        setLoader(false)
        alert("sucessfully login")
        console.log(loader, "loader before")
        sessionStorage.setItem("id", id)
        sessionStorage.setItem("customer", customer)
        sessionStorage.setItem("user", "VIEW BY ALL");

        navigate("/home")
      } else {
        setLoader(false)
        alert("invalid credential")
      }
    }).catch((err) => {
      console.log(err)
    })

  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   const loginResponst = axios.get('https://decisive-sunset-saturn.glitch.me/users/get')
  // }
  return (
    <>
      <div class="video-login">
        <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      </div>
      <div class="hello">
        <form
          // onSubmit={handleSubmit}
          onSubmit={handleSubmit}
          style={{ margin: "0px" }}
          className="login-form"
        >
          <div
            class="form_contain1"
            style={{ display: "flex", backgroundColor: "transparent" }}
          >
            <img src={img} alt="apml" />
            <br />
            <br />
            <div class="vl"></div>+
            <div class="login_contain">
              <div
                class="form-outline mb-4"
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <label class="form-label" for="form2Example1">
                  Username
                </label>
                <input
                  type="text"
                  id="form2Example1"
                  class="form-input"
                  name="email"
                  placeholder=" Username"
                  onChange={handlechange}
                />
              </div>
              <br /> <br />
              <div
                class="form-outline mb-4"
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <label class="form-label" for="form2Example2">
                  Password
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  class="form-input"
                  name="password"
                  placeholder=" Password"
                  onChange={handlechange}
                />
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  jusityContent: "center",
                  marginTop: "1.7rem",
                }}
              >
                <button
                  type="submit"
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    backgroundColor: loader ? "transparent" : "black",
                  }}
                  class="btn btn-primary btn-block mb-4"
                >
                  {loader ? (
                    <PropagateLoader color={"rgb(3, 204, 255,1)"} size={10} />
                  ) : (
                    <>Sign in</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
