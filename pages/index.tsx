import { useEffect } from "react";
import {
  Page,
  Menu,
  Block1Welcome,
  Block2Presentation,
  Block3Explanation,
  Block4Benefits,
  Block5Partners,
  Block6Testimony,
  Block7Media,
  Faq,
  Footer,
  ContactForm,
} from "../components";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Page>
      <Menu />
      <Block1Welcome />
      <Block2Presentation />
      <Block3Explanation />
      <Block4Benefits />
      <Block5Partners />
      <Block6Testimony />
      <Block7Media />
      <ContactForm />
      <Faq />
      <Footer />
    </Page>
  );
}

export default Home;
