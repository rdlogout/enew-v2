import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { BiHomeAlt, BiMobileAlt, BiMailSend } from "react-icons/bi";

const ContactComponent = () => {
  return (
    <div id="contact">
      <Container className="py-5">
        <Row className="flex-between">
          <Col sm="5">
            <iframe
              width="100%"
              height="500"
              id="map-frame"
              src="https://maps.google.com/maps?q=13085 Morris Rd, Unit, ALPHARETTA GA 30004&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              f
              frameBorder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </Col>
          <Col sm="6">
            <p className="text-primary mb-0 fw-600 text-uppercase font-18">
              Its time for us
            </p>
            <div className="feature mb-2">
              <h1 className="text-dark fw-700">Connect</h1>
              <p></p>
            </div>
            <Row>
              <Col sm="6 mb-3">
                <Form.Control placeholder="Name" />
              </Col>
              <Col sm="6">
                <Form.Control placeholder="Email" type="email" />
              </Col>
              <Col sm="12 mb-3">
                <Form.Control placeholder="Your message .." as="textarea" />
              </Col>
              <Col>
                {/* <div className="flex-between">
                  <p className="border flex-grow-1 mb-0" />
                  <span className="mx-2">Offline</span>
                  <p className="border flex-grow-1 mb-0" />
                </div> */}
                <div className="feature mb-2 fw-600 text-dark">
                  Office
                  <p></p>
                </div>
              </Col>
              <Col sm="auto">
                <Button variant="primary w-100 header-btn shadow-sm">
                  Contact Us
                </Button>
              </Col>
              <Col sm="9">
                {offices.map((s) => (
                  <div className="d-flex align-items-center mb-2">
                    <Alert variant="info mb-0 border-0 p-2 me-3">
                      <span className="fs-6 p-1">{s.icon}</span>
                    </Alert>
                    <p className="font-15 fw-500 mb-0 text-dark">{s.content}</p>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactComponent;
const offices = [
  {
    icon: <BiHomeAlt />,
    content: (
      <span className="text-dark opacity-75 text-decoration-none">
        13085 Morris Rd, Unit, ALPHARETTA GA 30004
      </span>
    ),
  },
  {
    icon: <BiMobileAlt />,
    content: (
      <a
        className="text-dark opacity-75 text-decoration-none"
        href="tel:847-777-9638"
      >
        847-777-9638
      </a>
    ),
  },
  {
    icon: <BiMailSend />,
    content: (
      <a
        className="text-dark opacity-75 text-decoration-none"
        href="mailto:hr@rallytechnologies.llc"
      >
        hr@rallytechnologies.llc
      </a>
    ),
  },
];
