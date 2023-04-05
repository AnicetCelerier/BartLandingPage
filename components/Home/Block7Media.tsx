import React from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  useMantineTheme,
  rem,
  Image,
} from "@mantine/core";
import { CardPartnersProps } from "@/types";
import useBlock7 from "@/hooks/useBlock7";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(250),
    widht: rem(200),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.lg,
    margin: rem(8),
    boxShadow:
      "0px 0px 2px rgba(103, 110, 144, 0.1), 0px 1px 2px rgba(103, 110, 144, 0.05), 0px 2px 4px rgba(103, 110, 144, 0.08), 0px 6px 8px rgba(103, 110, 144, 0.05), 0px 16px 16px rgba(103, 110, 144, 0.04)",
    [`@media (max-width: ${"835px"})`]: {
      width: "366px",
      height: "286px",
    },
    [`@media (max-width: ${"350px"})`]: {
      width: "304px",
      height: "313px",
      margin: rem(23),
    },
  },
  img: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
  carousel: {
    paddingRight: "0px",
    width: "100vw",
  },
}));

const Card = ({ image, alt }: CardPartnersProps) => {
  const { classes } = useStyles();

  return (
    <Paper p="xl" radius="lg" className={classes.card}>
      <Image src={image} alt={alt} className={classes.img} />
    </Paper>
  );
};

const data = [
  {
    image: "../assets/images/logo-bfmbusiness.png",
    alt: "BFM Business",
  },
  {
    image: "../assets/images/logo-larevuedescomptoirs.png",
    alt: "La Revue des Comptoirs",
  },
  {
    image: "../assets/images/logo-bsmart.png",
    alt: "B Smart",
  },
];

const Block7Media = () => {
  const { classes } = useStyles();
  const { customCarousel } = useBlock7();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card image={item.image} alt={item.alt} />
    </Carousel.Slide>
  ));

  return (
    <section className="bartlp--block-7">
      <article>
        <div
          className="head-container"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h2>...Mais pas que</h2>
          <p>Ils parlent de nous</p>
        </div>
        <Carousel
          slideSize="25%"
          breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: "0%" }]}
          slideGap="0%"
          align={customCarousel.alignement}
          slidesToScroll={mobile ? 1 : 2}
          className={classes.carousel}
          withControls={customCarousel.fix}
          draggable={customCarousel.fix}
        >
          {slides}
        </Carousel>
        <div className="button-wrapper">
          <a href="#form">
            <button className="submit-button">Essayez Bart Cantine</button>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Block7Media;
