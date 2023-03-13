import React from "react";
import "animate.css";

const block1 = () => {
  return (
    <section className="bartlp--block-1">
      <article>
        <img src="../assets/images/top-illustrations.png" alt="fruits" />
        <h1 className="animate__animated animate__rubberBand">
          Cantine digitale
          <br />
          <span className="medium"> pour une pause déj savoureuse.</span>
        </h1>
        <button className="submit-button">Essayer Bart Cantine</button>
        <span>mouse element</span>
      </article>
    </section>
  );
};

export default block1;
