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
  Image,
} from "@mantine/core";
import { CardCustomersProps } from "@/types";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(250),
    // height: "300px",
    // width: "315px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "flex-start",
    marginLeft: "auto",
    // margin: "16px",
    // marginRight: "auto",
    borderRadius: theme.radius.lg,
    boxShadow: "none",
    margin: rem(8),
    padding: rem(100),
    [`@media (max-width: ${"835px"})`]: {
      // backgroundColor: theme.colors.orange[6],
      width: "366px",
      height: "286px",
    },
    [`@media (max-width: ${"350px"})`]: {
      // backgroundColor: theme.colors.green[6],
      width: "304px",
      height: "313px",
      margin: rem(23),
    },
  },
  img: {
    paddingTop: rem(10),
    paddingBottom: rem(20),
  },

  content: {
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: "20px",
    // marginTop: theme.spacing.xs,
    // marginTop:rem(10),
    // paddingBottom:rem(10),
    paddingBottom: rem(30),
  },
  name: {
    color: theme.black,
    opacity: 0.7,
    fontWeight: 700,
    paddingBottom: rem(40),
    fontSize: "16px",
    [`@media (max-width: ${"350px"})`]: {
      paddingBottom: rem(20),
    },
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
      <Image
        src={"../assets/images/quotationmark.png"}
        alt={"quotation mark"}
        width={70}
        className={classes.img}
      />
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
    content: "1Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Alexandrus Kasmus",
  },
  {
    content:
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus voluptatem vero quod possimus.",
    name: "Alexandrus Kasmus",
  },
  {
    content:
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus voluptatem vero quod possimus.",
    name: "Alexandrus Kasmus",
  },
  {
    content:
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus voluptatem vero quod possimus.",
    name: "Alexandrus Kasmus",
  },
  {
    content:
      "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus voluptatem vero quod possimus.",
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
        <div className="bartlp--block-6-wrapper">
          <h2>La vérité sort de la bouche des clients</h2>
        </div>
        <Carousel
          slideSize="25%"
          breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: "0%" }]}
          slideGap="0%"
          align="end"
          slidesToScroll={mobile ? 1 : 2}
          className={classes.carousel}
        >
          {slides}
        </Carousel>
        <div className="bartlp--block-6-wrapper">
          <button id="submit-button">Essayer Bart Cantine</button>
        </div>
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
