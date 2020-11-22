import React from "react";
import { Image, Form, Button } from "react-bootstrap";
import map from "./map.PNG";

const Map = () => {
  return (
    <div style={{ display: "flex" }}>
      <Image src={map} />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>Visitanos en nuestro local</h2>
        <h4>Estamos en zona ciudadela</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet metus viverra, porta turpis vel, dapibus arcu. Mauris efficitur
          nulla vitae risus auctor, quis pharetra turpis vulputate. Donec
          pretium lorem eu massa consectetur eleifend. Maecenas sed vulputate
          quam.
        </p>
        <h3>Dejanos tus datos así nos contactamos con vos!</h3>
        <Form>
          <Form.Group
            controlId="formBasicEmail"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Form.Label style={{ padding: "20px" }}>Mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="tumail@mail.com"
              style={{
                width: "70%",
              }}
            />
          </Form.Group>
          <Form.Group
            controlId="formBasicPassword"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Form.Label style={{ padding: "7px" }}>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="11 2345 6789"
              style={{ width: "70%" }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar!
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Map;
