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
    setCompanyInput,
    companyInput,
    setCustomerTypeInput,
    customerTypeInput,
    setEmployeesInput,
    employeesInput,
    setNameInput,
    nameInput,
    setPhoneInput,
    phoneInput,
    setZipCodeInput,
    zipCodeInput,
    blockForm,
    showAlert,
    setCustomerTypeInputStyle,
    customerTypeInputStyle,
    formErrors,
  } = useContactForm();

  const [focused, setFocused] = useState(false);

  const { classes } = useStyles({
    floating:
      (nameInput.trim().length &&
        phoneInput.trim().length &&
        employeesInput &&
        emailInput.trim().length &&
        companyInput.trim().length &&
        zipCodeInput.trim().length &&
        customerTypeInput.trim().length !== 0) ||
      focused,
  });

  return (
    <section className="bartlp--contactForm">
      <a className="anchor" id="form"></a>
      <article>
        <div
          className="head-container"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h2>Je demande ma cantine 2.0</h2>
          <p>
            Chez Bart Cantine digitale, nous souhaitons rendre la livraison de
            repas en entreprise plus équitable pour tout le monde :
            restaurateurs, utilisateurs et livreurs. Pour cela, nous avons créé
            une cantine d'entreprise 2.0 respectueuse de l'environnement, avec
            une offre clé en main attractive.
          </p>
        </div>
        <form>
          <div className="bartlp--contactForm-fields">
            <div className="bartlp--contactForm-fields-container-1">
              <div className="bartlp--contactForm-fields-container-1-block-1">
                <button
                  className={`bartlp--contactForm-fields-container-1-block-1-customer-1 ${customerTypeInputStyle}`}
                  value="Responsable de la vie de bureau"
                  type="button"
                  disabled={blockForm}
                  onClick={() =>
                    setCustomerTypeInput("Responsable de la vie de bureau")
                  }
                >
                  JE SUIS RESPONSABLE DE LA VIE DE BUREAU
                </button>
                <button
                  className={`bartlp--contactForm-fields-container-1-block-1-customer-2 ${customerTypeInputStyle}`}
                  value="Employé"
                  type="button"
                  disabled={blockForm}
                  onClick={() => setCustomerTypeInput("Employé")}
                >
                  JE SUIS EMPLOYÉ
                </button>
              </div>
              <div className="bartlp--contactForm-fields-container-1-block-2">
                {formErrors.type && (
                  <p className="text-danger">{formErrors.type}</p>
                )}
              </div>
            </div>
            <div className="bartlp--contactForm-fields-container-2">
              <div className="bartlp--contactForm-fields-container-2-left">
                <div className="form-field">
                  <TextInput
                    label="Nom et Prénom"
                    placeholder="Votre nom et prénom"
                    required
                    classNames={classes}
                    value={nameInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setNameInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                  {formErrors.nom && (
                    <p className="text-danger">{formErrors.nom}</p>
                  )}
                </div>

                <div className="form-field">
                  <TextInput
                    label="Téléphone"
                    placeholder="Votre numéro de téléphone"
                    required
                    classNames={classes}
                    value={phoneInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                  {formErrors.telephone && (
                    <p className="text-danger">{formErrors.telephone}</p>
                  )}
                </div>
                <div className="form-field">
                  <TextInput
                    label="Nombre d’employés"
                    placeholder="Nombre d’employés"
                    required
                    classNames={classes}
                    value={employeesInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setEmployeesInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                  {formErrors.nbEmployes && (
                    <p className="text-danger">{formErrors.nbEmployes}</p>
                  )}
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
                  {formErrors.email && (
                    <p className="text-danger">{formErrors.email}</p>
                  )}
                </div>
                <div className="form-field">
                  <TextInput
                    label="Entreprise"
                    placeholder="Nom de votre entreprise"
                    required
                    classNames={classes}
                    value={companyInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setCompanyInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                  {formErrors.entreprise && (
                    <p className="text-danger">{formErrors.entreprise}</p>
                  )}
                </div>
                <div className="form-field">
                  <TextInput
                    label="Code postal entreprise"
                    placeholder="Code postal de votre entreprise"
                    required
                    classNames={classes}
                    value={zipCodeInput}
                    disabled={blockForm}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => setZipCodeInput(e.target.value)}
                    mt="md"
                    autoComplete="nope"
                  />
                  {formErrors.codePostal && (
                    <p className="text-danger">{formErrors.codePostal}</p>
                  )}
                </div>
                <div className="form-field"></div>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <button
              type="submit"
              className="submit-button"
              disabled={blockForm}
              onClick={(e) => handleSubmit(e)}
            >
              Rejoignez le mouvement !
            </button>
            {showAlert && (
              <div className="text-valid">
                <p>
                  Votre message a bien été envoyé, vous aurez une réponse d'ici
                  peu. 👍
                </p>
              </div>
            )}
          </div>
        </form>
      </article>
    </section>
  );
};

export default ContactForm;
