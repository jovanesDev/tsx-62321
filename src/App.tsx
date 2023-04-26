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
      <h1 style={{background:'rose'}}>Ambiente de QA</h1>
      <Counter jugadoresDeFutbol={jugadoresDeFutbol} sumar={sumar} saludar={saludar} />
      
    </div>
  );
}

export default App;
