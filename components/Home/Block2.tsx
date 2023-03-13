import React from "react";

const Block2 = () => {
  return (
    <section className="bartlp--block-2">
      <article>
        <div className="head-container">
        <h2>
            Bart, la cantine 2.0 en quelques clics !
        </h2>
        <p>
            Offrez à vos collaborateurs une expérience culinaire variée tout en
            respectant vos engagements environnementaux et sociaux avec notre
            offre clés en main et sans engagement. Notre cantine d'entreprise
            2.0 attractive vous permet de commander facilement des plats
            signatures des meilleurs restaurants pour tous vos collaborateurs.
        </p>
        </div>
      <div className="bartlp--block-2-container">
        <div className="bartlp--block-2-container-block-1">
          <img src="../assets/images/macbook-air.png" alt="macbook" />
        </div>
        <div className="bartlp--block-2-container-block-2">
          <img src="../assets/images/iPhone-14-pro.png" alt="iphone" />
        </div>
      </div>
      <div className="button-wrapper">
      <button className="submit-button">demander la cantine</button>
      </div>
      </article>
    </section>
  );
};

export default Block2;
