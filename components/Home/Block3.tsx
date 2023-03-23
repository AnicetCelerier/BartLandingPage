import React from "react";
import Image from "next/image";
import InfiniteLooper from "./InfiniteLooper";
// import salad from "assets/images/salad.png"

const Block3 = () => {
  return (
    <section className="bartlp--block-3">
      <article>
        <div
          className="head-container"
          data-aos="fade-down"
          // data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2>Comment fonctionne votre cantine d'entreprise 2.0 ?</h2>
          <p>
            Chez Bart Cantine digitale, nous misons sur la qualité et le goût !
            Commandez ou Pré commandez vos repas de la semaine en 3 clics 😍
          </p>
        </div>
        <div className="bartlp--block-3-mosaic">
          <div className="bartlp--block-3-mosaic-block-1">
            <div className="bartlp--block-3-mosaic-block-1-container-1">
              <h3>Étape 1</h3>
              <p>
                Commandez facilement votre repas auprès de nos partenaires
                locaux avant 11h pour une livraison à 12h30 ou avant 12h pour
                une livraison à 13h30.
              </p>
              <a href="#form">
              <button className="submit-button">Essayez Bart Cantine</button>
              </a>
            </div>
            <div className="bartlp--block-3-mosaic-block-1-container-2">
              <InfiniteLooper speed={100} direction={"left"}>
                <div className="bartlp--block-3-mosaic-block-1-container-2-row-1">
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img src="../assets/images/logo-mojo.png" alt="logo mojo" />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-napoligang.png"
                      alt="logo napoligang"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-encoreburger.png"
                      alt="logo encoreburger"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-mersea.png"
                      alt="logo mersea"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-whatthefoc.png"
                      alt="logo whatthefoc"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-comokitchen.png"
                      alt="logo comokitchen"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-pichpich.png"
                      alt="logo pichpich"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-mamanissa.png"
                      alt="logo mamanissa"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-monthai.png"
                      alt="logo monthai"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-willsdeli.png"
                      alt="logo willsdeli"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-1-card">
                    <img
                      src="../assets/images/logo-coquillettes.png"
                      alt="logo coquillettes"
                    />
                  </div>
                </div>
              </InfiniteLooper>
              <InfiniteLooper speed={100} direction={"right"}>
                <div className="bartlp--block-3-mosaic-block-1-container-2-row-2">
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-comokitchen.png"
                      alt="logo comokitchen"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-pichpich.png"
                      alt="logo pichpich"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-mamanissa.png"
                      alt="logo mamanissa"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-monthai.png"
                      alt="logo monthai"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-willsdeli.png"
                      alt="logo willsdeli"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-coquillettes.png"
                      alt="logo coquillettes"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img src="../assets/images/logo-mojo.png" alt="logo mojo" />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-napoligang.png"
                      alt="logo napoligang"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-encoreburger.png"
                      alt="logo encoreburger"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-mersea.png"
                      alt="logo mersea"
                    />
                  </div>
                  <div className="bartlp--block-3-mosaic-block-1-container-2-row-2-card">
                    <img
                      src="../assets/images/logo-whatthefoc.png"
                      alt="logo whatthefoc"
                    />
                  </div>
                </div>
              </InfiniteLooper>
            </div>
          </div>
          <div className="bartlp--block-3-mosaic-block-2">
            <div className="bartlp--block-3-mosaic-block-2-container-1">
              <h3>Étape 2</h3>
              <p>
                Composez votre déjeuner en ajoutant des entrées et des desserts
                de votre choix.
              </p>
            </div>
            <div className="bartlp--block-3-mosaic-block-2-container-2">
              <img src="../assets/images/salad.png" alt="salade" />
            </div>
          </div>
          <div className="bartlp--block-3-mosaic-block-3">
            <div className="bartlp--block-3-mosaic-block-3-container-1">
              <h3>Étape 3</h3>
              <p>Payez en toute flexibilité par CB ou tickets restaurant.</p>
            </div>
            <div className="bartlp--block-3-mosaic-block-3-container-2">
              <ul>
                <li className="">
                  <img src="../assets/images/logo-visa.png" alt="logo visa" />
                </li>
                <li className="">
                  <img
                    src="../assets/images/logo-mastercard.png"
                    alt="logo mastercard"
                  />
                </li>
                <li className="">
                  <img
                    src="../assets/images/logo-applepay.png"
                    alt="logo applepay"
                  />
                </li>
                <li className="">
                  <img
                    src="../assets/images/logo-paypal.png"
                    alt="logo paypal"
                  />
                </li>
              </ul>
              <ul>
                <li className="">
                  <img
                    src="../assets/images/logo-stripe.png"
                    alt="logo stripe"
                  />
                </li>
                <li className="">
                  <img
                    src="../assets/images/logo-discover.png"
                    alt="logo discover"
                  />
                </li>
                <li className="">
                  <img
                    src="../assets/images/logo-skrill.png"
                    alt="logo skrill"
                  />
                </li>
                <li className="">
                  <img src="../assets/images/logo-unknown.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="bartlp--block-3-mosaic-block-4">
            <div className="bartlp--block-3-mosaic-block-4-container-1">
              <h3>Étape 4</h3>
              <p>
                Ding Dong ! Votre repas est arrivé !<br />
                Savourez votre déjeuner en compagnie de tous vos collègues.
              </p>
              <a href="#form">
              <button className="submit-button">Essayez Bart Cantine</button>
              </a>
            </div>
            <div className="bartlp--block-3-mosaic-block-4-container-2">
              <img src="../assets/images/sac.png" alt="sac" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Block3;
