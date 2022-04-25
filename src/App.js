import React from 'react';
import { Row } from 'reactstrap';
import './css/App.css';
import './css/style.css'
import Producto from './componentes/Producto';
import Navegacion from './componentes/Navegacion';
import { listaProductos } from './json/items-productos.json';
import { listaProductosTV } from './json/items-tv.json';
import { listaProductosMOVIL } from './json/items-movil.json';
import { listaProductosPC } from './json/items-pc.json';
import { Form, Badge, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


class App extends React.Component {

  datosrefTitulo = React.createRef();
  datosrefCodigo = React.createRef();
  datosrefCaracteristicas = React.createRef();
  datosrefPrecio = React.createRef();
  datosrefStock = React.createRef();
  datosrefImagen = React.createRef();
  datosrefCategoria = React.createRef();

  constructor() {
    super();

    this.state = {
      listaProductos: [],
      listaProductosTV: [],
      listaProductosMOVIL: [],
      listaProductosPC: [],
      listaCarro: [],
    };
    this.toggle = this.toggle.bind(this);
    this.agregarProducto = this.agregarProducto.bind(this);
  };
  componentDidMount() {
    this.setState({ listaProductos: listaProductos })
    this.setState({ listaProductosTV: listaProductosTV })
    this.setState({ listaProductosMOVIL: listaProductosMOVIL })
    this.setState({ listaProductosPC: listaProductosPC })
  }

  listaCarroVer = listaCarro => {
    console.log(listaCarro)
    this.setState({ listaCarro: listaCarro })
  }

  toggle() {
    this.setState(prevState => ({
      popoverOpen: !prevState.popoverOpen
    }));
  };

  agregarProducto = (e) => {
    e.preventDefault();
    console.log(this.datosrefCategoria.current.value);
    if (this.datosrefCategoria.current.value === "1") {
      listaProductosTV.push({
        "titulo": this.datosrefTitulo.current.value,
        "codigo": this.datosrefCodigo.current.value,
        "descripcion": this.datosrefCaracteristicas.current.value,
        "precio": this.datosrefPrecio.current.value,
        "stock": this.datosrefStock.current.value,
        "imagen": this.datosrefImagen.current.value
      });
      console.log(listaProductosTV)
      this.setState({ listaProductosTV: listaProductosTV })
    }
    if (this.datosrefCategoria.current.value === "2") {
      listaProductosMOVIL.push({
        "titulo": this.datosrefTitulo.current.value,
        "codigo": this.datosrefCodigo.current.value,
        "descripcion": this.datosrefCaracteristicas.current.value,
        "precio": this.datosrefPrecio.current.value,
        "stock": this.datosrefStock.current.value,
        "imagen": this.datosrefImagen.current.value
      });
      console.log(listaProductosMOVIL)
      this.setState({ listaProductosMOVIL: listaProductosMOVIL })
    }
    if (this.datosrefCategoria.current.value === "3") {
      listaProductosPC.push({
        "titulo": this.datosrefTitulo.current.value,
        "codigo": this.datosrefCodigo.current.value,
        "descripcion": this.datosrefCaracteristicas.current.value,
        "precio": this.datosrefPrecio.current.value,
        "stock": this.datosrefStock.current.value,
        "imagen": this.datosrefImagen.current.value
      });
      console.log(listaProductosPC)
      this.setState({ listaProductosPC: listaProductosPC })
    }
    alert("Producto agregado correctamente.")
  };

  render() {
    const ComponenteTV = this.state.listaProductosTV.map(
      (listaProductosTV, i) => {
        return (
          <Producto
            key={i}
            titulo={listaProductosTV.titulo}
            imagen={listaProductosTV.imagen}
            codigo={listaProductosTV.codigo}
            descripcion={listaProductosTV.descripcion}
            precio={listaProductosTV.precio}
            stock={listaProductosTV.stock}
            listaCarro={(e) => this.listaCarroVer(e)} />
        );
      }
    );
    const ComponenteMOVIL = this.state.listaProductosMOVIL.map(
      (listaProductosMOVIL, i) => {
        return (
          <Producto
            key={i}
            titulo={listaProductosMOVIL.titulo}
            imagen={listaProductosMOVIL.imagen}
            codigo={listaProductosMOVIL.codigo}
            descripcion={listaProductosMOVIL.descripcion}
            precio={listaProductosMOVIL.precio}
            stock={listaProductosMOVIL.stock}
            listaCarro={(e) => this.listaCarroVer(e)}
          />
        );
      }
    );
    const ComponentePC = this.state.listaProductosPC.map(
      (listaProductosPC, i) => {
        return (
          <Producto
            key={i}
            titulo={listaProductosPC.titulo}
            imagen={listaProductosPC.imagen}
            codigo={listaProductosPC.codigo}
            descripcion={listaProductosPC.descripcion}
            precio={listaProductosPC.precio}
            stock={listaProductosPC.stock}
            listaCarro={(e) => this.listaCarroVer(e)}
          />
        );
      }
    );
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Button className="navbar-toggler" id="Popover1" color="info">
            <Badge className="navbar-toggler">Agregar Producto</Badge>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
              <PopoverHeader><strong>Agregar Producto</strong></PopoverHeader>
              <PopoverBody>
                <Form onSubmit={this.agregarProducto} className="form">
                  <div className="form-group">
                    Categoría: <select className="form-control" ref={this.datosrefCategoria} id="categoria"
                      value={this.state.categoria}>
                      <option value="1">TV, vídeo y home cinema</option>
                      <option value="2">Telefonía</option>
                      <option value="3">Informática</option>
                    </select></div>
                  <div className="form-group">
                    Título: <input type="text" className="form-control" ref={this.datosrefTitulo} id="titulo" required>
                    </input></div>
                  <div className="form-group">
                    Código: <input type="text" className="form-control" ref={this.datosrefCodigo} id="codigo" required>
                    </input></div>
                  <div className="form-group">
                    Características: <input type="text" className="form-control" ref={this.datosrefCaracteristicas} id="caracteristicas" required>
                    </input></div>
                  <div className="form-group">
                    Precio(€): <input type="number" min="0.0" className="form-control" ref={this.datosrefPrecio} id="precio" required>
                    </input></div>
                  <div className="form-group">
                    Stock: <input type="number" min="0" className="form-control" ref={this.datosrefStock} id="cantidad" required>
                    </input></div>
                  <div className="form-group">
                    Imágen: <input type="text" className="form-control" ref={this.datosrefImagen} id="imagen" required>
                    </input></div>
                  <button type="submit" className="btn btn-primary" value={this.state.categoria}>Submit</button>
                </Form>
              </PopoverBody>
            </Popover>
          </Button>
        </nav>
        <header>
          <div className="container">
            <h1 className="text-center">Mi tienda con React</h1>
            <hr></hr>
          </div>
        </header>

        <div className="block-store">
          <h1 className="text-center">Productos</h1>
          <hr></hr>
          <section className="store">
            <div className="container">
              <div className="items">
                <div id="container-main">
                  <div className="accordion-container">
                    <a href="#" className="accordion-titulo">TV, vídeo y home cinema<span
                      className="toggle-icon"></span></a>
                    <div className="accordion-content">
                      <div className="items1">
                        <Row>
                          {ComponenteTV}
                        </Row>
                      </div>
                    </div>
                  </div>


                  <div className="accordion-container">
                    <a href="#" className="accordion-titulo">Telefonía<span
                      className="toggle-icon"></span></a>
                    <div className="accordion-content">
                      <div className="items2">
                        <Row>
                          {ComponenteMOVIL}
                        </Row>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-container">
                    <a href="#" className="accordion-titulo">Informática<span
                      className="toggle-icon"></span></a>
                    <div className="accordion-content">
                      <div className="items3">
                        <Row>
                          {ComponentePC}
                        </Row>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="block-section">
          <h1 className="text-center">CARRITO</h1>
          <hr></hr>
          <section className="shopping-cart">
            <div className="container">
              <Row>
                <Navegacion listaCarro={this.state.listaCarro} />
              </Row>
            </div>
          </section>
        </div>
      </div>
    );
  };
};

export default App;
