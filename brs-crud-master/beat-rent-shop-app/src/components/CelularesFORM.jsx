import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

function CelularesFORM({del}){

    const[marca, setMarca] = useState('')
    const[modelo, setModelo] = useState('')
    const[color, setColor] = useState('')
    const[precio, setPrecio] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[operadora, setOperadora] = useState('')

    const Navigate = useNavigate()
    const {id} = useParams()

    useEffect(() =>{
        if(id != undefined){
            //cargar datos
            cargarCelular()
        }
    }, [])

    async function cargarCelular(){
        try{
            let res = await axios("https://denny2023.azurewebsites.net/api/celulares/"+id)
            let data = await res.data

            setMarca(data.marca)
            setModelo(data.modelo)
            setColor(data.color)
            setPrecio(data.precio)
            setDescripcion(data.descripcion)
            setOperadora(data.operadora)
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    async function guardar(){
        try{
            let celular = {
                marca: marca,
                modelo: modelo,
                color: color,
                precio: precio,
                descripcion: descripcion,
                operadora: operadora
            }
            
            let res = await axios.post("https://denny2023.azurewebsites.net/api/celulares", celular)
            let data = await res.data

            if(data.status === 1){
                alert(data.message)
                Navigate("/celulares")
            }
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    async function editar(){
        try{
            let celular = {
                celularId: id,
                marca: marca,
                modelo: modelo,
                color: color,
                precio: precio,
                descripcion: descripcion,
                operadora: operadora
            }

            let res = await axios.put("https://denny2023.azurewebsites.net/api/celulares", celular)
            let data = await res.data

            if(data.status === 1){
                alert(data.message)
                Navigate("/celulares")
            }
        }
        catch(error){
            //alert(error)
            console.log(error)
            if(error.response.status === 404 || error.response.status === 500){
                alert("El registro ya no existe")
                Navigate("/celulares")
            }
                
        }
    }

    async function eliminar(){
        try{
            let res = await axios.delete("https://denny2023.azurewebsites.net/api/celulares?id="+id)
            let data = await res.data

            if(data.status === 1){
                alert(data.message)
                Navigate("/celulares")
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
        Navigate("/celulares")
    }

    return(
        <div>
            <form id="formulario" className="needs-validation" noValidate>
                {
                    id != undefined ?
                    <div className="form-group">
                        <label className="form-label">ID</label>
                        <input className="form-control" value={id} readOnly disabled />
                    </div>
                    :
                    ""
                }
                
                <div className="form-group">
                    <label className="form-label">Marca</label>
                    <input className="form-control" value={marca} type="text" required onChange={(e) => setMarca(e.target.value)} disabled={del=== undefined ? false : true} />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Modelo</label>
                    <input className="form-control" value={modelo} type="text" required onChange={(e) => setModelo(e.target.value)} disabled={del=== undefined ? false : true} />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Color</label>
                    <input className="form-control" value={color} type="text" required onChange={(e) => setColor(e.target.value)} disabled={del=== undefined ? false : true} />
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
                    <label className="form-label">Descripcion</label>
                    <input className="form-control" value={descripcion} type="text" required onChange={(e) => setDescripcion(e.target.value)} disabled={del=== undefined ? false : true} />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Operadora</label>
                    <input className="form-control" value={operadora} type="text" required onChange={(e) => setOperadora(e.target.value)} disabled={del=== undefined ? false : true} />
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

export default CelularesFORM