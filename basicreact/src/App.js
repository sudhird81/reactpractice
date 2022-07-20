import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LayoutComponents from "./LayoutComponents";
import CrudFunction from "./components/CrudFuntion";


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <LayoutComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;