import Carousel from 'react-bootstrap/Carousel';
import first from "./assets/slide/2.webp"
import second from "./assets/slide/1.png"
import three from "./assets/slide/3.jpg"

function slider() {
  return (
    <Carousel id="home">
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={first}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={second}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={three}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default slider;