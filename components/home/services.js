import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  AiOutlineBulb,
  AiOutlineTrophy,
  AiOutlineCustomerService,
} from "react-icons/ai";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsBookmarkCheck } from "react-icons/bs";
import { RiHealthBookLine, RiBankLine, RiGovernmentLine } from "react-icons/ri";
import { TbBuildingFactory } from "react-icons/tb";
const HomeServices = () => {
  return (
    <div id="services">
      <Container>
        <div className="text-center">
          <h3 className="text-primary">OUR SERVICES</h3>
          <h1 className="text-white fw-800 fs-1">Amazing Facilities</h1>
          <div id="service-line" className="bg-primary mx-auto mb-5" />
        </div>
        <Row className="mb-5">
          {items.map((s) => (
            <Col sm="3">
              <div className="service-card">
                <Card.Body>
                  <span className="text-primary fs-1">{s.icon}</span>
                  <h2 className="fs-5 text-white my-3 text-truncate">
                    {s.title}
                  </h2>
                  <p className="text-white opacity-75">{s.body}</p>
                  <Button variant="primary text-white mt-3 shadow-lg rounded-1">
                    <FaArrowAltCircleRight />
                  </Button>
                </Card.Body>
              </div>
            </Col>
          ))}
        </Row>
        {/* <Row>
          {records.map((s) => (
            <Col sm="3">
              <div className="d-flex">
                <span className="service-icon text-primary">{s.icon}</span>
                <div className="ms-3">
                  <h1 className="fw-900 text-white mb-0">
                    {s.title}
                    <span className="text-primary font-14 ms-2 m-auto">+</span>
                  </h1>
                  <p className="text-white opacity-75">{s.body}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row> */}
      </Container>
    </div>
  );
};

const items = [
  {
    title: "Banking & Financial Services",
    body: "RALLY TECHNOLOGIES offers innovative and custom technology solutions to local and global banks and financial services providers. We impart the competitive edge to each client’s business, to keep them ahead of competition and help them to provide best-in-the-class services to their customers.",
    icon: <RiBankLine />,
  },
  {
    title: "Healthcare & Pharma",
    body: "With the exponential growth of the Life Sciences industry the challenges of time-to-market, changing commercial business models, patent expiry, track-and-trace, and regulatory enforcement, needs to be met adequately.",
    icon: <RiHealthBookLine />,
  },
  {
    title: "Government",
    body: "RALLY TECHNOLOGIES offers affordable, reliable and value-driven solutions and services to the federal, state, and local governments.",
    icon: <RiGovernmentLine />,
  },
  {
    title: "Retails",
    body: "The global retail industry has moved from the predominance of brick-and-mortar establishment to completely database driven online presence. First, the ecommerce and later mcommerce have redefined the movement and direction of the retail sector, across the globe.",
    icon: <AiOutlineCustomerService />,
  },
];

const records = [
  {
    title: "000",
    body: "Happy Customers",
    icon: <AiOutlineBulb />,
  },
  {
    title: "000",
    body: "Winning Awards",
    icon: <AiOutlineTrophy />,
  },
  {
    title: "000",
    body: "Industries Served",
    icon: <TbBuildingFactory />,
  },
  {
    title: "000",
    body: "Project Completed",
    icon: <BsBookmarkCheck />,
  },
];

export default HomeServices;
