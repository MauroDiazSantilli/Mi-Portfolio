import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import { BrowserRouter } from "react-router-dom";
import Contacto from "./components/views/Contacto"
import Inicio from "./components/views/Inicio"
import Habilidades from "./components/views/Habilidades"
import Proyectos from "./components/views/Proyectos"
import Sobre from "./components/views/Sobre"

function App() {

  return (
    <BrowserRouter>
    <Menu/>
    <Inicio />
    <Sobre />
    <Habilidades />
    <Proyectos/>
    <Contacto />
    <Footer/>
    </BrowserRouter>
  )
}

export default App
