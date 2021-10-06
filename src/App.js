//import logo from './logo.svg';
import {useState} from 'react';
import Palabras from "./components/Palabras";
import Gamer from "./components/Gamer";
import './App.css';
const source = 'https://palabras-aleatorias-public-api.herokuapp.com/random'
let c = 0;
var longitud_palabra;
let letras = [];
export default function Home(){
  const [palabra, setPalabra] = useState("");
  const [l_palabra, setLongitudPalabra] = useState(0);
//  const [espacios, setEspacios] = useState("");
  fetch(source).then(response =>{
    if(response.status === 200){
      //console.log("palabra ",palabra);
          console.log("everything went well");
          response.json().then(data => {
            letras = palabra.split("")
            longitud_palabra = letras.length;
            if (longitud_palabra === 0){
              console.log(data.body.Word);
              setPalabra(data.body.Word);
            }else{
              setLongitudPalabra(longitud_palabra);
              console.log('palabra   ',palabra);
              console.log('tamaño  ',l_palabra);
            }
      });
    
    }
    //console.log(response);
  }).catch(error => {
    console.error(error);
  });
  if (palabra === null){

    return <div>No data have been received</div>
  }
  const readWords = () =>{
    console.debug("descargando palabra aleatoria...");
  }
  return(

      <div>
        <div>
          <button className = "button is-primary" >nueva palabra</button>
        </div>
        <div><Palabras word={palabra} longitud={l_palabra}/>
      
      </div>
      <div>
      <div><Gamer word={palabra} longitud={l_palabra} des_boton="OK" caption="Ingrese una letra: "></Gamer></div>
      </div>   
      </div>
      
  )
  
  }
