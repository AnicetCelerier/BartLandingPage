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
    height: "286px",
    width: "366px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between",
    marginLeft: "none",
    borderRadius: theme.radius.lg,
    boxShadow: "none",
    paddingRight: "2px",
    margin: rem(8),
    boxSizing: "content-box",
    [`@media (max-width: ${"835px"})`]: {
      width: "366px",
      height: "286px",
    },
    [`@media (max-width: ${"390px"})`]: {
      width: "304px",
      height: "313px",
      margin: rem(19),
    },
  },
  img: {
    paddingTop: rem(10),
    paddingBottom: rem(20),
  },
  content: {
    fontWeight: 400,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: "20px",
  },
  name: {
    color: theme.black,
    opacity: 0.7,
    fontWeight: 700,
    fontSize: "16px",
    [`@media (max-width: ${"390px"})`]: {
      paddingBottom: rem(20),
    },
  },
  carousel: {},
}));

function Card({ name, content }: CardCustomersProps) {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
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
      </div>
      <div>
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
      "J'ai commandé un bowl chez Med’eat avec Bart cantine et j'ai été agréablement surpris par la qualité des ingrédients. C'était frais, savoureux et copieux !",
    name: "Marc-Antoine A.",
  },
  {
    content:
      "Je suis ravi d'avoir découvert Bart cantine, non seulement les plats sont délicieux, mais ils sont également moins chers que sur les autres plateformes de livraison.",
    name: "Aurore F.",
  },
  {
    content:
      "La livraison a été très rapide et la commande est arrivée chaude et bien emballée. Je recommande vivement Bart cantine pour un déjeuner sans stress !",
    name: "Céline P.",
  },
  {
    content:
      "J'apprécie le côté éthique de Bart et j'aime soutenir les entreprises qui ont une vision durable. En commandant chez Bart cantine, je sais que je fais un choix éthique et responsable.",
    name: "Lisa C.",
  },
  {
    content:
      "La diversité de l'offre chez Bart cantine est incroyable. Il y a tellement de choix pour tous les goûts et régimes alimentaires, je n'arrive jamais à me décider !",
    name: "Pierre-Luc R.",
  },
  {
    content:
      "Les plats sont préparés avec soin et ça se voit. Les couleurs sont vives et les saveurs sont parfaitement équilibrées. J'ai été conquis dès la première bouchée!",
    name: "Meryl H.",
  },
  {
    content:
      "Le prix est vraiment attractif pour la qualité des plats et la livraison rapide. Je ne regrette pas d'avoir essayé Bart cantine et je compte bien y revenir!",
    name: "Annaëlle M.",
  },
  {
    content:
      "J'ai commandé une pita de La Frairie sur Bart cantine et j'ai été impressionné par la générosité des ingrédients. C'était tellement bon que j'en ai recommandé pour le lendemain !",
    name: "Mathieu S.",
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
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          className={classes.carousel}
        >
          {slides}
        </Carousel>
        <div className="bartlp--block-6-wrapper">
          <div className="button-wrapper">
            <a href="#form">
              <button className="submit-button">Essayer Bart Cantine</button>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Block6;
