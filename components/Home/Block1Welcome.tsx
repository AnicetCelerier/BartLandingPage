import React from "react";
import "animate.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import * as LottieScroll from "assets/mouse-scroll.json";

const Block1Welcome = () => {
  return (
    <section className="bartlp--block-1">
      <article>
        <img
          src="../assets/images/top-illustrations.png"
          alt="légumes"
          className="animate__animated animate__bounceInDown animate__slow	"
        />
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>
            Cantine Digitale
            <br />
            <span className="medium"> pour une pause déj savoureuse.</span>
          </h1>
        </div>
        <a href="#form">
          <button className="submit-button">Essayez Bart Cantine</button>
        </a>
        <Player
          autoplay
          loop
          src={LottieScroll}
          style={{ height: "68px", width: "68px" }}
          className="lottie-element"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </article>
    </section>
  );
};

export default Block1Welcome;
