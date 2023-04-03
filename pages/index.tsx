import { useEffect } from "react";
import {
  Page,
  Menu,
  Block1,
  Block2,
  Block3,
  Block4,
  Block5,
  Block6,
  Block7,
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
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
      <ContactForm />
      <Faq />
      <Footer />
    </Page>
  );
}

export default Home;
