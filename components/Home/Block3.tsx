import React from "react";
import Image from "next/image";
// import salad from "assets/images/salad.png"

const Block3 = () => {
  return (
    <section className="bartlp--block-3">
      <article>
        <h1>Comment fonctionne votre cantine d'entreprise 2.0 ?</h1>
        <p>
          Chez Bart Cantine digitale, nous misons sur la qualité et le goût !
          Commandez ou Pré commandez vos repas de la semaine en 3 clics 😍
        </p>
        <div className="bartlp--block-3-mosaic">
          <div className="bartlp--block-3-mosaic-block-1">
            <div className="bartlp--block-3-mosaic-block-1-section-1">
              <h2>Étape 1</h2>
              <p>
                Commandez facilement votre repas auprès de nos partenaires
                locaux avant 11h pour une livraison à 12h30 ou avant 12h pour
                une livraison à 13h30.
              </p>
              <button className="submit-button">Essayez Bart Cantine</button>
              <div className="bartlp--block-3-mosaic-block-1-section-1-cards">
                <ul className="bartlp--block-3-mosaic-block-1-section-1-cards-row-1">
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-1-card-1">
                    <img src="../assets/images/logo-mojo.png" alt="" />
                  </li>
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-1-card-2">
                    <img src="../assets/images/logo-napoligang.png" alt="" />
                  </li>
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-1-card-3">
                    <img src="../assets/images/logo-encoreburger.png" alt="" />
                  </li>
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-1-card-4">
                    <img src="../assets/images/logo-mersea.png" alt="" />
                  </li>
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-1-card-5">
                    <img src="../assets/images/logo-whatthefoc.png" alt="" />
                  </li>
                </ul>
                <ul className="bartlp--block-3-mosaic-block-1-section-1-cards-row-2">
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-2-card-1">
                    <img src="../assets/images/logo-comokitchen.png" alt="" />
                  </li>
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-2-card-2">
                    <img src="../assets/images/logo-pichpich.png" alt="" />
                  </li>
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-2-card-3">
                    <img src="../assets/images/logo-mamanissa.png" alt="" />
                  </li>
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-2-card-4">
                    <img src="../assets/images/logo-monthai.png" alt="" />
                  </li>
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-2-card-5">
                    <img src="../assets/images/logo-willsdeli.png" alt="" />
                  </li>
                  <li className="bartlp--block-3-mosaic-block-1-section-1-cards-row-2-card-6">
                    <img src="../assets/images/logo-coquillettes.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="bartlp--block-3-mosaic-block-1-section-2">
              <div className="bartlp--block-3-mosaic-block-1-section-2-row-1"></div>
              <div className="bartlp--block-3-mosaic-block-1-section-2-row-2"></div>
            </div>
          </div>
          <div className="bartlp--block-3-mosaic-block-2">
            <h2>Étape 2</h2>
            <p>Séléctionnez vos plats, entreés et desserts.</p>
            {/* <Image src="/assets/images/salad.png" alt="salade" height={1000} width={1000}/> */}
          </div>
          <div className="bartlp--block-3-mosaic-block-3">
            <div className="bartlp--block-3-mosaic-block-3-section-1">
              <h2>Étape 3</h2>
              <p>Payez avec ou sans tickets restos</p>
            </div>
            <div className="bartlp--block-3-mosaic-block-3-section-2">
              <div className="">visa</div>
              <div className="">mastercard</div>
              <div className="">applepay</div>
              <div className="">paypal</div>
              <div className="">stripe</div>
              <div className="">discover</div>
              <div className="">skrill</div>
              <div className="">item8</div>
            </div>
          </div>
          <div className="bartlp--block-3-mosaic-block-4">
            <div className="bartlp--block-3-mosaic-block-4-section-1">
              <h2>Étape 4</h2>
              <p>Ding dong c’est arrivé ! Et pour tout le monde.</p>
              <button className="submit-button">demander la cantine</button>
            </div>
            <div className="bartlp--block-3-mosaic-block-4-section-2"></div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Block3;
