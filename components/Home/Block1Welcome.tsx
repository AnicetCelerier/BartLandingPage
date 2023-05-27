import React from "react";
import "animate.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import * as LottieScroll from "assets/mouse-scroll.json";
import useBlock1Welcome from "@/hooks/useBlock1Welcome";

const Block1Welcome = () => {
  const { currentElementIndex, graphicElements } = useBlock1Welcome();
  return (
    <section
      className="bartlp--block-1"
      style={{ backgroundColor: graphicElements[currentElementIndex].color }}
    >
      <a id="top"></a>
      <article>
        {graphicElements.map((g, index) => (
          <img
            key={`crossfade-${index}`}
            className="bartlp--block-1-crossfade-image"
            src={g.image}
            alt="personnage"
            style={{ opacity: currentElementIndex === index ? 1 : 0 }}
          />
        ))}

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>
            La Cantine Digitale
            <br />
            <span className="medium"> pour une pause déj savoureuse</span>
          </h1>
        </div>
        <a href="#form">
          <button className="submit-button-black">Une démo ?</button>
        </a>
        <div className="bartlp--block-1-lottie-wrapper">
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
        </div>
      </article>
    </section>
  );
};

export default Block1Welcome;
