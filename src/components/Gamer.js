import cabeza from "../img/2.jpg";
import tronco from "../img/3.jpg";
import mano_i from "../img/4.jpg";
import mano_d from "../img/5.jpg";
import pierna_i from "../img/6.jpg";
import pierna_d from "../img/7.jpg";
let contador = 1;
let arreglo_axu = Array(100).fill("");
let sw = 0;
const Gamer = (props) =>{
    return (
    <div>
        <div>
            <label>{props.caption}</label>
        </div>
        <div>
            <Texto longitud={props.longitud} ></Texto>
        </div>
        <div>
            <Boton des_boton={props.des_boton}></Boton>
        </div>
    </div>
    )
}

const Texto = (props) =>{

    return (<input type="text" id="letra_a_evaluar"/>
        
    )
}
const Etiqueta = (props) =>{

    return (<label>{props.caption}
        </label>
    )
}
function validaLetra(){
    let letter = document.getElementById("letra_a_evaluar").value;
    const word = document.getElementById("palabra_id").textContent;
    var espacios = "";
    if (word.indexOf(letter)>-1){
        console.log(word);
        console.log(letter);
        //alert("existe");
        var c = 0;
        var arreglo = Array.from(word);
        console.log(arreglo);
        console.log(arreglo.length);
        
        while (c < arreglo.length){
            if (arreglo[c] === letter){
                arreglo_axu[c] = letter;
                //espacios = espacios +  letter + " ";    
            }else{
                if (arreglo_axu[c] === ""){
                    arreglo_axu[c] = "";
                    //espacios = espacios + " __";
                }
            }
            c = c + 1;
        }
        console.log(arreglo_axu);
        c = 0;
        while (c < arreglo.length){
            if(arreglo_axu[c] !== ""){
                espacios = espacios +  arreglo_axu[c] + " ";
            }else{
                espacios = espacios + " __";
            }
            c = c + 1;
        }
        document.getElementById("id_espacios").innerHTML = espacios;
    }else{
        if (contador <= 6){
            switch (contador){
                case 1:
                document.getElementById("id_imagen").src = cabeza; 
                break;
                case 2:
                document.getElementById("id_imagen").src = tronco; 
                break;
                case 3:
                document.getElementById("id_imagen").src = mano_i; 
                break;
                case 4:
                document.getElementById("id_imagen").src = mano_d;
                break;
                case 5:
                document.getElementById("id_imagen").src = pierna_i; 
                break;
                case 6:
                document.getElementById("id_imagen").src = pierna_d; 
                break;
                default:
            
            }
        }
        contador ++;
    }
}
const Boton = (props) => {
    return (<button  onClick={validaLetra}   >{props.des_boton}
        </button>
    )
}
export default Gamer;