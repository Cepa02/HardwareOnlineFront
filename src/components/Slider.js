import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://compragamer.net/bannersPrincipal/1600-x-580.jpg"
          alt="1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://compragamer.net/bannersPrincipal/Geil%20banner.png"
          alt="2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://compragamer.net/bannersPrincipal/Strix%20Helios%20-%20Tuf%20GT301%201600x580.jpg"
          alt="3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
