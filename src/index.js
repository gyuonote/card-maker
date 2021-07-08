<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
>>>>>>> b226c19ae681961f3fa2f1ba17c66acd257cac0e

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
<<<<<<< HEAD
  document.getElementById('root')
=======
  document.getElementById("root")
>>>>>>> b226c19ae681961f3fa2f1ba17c66acd257cac0e
);
