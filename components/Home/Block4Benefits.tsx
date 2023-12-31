import React from "react";

const Block4Benefits = () => {
  return (
    <section className="bartlp--block-4">
      <article>
        <div
          className="head-container"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h2>Les avantages de notre cantine digitale d'entreprise&nbsp;:</h2>
          <p>
            Faites vivre une expérience culinaire unique à vos collaborateurs
            avec les meilleurs plats de vos restaurants préférés, à prix
            abordables et livrés directement à vos bureaux grâce à notre
            livraison en vélo cargo. Bart Cantine, la cantine d'entreprise 2.0
            innovante, économique et respectueuse de l'environnement.
          </p>
        </div>
        <div className="bartlp--block-4-mosaic">
          <div className="bartlp--block-4-mosaic-block-1">
            <div className="bartlp--block-4-mosaic-block-1-container-1">
              <img src="../assets/images/iPhone-13-Pro.png" alt="iphone" />
            </div>
            <div className="bartlp--block-4-mosaic-block-1-container-2">
              <p>
                Une web-app accessible depuis votre ordinateur ou smartphone !
              </p>
            </div>
          </div>
          <div className="bartlp--block-4-mosaic-block-2">
            <div className="bartlp--block-4-mosaic-block-2-container-1">
              <p>
                De nouveaux plats <br /> toutes les semaines
              </p>
            </div>
            <div className="bartlp--block-4-mosaic-block-2-container-2">
              <img src="../assets/images/pattes.png" alt="pattes" />
            </div>
          </div>
          <div className="bartlp--block-4-mosaic-block-3">
            <div className="bartlp--block-4-mosaic-block-3-container-1">
              <img src="../assets/images/savings.png" alt="tirelire" />
            </div>
            <div className="bartlp--block-4-mosaic-block-3-container-2">
              <p>
                Pas de frais cachés ! Vous ne payez que votre plat et les frais
                de livraison à partir de 0,90€.
              </p>
            </div>
          </div>
          <div className="bartlp--block-4-mosaic-block-4">
            <p>Toutes les</p>
            <span id="alteration1">25</span>
            <p>
              Commandes au sein de votre entreprise, 5 plats sont reversés aux
              associations alimentaires.
            </p>
          </div>
          <div className="bartlp--block-4-mosaic-block-5">
            <img src="../assets/images/pizza.png" alt="pizza" />
          </div>
          <div className="bartlp--block-4-mosaic-block-6">
            <div className="bartlp--block-4-mosaic-block-6-container-1">
              <p>Une sélection de plats, d’entrées et de desserts exclusifs</p>
            </div>
            <div className="bartlp--block-4-mosaic-block-6-container-2">
              <img
                src="../assets/images/logo-partners.png"
                alt="logo partenaires"
              />
            </div>
          </div>
          <div className="bartlp--block-4-mosaic-block-7">
            <div className="bartlp--block-4-mosaic-block-7-container-1">
              <p>
                <span id="alteration2">
                  Livraison en <span id="alteration3">circuit court</span>
                </span>
              </p>
            </div>
            <div className="bartlp--block-4-mosaic-block-7-container-2">
              <p>et en vélo cargo par nos livreurs salariés</p>
            </div>
          </div>
        </div>
      </article>
      <div className="button-wrapper">
        <a href="#form">
          <button className="submit-button">Une démo ?</button>
        </a>
      </div>
    </section>
  );
};

export default Block4Benefits;
