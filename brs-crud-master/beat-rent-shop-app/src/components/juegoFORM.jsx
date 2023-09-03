import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

function JuegosFORM({del}){

    const[titulo, setTitulo] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[plataforma, setPlataforma] = useState('')
    const[precio, setPrecio] = useState('')
    const[categoria, setCategoria] = useState('')

    const Navigate = useNavigate()
    const {id} = useParams()

    useEffect(() =>{
        if(id != undefined){
            //cargar datos
            cargarJuegos()
        }
    }, [])

    async function cargarJuegos(){
        try{
            let res = await axios("https://denny2023.azurewebsites.net/api/juegos/"+id)
            let data = await res.data

            setTitulo(data.titulo)
            setDescripcion(data.descripcion)
            setPlataforma(data.plataforma)
            setPrecio(data.precio)
            setCategoria(data.categoria)
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    async function guardar(){
        try{
            let juego = {
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria,

            }
            
            let res = await axios.post("https://denny2023.azurewebsites.net/api/juegos", juego)
            let data = await res.data

            if(data.status === 1){
                alert(data.message)
                Navigate("/juegos")
            }
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    async function editar(){
        try{
            let juego = {
                juegoId: id,
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria,
            }

            let res = await axios.put("https://denny2023.azurewebsites.net/api/juegos", juego)
            let data = await res.data

            if(data.status === 1){
                alert(data.message)
                Navigate("/juegos")
            }
        }
        catch(error){
            //alert(error)
            console.log(error)
            if(error.response.status === 404 || error.response.status === 500){
                alert("El registro ya no existe")
                Navigate("/juegos")
            }
                
        }
    }

    async function eliminar(){
        try{
            let res = await axios.delete("https://denny2023.azurewebsites.net/api/juegos?id="+id)
            let data = await res.data

            if(data.status === 1){
                alert(data.message)
                Navigate("/juegos")
            }
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }



    function enviar(e){
        const form = document.querySelector("#formulario")
        e.preventDefault()
        e.stopPropagation()
        if (form.checkValidity()) {
            if(id === undefined)
                guardar()
            else if(del === undefined)
                editar()
            else
                eliminar()
        }

        form.classList.add('was-validated')
    }

    function cancelar(){
        Navigate("/juegos")
    }
    return(
        <div>
            <form id="formulario" className="needs-validation" noValidate>
                {
                    id != undefined ?
                    <div className="form-group">
                        <label className="form-label">juegoId</label>
                        <input className="form-control" value={id} readOnly disabled />
                    </div>
                    :
                    ""
                }
                
                <div className="form-group">
                    <label className="form-label">Titulo</label>
                    <input className="form-control" value={titulo} type="text" required onChange={(e) => setTitulo(e.target.value)} disabled={del=== undefined ? false : true} />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Descripcion</label>
                    <input className="form-control" value={descripcion} type="text" required onChange={(e) => setDescripcion(e.target.value)} disabled={del=== undefined ? false : true} />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Plataforma</label>
                    <input className="form-control" value={plataforma} type="text" required onChange={(e) => setPlataforma(e.target.value)} disabled={del=== undefined ? false : true} />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Precio</label>
                    <input className="form-control" value={precio} type="text" required onChange={(e) => setPrecio(e.target.value)} disabled={del=== undefined ? false : true} />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Categoria</label>
                    <input className="form-control" value={categoria} type="text" required onChange={(e) => setCategoria(e.target.value)} disabled={del=== undefined ? false : true} />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <hr />
                <button className={"btn btn-" + (id===undefined ? "success" : del === undefined ? "primary" : "danger")} onClick={(e) => enviar(e)}>{id === undefined ? "Guardar" : del===undefined ? "Editar" : "Eliminar"}</button>
                <button className="btn btn-danger" onClick={cancelar}>Cancelar</button>
            </form>
        </div>
    )

}

export default JuegosFORM