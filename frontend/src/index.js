import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BASE_URL } from "./utils/config.js";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.js";

import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = BASE_URL;

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  root
);
