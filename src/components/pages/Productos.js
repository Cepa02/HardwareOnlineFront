import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";

import Producto from "../Producto";

const getProductos = async () => {
  const res = await axios.get("http://localhost:4000/api/productos");
  return res.data.productos;
};

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const x = () => {
      getProductos()
        .then((x) => (window.productos = x))
        .then((x) => setProductos(x));
    };
    x();
  }, []);

  return (
    <div>
      <h3 className="text-center">Productos</h3>
      <Container>
        <Row>
          {productos.length !== 0 ? (
            productos.map((producto, index) => (
              <Col md="auto" key={index}>
                <Producto producto={producto} key={index} />
              </Col>
            ))
          ) : (
            <Spinner animation="border" />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Productos;
