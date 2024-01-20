import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from './App/store'
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'


const options = {
  timeout: 8000,
  positions: positions.BOTTOM_CENTER,
  transitions: transitions.FADE,
  type: 'success'
}

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);
