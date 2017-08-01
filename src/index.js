import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from "react-router";
import Routes from "./routes/index.js";
import Relay from "react-relay";
import useRelay from "react-router-relay";
import {RelayNetworkLayer, urlMiddleware} from "react-relay-network-layer";
import {relayApi} from "./config/endpoints";
import auth from "./utils/auth";

const createHeaders = () => {
  let idToken = auth.getToken();
  if(idToken) {
    return {
      Authorization : `Bearer ${idToken}`
    }
  }
  else {
    return {};
  }
}

ReactDOM.render(
  <Router
    history = {browserHistory}
    routes = {Routes}
  />,
  document.getElementById('root'));
