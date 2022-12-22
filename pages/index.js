import HomeBanner from "../components/banner";
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import HeaderTopBar from "../components/header/topbar";
import ContactComponent from "../components/home/contact";
import HomeServices from "../components/home/services";
import TeamComponent from "../components/home/team";

const IndexPage = () => {
  return (
    <div>
      <HeaderComponent />
      <HomeBanner />
      <HomeServices />
      <ContactComponent />
      {/* <TeamComponent /> */}
      <FooterComponent />
    </div>
  );
};

export default IndexPage;
