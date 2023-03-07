import {
  Page,
  Menu,
  Block1,
  Block2,
  Block3,
  Block4,
  Block5,
  Block6,
  Faq,
  Footer,
  ContactForm,
} from "../components";

function Home() {
  return (
    <Page>
      <Menu />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <ContactForm />
      <Faq/>
      <Footer />
    </Page>
  );
}

export default Home;
