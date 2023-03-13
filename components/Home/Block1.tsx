import React from "react";
import "animate.css";

const block1 = () => {
  return (
    <section className="bartlp--block-1">
      <article>
        <img
          src="../assets/images/top-illustrations.png"
          alt="fruits"
          className="animate__animated animate__bounceInDown animate__slow	"
        />
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>
            Cantine digitale
            <br />
            <span className="medium"> pour une pause déj savoureuse.</span>
          </h1>
        </div>
        <button className="submit-button">Essayer Bart Cantine</button>
        <span>mouse element</span>
      </article>
    </section>
  );
};

export default block1;
