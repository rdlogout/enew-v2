import { Button, Container, Nav, Navbar } from "react-bootstrap";
import HeaderTopBar from "./topbar";
import { FaArrowAltCircleRight } from "react-icons/fa";
const HeaderComponent = () => {
  return (
    <div id="header">
      <HeaderTopBar />
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Button variant="primary header-btn">
            Contact Us <FaArrowAltCircleRight />
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
