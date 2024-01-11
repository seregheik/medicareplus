import { Container, Carousel } from "react-bootstrap";

import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Testimonials = () => {
  return (
    <Container
      fluid
      className="my-5 py-5 text-center"
      style={{ backgroundColor: "#DFE0F0" }}
    >
      <h4 className=" fs-3 dark-purple-text-color">TESTIMONIALS</h4>

      <Carousel className="py-5" fade>
        <Carousel.Item>
          <blockquote className="blockquote">
            <p className="lead fs-1">
              <sup>
                <BiSolidQuoteAltLeft />
              </sup>
              <span className="">
                I instantly started getting more bitches
              </span>
              <sup>
                <BiSolidQuoteAltRight />
              </sup>
            </p>
          </blockquote>

          <figcaption className="blockquote-footer fs-4">
            Bitchless Nigga
          </figcaption>
        </Carousel.Item>
        <Carousel.Item>
          <blockquote className="blockquote">
            <p className="lead fs-1">
              <sup>
                <BiSolidQuoteAltLeft />
              </sup>
              <span className="">
                I have too many bitches
              </span>
              <sup>
                <BiSolidQuoteAltRight />
              </sup>
            </p>
          </blockquote>

          <figcaption className="blockquote-footer fs-4">
            Rich Nigga
          </figcaption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Testimonials;
