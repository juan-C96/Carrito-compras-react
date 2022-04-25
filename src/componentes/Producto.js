import React,{Component} from 'react';
import {Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import '../js/accordion.js'
import '../css/producto.css';
import FichaProducto from './FichaProducto';

class Producto extends Component {
    constructor (props) {
        super();
        this.state = {
            stocksprod:props.stock,
        };
    };
    
    cambiarStock=(cantidad,listaCarro)=>{
        this.setState({stocksprod:cantidad})
        this.props.listaCarro(listaCarro)
    }

    render(){
        return (
            <Col sm="6" className="col-12 col-md-6">
                <Card className="Card" body>  
                    <CardImg src={this.props.imagen} className="item-imagen"></CardImg>
                    <CardBody>
                        <CardTitle className="text-center"><b>{this.props.titulo}</b></CardTitle>
                        <CardSubtitle><b>Código:</b> {this.props.codigo}</CardSubtitle>
                        <CardText className="text-justify"><b>Descripción:</b> {this.props.descripcion}</CardText>
                        <CardSubtitle><b>Precio:</b> {this.props.precio} €</CardSubtitle>
                        <CardText>Stock: {this.state.stocksprod} unidades</CardText>
                        <FichaProducto props={this.props} className="Button" reducirCantidad={(e,listaCarro)=>this.cambiarStock(e,listaCarro)}></FichaProducto>
                    </CardBody>
                </Card>
            </Col>
        );
    };
};

export default Producto;