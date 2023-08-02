import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Menu/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
