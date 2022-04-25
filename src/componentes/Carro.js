import React from 'react';
import { listaCarro } from '../json/items-carro.json';
import { Table, Button, PopoverHeader, PopoverBody } from 'reactstrap';

class Carro extends React.Component {
    constructor() {
        super();
        this.state = {
            popoverOpen: false,
            listaCarro: [],
        };
    };

    componentDidMount() {
        console.log("Carro componente: ", this.props.listaCarro)
        this.setState({ listaCarro: listaCarro })
    }

    comprarProducto() {
        listaCarro.length=0;
        this.setState({ listaCarro: listaCarro })
        alert("Gracias por su compra, pronto recibirá su pedido");
    }

    vaciarCarro() {
        window.location.replace('');
    }

    calcularTotal() {
        let arregloPrecios = [];
        let totalPrecio = 0;
        listaCarro.map(
            (listaCarro, i) => {
                arregloPrecios.push(parseFloat(listaCarro.precio));
                totalPrecio = arregloPrecios.reduce((a, b) => (a + b), 0);
                return (totalPrecio);
            }
        );

        return (new Intl.NumberFormat("es-CL").format(totalPrecio))
    };

    render() {
        const productosVenta = this.state.listaCarro.map(
            (listaCarro, i) => {
                return (
                    <tr key={i}>
                        <td>{i += 1}</td>
                        <td>{listaCarro.titulo}</td>
                        <th></th>
                        <td>{listaCarro.precio}</td>
                    </tr>
                )
            }
        );

        return (
            <div>
                <PopoverHeader>Lista de Productos</PopoverHeader>
                <PopoverBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th></th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosVenta}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><b>Total:</b></td>
                                <td>{this.calcularTotal()} €</td>
                                <td><Button className="btn-danger" onClick={() => this.vaciarCarro()}>Vaciar</Button></td>
                                <td><Button className="btn-success" onClick={() => this.comprarProducto()}>Comprar</Button></td>
                            </tr>
                        </tfoot>
                    </Table>
                </PopoverBody>
            </div>
        );
    };
};

export default Carro;