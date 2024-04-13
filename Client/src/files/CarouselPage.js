import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ganga1 from "../components/ganga1.jpg";
import brahm from "../components/brahm.jpeg";
// import hostel from "../components/hostel.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselP.css';
function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className='b'
            src={ganga1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='b'
            src={brahm}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='b'
            src={ganga1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
