import Head from "next/head";
import HomeBanner from "../components/banner";
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import HeaderTopBar from "../components/header/topbar";
import ContactComponent from "../components/home/contact";
import HomeServices from "../components/home/services";

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Rally Technologies</title>
        <meta
          name="description"
          content="We realize IT Solutions that support you in achieving your ambitions. Think of IT Services that help your primary business process or specific applications within your sector. Please feel free to contact us for a further introduction."
        />
      </Head>
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
