import React from 'react';
import {Navbar, NavItem, NavbarBrand, Nav} from 'reactstrap';
import Carro from './Carro';

class Navegacion extends React.Component {

    render(){
        return (
            <Navbar color="light" light expand="md">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Carro listaCarro={this.props.listaCarro}/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    };
};

export default Navegacion;