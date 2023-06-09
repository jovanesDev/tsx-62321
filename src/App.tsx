import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import { IProfe } from './components/Counter/interface';

function App() {

   const saludar = () => alert('Hola Hovha')

   const sumar = (a:number,b:number):number => a + b

   const [counter,setCounter] = useState<number|string | IProfe >(0)
   const [profes,setProfes] = useState<IProfe[]>([])

   const jugadoresDeFutbol = [
    {
      nombre:'Leonel',
      apellido:'Messi'
    },
    {
      nombre: 'Enzo',
      apellido:'Ferrnandez'
    }
   ]


  return (
    <div className="App">
      <h1 style={{background:'blue'}}>Ambiente de Produccion</h1>
      <Counter jugadoresDeFutbol={jugadoresDeFutbol} sumar={sumar} saludar={saludar} />

      <p>Bienvenido a vercion V1.0 de la app</p>

    </div>
  );
}

export default App;
