import { Col, Container, Row } from "react-bootstrap";
import { FiMap, FiMail } from "react-icons/fi";
import { BiSupport, BiMapPin } from "react-icons/bi";
const HeaderTopBar = () => {
  const items = [
    {
      icon: <BiMapPin />,
      value: "13085 Morris Rd, Unit, ALPHARETTA GA 30004",
      href: "https://maps.google.com/maps?ll=34.098493,-84.259139&z=13&t=m&hl=en-US&gl=US&mapclient=embed&q=13085%20Morris%20Rd%20%23%20Alpharetta%2C%20GA%2030004%20USA",
    },
    {
      icon: <FiMail />,
      value: "info@rallytechnologies.net",
      href: "mailto:info@rallytechnologies.net",
      className: "flex-grow-1",
    },
    {
      icon: <BiSupport />,
      href: "tel:847-777-9638",
      value: "847-777-9638",
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
                <a
                  target="_blank"
                  href={s.href}
                  className="text-decoration-none mb-0 ms-2 font-14 text-secondary"
                >
                  {s.value}
                </a>
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
