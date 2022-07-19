import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LayoutComponents from "./LayoutComponents";
import CrudFunction from "./components/CrudFuntion";
import {useEffect} from 'react';
import {gapi} from 'gapi-script';
const clientId ="809188169045-fk7d1hqogk3fbm3692fpognmj96717lp.apps.googleusercontent.com      ";

function App() {
  useEffect(()=>{
    function start() {
      gapi.client.init({
        clientId:clientId,
        scope: "" 
      })
    };
    gapi.load('client:aut',start);
  })

  return (
    <div className="App">
      <BrowserRouter>
        <LayoutComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;