import base from "../img/1.jpg";

const Palabras = (props) => {
    return (
      <div>
        <div>
          <Foto word={props.word} picture={props.image} />
        </div>
        <div>
          <label hidden id="palabra_id" type="hidden">{props.word}</label>
        </div>
        <div>
          <Espacios longitud={props.longitud}/>
        </div>
      </div>
    );
  };
  const Espacios = (props) =>{
    let espacios = "";
    console.log("espacios  ", props.longitud);
    var c = 1;
    while (c <= props.longitud){
      espacios = espacios + " __";
      console.log("espacios  ", espacios);
      c = c + 1;
    }
    return <div id = "id_espacios" >{espacios}</div>
  };
  const imgStyle = {
    border: "1px solid red",
    fontWeigth: "bold",
    width: "280px",
    mraginBottom: "10px"
  }
  const Foto = (props) => {
    const imgSrc = `${base}`;
    //console.log(imgSrc);
    return <img src={imgSrc} alt ={props.word} id="id_imagen" />;
  };
  
  export default Palabras;