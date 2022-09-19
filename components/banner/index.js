import { Button, Container } from "react-bootstrap";
import BannerBackground from "./bannerBackground";

const HomeBanner = () => {
  return (
    <div id="home-banner">
      <BannerBackground />
      <Container className="content">
        <div className="content-inner" id="banner-content">
          <h2 id="sub-title">Your business and much more</h2>
          <h1 id="title" className="fw-bolder">
            We're Leading In <br />
            the <span className="text-primary">Marketing</span>
          </h1>
          <p className="text-grey my-4">
            We realize IT Solutions that support you in achieving your
            ambitions. Think of IT Services that help your primary business
            process or specific applications within your sector. Please feel
            free to contact us for a further introduction.
          </p>
          <Button variant="primary  header-btn rounded-1 shadow-sm">
            Learn More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
