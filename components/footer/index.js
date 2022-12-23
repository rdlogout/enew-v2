import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BiHomeAlt, BiMobileAlt, BiMailSend } from "react-icons/bi";
import {
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { IoIosArrowForward, IoIosMail, IoMdHome } from "react-icons/io";
const FooterComponent = () => {
  return (
    <div id="footer">
      <div id="footer-bg">
        <img src="./footer-bg.png" />
      </div>
      <div className="content">
        <Container className="py-5">
          <Row>
            <Col sm="5">
              <h1 className="text-white fs-3 fw-800">RALLY TECHNOLOGIES</h1>
              <p className="text-white opacity-50 text-capitalize">
                We are a leading IT(Information Technology) consulting and
                services company In Alpharetta, GA, USA.
              </p>
              <div className="feature">
                Office
                <p />
              </div>
              <div className="mb-3">
                {offices.map((s) => (
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">{s.icon}</span>
                    <p className="font-14 mb-0">{s.content}</p>
                  </div>
                ))}
              </div>

              <div className="d-flex pt-3">
                {socials.map((s) => (
                  <div
                    className="flex-center me-2 text-white rounded-1"
                    style={{
                      background: s.color,
                      height: "40px",
                      width: "40px",
                    }}
                  >
                    {s.icon}
                  </div>
                ))}
              </div>
            </Col>
            <Col sm="2">
              <div className="feature">
                Our Services
                <p />
              </div>
              <div>
                {services.map((s) => (
                  <div className="d-flex mb-3 opacity-50">
                    <IoIosArrowForward className="me-2" />
                    <p className="mb-0">{s.title}</p>
                  </div>
                ))}
              </div>
            </Col>
            <Col sm="2">
              <div className="feature">
                Navigation
                <p />
              </div>
              <div>
                {navigation.map((s) => (
                  <div className="d-flex mb-3 opacity-50">
                    <IoIosArrowForward className="me-2" />
                    <p className="mb-0">{s.title}</p>
                  </div>
                ))}
              </div>
            </Col>
            <Col sm="3">
              <div className="feature">
                Subscribe
                <p />
              </div>
              <p className="opacity-50">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
              <div className="d-flex rounded mt-4 overflow-hidden">
                <Form.Control
                  placeholder="Email Address"
                  type="email"
                  className="rounded-0 py-3"
                />
                <Button variant="primary font-15 fw-500 text-nowrap rounded-0 text-white">
                  Sign Up
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="border-top text-white text-center py-3 border-grey border-opacity-25">
          <p className="my-2">
            {new Date().getFullYear()} © All Rights Reserved & Made With{" "}
            <FaHeart className="text-danger mx-1 mb-1" />{" "}
            <span className="text-primary fw-600">RALLY TECHNOLOGIES LLC</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const socials = [
  {
    icon: <FaFacebookF />,
    color: "#0165E1",
  },
  {
    icon: <FaTwitter />,
    color: "#00acee",
  },
  {
    icon: <FaInstagram />,
    color: "#bc2a8d",
  },
  {
    icon: <FaPinterestP />,
    color: "#bd081c",
  },
];

const services = [
  {
    title: "Infrastructure Services",
    href: "/",
  },
  {
    title: "DevOps Services",
    href: "/",
  },
  {
    title: "Java Development",
    href: "/",
  },
  {
    title: "Business Analyst",
    href: "/",
  },
  {
    title: "Quality Assurance & Testing",
    href: "/",
  },
];

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
  {
    title: "About",
    href: "/",
  },
  {
    title: "Features",
    href: "/",
  },
  {
    title: "SignIn",
    href: "/",
  },
];

const offices = [
  {
    icon: <BiHomeAlt />,
    content: (
      <span className="text-white opacity-75 text-decoration-none">
        13085 Morris Rd, Unit, ALPHARETTA GA 30004
      </span>
    ),
  },
  {
    icon: <BiMobileAlt />,
    content: (
      <a
        className="text-white opacity-75 text-decoration-none"
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
        className="text-white opacity-75 text-decoration-none"
        href="mailto:hr@rallytechnologies.llc"
      >
        hr@rallytechnologies.llc
      </a>
    ),
  },
];

export default FooterComponent;
