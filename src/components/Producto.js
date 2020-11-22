import React, { useState } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import Carro from "./Carro";

const Producto = ({ producto }) => {
  let { descripcion, imagen, marca, nombre, precio } = producto;
  const [modalShow, setModalShow] = useState(false);
  if (imagen.indexOf("https://res.cloudinary.com") === -1) {
    imagen = "https://res.cloudinary.com/dzapqatw7/image/upload/c_limit,h_300,w_300/v1606001362/sample.jpg"
  }
  return (
    <>
      <Card style={{ width: "18rem", marginTop: "18px" }}>
        <Card.Img
          variant="top"
          // src={require(`../../public/images/${imagen}.jpg`).default}
          src={imagen}
          alt={nombre}
        />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Precio: ${precio}</ListGroupItem>
          <ListGroupItem>Marca: {marca}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="success" onClick={() => setModalShow(true)}>
            Comprar!
          </Button>
        </Card.Body>
      </Card>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        producto={producto}
      />
    </>
  );
};

const MyModal = (props) => {
  let { descripcion, imagen, nombre, precio } = props.producto;
  if (imagen.indexOf("https://res.cloudinary.com") === -1) {
    imagen = "https://res.cloudinary.com/dzapqatw7/image/upload/c_limit,h_300,w_300/v1606001362/sample.jpg"
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Row>
          <Col>
            <Image src={imagen}/>
          </Col>
          <Col>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {nombre}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Descripcion del producto</h3>
              <p>{descripcion}</p>
            </Modal.Body>
            <Modal.Footer>
              <h3>Precio: ${precio}</h3>
              <Button onClick={props.onHide} variant="success">
                <Carro />
                Comprar!
              </Button>
            </Modal.Footer>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default Producto;
