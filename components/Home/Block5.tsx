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
import { ClassNames } from "@emotion/react";
import { CardPartnersProps } from "@/types";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.lg,
    margin: "16px",
    width: "100%",
    boxShadow:
      "0px 0px 2px rgba(103, 110, 144, 0.1), 0px 1px 2px rgba(103, 110, 144, 0.05), 0px 2px 4px rgba(103, 110, 144, 0.08), 0px 6px 8px rgba(103, 110, 144, 0.05), 0px 16px 16px rgba(103, 110, 144, 0.04)",
  },
  img: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
  carousel: {
    paddingRight: rem(10),
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
    image: "../assets/images/logo-clubmed.png",
    alt: "Club Med",
  },
  {
    image: "../assets/images/logo-toucantoco.png",
    alt: "Toucan Toco",
  },
  {
    image: "../assets/images/logo-inato.png",
    alt: "Inato",
  },
  {
    image: "../assets/images/logo-actifdigital.png",
    alt: "Actif Digital",
  },
];

const Block5 = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card image={item.image} alt={item.alt} />
    </Carousel.Slide>
  ));

  return (
    <section className="bartlp--block-5">
      <article>
        <h2>Ils nous font confiance</h2>
        <p>
          Livraison offerte et formules exclusives pour ma team. Gratuit, sans
          engagement, et super rapide. Livraison offerte et formules exclusives
          pour ma team. Gratuit, sans engagement, et super rapide.
        </p>
        <Carousel
          slideSize="25%"
          breakpoints={[
            { maxWidth: "sm", slideSize: "100%", slideGap: rem(2) },
          ]}
          slideGap="xl"
          align="end"
          slidesToScroll={mobile ? 1 : 2}
          className={classes.carousel}
        >
          {slides}
        </Carousel>
        <button id="submit-button">demander la cantine</button>
      </article>
    </section>
  );
};

export default Block5;

// const Block5 = () => {
//   return (
//     <section className="bartlp--block-5">
//       <article>
//         <h2>Ils nous font confiance</h2>
//         <p>
//           Livraison offerte et formules exclusives pour ma team. Gratuit, sans
//           engagement, et super rapide. Livraison offerte et formules exclusives
//           pour ma team. Gratuit, sans engagement, et super rapide.
//         </p>
//         <ul>
//           <li>
//             <img src="../assets/images/logo-clubmed.png" alt="" />
//           </li>
//           <li>
//             <img src="../assets/images/logo-toucantoco.png" alt="" />
//           </li>
//           <li>
//             <img src="../assets/images/logo-inato.png" alt="" />
//           </li>
//           <li>
//             <img src="../assets/images/logo-actifdigital.png" alt="" />
//           </li>
//         </ul>
//         <button id="submit-button">demander la cantine</button>
//       </article>
//     </section>
//   );
// };

// export default Block5;
