import React from "react";
import { CardDeck, Card } from "react-bootstrap";

const Feedback = () => {
  return (
    <CardDeck style={{ padding: "20px" }}>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.w3schools.com/howto/img_avatar.png"
        />
        <Card.Body>
          <Card.Title>Martín Weintraub</Card.Title>
          <Card.Text>
            "Compre una placa de video y llego en tiempo y forma. Son los
            mejores y de eso no hay duda! Vamos Boca."
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Hace 2 horas</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.w3schools.com/howto/img_avatar2.png"
        />
        <Card.Body>
          <Card.Title>Sergio Lionel</Card.Title>
          <Card.Text>
            "Me arme toda la PC con ellos, son un 10 en atencion y precio. Bueno
            vamo´ a juga."
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Hace 20 minutos</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.w3schools.com/w3images/avatar6.png"
        />
        <Card.Body>
          <Card.Title>Pipo Cipolatti</Card.Title>
          <Card.Text>
            "Nunca me fallan, consiguen todo al mejor precio y de la mejor
            calidad siempre. Se los recomienda Pipo! son mejores que el gol de
            Scocco a Olimpo"
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Hace 15 segundos</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default Feedback;
