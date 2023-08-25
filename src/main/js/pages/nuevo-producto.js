const React = require('react');
const { useState, useEffect } = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevoProductoPage = () => {

    const [productos, setProductos] = useState([]);
    const [idProducto, setIdProducto] = useState('');

    const handleSubmit = (evento) => {
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/productos',
            entity: {
                producto: 'http://localhost:8080/api/productos/' + idProducto
            },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    };

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/productos'
        }).done(response => {
            setProductos(response.entity._embedded.productos);
        });
    }, []);

    return (
        <>
            <h1>Nuevo Producto</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='producto'>Producto</label> <br />
                <select name="producto" id="producto" onChange={(e) => { setIdProducto(e.target.value) }}>
                    {productos.map(producto => (
                        <option key={producto._links.self.href} value={producto._links.self.href}>
                            [{producto.nombre}]
                        </option>
                    ))}
                </select><br />

                <label>Precio</label> <br />
                <select name="producto" id="producto" onChange={(e) => { setIdProducto(e.target.value) }}>
                    {productos.map(producto => (
                        <option key={producto._links.self.href} value={producto._links.self.href}>
                            [{producto.precio}]
                        </option>
                    ))}
                </select><br />

                <input type="submit" value="Guardar" />
            </form>
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = NuevoProductoPage;