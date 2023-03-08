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

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  content: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
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
}));

interface CardCustomersProps {
  content: string;
  name: string;
}

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
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.content}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
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
