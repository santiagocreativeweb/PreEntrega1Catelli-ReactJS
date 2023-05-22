import { useState } from "react"; 

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";



const App = () => {

  const [contador, setContador] = useState(0)

  const handleSumar = () => {
    setContador(contador + 1) 
  }
  const handleRestar = () => {
    setContador(contador - 1)
  }

  return (
    <div className="App" >
     <NavBar />
     <ItemListContainer greeting="Bienvenido a Iphone Santiago" sty/>
    </div>
  );
};

export default App;