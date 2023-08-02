import Sobre from "./components/views/Sobre";
import Menu from "./components/common/Menu";
import Contacto from "./components/views/Contacto"
import Inicio from "./components/views/Inicio"
import Habilidades from "./components/views/Habilidades"
import Proyectos from "./components/views/Proyectos";

function App() { 
  return (
    <div>
      <Menu />
      <Inicio />
      <Sobre />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </div>
  );
}
export default App;
