import "antd/dist/antd.css";
import './App.css';
import MainLayout from "./components/MainLayout";
// require('dotenv').config();

function App() {
  console.log(process.env.REACT_APP_BASE_URL, "test base url")
  return (
    <>
      <MainLayout /> 
    </>
  );
}
export default App;



