const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerVentaPage = () => {

    let { id } = useParams();
    const [venta, setVenta] = useState({});
    const [detalleVentas, setDetalleVentas] = useState([]);


    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventas/' + id
        }).done(response => setVenta(response.entity))
        client({
            method: 'GET',
            path: '/api/ventas/' + id + '/formacion'
        }).done(response => setDetalleVentas(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Venta</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Dia</th>
                        <td>{venta.total}</td>
                        <td>{venta.total1}</td>
                        <td>{venta.total2}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Detalle</h2>
            <table border="1">
                <thead>
                    <tr>
                        
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                
                <tbody>
                   
                {detalleVentas.map(detalleVenta => {
                    const total = (detalleVenta.PRECIO * detalleVenta.CANTIDAD).toString();
                 
                    return (
                        <tr key={detalleVenta.ID}>
                            <td>{detalleVenta.PRODUCTO}</td>
                            <td>{detalleVenta.PRECIO}</td>
                            <td>{detalleVenta.CANTIDAD}</td>
                            <td>{total}</td>
                            
                            
                            
                        </tr>
                    );
                })}
                </tbody>
               
            </table>

            <hr />
            <Link to={`/ver-venta/${id}/nuevo-detalleVenta`}>Nuevo detalle</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerVentaPage;