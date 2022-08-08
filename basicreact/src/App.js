import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Login from "./components/Login";


// import LayoutPage from "./componentss/LayoutPage";
// import LayoutComponents from "./LayoutComponents";

function App() {
  return (
    <div className="App">
    {/* <LayoutPage /> */}
   
    <Login />
    
      <BrowserRouter>
        {/* <LayoutComponents /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
