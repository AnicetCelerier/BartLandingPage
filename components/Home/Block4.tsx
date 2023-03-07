import Image from "next/image";
import React from "react";

const Block3 = () => {
  return (
    <section className="bartlp--block-4">
      <article>
        <h1>Les avantages de notre cantine digitale d'entreprise :</h1>
        <p>
          Faites vivre une expérience culinaire unique à vos collaborateurs avec
          les meilleurs plats de vos restaurants préférés, à prix abordables et
          livrés directement à vos bureaux grâce à notre livraison en vélo
          cargo. Bart Cantine, la cantine d'entreprise 2.0 innovante, économique
          et respectueuse de l'environnement.
        </p>

        <div className="bartlp--block-4-mosaic">
          <div className="bartlp--block-4-mosaic-block-1">
            <img src="../assets/images/iPhone-13-Pro.png" alt=""/>
            Une web-app accessible depuis votre ordinateur ou smartphone !
          </div>
          <div className="bartlp--block-4-mosaic-block-2">
            De nouveaux plats toutes les semaines
            <img src="../assets/images/pattes.png" alt=""/>
          </div>
          <div className="bartlp--block-4-mosaic-block-3">
            <img src="../assets/images/savings.png" alt=""/>
            Pas de frais cachés ! Vous ne payez que votre plat et les frais de
            livraison à partir de 0,90€.
          </div>
          <div className="bartlp--block-4-mosaic-block-4">Toutes les <span className="alteration">25</span> Commandes au sein de votre entreprise, 5 plats sont reversés aux associations alimentaires</div>
          <div className="bartlp--block-4-mosaic-block-5">
            <img src="../assets/images/pizza.png" alt=""/>
          </div>
          <div className="bartlp--block-4-mosaic-block-6">Une sélection de plats, d’entrées et de desserts exclusifs</div>
          <div className="bartlp--block-4-mosaic-block-7">
            Livraison en <span className="alteration">circuit court</span>
            <p>et en vélo cargo par nos livreurs salariés</p>
          </div>
        </div>
      </article>
      <button id="submit-button">Essayez Bart Cantine</button>
    </section>
  );
};

export default Block3;
