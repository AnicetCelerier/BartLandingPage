import React from "react";
import { useContactForm } from "../../hooks";

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

  return (
    <section className="bartlp--block-4" id="contact">
      <article>
        <h2>Je demande ma cantine 2.0</h2>
        <p>
          Livraison offerte et formules exclusives pour ma team. Gratuit, sans
          engagement, et super rapide. Livraison offerte et formules exclusives
          pour ma team. Gratuit, sans engagement, et super rapide.
        </p>
        <form id="formContact">
          <div className="formContact-left">
            {showAlert && (
              <div className="form-field alert active">
                <div>
                  <i className="fas fa-check"></i>
                </div>
                <p>
                  Votre message a bien été envoyé et reçu, vous aurez un retour
                  d&#146ici peu.
                </p>
              </div>
            )}
            <button>je suis responsable de la vie de bureau</button>
            <div className="form-field">
              <label>NOM & PRÉNOM</label>
              <input
                disabled={blockForm}
                type="name"
                id="name-input"
                required
                placeholder="Votre nom & prénom"
                // value={nameInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>TÉLÉPHONE</label>
              <input
                disabled={blockForm}
                type="email"
                id="email-input"
                required
                placeholder="nom@domain.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>NOMBRE D&#146EMPLOYÉS</label>
              <input
                disabled={blockForm}
                type="email"
                id="email-input"
                required
                placeholder="Nombre d'employés"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
          </div>
          <div className="formContact-right">
            <button>je suis employé</button>
            <div className="form-field">
              <label>Email</label>
              <input
                disabled={blockForm}
                type="email"
                id="email-input"
                required
                placeholder="Votre e-mail"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>ENTREPRISE</label>
              <input
                disabled={blockForm}
                type="company"
                id="company-input"
                required
                placeholder="Nom de votre entreprise"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>CODE POSTAL ENTREPRISE</label>
              <input
                disabled={blockForm}
                type="zipcode"
                id="zipcode-input"
                required
                placeholder="Code postal de votere entreprise"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="form-field">
              <button
                type="submit"
                id="btn-submit"
                onClick={(e) => handleSubmit(e)}
              >
                Envoyer <i className="far fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ContactForm;
