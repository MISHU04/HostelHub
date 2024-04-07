import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import ganga1 from "../components/ganga1.jpg";
import brahm from "../components/brahm.jpeg";
import hostel from "../components/hostel.jpg";
import './CarouselP.css';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img className="d-block1 w-100" src={hostel} alt="hostel"  />
        <Carousel.Caption>
          <h3>Hostel Hub</h3>
          <p>Exploring the hostels of NIT Patna..!! :)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img className="d-block w-50"  id="gan" src={ganga1} alt="ganga" width={1500} height={700}  />
        <Carousel.Caption>
          <h3>Ganga Girls Hostel</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img className="d-block w-50 " src={brahm} alt="brahm" width="100%"/>
        {/* <img className="d-block w-50 h-50" src={brahm} alt="brahm"  /> */}
        <Carousel.Caption>
          <h3>Brahmaputra Senior Boys Hostel</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;