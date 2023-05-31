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
            <Accordion.Item
              className={classes.item}
              value="Comment passer commande ?"
            >
              <Accordion.Control className={classes.question}>
                Comment passer commande ?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                1 - Sélectionnez votre plat parmi une offre variée. 🐟🌯🥗{" "}
                <br /> 2 - Complétez votre panier avec les entrées et desserts
                proposés par le restaurant choisi. <br />
                3 - Choisissez votre créneau de livraison : commandez avant 11
                pour être livré à 12h30 ou commander avant 12h pour une
                livraison à 13h30.
                <br />4 - Valider votre panier. Vous y trouverez le
                récapitulatif de votre commande avec la date, le créneau horaire
                et l’adresse de livraison. Pour le paiement, tout se passe à
                cette dernière étape en choisissant le mode de règlement
                désiré&nbsp;: par carte bancaire ou ticket restaurant.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              className={classes.item}
              value="Suis-je obligé de commander uniquement un plat ?"
            >
              <Accordion.Control className={classes.question}>
                Suis-je obligé de commander uniquement un plat&nbsp;?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Non ! Une fois votre plat sélectionné, vous pouvez compléter
                votre commande avec des entrées et des desserts du restaurant
                proposant votre plat.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              className={classes.item}
              value="Quels sont les moyens de paiement acceptés ?"
            >
              <Accordion.Control className={classes.question}>
                Quels sont les moyens de paiement acceptés&nbsp;?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Chez Bart, vous pouvez payer par CB ou en Ticket restaurant.
                Nous acceptons la majorité des cartes TR: Swile, Edenred, Bimpl,
                Appetiz. Lors de votre commande, assurez vous que le restaurant
                proposant le plat accepte votre carte Ticket restaurant. Vous
                retrouverez cette information à la page de sélection de votre
                plat&nbsp;!
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              className={classes.item}
              value="A combien s'élèvent les frais de livraison ?"
            >
              <Accordion.Control className={classes.question}>
                A combien s'élèvent les frais de livraison&nbsp;?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Les frais de livraison s’affichent dès 0,90€ pour toute
                pré-commande. Si vous commandez pour une livraison le jour même,
                la livraison est à 1,90€
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              className={classes.item}
              value="Comment suis-je prévenu de l’arrivée du livreur ?"
            >
              <Accordion.Control className={classes.question}>
                Comment suis-je prévenu de l’arrivée du livreur&nbsp;?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Pas de panique ! Vous recevrez un email lorsque vos commandes
                ont été déposées à l’accueil de vos bureaux.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              className={classes.item}
              value="Quels sont vos créneaux de livraison ?"
            >
              <Accordion.Control className={classes.question}>
                Quels sont vos créneaux de livraison&nbsp;?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Pour toute commande effectuée avant 11h, vous serez livré à
                12h30. Pour les commandes effectuées avant 12h, vous serez livré
                à 13h30.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              className={classes.item}
              value="Je souhaite modifier ma commande (créneau horaire, produits
                commandés), comment faire ?"
            >
              <Accordion.Control className={classes.question}>
                Je souhaite modifier ma commande (créneau horaire, produits
                commandés), comment faire&nbsp;?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Pour cela, il vous suffit d’annuler votre commande et de passer
                votre nouvelle commande. Les annulations de commande peuvent se
                faire jusqu’à la veille du jour de livraison (jour ouvré, avant
                minuit). Sinon, n'hésitez pas à contacter notre service client.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              className={classes.item}
              value="Existe-t-il un montant minimum de commande ?"
            >
              <Accordion.Control className={classes.question}>
                Existe-t-il un montant minimum de commande&nbsp;?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Pas de minimum de commande! Chez Bart, on sert tous les
                gourmands&nbsp;!
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              className={classes.item}
              value="Comment recevoir ma facture ?"
            >
              <Accordion.Control className={classes.question}>
                Comment recevoir ma facture&nbsp;?
              </Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                Votre reçu de paiement vous est envoyé par mail lors de votre
                commande. Il est également disponible, sur votre compte client
                dans “ Commandes ”&nbsp;.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </article>
    </section>
  );
};

export default Faq;
