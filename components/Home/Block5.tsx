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

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "auto",
  },
}));

// interface CardPartnersProps {
//   image: string;
// }

// function Card({ image }: CardPartnersProps) {
//   const { classes } = useStyles();

//   return (
//     <Paper
//       shadow="md"
//       p="xl"
//       radius="md"
//       className={classes.card}
//     />
//   );
// }

const data = [
  "../assets/images/logo-clubmed.png",
  "../assets/images/logo-toucantoco.png",
  "../assets/images/logo-inato.png",
  "../assets/images/logo-actifdigital.png",
];

const Block5 = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item} className={classes.card}>
      <Image src={item} alt="patenaires"/>
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
          slideSize="50%"
          breakpoints={[
            { maxWidth: "sm", slideSize: "100%", slideGap: rem(2) },
          ]}
          slideGap="xl"
          align="start"
          slidesToScroll={mobile ? 1 : 2}
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
