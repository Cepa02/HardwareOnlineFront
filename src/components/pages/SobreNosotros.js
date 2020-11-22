import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import Logo from "../Logo";
import Map from "../Map";

const SobreNosotros = () => {
  console.log(Map);
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h3>HardwareOnline</h3>
          <Row>
            <Col>
              <Logo n={300} />
            </Col>
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sit amet metus viverra, porta turpis vel, dapibus arcu. Mauris
                efficitur nulla vitae risus auctor, quis pharetra turpis
                vulputate. Donec pretium lorem eu massa consectetur eleifend.
                Maecenas sed vulputate quam. Aliquam erat volutpat. Vestibulum
                molestie varius ante, sed pharetra quam. Ut vulputate felis id
                eleifend varius. Vestibulum eget consequat justo. Etiam non leo
                at ante dapibus tempus vel in turpis. Nunc varius diam
                scelerisque lacus facilisis, vel laoreet ante pretium. Morbi
                nulla purus, dictum posuere vestibulum ac, aliquam at nisi.
                Donec mattis turpis et elementum sodales. Etiam consequat
                ultrices turpis vitae tincidunt.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Map />
    </div>
  );
};

export default SobreNosotros;
