import React from 'react';
import { CardImg, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../css/producto.css';
import { listaCarro } from '../json/items-carro.json';
import { listaProductos } from '../json/items-productos.json';

class FichaProducto extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modal: false,
            listaCarro: [],
            listaProductos: [],
            cantidadproductoreducido: null,
            stocks: null
        };
    };


    componentDidMount() {
        this.setState({ listaCarro: listaCarro, listaProductos: listaProductos, stocks: this.props.props.stock })
        this.toggle = this.toggle.bind(this);
        this.agregarAlCarro = this.agregarAlCarro.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    };

    agregarAlCarro(propsNew) {
        let valor = parseInt(this.state.stocks) - 1;
        if(parseInt(this.state.stocks) !== 0){
            listaCarro.push({
                "titulo": propsNew.titulo,
                "precio": propsNew.precio
            });
        
            this.setState(prevState => ({
                modal: !prevState.modal,
                stocks: parseInt(this.state.stocks) - 1
            }));
    
            this.props.reducirCantidad(valor, listaCarro)
        } else {
            alert("No hay productos disponibles");
        }
    };

    render() {
        return (
            <Container>
                <Button size="lg" onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}></CardImg>
                        <p className="text-justify">Descripción del producto: {this.props.props.descripcion}.</p>
                        <p>Precio: {this.props.props.precio} €</p>
                        <p>Stock: {this.state.stocks} unidades</p>
                    </ModalBody>
                    <ModalFooter className="ModalFooter">
                        <Button color="primary" onClick={() => this.agregarAlCarro(this.props.props)}>Añadir al carro</Button>
                        <Button color="secondary" onClick={this.toggle}>Regresar</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    };
};

export default FichaProducto;