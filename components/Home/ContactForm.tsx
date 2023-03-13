import React, { useState } from "react";
import { useContactForm } from "../../hooks";
import { TextInput, createStyles, rem } from "@mantine/core";

const useStyles = createStyles(
  (theme, { floating }: { floating: boolean }) => ({
    root: {
      position: "relative",
    },

    label: {
      position: "absolute",
      zIndex: 2,
      top: rem(7),
      left: theme.spacing.sm,
      pointerEvents: "none",
      color: floating
        ? theme.colorScheme === "dark"
          ? theme.white
          : theme.black
        : theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition:
        "transform 150ms ease, color 150ms ease, font-size 150ms ease",
      transform: floating
        ? `translate(-${theme.spacing.sm}, ${rem(-28)})`
        : "none",
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
    },

    required: {
      transition: "opacity 150ms ease",
      opacity: floating ? 1 : 0,
    },

    input: {
      "&::placeholder": {
        transition: "color 150ms ease",
        color: !floating ? "transparent" : undefined,
      },
    },
  })
);

const ContactForm = () => {
  const {
    handleSubmit,
    setEmailInput,
    emailInput,
    setSubjectInput,
    subjectInput,
    setInformationInput,
    informationInput,
    blockForm,
    showAlert,
  } = useContactForm();

  const [focused, setFocused] = useState(false);
  const { classes } = useStyles({
    floating: emailInput.trim().length !== 0 || focused,
  });

  return (
    <section className="bartlp--contactForm" id="contact">
      <article>
        <div className="head-container">
          <h2>Je demande ma cantine 2.0</h2>
          <p>
            Livraison offerte et formules exclusives pour ma team. Gratuit, sans
            engagement, et super rapide. Livraison offerte et formules
            exclusives pour ma team. Gratuit, sans engagement, et super rapide.
          </p>
        </div>
        <form>
          <div className="bartlp--contactForm-fields">
            <div className="bartlp--contactForm-fields-container-1">
              <button className="bartlp--contactForm-fields-container-1-customer-1">
                je suis responsable de la vie de bureau
              </button>
              <button className="bartlp--contactForm-fields-container-1-customer-2">
                je suis employé
              </button>
            </div>
            <div className="bartlp--contactForm-fields-container-2">
              <div className="bartlp--contactForm-fields-container-2-left">
                {showAlert && (
                  <div className="form-field alert active">
                    <div>
                      <i className="fas fa-check"></i>
                    </div>
                    <p>
                      Votre message a bien été envoyé et reçu, vous aurez un
                      retour d'ici peu.
                    </p>
                  </div>
                )}
                <div className="form-field">
                  <TextInput
                    label="Nom et Prénom"
                    placeholder="Votre nom et prénom"
                    required
                    classNames={classes}
                    value={emailInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setEmailInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                </div>
                <div className="form-field">
                  <TextInput
                    label="Téléphone"
                    placeholder="Votre numéro de téléphone"
                    required
                    classNames={classes}
                    value={emailInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setEmailInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                </div>
                <div className="form-field">
                  <TextInput
                    label="Nombre d’employés"
                    placeholder="Nombre d’employés"
                    required
                    classNames={classes}
                    value={emailInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setEmailInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                </div>
              </div>

              <div className="bartlp--contactForm-fields-container-2-right">
                <div className="form-field">
                  <TextInput
                    label="Email"
                    placeholder="Votre e-mail"
                    required
                    classNames={classes}
                    value={emailInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setEmailInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                </div>
                <div className="form-field">
                  <TextInput
                    label="Entreprise"
                    placeholder="Nom de votre entreprise"
                    required
                    classNames={classes}
                    value={emailInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setEmailInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                </div>
                <div className="form-field">
                  <TextInput
                    label="Code postal entreprise"
                    placeholder="Code postal de votre entreprise"
                    required
                    classNames={classes}
                    value={emailInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setEmailInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                </div>
                <div className="form-field"></div>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
          <button
            type="submit"
            className="submit-button"
            onClick={(e) => handleSubmit(e)}
          >
            Envoyer <i className="far fa-paper-plane"></i>
          </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ContactForm;
