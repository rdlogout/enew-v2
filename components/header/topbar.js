import { Col, Container, Row } from "react-bootstrap";
import { FiMap, FiMail } from "react-icons/fi";
import { BiSupport, BiMapPin } from "react-icons/bi";
const HeaderTopBar = () => {
  const items = [
    {
      icon: <BiMapPin />,
      value: "5457 Twin Knolls Road Suite 300, Columbia",
    },
    {
      icon: <FiMail />,
      value: "info@enewvision.com",
      className: "flex-grow-1",
    },
    {
      icon: <BiSupport />,
      value: "410-988-2355",
    },
  ];

  return (
    <div className="header-top py-2 border-bottom border-light-grey border-opacity-75">
      <Container className="py-1">
        <Row className="gx-5">
          {items.map((s) => (
            <Col sm={`auto ${s.className || ""}`}>
              <div className="d-flex align-items-center">
                <span className="text-primary">{s.icon}</span>
                <p className="mb-0 ms-2 font-14">{s.value}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTopBar;
``;
