import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  BsFillChatRightQuoteFill,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const TeamComponent = () => {
  return (
    <div id="team-container">
      <div id="company">
        <Container>
          <Row>
            {company.map((s) => (
              <Col>
                <img src={s} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div id="team" className="pt-5">
        <img src="./banner-dot-1.png" id="dot-1" />
        <Container>
          <Row>
            <Col sm="4">
              <p className="text-primary fw-700">THE TEAM</p>
              <div className="feature">
                <h2 className="fs-1 fw-800 text-dark">Who are they</h2>
                <p />
              </div>
              <p className="fw-600 text-grey font-18">
                Trusted by more than 5,000 customers
              </p>
              <img src="./quote.png" className="opacity-25" />
            </Col>
            <Col sm="8">
              <Carousel
                prevIcon={<BsArrowLeftShort />}
                nextIcon={<BsArrowRightShort />}
                indicators={false}
              >
                {members.map((s, i) => (
                  <Carousel.Item>
                    <Row className="px-4">
                      <GetMember s={s} />
                      <GetMember s={members.at(i + 1) ?? members[0]} />
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const GetMember = ({ s }) => (
  <Col sm="6">
    <div className="member-card text-center">
      <img src={s.img} />
      <h2 className="title mb-0 mt-4">{s.name}</h2>
      <p className="text-primary fs-6 fw-500 mb-2">{s.role}</p>
      <p className="text-grey opacity-75 mb-3">~{s.subTitle}</p>
      <div className="d-flex justify-content-center mb-5">
        {socials.map((s) => (
          <div
            className="flex-center bg-secondary mx-2 rounded-50 shadow-sm text-white rounded-1"
            style={{
              height: "35px",
              width: "35px",
            }}
          >
            {s.icon}
          </div>
        ))}
      </div>
      <BsFillChatRightQuoteFill id="quote" className="text-primary" />
    </div>
  </Col>
);

const members = [
  {
    name: "Pravin Reddy",
    role: "Director",
    subTitle: "We Belive In Work",
    img: "https://elementor.zozothemes.com/berater/wp-content/uploads/sites/26/2019/07/testimonial5-1.jpg",
  },
  {
    name: "Swarna Latha Reddy",
    role: "Opreational Directort",
    subTitle: "We Belive In Work",
    img: "https://elementor.zozothemes.com/berater/wp-content/uploads/sites/26/2019/07/testimonial4-1.jpg",
  },
];

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
];

const company = [
  "https://elementor.zozothemes.com/berater/wp-content/uploads/sites/26/2021/11/brand-3.png",
  "https://elementor.zozothemes.com/berater/wp-content/uploads/sites/26/2021/11/brand-4.png",
  "https://elementor.zozothemes.com/berater/wp-content/uploads/sites/26/2021/11/brand-5.png",
  "https://elementor.zozothemes.com/berater/wp-content/uploads/sites/26/2021/11/brand-6.png",
  "https://elementor.zozothemes.com/berater/wp-content/uploads/sites/26/2021/11/brand-1.png",
  "https://elementor.zozothemes.com/berater/wp-content/uploads/sites/26/2021/11/brand-2.png",
];

export default TeamComponent;
