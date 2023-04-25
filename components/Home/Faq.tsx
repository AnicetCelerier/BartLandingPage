import React from "react";
import { Container, Title, Accordion, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    fontSize: "90px",
    [`@media (max-width: ${"835px"})`]: {
      fontSize: "64px",
    },
    [`@media (max-width: ${"350px"})`]: {
      fontSize: "54px",
    },
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${theme.colors.customBlue[0]}`,
  },
  question: {
    fontWeight: 400,
    lineHeight: 1.2,
    fontSize: "20px",
    color: theme.colors.customBlue[0],
  },
  answer: {
    fontWeight: 400,
    lineHeight: "30px",
    fontSize: "18px",
    color: theme.colors.customBlue[1],
  },
}));

const Faq = () => {
  const { classes } = useStyles();
  return (
    <section className="bartlp--faq">
      <article>
        <Container size="sm" className={classes.wrapper}>
          <Title
            align="center"
            order={2}
            className={classes.title}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            FAQ
          </Title>
          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control className={classes.question}>
                Comment passer commande ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                1 - Sélectionnez votre plat parmi une offre variée 🐟🌯🥗 <br />{" "}
                2- Complétez votre panier avec les entrées et desserts proposés
                par le restaurant choisi <br />
                3- Choisissez votre créneaux de livraison : commander avant 11
                pour être livré à12h30 ou commander avant 12h pour une livraison
                à 13h30
                <br />
                4- Valider votre panier. Vous y trouverez le récapitulatif de
                votre commande avec la date, le créneau horaire et l’adresse de
                livraison.Pour le paiement, tout se passe à cette dernière étape
                en choisissant le mode de règlement désiré : par carte bancaire
                ou TR.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control className={classes.question}>
                Suis-je obligé de commander uniquement un plat ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Non! Une fois votre plat sélectionné, vous pouvez completer
                votre commande avec des entrées et des desserts du restaurant
                proposant votre plat.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control className={classes.question}>
                Quels sont les moyens de paiement acceptés ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Chez Bart, vous pouvez payer par CB ou en Ticket restaurant.
                Nous acceptons la majorité des cartes TR: Swile, Edenred, Bimpl,
                Appetiz. Lors de votre commande, assurez vous que le restaurant
                proposant le plat accepte votre carte Ticket restaurant. Vous
                retrouverez cette information à la page de sélection de votre
                plat!
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control className={classes.question}>
                A combien s'élèvent les frais de livraison ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Les frais de livraison s’affichent dès 0,90€ pour toutes
                pre-commandes. Si vous commandez pour une livraison le jour même
                la livraison est à 1,90€
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control className={classes.question}>
                Comment suis-je prévenu de l’arrivée du livreur ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Pas de panique ! Vous recevrez un email lorsque vos commandes
                ont été déposé à l’accueil de vos bureaux.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="teub">
              <Accordion.Control className={classes.question}>
                Quels sont vos créneaux de livraison ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Pour toutes commandes effectuées avant 11h, vous serez livré à
                12h30. Pour les commandes effectuées avant 12h, vous serez livré
                à 13h30.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="teub2">
              <Accordion.Control className={classes.question}>
                Je souhaite modifier ma commande (créneau horaire, produits
                commandés), comment faire ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Pour cela, il vous suffit d’annuler votre commande et de passer
                votre nouvelle commande. Les annulations de commande peuvent se
                faire jusqu’à la veille du jour de livraison (jour ouvré, avant
                minuit)
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="teub3">
              <Accordion.Control className={classes.question}>
                Existe-t-il un montant minimum de commande ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Pas de minimum de commande! Chez Bart, on sert tous les
                gourmands!
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="teub4">
              <Accordion.Control className={classes.question}>
                Comment recevoir ma facture ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Votre reçu de paiement vous est envoyée par mail lors de votre
                commande. Il est également disponible, sur votre compte client
                dans “Commandes”.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </article>
    </section>
  );
};

export default Faq;
