import React from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { CardCustomersProps } from "@/types";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    marginLeft: "auto",
    margin: "16px",
    marginRight: "auto",
    borderRadius: theme.radius.lg,
    boxShadow:
      "0px 0px 2px rgba(103, 110, 144, 0.1), 0px 1px 2px rgba(103, 110, 144, 0.05), 0px 2px 4px rgba(103, 110, 144, 0.08), 0px 6px 8px rgba(103, 110, 144, 0.05), 0px 16px 16px rgba(103, 110, 144, 0.04)",
  },
  content: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },
  name: {
    color: theme.black,
    opacity: 0.7,
    fontWeight: 700,
  },
  carousel: {},
}));

// interface CardCustomersProps {
//   content: string;
//   name: string;
// }

function Card({ name, content }: CardCustomersProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      // sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.content} size="xs">
          {content}
        </Text>
        <Title order={3} className={classes.name}>
          {name}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus voluptatem vero quod possimus.",
    name: "Alexandrus Kasmus",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus voluptatem vero quod possimus.",
    name: "Alexandrus Kasmus",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus voluptatem vero quod possimus.",
    name: "Alexandrus Kasmus",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus voluptatem vero quod possimus.",
    name: "Alexandrus Kasmus",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus voluptatem vero quod possimus.",
    name: "Sergio Pendejo",
  },
];

const Block6 = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.content}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <section className="bartlp--block-6">
      <article>
        <h2>La vérité sort de la bouche des clients</h2>
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
        <button id="submit-button">Essayer Bart Cantine</button>
      </article>
    </section>
  );
};

export default Block6;

// const Block6 = () => {
//   return (
//     <section className="bartlp--block-6">
//       <article>
//         <h2>La vérité sort de la bouche des clients</h2>
//         <ul>
//           <li>
//             <p>
//               Tous les joursTous les joursTous les joursTous les joursTous les
//               joursjoursTous les joursTous les jours
//             </p>
//             <span>Nom prénom de la personne </span>
//           </li>
//           <li>
//             <p>
//               Tous les joursTous les joursTous les joursTous les joursTous les
//               joursjoursTous les joursTous les jours
//             </p>
//             <span>Nom prénom de la personne </span>
//           </li>
//           <li>
//             <p>
//               Tous les joursTous les joursTous les joursTous les joursTous les
//               joursjoursTous les joursTous les jours
//             </p>
//             <span>Nom prénom de la personne </span>
//           </li>
//         </ul>
//         <button id="submit-button">Essayer Bart Cantine</button>
//       </article>
//     </section>
//   );
// };

// export default Block6;
