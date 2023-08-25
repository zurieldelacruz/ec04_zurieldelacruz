const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevoDetalleVentaPage = () => {

    

    
    const [productos, setProductos] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidad, setCantidad] = useState('')
   

   

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        
        client({
            method: 'POST',
            path: '/api/detalleVenta',
            entity: {PRODUCTO: productos, PRECIO: precio, CANTIDAD: cantidad},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    

    return (
        <>
            <h1>Nuevo Detalle Venta</h1>
            <form onSubmit={handleSubmit}>

                
                <label>Producto </label>
                <input type="text" name="productos" id="productos" onChange={e=>setProductos(e.target.value)}/> <br/>
                <label>Precio </label>
                <input type="text" name="precio" id="precio" onChange={e=>setPrecio(e.target.value)}/> <br/>
                <label>Cantidad </label>
                <input type="text" name="cantidad" id="cantidad" onChange={e=>setCantidad(e.target.value)}/> <br/>
                

                <input type="submit" value="Nuevo Detalle" />

            </form>
            
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoDetalleVentaPage;