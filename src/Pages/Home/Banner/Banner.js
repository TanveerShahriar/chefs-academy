import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/TanveerShahriar/images/main/a10images/banner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="shadow">Italian, Mexican, Indian and many more variety of dishes are taught</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/TanveerShahriar/images/main/a10images/banner2.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="shadow">Ensuring fun and equality cooking class for all ages</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/TanveerShahriar/images/main/a10images/banner3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="shadow">Become a master of Dessert with proper guidance</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
