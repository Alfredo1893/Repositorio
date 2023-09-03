import React, { useState, useEffect } from 'react';
import Tabla2 from './Tabla2';
import axios from "axios";

function JuegosCrud(){
  
  const[juegos, setJuegos] = useState()
  
  useEffect(() => {
      cargarJuegos()
    }, [])


  async function cargarJuegos(){
    try{
      let res = await axios("https://denny2023.azurewebsites.net/api/juegos")
      let data = res.data

      setJuegos(data)
    }
    catch(error){
      alert(error)
      console.log(error)
    }
  }

  return(
    <div>
      {juegos === undefined ? 
        <div><h2>Cargando</h2>
        <div className="spinner-border text-primary" role="status">
            <span className=" "> Cargando...</span>
         </div>
    </div>  
      :
        <Tabla2 controlador={"juegos"} lista={juegos} cols={["ID", "Titulo", "Descripcion", "Plataforma", "Precio", "Categoria"]}/>
      }
      
    </div>
  )


}

export default JuegosCrud